import {UpgradeAdapter} from "angular2/upgrade";
export const upgradeAdapter = new UpgradeAdapter();
export const a1Upgradable = upgradeAdapter.upgradeNg1Component("a1Upgradable");

import {A2DowngradeService} from "./services/a2-downgrade-service";
upgradeAdapter.addProvider(A2DowngradeService);
upgradeAdapter.upgradeNg1Provider("a1UpgradeService");
