/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./datasource","./query_ctrl"],function(a){var b,c,d,e,f;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(){function a(){}return a.templateUrl="partials/config.html",a}(),e=function(){function a(){}return a.templateUrl="partials/query.options.html",a}(),f=function(){function a(){}return a.templateUrl="partials/annotations.editor.html",a}(),a("Datasource",b["default"]),a("QueryCtrl",c.InfluxQueryCtrl),a("ConfigCtrl",d),a("QueryOptionsCtrl",e),a("AnnotationsQueryCtrl",f)}}});