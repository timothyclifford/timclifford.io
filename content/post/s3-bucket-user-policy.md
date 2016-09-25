+++
date = "2016-09-12T13:59:33+08:00"
title = "AWS S3 bucket user policy"
tags = [
  "aws", "s3", "bucket-policy"
]
categories = [
  "aws"
]
description = "Allowing users to get all up in your buckets"
+++
Here's how to allow a particular IAM user access to an S3 bucket.

The (bucket policy)[http://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html] must firstly give the user `ListBucket` access for the root and secondly give the other desired actions for everything below root.

Here I am giving the `tim` user access to everything in the `timbucket`:

```
{
	"Id": "Policy000000000000",
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "Stmt000000000000",
			"Action": "s3:ListBucket",
			"Effect": "Allow",
			"Resource": "arn:aws:s3:::timbucket",
			"Principal": {
				"AWS": [
					"arn:aws:iam::000000000000:user/tim"
				]
			}
		},
		{
			"Sid": "Stmt000000000000",
			"Action": "s3:*",
			"Effect": "Allow",
			"Resource": "arn:aws:s3:::timbucket/*",
			"Principal": {
				"AWS": [
					"arn:aws:iam::000000000000:user/tim"
				]
			}
		}
	]
}
```
