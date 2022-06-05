#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3CdkStack } from '../lib/s3-cdk-stack';

const app = new cdk.App();
new S3CdkStack(app, 'S3CdkStack');
