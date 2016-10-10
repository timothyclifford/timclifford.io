#!/bin/bash
aws s3 sync public/ s3://timclifford.io --acl public-read --profile timclifford
