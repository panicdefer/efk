/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","test/lib/common","moment","angular","test/specs/helpers","../datasource"],function(a){var b,c,d,e,f,g;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){c.describe("ElasticDatasource",function(){function a(a){a.jsonData=a.jsonData||{},h.ds=h.$injector.instantiate(g.ElasticDatasource,{instanceSettings:a})}var h=new f["default"].ServiceTestContext;c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(h.providePhase(["templateSrv","backendSrv"])),c.beforeEach(c.angularMocks.inject(function(a,b,c,d){h.$q=a,h.$httpBackend=c,h.$rootScope=b,h.$injector=d,c.when("GET",/\.html$/).respond("")})),c.describe("When testing datasource with index pattern",function(){c.beforeEach(function(){a({url:"http://es.com",index:"[asd-]YYYY.MM.DD",jsonData:{interval:"Daily"}})}),c.it("should translate index pattern to current day",function(){var a;h.backendSrv.datasourceRequest=function(b){return a=b,h.$q.when({data:{}})},h.ds.testDatasource(),h.$rootScope.$apply();var b=d["default"].utc().format("YYYY.MM.DD");c.expect(a.url).to.be("http://es.com/asd-"+b+"/_stats")})}),c.describe("When issueing metric query with interval pattern",function(){var b,f,g;c.beforeEach(function(){a({url:"http://es.com",index:"[asd-]YYYY.MM.DD",jsonData:{interval:"Daily"}}),h.backendSrv.datasourceRequest=function(a){return b=a,h.$q.when({data:{responses:[]}})},h.ds.query({range:{from:d["default"].utc([2015,4,30,10]),to:d["default"].utc([2015,5,1,10])},targets:[{bucketAggs:[],metrics:[],query:"escape\\:test"}]}),h.$rootScope.$apply(),f=b.data.split("\n"),g=e["default"].fromJson(f[0])}),c.it("should translate index pattern to current day",function(){c.expect(g.index).to.eql(["asd-2015.05.30","asd-2015.05.31","asd-2015.06.01"])}),c.it("should json escape lucene query",function(){var a=e["default"].fromJson(f[1]);c.expect(a.query.filtered.query.query_string.query).to.be("escape\\:test")})}),c.describe("When issueing document query",function(){var b,f,g;c.beforeEach(function(){a({url:"http://es.com",index:"test"}),h.backendSrv.datasourceRequest=function(a){return b=a,h.$q.when({data:{responses:[]}})},h.ds.query({range:{from:d["default"]([2015,4,30,10]),to:d["default"]([2015,5,1,10])},targets:[{bucketAggs:[],metrics:[{type:"raw_document"}],query:"test"}]}),h.$rootScope.$apply(),f=b.data.split("\n"),g=e["default"].fromJson(f[0])}),c.it("should set search type to query_then_fetch",function(){c.expect(g.search_type).to.eql("query_then_fetch")}),c.it("should set size",function(){var a=e["default"].fromJson(f[1]);c.expect(a.size).to.be(500)})}),c.describe("When getting fields",function(){var d;c.beforeEach(function(){a({url:"http://es.com",index:"metricbeat"}),h.backendSrv.datasourceRequest=function(a){return d=a,h.$q.when({data:{metricbeat:{mappings:{metricsets:{_all:{},properties:{"@timestamp":{type:"date"},beat:{properties:{name:{type:"string"},hostname:{type:"string"}}},system:{properties:{cpu:{properties:{system:{type:"float"},user:{type:"float"}}},process:{properties:{cpu:{properties:{total:{type:"float"}}},name:{type:"string"}}}}}}}}}}})}}),c.it("should return nested fields",function(){h.ds.getFields({find:"fields",query:"*"}).then(function(a){var d=b["default"].map(a,"text");c.expect(d).to.eql(["@timestamp","beat.name","beat.hostname","system.cpu.system","system.cpu.user","system.process.cpu.total","system.process.name"])}),h.$rootScope.$apply()}),c.it("should return fields related to query type",function(){h.ds.getFields({find:"fields",query:"*",type:"number"}).then(function(a){var d=b["default"].map(a,"text");c.expect(d).to.eql(["system.cpu.system","system.cpu.user","system.process.cpu.total"])}),h.ds.getFields({find:"fields",query:"*",type:"date"}).then(function(a){var d=b["default"].map(a,"text");c.expect(d).to.eql(["@timestamp"])}),h.$rootScope.$apply()})})})}}});