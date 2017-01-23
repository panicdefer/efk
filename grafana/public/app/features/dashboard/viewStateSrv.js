/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","jquery"],function(a,b,c){"use strict";var d=a.module("grafana.services");d.factory("dashboardViewStateSrv",["$location","$timeout","templateSrv","contextSrv","timeSrv",function(a,d,e,f,g){function h(b){var c=this;c.state={},c.panelScopes=[],c.$scope=b,c.dashboard=b.dashboard,b.exitFullscreen=function(){c.state.fullscreen&&c.update({fullscreen:!1})},b.onAppEvent("time-range-changed",function(){var b=a.search(),c=g.timeRangeForUrl();b.from=c.from,b.to=c.to,a.search(b)}),b.onAppEvent("$routeUpdate",function(){var a=c.getQueryStringState();c.needsSync(a)&&c.update(a,!0)}),b.onAppEvent("panel-change-view",function(a,b){c.update(b)}),b.onAppEvent("panel-initialized",function(a,b){c.registerPanel(b.scope)}),this.update(this.getQueryStringState()),this.expandRowForPanel()}return h.prototype.expandRowForPanel=function(){if(this.state.panelId){var a=this.$scope.dashboard.getPanelInfoById(this.state.panelId);a&&(a.row.collapse=!1)}},h.prototype.needsSync=function(a){return b.isEqual(this.state,a)===!1},h.prototype.getQueryStringState=function(){var b=a.search();return b.panelId=parseInt(b.panelId)||null,b.fullscreen=!!b.fullscreen||null,b.edit="true"===b.edit||b.edit===!0||null,b.editview=b.editview||null,b},h.prototype.serializeToUrl=function(){var a=b.clone(this.state);return a.fullscreen=!!this.state.fullscreen||null,a.edit=!!this.state.edit||null,a},h.prototype.update=function(c){c.toggle&&(delete c.toggle,this.state.fullscreen&&c.fullscreen&&this.state.edit===c.edit&&(c.fullscreen=!c.fullscreen)),this.editStateChanged=c.edit!==this.state.edit,b.extend(this.state,c),this.dashboard.meta.fullscreen=this.state.fullscreen,this.state.fullscreen||(this.state.fullscreen=null,this.state.edit=null,this.dashboard.meta.soloMode||(this.state.panelId=null)),this.state.edit||delete this.state.tab,a.search(this.serializeToUrl()),this.syncState()},h.prototype.syncState=function(){if(0!==this.panelScopes.length)if(this.dashboard.meta.fullscreen){var a=this.getPanelScope(this.state.panelId);if(!a)return;if(this.fullscreenPanel){if(this.fullscreenPanel===a&&this.editStateChanged===!1)return;this.leaveFullscreen(!1)}a.ctrl.editModeInitiated||a.ctrl.initEditMode(),a.ctrl.fullscreen||this.enterFullscreen(a)}else this.fullscreenPanel&&this.leaveFullscreen(!0)},h.prototype.getPanelScope=function(a){return b.find(this.panelScopes,function(b){return b.ctrl.panel.id===a})},h.prototype.leaveFullscreen=function(a){var b=this,c=b.fullscreenPanel.ctrl;return c.editMode=!1,c.fullscreen=!1,c.dashboard.editMode=this.oldDashboardEditMode,this.$scope.appEvent("panel-fullscreen-exit",{panelId:c.panel.id}),!!a&&void d(function(){b.oldTimeRange!==c.range?b.$scope.broadcastRefresh():b.$scope.$broadcast("render"),delete b.fullscreenPanel})},h.prototype.enterFullscreen=function(a){var b=a.ctrl;b.editMode=this.state.edit&&this.dashboard.meta.canEdit,b.fullscreen=!0,this.oldDashboardEditMode=this.dashboard.editMode,this.oldTimeRange=b.range,this.fullscreenPanel=a,this.dashboard.editMode=!1,c(window).scrollTop(0),this.$scope.appEvent("panel-fullscreen-enter",{panelId:b.panel.id}),d(function(){b.render()})},h.prototype.registerPanel=function(a){var c=this;c.panelScopes.push(a),c.dashboard.meta.soloMode||c.state.panelId===a.ctrl.panel.id&&(c.state.edit?a.ctrl.editPanel():a.ctrl.viewPanel());var d=a.$on("$destroy",function(){c.panelScopes=b.without(c.panelScopes,a),d()})},{create:function(a){return new h(a)}}}])});