import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SvelteKitSite } from '../cdk/SvelteKitSite';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SvelteKitSite(this, 'demo-sveltekit-site')
  }
}
