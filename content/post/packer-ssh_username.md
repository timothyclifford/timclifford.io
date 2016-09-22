+++
date = "2016-09-22T18:44:08+08:00"
title = "Understanding ssh_username for Packer and AWS"
+++
```
{
  "builders": [{
    ...
    "ssh_username": "ec2-user",
    ...
  }]
}
```

ssh_username should be...

AWS image
ec2-user

Ubuntu
ubuntu

Centos
centos
