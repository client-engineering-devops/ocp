# OCP
OpenShift Container Platform

![OCP](https://avatars.githubusercontent.com/u/792337?s=200&v=4)

## resources
`oc api-resources`

defined in OpenShift APIs and stored in etcd database
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

<div style='width: 50%;'>
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 26.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1125 2436" style="enable-background:new 0 0 1125 2436;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;stroke:#FF0000;stroke-width:6;stroke-miterlimit:10;}
	.st1{fill:#FFFFFF;stroke:#0000FF;stroke-width:4;stroke-miterlimit:10;}
	.st2{fill:#FFFFFF;stroke:#FF0000;stroke-width:5;stroke-miterlimit:10;}
	.st3{fill:#FFFFFF;stroke:#0000FF;stroke-width:5;stroke-miterlimit:10;}
	.st4{fill:none;}
	.st5{fill:#0000FF;}
	.st6{font-family:'CourierNewPSMT';}
	.st7{font-size:72px;}
	.st8{fill:#FF0000;}
	.st9{fill:none;stroke:#0000FF;stroke-width:5;stroke-miterlimit:10;}
	.st10{fill:none;stroke:#FF0000;stroke-width:5;stroke-miterlimit:10;}
	.st11{fill:#FFFFFF;stroke:#006837;stroke-width:4;stroke-miterlimit:10;}
	.st12{fill:#006837;}
	.st13{font-size:36px;}
</style>
<rect x="19" y="126" class="st0" width="1083" height="2175"/>
<rect x="76" y="241" class="st1" width="975" height="2011"/>
<rect x="135.64" y="854.45" class="st2" width="825" height="771"/>
<rect x="408.5" y="1216.5" class="st3" width="494" height="311"/>
<rect x="367.5" y="1255.5" class="st3" width="494" height="311"/>
<rect x="323.64" y="1292.5" class="st3" width="494" height="311"/>
<rect x="334.14" y="1323.4" class="st4" width="201" height="95.56"/>
<text transform="matrix(1 0 0 1 369.8283 1393.2415)" class="st5 st6 st7">Pod</text>
<rect x="105.97" y="873.25" class="st4" width="540.17" height="95.7"/>
<text transform="matrix(1 0 0 1 160.0206 943.1704)" class="st8 st6 st7">Deployment</text>
<rect x="535.64" y="646.79" class="st3" width="494" height="131.66"/>
<rect x="542.6" y="657.17" class="st4" width="347.54" height="95.56"/>
<text transform="matrix(1 0 0 1 565.1458 727.0165)" class="st5 st6 st7">Service</text>
<rect x="121.64" y="418.77" class="st2" width="494" height="136.68"/>
<rect x="128.6" y="429.15" class="st4" width="501.54" height="95.56"/>
<text transform="matrix(1 0 0 1 141.7317 498.9932)" class="st8 st6 st7">Route (uri)</text>
<rect x="231.64" y="1047.77" class="st3" width="494" height="136.68"/>
<rect x="238.6" y="1058.15" class="st4" width="486.54" height="95.56"/>
<text transform="matrix(1 0 0 1 244.2317 1127.9933)" class="st5 st6 st7">Replica Set</text>
<rect x="340" y="1909.78" class="st3" width="494" height="131.66"/>
<rect x="346.96" y="1920.16" class="st4" width="347.54" height="95.56"/>
<text transform="matrix(1 0 0 1 477.5245 1990.0034)" class="st5 st6 st7">PV</text>
<path class="st9" d="M895.5,1235.5"/>
<path class="st9" d="M1029.5,778.5"/>
<g>
	<g>
		<line class="st9" x1="708.33" y1="1283.41" x2="945.5" y2="778.5"/>
		<g>
			<polygon class="st5" points="725.69,1280.61 689.5,1323.5 699.4,1268.26 			"/>
		</g>
	</g>
</g>
<g>
	<g>
		<line class="st9" x1="794.98" y1="1213.64" x2="945.5" y2="778.5"/>
		<g>
			<polygon class="st5" points="811.95,1209.02 780.5,1255.5 784.49,1199.53 			"/>
		</g>
	</g>
</g>
<g>
	<g>
		<line class="st9" x1="845.38" y1="1173.56" x2="945.5" y2="778.5"/>
		<g>
			<polygon class="st5" points="861.9,1167.53 834.5,1216.5 833.73,1160.39 			"/>
		</g>
	</g>
</g>
<g>
	<g>
		<line class="st10" x1="497.24" y1="624.18" x2="379.5" y2="555.5"/>
		<g>
			<polygon class="st8" points="496,606.64 535.5,646.5 481.36,631.74 			"/>
		</g>
	</g>
</g>
<rect x="533" y="1701.56" class="st3" width="494" height="131.66"/>
<rect x="539.96" y="1711.94" class="st4" width="347.54" height="95.56"/>
<text transform="matrix(1 0 0 1 648.921 1781.781)" class="st5 st6 st7">PVC</text>
<rect x="-52.22" y="1869.22" class="st4" width="0" height="2.78"/>
<rect x="581" y="1407.5" class="st11" width="209" height="75"/>
<rect x="581" y="1497" class="st11" width="209" height="75"/>
<rect x="581" y="1318" class="st11" width="209" height="75"/>
<rect x="604" y="1496" class="st4" width="158" height="61.66"/>
<text transform="matrix(1 0 0 1 618.1893 1537.866)" class="st12 st6 st13">Volume</text>
<rect x="620" y="1326" class="st4" width="101" height="57.69"/>
<text transform="matrix(1 0 0 1 648.8964 1365.8804)" class="st12 st6 st13">IP</text>
<rect x="580" y="1415" class="st4" width="210" height="62.69"/>
<text transform="matrix(1 0 0 1 587.7841 1457.3804)" class="st12 st6 st13">Container</text>
<g>
	<g>
		<line class="st9" x1="748.87" y1="1584.17" x2="904.5" y2="1701.5"/>
		<g>
			<polygon class="st5" points="748.04,1601.73 713.5,1557.5 765.53,1578.53 			"/>
		</g>
	</g>
</g>
<g>
	<g>
		<line class="st9" x1="854.73" y1="1610.38" x2="904.5" y2="1701.5"/>
		<g>
			<polygon class="st5" points="846.73,1626.03 833.5,1571.5 872.23,1612.11 			"/>
		</g>
	</g>
</g>
<g>
	<g>
		<line class="st9" x1="888.06" y1="1571.45" x2="904.5" y2="1701.5"/>
		<g>
			<polygon class="st5" points="874.89,1583.1 882.5,1527.5 903.71,1579.45 			"/>
		</g>
	</g>
</g>
<rect x="97.4" y="240.89" class="st4" width="413.6" height="95.56"/>
<text transform="matrix(1 0 0 1 109.7684 310.7317)" class="st5 st6 st7">Namespace</text>
<rect x="8" y="125.85" class="st4" width="355.08" height="95.7"/>
<text transform="matrix(1 0 0 1 34.3171 195.7671)" class="st8 st6 st7">Project</text>
</svg></div>


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
