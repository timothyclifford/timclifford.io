+++
date = "2016-06-16T17:10:00+10:00"
title = "EC2 unprotected private key file"
tags = [
  "AWS", "EC2", "DevOps", "SSH", "private-key"
]
categories = [
  "AWS", "DevOps"
]
description = "SUCH WARNING! SO PERMISSIONS!"
+++
This post is mainly to remind myself...

When SSH-ing into an AWS EC2 instance like:

`$ ssh -i "private.pem" ec2-user@ec2-1-2-3-4.aws-region-1.compute.amazonaws.com`

If you've downloaded the key without updating permissions, it's likely you'll get an error similar to:

```
The authenticity of host 'ec2-52-33-87-144.us-west-2.compute.amazonaws.com' can't be established.
ECDSA key fingerprint is SHA256:z44+JO0AuXfXr2HqlwTbjdaLW9aWiNkdDIzNMNwK5Nk.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'ec2-user@ec2-1-2-3-4.aws-region-1.compute.amazonaws.com' (ECDSA) to the list of known hosts.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0755 for 'private.pem' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "private.pem": bad permissions
Permission denied (publickey).
```

As you can tell by the error, the private key permissions aren't secure so we set them to readonly for owner using:

`chmod 400 sshkey.pem`
