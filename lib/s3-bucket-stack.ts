import * as cdk from 'aws-cdk-lib';
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from 'constructs';

export class S3BucketStack extends cdk.Stack {
  public readonly bucket: s3.Bucket; //Resource sharing between stacks

  
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines the s3 stack 
    this.bucket = new s3.Bucket(this, "patika-bucket",{
      versioned: false,
      bucketName: "patika-bucket",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    

    
  }
}  