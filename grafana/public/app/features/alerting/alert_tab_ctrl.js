/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","./threshold_mapper","app/core/components/query_part/query_part","./alert_def","app/core/config","moment","app/core/app_events"],function(a){function b(){"use strict";return{restrict:"E",scope:!0,templateUrl:"public/app/features/alerting/partials/alert_tab.html",controller:j}}var c,d,e,f,g,h,i,j;return a("alertTab",b),{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a}],execute:function(){j=function(){function a(a,b,c,d,e,h,i,j){this.$scope=a,this.$timeout=b,this.backendSrv=c,this.dashboardSrv=d,this.uiSegmentSrv=e,this.$q=h,this.datasourceSrv=i,this.templateSrv=j,this.panelCtrl=a.ctrl,this.panel=this.panelCtrl.panel,this.$scope.ctrl=this,this.subTabIndex=0,this.evalFunctions=f["default"].evalFunctions,this.evalOperators=f["default"].evalOperators,this.conditionTypes=f["default"].conditionTypes,this.noDataModes=f["default"].noDataModes,this.executionErrorModes=f["default"].executionErrorModes,this.appSubUrl=g["default"].appSubUrl}return a.$inject=["$scope","$timeout","backendSrv","dashboardSrv","uiSegmentSrv","$q","datasourceSrv","templateSrv"],a.prototype.$onInit=function(){var a=this;this.addNotificationSegment=this.uiSegmentSrv.newPlusButton();var b=this.graphThresholdChanged.bind(this);return this.panelCtrl.events.on("threshold-changed",b),this.$scope.$on("$destroy",function(){a.panelCtrl.events.off("threshold-changed",b),a.panelCtrl.editingThresholds=!1,a.panelCtrl.render()}),this.notifications=[],this.alertNotifications=[],this.alertHistory=[],this.backendSrv.get("/api/alert-notifications").then(function(b){a.notifications=b,a.initModel(),a.validateModel()})},a.prototype.getAlertHistory=function(){var a=this;this.backendSrv.get("/api/annotations?dashboardId="+this.panelCtrl.dashboard.id+"&panelId="+this.panel.id+"&limit=50").then(function(b){a.alertHistory=c["default"].map(b,function(a){return a.time=h["default"](a.time).format("MMM D, YYYY HH:mm:ss"),a.stateModel=f["default"].getStateDisplayModel(a.newState),a.metrics=f["default"].joinEvalMatches(a.data,", "),a})})},a.prototype.getNotificationIcon=function(a){switch(a){case"email":return"fa fa-envelope";case"slack":return"fa fa-slack";case"webhook":return"fa fa-cubes";case"pagerduty":return"fa fa-bullhorn"}},a.prototype.getNotifications=function(){var a=this;return Promise.resolve(this.notifications.map(function(b){return a.uiSegmentSrv.newSegment(b.name)}))},a.prototype.changeTabIndex=function(a){this.subTabIndex=a,2===this.subTabIndex&&this.getAlertHistory()},a.prototype.notificationAdded=function(){var a=c["default"].find(this.notifications,{name:this.addNotificationSegment.value});a&&(this.alertNotifications.push({name:a.name,iconClass:this.getNotificationIcon(a.type),isDefault:!1}),this.alert.notifications.push({id:a.id}),this.addNotificationSegment.value=this.uiSegmentSrv.newPlusButton().value,this.addNotificationSegment.html=this.uiSegmentSrv.newPlusButton().html)},a.prototype.removeNotification=function(a){this.alert.notifications.splice(a,1),this.alertNotifications.splice(a,1)},a.prototype.initModel=function(){var a=this,b=this.alert=this.panel.alert;if(b){b.conditions=b.conditions||[],0===b.conditions.length&&b.conditions.push(this.buildDefaultCondition()),b.noDataState=b.noDataState||"no_data",b.executionErrorState=b.executionErrorState||"alerting",b.frequency=b.frequency||"60s",b.handler=b.handler||1,b.notifications=b.notifications||[];var e=this.panel.title+" alert";b.name=b.name||e,this.conditionModels=c["default"].reduce(b.conditions,function(b,c){return b.push(a.buildConditionModel(c)),b},[]),d.ThresholdMapper.alertToGraphThresholds(this.panel);for(var f=0,g=b.notifications;f<g.length;f++){var h=g[f],i=c["default"].find(this.notifications,{id:h.id});i&&i.isDefault===!1&&(i.iconClass=this.getNotificationIcon(i.type),this.alertNotifications.push(i))}for(var j=0,k=this.notifications;j<k.length;j++){var l=k[j];l.isDefault&&(l.iconClass=this.getNotificationIcon(l.type),l.bgColor="#00678b",this.alertNotifications.push(l))}this.panelCtrl.editingThresholds=!0,this.panelCtrl.render()}},a.prototype.graphThresholdChanged=function(a){for(var b=0,c=this.alert.conditions;b<c.length;b++){var d=c[b];if("query"===d.type){d.evaluator.params[a.handleIndex]=a.threshold.value,this.evaluatorParamsChanged();break}}},a.prototype.buildDefaultCondition=function(){return{type:"query",query:{params:["A","5m","now"]},reducer:{type:"avg",params:[]},evaluator:{type:"gt",params:[null]},operator:{type:"and"}}},a.prototype.validateModel=function(){var a=this;if(this.alert)for(var b,c=!1,d=null,e=0,f=this.alert.conditions;e<f.length;e++){var g=f[e];if("query"===g.type){for(var h=0,i=this.panel.targets;h<i.length;h++){var j=i[h];if(b||(b=j),g.query.params[0]===j.refId){d=j;break}}d||(b?(g.query.params[0]=b.refId,d=b,c=!0):this.error="Could not find any metric queries");var k=d.datasource||this.panel.datasource;this.datasourceSrv.get(k).then(function(b){b.meta.alerting?b.targetContainsTemplate(d)?a.error="Template variables are not supported in alert queries":a.error="":a.error="The datasource does not support alerting queries"})}}},a.prototype.buildConditionModel=function(a){var b={source:a,type:a.type};return b.queryPart=new e.QueryPart(a.query,f["default"].alertQueryDef),b.reducerPart=f["default"].createReducerPart(a.reducer),b.evaluator=a.evaluator,b.operator=a.operator,b},a.prototype.handleQueryPartEvent=function(a,b){var c=this;switch(b.name){case"action-remove-part":break;case"get-part-actions":return this.$q.when([]);case"part-param-changed":this.validateModel();case"get-param-options":var d=this.panel.targets.map(function(a){return c.uiSegmentSrv.newSegment({value:a.refId})});return this.$q.when(d)}},a.prototype.handleReducerPartEvent=function(a,b){switch(b.name){case"action":a.source.reducer.type=b.action.value,a.reducerPart=f["default"].createReducerPart(a.source.reducer);break;case"get-part-actions":for(var c=[],d=0,e=f["default"].reducerTypes;d<e.length;d++){var g=e[d];g.value!==a.source.reducer.type&&c.push(g)}return this.$q.when(c)}},a.prototype.addCondition=function(a){var b=this.buildDefaultCondition();this.alert.conditions.push(b),this.conditionModels.push(this.buildConditionModel(b))},a.prototype.removeCondition=function(a){this.alert.conditions.splice(a,1),this.conditionModels.splice(a,1)},a.prototype["delete"]=function(){var a=this;i["default"].emit("confirm-modal",{title:"Delete Alert",text:"Are you sure you want to delete this alert rule?",text2:"You need to save dashboard for the delete to take effect",icon:"fa-trash",yesText:"Delete",onConfirm:function(){delete a.panel.alert,a.alert=null,a.panel.thresholds=[],a.conditionModels=[],a.panelCtrl.alertState=null,a.panelCtrl.render()}})},a.prototype.enable=function(){this.panel.alert={},this.initModel()},a.prototype.evaluatorParamsChanged=function(){d.ThresholdMapper.alertToGraphThresholds(this.panel),this.panelCtrl.render()},a.prototype.evaluatorTypeChanged=function(a){switch(a.type){case"lt":case"gt":a.params=[a.params[0]];break;case"within_range":case"outside_range":a.params=[a.params[0],a.params[1]];break;case"no_value":a.params=[]}this.evaluatorParamsChanged()},a.prototype.clearHistory=function(){var a=this;i["default"].emit("confirm-modal",{title:"Delete Alert History",text:"Are you sure you want to remove all history & annotations for this alert?",icon:"fa-trash",yesText:"Yes",onConfirm:function(){a.backendSrv.post("/api/annotations/mass-delete",{dashboardId:a.panelCtrl.dashboard.id,panelId:a.panel.id}).then(function(b){a.alertHistory=[],a.panelCtrl.refresh()})}})},a.prototype.test=function(){var a=this;this.testing=!0;var b={dashboard:this.dashboardSrv.getCurrent().getSaveModelClone(),panelId:this.panelCtrl.panel.id};return this.backendSrv.post("/api/alerts/test",b).then(function(b){a.testResult=b,a.testing=!1})},a}(),a("AlertTabCtrl",j)}}});