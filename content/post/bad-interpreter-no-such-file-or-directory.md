+++
categories = ["packer"]
date = "2017-01-12T21:27:12+08:00"
description = "Bang head on desk. Repeat."
draft = false
tags = ["aws", "packer", "ebs"]
title = "Packer, EBS and the bad interpreter"
+++

Working with [Packer](https://www.packer.io/) today and started seeing a strange error:

>
>==> amazon-ebs: Prevalidating AMI Name...
>
>==> amazon-ebs: Inspecting the source AMI...
>
>==> amazon-ebs: Creating temporary keypair: packer 5800475f-0946-a858-51cb-c149cbb68a6c
>
>==> amazon-ebs: Creating temporary security group for this instance...
>
>==> amazon-ebs: Authorizing access to port 22 the temporary security group...
>
>==> amazon-ebs: Launching a source AWS instance...
>
>    amazon-ebs: Instance ID: i-a38ca01b
>
>==> amazon-ebs: Waiting for instance (i-a38ca01b) to become ready...
>
>==> amazon-ebs: Waiting for SSH to become available...
>
>==> amazon-ebs: Connected to SSH!
>
>==> amazon-ebs: Provisioning with shell script: /Users/timothyclifford/Work/packer/api/app.sh
>
>    amazon-ebs: bash: /tmp/script_4182.sh: \bin\sh: bad interpreter: No such file or directory
>
>==> amazon-ebs: Terminating the source AWS instance...
>
>==> amazon-ebs: No AMIs to cleanup
>
>==> amazon-ebs: Deleting temporary security group...
>
>==> amazon-ebs: Deleting temporary keypair...
>
>Build 'amazon-ebs' errored: Script exited with non-zero exit status: 126

Issue being, I had done a find and replace of `/` with `\`

So the shebang was...

`#!\bin\sh -x`

Instead of...

`#!/bin/sh -x`
