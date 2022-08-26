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
└── Autoload
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
