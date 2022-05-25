# OCP
![OCP](https://avatars.githubusercontent.com/u/792337?s=200&v=4) | The [OpenShift Container Platform](https://docs.openshift.com/container-platform/4.10/welcome/index.html) is a hybrid cloud, platform as a service, built around Linux containers. Orchestrated and managed by Kubernetes on a foundation of Red Hat Enterprise Linux.
-----------------------------------|-----------------------------------|

## resources
`oc api-resources`
<img src="svg/oc.svg" alt="ocp" width="100%"/>

resource    | description | help
------------|------------ |------------
project | Projects are the unit of isolation and collaboration in OpenShift. | oc explain project
namespace | Namespace provides a scope for Names. | oc explain namespace
pod         | Pod is a collection of containers that can run on a host. | oc explain pod 
replica set | ReplicaSet ensures that a specified number of pod replicas are running at any given time. | oc explain replicasets
deployment  | Deployment enables declarative updates for Pods and ReplicaSets. | oc explain deployment
service     | Service is a named abstraction of software service consisting of local port that the proxy listens on |oc explain service
route       | A route allows developers to expose services through an HTTP(S) aware load balancing and proxy layer via a public DNS entry. | oc explain route 
configmap | ConfigMap holds configuration data for pods to consume. | oc explain configmap 

`oc completion -h | less`

`source <(oc completion bash)`

`oc login -u developer https://api.crc.testing:6443`
### Create a new project.

```
oc new-project -h | less
oc new-project ocp-project01 --description='ocp first project'
oc create deployment -h | less
oc create deployment ocp-deployment01 --image=docker.io/bitnami/nginx --replicas=3
oc get all

# pod/ocp-deployment01-76676c57f7-hjxh4   0/1     ContainerCreating   0          11s
# pod/ocp-deployment01-76676c57f7-j7t2j   0/1     ContainerCreating   0          10s
# pod/ocp-deployment01-76676c57f7-kt92v   0/1     ContainerCreating   0          10s


oc logs pod/ocp-deployment01-76676c57f7-kt92v -f

oc get all                                      
# pod/ocp-deployment01-76676c57f7-hjxh4   1/1     Running   0          2m13s
# pod/ocp-deployment01-76676c57f7-j7t2j   1/1     Running   0          2m12s
# pod/ocp-deployment01-76676c57f7-kt92v   1/1     Running   0          2m12s

oc delete pod/ocp-deployment01-6f547f7866-z5fcr
oc get pods
# ocp-deployment01-76676c57f7-g6xqw   1/1     Running   0          8s
# ocp-deployment01-76676c57f7-hjxh4   1/1     Running   0          4m25s
# ocp-deployment01-76676c57f7-j7t2j   1/1     Running   0          4m24s

oc expose -h | less
oc expose deploy ocp-deployment01 --port=8080
oc expose service/ocp-deployment01
oc get route ocp-deployment01 --template='curl http://{{.spec.host}}'

oc create configmap ocp-cm --from-file=index.html --from-file=svg/oc.svg
oc set volume deploy ocp-deployment01 --add --type configmap --configmap-name ocp-cm --mount-path=/app/
oc get all
# pod/ocp-deployment01-76676c57f7-hjxh4   0/1     Terminating   0          11m
# pod/ocp-deployment01-76676c57f7-j7t2j   1/1     Terminating   0          11m
# pod/ocp-deployment01-b8cff445d-nhjzc    1/1     Running       0          17s
# pod/ocp-deployment01-b8cff445d-npw5t    1/1     Running       0          12s
# pod/ocp-deployment01-b8cff445d-rgnjn    1/1     Running       0          7s

oc get route ocp-deployment01 --template='curl http://{{.spec.host}}'

```

### project 06 - [wordpress](https://developer.ibm.com/tutorials/build-deploy-wordpress-on-openshift/)
```
oc new-project jonwalk-wordpress --description='jonwalk project 06 wordpress'

oc new-app mariadb-persistent
oc new-app php~https://github.com/wordpress/wordpress
oc expose service/wordpress
oc get routes
```
## project 07 
```
oc new-project jonwalk-postgresql --description='jonwalk project 07 postgresql'
oc new-app postgresql-ephemeral --name database --param DATABASE_SERVICE_NAME=database --param POSTGRESQL_DATABASE=sampledb --param POSTGRESQL_USER=username --param POSTGRESQL_PASSWORD=password
oc rollout status dc/database
oc get pods --selector name=database
POD=$(oc get pods --selector name=database -o custom-columns=NAME:.metadata.name --no-headers); echo $POD
oc rsh $POD
psql sampledb username
 \l\

CREATE TABLE COMPANY(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);

\dtables

 \l
```
## ## project 08 mysql
```
oc new-project jonwalk-mysql --description='jonwalk project 08 mysql'
oc new-app mysql MYSQL_USER=user MYSQL_PASSWORD=pass MYSQL_DATABASE=testdb -l db=mysql
oc rsh mysql-77c94c9885-k8qg7 
mysql -u user -D testdb -p
```

## project 09 [pipelines-tutorial](https://docs.openshift.com/container-platform/4.8/cicd/pipelines/creating-applications-with-cicd-pipelines.html)
```
oc new-project pipelines-tutorial
oc get serviceaccount pipeline
oc create -f https://raw.githubusercontent.com/openshift/pipelines-tutorial/pipelines-1.5/01_pipeline/01_apply_manifest_task.yaml
oc create -f https://raw.githubusercontent.com/openshift/pipelines-tutorial/pipelines-1.5/01_pipeline/02_update_deployment_task.yaml
oc create -f https://raw.githubusercontent.com/openshift/pipelines-tutorial/pipelines-1.5/01_pipeline/04_pipeline.yaml

oc create -f pipeline-yaml-file-name.yaml

tkn pipeline start build-and-deploy \
    -w name=shared-workspace,volumeClaimTemplateFile=https://raw.githubusercontent.com/openshift/pipelines-tutorial/pipelines-1.7/01_pipeline/03_persistent_volume_claim.yaml \
    -p deployment-name=pipelines-vote-api \
    -p git-url=https://github.com/openshift/pipelines-vote-api.git \
    -p IMAGE=image-registry.openshift-image-registry.svc:5000/pipelines-tutorial/pipelines-vote-api \
    --use-param-defaults

tkn pipeline start build-and-deploy \
    -w name=shared-workspace,volumeClaimTemplateFile=https://raw.githubusercontent.com/openshift/pipelines-tutorial/pipelines-1.7/01_pipeline/03_persistent_volume_claim.yaml \
    -p deployment-name=pipelines-vote-ui \
    -p git-url=https://github.com/openshift/pipelines-vote-ui.git \
    -p IMAGE=image-registry.openshift-image-registry.svc:5000/pipelines-tutorial/pipelines-vote-ui \
    --use-param-defaults

oc get route pipelines-vote-ui --template='http://{{.spec.host}}'

```




