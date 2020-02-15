import {exampleRoot} from "./containers/example-root";

import * as angular from "angular";
import {upgradeAdapter} from "./upgrade-adapter";

const APPNAME = "angular-upgrade-example";

angular
  .module(APPNAME, [])
  .directive("exampleRoot", exampleRoot);

angular.bootstrap(document.body, [APPNAME]);

upgradeAdapter.bootstrap(document.documentElement, [APPNAME], {strictDi: true});
