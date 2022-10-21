# Autoload
Node API using Fibonacci that will cause pods to consume resources triggering additional pods to spin up
- wikipedia: https://en.wikipedia.org/wiki/Fibonacci_number
- mathsisfun: https://www.mathsisfun.com/numbers/nature-golden-ratio-fibonacci.html
- npm: https://www.npmjs.com/package/fibonacci
- github: https://github.com/fvdm/nodejs-fibonacci
- autoscaler: https://docs.openshift.com/container-platform/4.10/nodes/pods/nodes-pods-autoscaling.html

![Fibonacci_spiral](https://upload.wikimedia.org/wikipedia/commons/7/79/Fibonacci_spiral.svg)
## files
```
git@github.com:client-engineering-devops/ocp.git
└── addload
    ├── Dockerfile
    ├── README.md
    └── app-src
        ├── index.js
        └── package.json
```
## Node
If you want to run node locally
```
cd addload/app-src
npm install
npm start
```
## Openshift

### Set some environment variables
```
PROJECT="autoscale"
GIT_REPO="https://github.com/client-engineering-devops/ocp.git"
RSA_SECRET="$HOME/.ssh/rsa-pull-secret.yaml"
```
### Do you have your rsa-pull-secret?
[Registry Service Account](rsa.md) secret is required to pull registry.redhat.io/rhel8/nodejs-16
```
[ ! -f ${RSA_SECRET} ] && less rsa.md
```
### Create project, pipeline, rsa-pull-secret
```
oc new-project ${PROJECT}
oc create sa pipeline
oc policy add-role-to-user edit system:serviceaccount:${PROJECT}:pipeline
oc create -f ${RSA_SECRET}
oc secrets link builder rsa-pull-secret
```
### Import registry.redhat.io/rhel8/nodejs-16
```
oc import-image rhel8/nodejs-16 --from=registry.redhat.io/rhel8/nodejs-16 --confirm
```

### Create fibonacci app
```
oc new-app nodejs-16:latest~${GIT_REPO} \
  --context-dir=addload/app-src \
  --name=fibonacci 
oc create route edge cause --service=fibonacci --port=8080
```
### Set resources and hpa
```
oc set resources deployment.apps/fibonacci --limits=cpu=100m,memory=150Mi --requests=cpu=10m,memory=35Mi
oc autoscale deployment/fibonacci --min=1 --max=30 --cpu-percent=50
oc describe hpa
```

### Curl the fibonacci endpoint
```
fibonacci=`oc get route.route.openshift.io/cause --template='https://{{.spec.host}}/fibonacci?i='` 
curl -sX GET $fibonacci+500
```
### Loop to trigger autoscale 
```
for iterations in {1000..5000..100}
do
   curl -sX GET "$fibonacci$iterations" |jq
   echo
   oc get hpa
   echo
   oc get podmetrics
done
```