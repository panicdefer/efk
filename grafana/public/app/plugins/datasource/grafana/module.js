/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./datasource","app/plugins/sdk"],function(a){var b,c,d,e,f=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(a){function b(){a.apply(this,arguments)}return f(b,a),b.templateUrl="partials/query.editor.html",b}(c.QueryCtrl),e=function(){function a(){this.annotation.type=this.annotation.type||"alert",this.annotation.limit=this.annotation.limit||100}return a.templateUrl="partials/annotations.editor.html",a}(),a("GrafanaDatasource",b.GrafanaDatasource),a("Datasource",b.GrafanaDatasource),a("QueryCtrl",d),a("AnnotationsQueryCtrl",e)}}});