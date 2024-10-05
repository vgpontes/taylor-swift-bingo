import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SinglePageApplication } from 'aws-cdk-spa';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'CdkStack');

new SinglePageApplication(stack, 'TaylorSwiftBingoSPA', {
  applicationName: 'taylor-swift-bingo',
  websiteDirectory: 'dist'
});