# [openshift-local](https://developers.redhat.com/products/openshift-local/overview)

https://developers.redhat.com/download-manager/link/3868678


Download CodeReady Containers and Pull-Secret

```
cd ~/Downloads/
tar xvf crc-linux-amd64.tar.xz
mkdir -p ~/bin
cp ~/Downloads/crc-linux-*-amd64/crc ~/bin
crc setup
crc start -p Downloads/pull-secret -m 15360
eval $(crc oc-env)

```