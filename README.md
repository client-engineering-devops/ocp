# OCP
OpenShift Container Platform

![OCP](https://avatars.githubusercontent.com/u/792337?s=200&v=4)

## resources
defined in OpenShift APIs and stored in etcd database
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
```
Logged into "https://api.crc.testing:6443" as "developer" using existing credentials.

You don't have any projects. You can try to create a new project, by running

    oc new-project <projectname>
```
### Create a new project for yourself.
`oc new-project -h | less`

`oc new-project jonwalk-project01 --description='jonwalk first project'`
```
Now using project "jonwalk-project01" on server "https://api.crc.testing:6443".

You can add applications to this project with the 'new-app' command. For example, try:

    oc new-app rails-postgresql-example

to build a new example application in Ruby. Or use kubectl to deploy a simple Kubernetes application:

    kubectl create deployment hello-node --image=k8s.gcr.io/e2e-test-images/agnhost:2.33 -- /agnhost serve-hostname
```
### Create a deployment with the specified name.

`oc create deployment -h | less`

`oc create deployment jonwalk-deployment01 --image=bitnami/nginx --replicas=3`
```
deployment.apps/jonwalk-deployment01 created
```
`oc get all`
```
NAME                                       READY   STATUS    RESTARTS   AGE
pod/jonwalk-deployment01-c6d5fd98b-6zv8w   1/1     Running   0          33s
pod/jonwalk-deployment01-c6d5fd98b-ftp5z   1/1     Running   0          33s
pod/jonwalk-deployment01-c6d5fd98b-sz2fk   1/1     Running   0          33s

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/jonwalk-deployment01   3/3     3            3           34s

NAME                                             DESIRED   CURRENT   READY   AGE
replicaset.apps/jonwalk-deployment01-c6d5fd98b   3         3         3       33s
```
`oc delete pod/jonwalk-deployment01-c6d5fd98b-6zv8w`
```
pod "jonwalk-deployment01-c6d5fd98b-6zv8w" deleted
```
`oc get all`
```
NAME                                       READY   STATUS              RESTARTS   AGE
pod/jonwalk-deployment01-c6d5fd98b-b4snm   0/1     ContainerCreating   0          4s
pod/jonwalk-deployment01-c6d5fd98b-ftp5z   1/1     Running             0          18m
pod/jonwalk-deployment01-c6d5fd98b-sz2fk   1/1     Running             0          18m

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/jonwalk-deployment01   2/3     3            2           18m

NAME                                             DESIRED   CURRENT   READY   AGE
replicaset.apps/jonwalk-deployment01-c6d5fd98b   3         3         2       18m

```

`oc get all`
```
NAME                                       READY   STATUS    RESTARTS   AGE
pod/jonwalk-deployment01-c6d5fd98b-b4snm   1/1     Running   0          92s
pod/jonwalk-deployment01-c6d5fd98b-ftp5z   1/1     Running   0          20m
pod/jonwalk-deployment01-c6d5fd98b-sz2fk   1/1     Running   0          20m

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/jonwalk-deployment01   3/3     3            3           20m

NAME                                             DESIRED   CURRENT   READY   AGE
replicaset.apps/jonwalk-deployment01-c6d5fd98b   3         3         3       20m
```

### project 02 - new-app
```
oc new-project jonwalk-project02 --description='jonwalk project 02'
oc new-app bitnami/nginx --name app02
oc expose service/app02
```
### project 03 - configmap
```
oc new-project jonwalk-project03 --description='jonwalk project 03'
oc create configmap jonwalk-cm --from-file=index.html
oc create deploy jonwalk-nginx --image=bitnami/nginx
oc set volume deploy jonwalk-nginx --add --type configmap --configmap-name jonwalk-cm --mount-path=/app/
oc expose deploy jonwalk-nginx --port=8080
oc expose service/jonwalk-nginx
oc get deploy jonwalk-nginx -o yaml
```