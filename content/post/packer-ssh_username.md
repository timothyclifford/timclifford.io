+++
date = "2016-09-22T18:44:08+08:00"
title = "Packer ssh_username"
tags = [
  "packer.io", "linux", "ssh", "aws", "hashicorp"
]
categories = [
  "aws", "packer.io", "hashicorp"
]
description = "Understanding ssh_username for Packer & AMIs"
+++
Doing some work with (Packer)[https://www.packer.io/] this week.

Found when creating Amazon EBS-backed AMIs, the (ssh_username)[https://www.packer.io/docs/builders/amazon-ebs.html#ssh_username] must match the AMI default username.

Makes sense in hindsight but caught me out and wasted several keystrokes!

Here's an example Packer template:
```
{
  "builders": [{
    ...
    "ssh_username": "$USER",
    ...
  }]
}
```

Where `$USER` for the following AMIs should be:

### Amazon Linux
ec2-user

### Ubuntu
ubuntu

### Centos
centos

### Fedora
fedora

etc etc etc
