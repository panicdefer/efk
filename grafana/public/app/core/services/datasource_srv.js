/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","../core_module","app/core/config"],function(a,b,c,d){"use strict";c["default"].service("datasourceSrv",["$q","$injector","$rootScope","templateSrv",function(a,c,e,f){var g=this;this.init=function(){this.datasources={}},this.get=function(b){return b?(b=f.replace(b),this.datasources[b]?a.when(this.datasources[b]):this.loadDatasource(b)):this.get(d.defaultDatasource)},this.loadDatasource=function(b){var f=d.datasources[b];if(!f)return a.reject({message:"Datasource named "+b+" was not found"});var h=a.defer(),i=f.meta;return System["import"](i.module).then(function(a){if(g.datasources[b])return void h.resolve(g.datasources[b]);if(!a.Datasource)throw"Plugin module is missing Datasource constructor";var d=c.instantiate(a.Datasource,{instanceSettings:f});d.meta=i,d.name=b,g.datasources[b]=d,h.resolve(d)})["catch"](function(a){e.appEvent("alert-error",[f.name+" plugin failed",a.toString()])}),h.promise},this.getAll=function(){return d.datasources},this.getAnnotationSources=function(){var a=[];return this.addDataSourceVariables(a),b.each(d.datasources,function(b){b.meta&&b.meta.annotations&&a.push(b)}),a},this.getMetricSources=function(a){var c=[];return b.each(d.datasources,function(a,b){a.meta&&a.meta.metrics&&(c.push({value:b,name:b,meta:a.meta}),b===d.defaultDatasource&&c.push({value:null,name:"default",meta:a.meta}))}),a&&a.skipVariables||this.addDataSourceVariables(c),c.sort(function(a,b){return a.meta.builtIn||a.name>b.name?1:a.name<b.name?-1:0}),c},this.addDataSourceVariables=function(a){for(var b=0;b<f.variables.length;b++){var c=f.variables[b];if("datasource"===c.type){var e=c.current.value,g=d.datasources[e];g&&a.push({name:"$"+c.name,value:"$"+c.name,meta:g.meta})}}},this.init()}])});