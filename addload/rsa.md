# [Registry Service Accounts](https://access.redhat.com/terms-based-registry/#/accounts)
- ⬆️ select your `Account name` if you've created one before or create a `New Service Account`
- Select `OpenShift Secret`
- Step 1: Download secret
- Copy your .yaml to ~/.ssh/rsa-pull-secret.yaml
- Edit the name in ~/.ssh/rsa-pull-secret.yaml to `  name: rsa-pull-secret`
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: rsa-pull-secret
data:
  .dockerconfigjson: -----------------------------------
type: kubernetes.io/dockerconfigjson
```

## [TL/DR](https://www.dictionary.com/browse/tldr)
- Registry service accounts are named tokens that can be used in environments where credentials will be shared, such as deployment systems.
- I've created one for `OpenShift` Projects that need to pull images from `registry.redhat.io`
- I've copied it into my .ssh directory because it's a secret just like my `id_rsa`
  - If you know an even better way, let me know
- I've changed the `  name: rsa-pull-secret` to match the file name.
  - I try to keep as much as I can consistant to help me remember what's going on.



