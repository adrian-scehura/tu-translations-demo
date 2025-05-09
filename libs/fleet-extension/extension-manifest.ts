import { FleetExtensionManifest } from '@trackunit/iris-app-api';

const fleetExtensionManifest: FleetExtensionManifest = {
  id: 'fleet-extension',
  type: 'FLEET_EXTENSION',
  sourceRoot: 'libs/fleet-extension/src',

  menuItem: {
    name: 'fleet-extension',
    icon: 'QuestionMarkCircle',
  },
};

export default fleetExtensionManifest;
