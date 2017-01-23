/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash"],function(a,b){"use strict";var c=a.module("grafana.controllers");c.controller("DashboardImportCtrl",["$scope","$http","backendSrv","datasourceSrv",function(a,c,d,e){a.init=function(){a.datasources=[],a.sourceName="grafana",a.destName="grafana",a.imported=[],a.dashboards=[],a.infoText="",a.importing=!1,b.each(e.getAll(),function(b,c){"influxdb_08"!==b.type&&"elasticsearch"!==b.type||(a.sourceName=c,a.datasources.push(c))})},a.startImport=function(){e.get(a.sourceName).then(function(b){a.dashboardSource=b,a.dashboardSource.searchDashboards("title:").then(function(b){return a.dashboards=b.dashboards,0===a.dashboards.length?void(a.infoText="No dashboards found"):(a.importing=!0,a.imported=[],void a.next())},function(b){var c=b.message||b.statusText||"Unknown error",d="Failed to load dashboards from selected data source, response from server was: "+c;a.appEvent("alert-error",["Import failed",d])})})},a.next=function(){0===a.dashboards.length&&(a.infoText="Done! Imported "+a.imported.length+" dashboards");var b=a.dashboards.shift();if(!b.title)return void console.log(b);var c={name:b.title,info:"Importing..."};a.imported.push(c),a.infoText="Importing "+a.imported.length+"/"+(a.imported.length+a.dashboards.length),a.dashboardSource.getDashboard(b.id).then(function(b){d.saveDashboard(b).then(function(){c.info="Done!",a.next()},function(b){b.isHandled=!0,c.info="Error: "+(b.data||{message:"Unknown"}).message,a.next()})})},a.init()}])});