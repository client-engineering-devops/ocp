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
cd autoload/app-src
npm install
npm start
```
## Openshift
```
oc new-project addload
oc new-app https://github.com/client-engineering-devops/ocp \
  --context-dir=addload/app-src \
  --name=addload \
  --strategy=source 

oc expose service/addload
fibonacci=`oc get route.route.openshift.io/addload --template='http://{{.spec.host}}/fibonacci?i='` 
curl -sX GET $fibonacci+500

```
## autoscale
```
oc autoscale deployment/addload --min=1 --max=10 --cpu-percent=50
oc describe hpa
```
## loop
```
for iterations in {2000..5000..100}
do
   curl -sX GET "$fibonacci$iterations" |jq
   echo
   oc get hpa
   echo
   oc get pods
   echo
   oc get podmetrics
done
```