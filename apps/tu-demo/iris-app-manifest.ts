import { IrisAppManifest } from '@trackunit/iris-app-api';
import fleetExtension from "@tu-translations-demo/fleet-extension";

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const nxPackageJson = require('../../package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const packageJson = require('./package.json');

const irisAppManifest: IrisAppManifest = {
  specVersion: '1.1',
  moduleFederationName: packageJson.name,
  dependencies: nxPackageJson.dependencies || {},
  devDependencies: nxPackageJson.devDependencies || {},

  validDomains: [],

  installation: {
    accountIds: 'ALL_ACCOUNTS',
    pricingPlanPolicy: {
      ALL_PLANS: 'ON_DEMAND',
    },
  },

  marketplace: {
    showInMarketplace: false,
    name: 'tu-demo',
    description: 'The tu-demo app is used for <YOUR SUMMARY HERE>.',
    fullDescriptionPath: 'description.md',
    tags: [],
    categories: [],
  },
  extensions: [fleetExtension],
};

export default irisAppManifest;
