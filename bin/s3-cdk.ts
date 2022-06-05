#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3CdkStack } from '../lib/s3-cdk-stack';
import { S3BucketStack } from '../lib/s3-bucket-stack';
const app = new cdk.App();
new S3CdkStack(app, 'S3CdkStack');
// Creating an S3 bucket stack
const s3_bucket_stack = new S3BucketStack(app, 'patikaS3Stack');
