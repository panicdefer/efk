/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","../core_module"],function(a,b){"use strict";b["default"].service("googleAnalyticsSrv",["$rootScope","$location",function(a,b){var c=!0;this.init=function(){a.$on("$viewContentLoaded",function(){return c?void(c=!1):void window.ga("send","pageview",{page:b.url()})})}}]).run(["googleAnalyticsSrv",function(a){window.ga&&a.init()}])});