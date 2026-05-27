#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { Dat404Stack } from "../lib/dat404-stack";

const app = new cdk.App();
new Dat404Stack(app, "ReinventDat404Stack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
