/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./datasource","./query_ctrl"],function(a){var b,c,d;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(){function a(){}return a.template="<h2>test data</h2>",a}(),a("TestDataDatasource",b.TestDataDatasource),a("Datasource",b.TestDataDatasource),a("QueryCtrl",c.TestDataQueryCtrl),a("AnnotationsQueryCtrl",d)}}});