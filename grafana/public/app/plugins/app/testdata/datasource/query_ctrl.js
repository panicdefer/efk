/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/plugins/sdk"],function(a){var b,c,d,e=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(a){function c(b,c,d){a.call(this,b,c),this.backendSrv=d,this.target.scenarioId=this.target.scenarioId||"random_walk",this.scenarioList=[]}return e(c,a),c.$inject=["$scope","$injector","backendSrv"],c.prototype.$onInit=function(){var a=this;return this.backendSrv.get("/api/tsdb/testdata/scenarios").then(function(c){a.scenarioList=c,a.scenario=b["default"].find(a.scenarioList,{id:a.target.scenarioId})})},c.prototype.scenarioChanged=function(){this.scenario=b["default"].find(this.scenarioList,{id:this.target.scenarioId}),this.target.stringInput=this.scenario.stringInput,this.refresh()},c.templateUrl="partials/query.editor.html",c}(c.QueryCtrl),a("TestDataQueryCtrl",d)}}});