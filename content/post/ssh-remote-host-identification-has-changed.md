+++
categories = []
date = "2016-09-26T18:12:32+08:00"
description = ""
draft = true
tags = []
title = "ssh remote host identification has changed"

+++
Problem:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:R5IloqNxZYZvCgWDZI/HhNskBtLtXGJdppYCTHsWFgc.
Please contact your system administrator.
Add correct host key in /Users/timothyclifford/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /Users/timothyclifford/.ssh/known_hosts:20
ECDSA host key for 54.223.102.178 has changed and you have requested strict checking.
Host key verification failed.

Solution:
// Remove by hostname
ssh-keygen -R "hostname"
or
// Remove by line number
sed -i '20d' ~/.ssh/known_hosts
or
// Remove all (probably a bad idea)
rm -f .ssh/known_hosts
