/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","moment","test/specs/helpers","../datasource"],function(a){var b,c,d,e;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){b.describe("PrometheusDatasource",function(){var a=new d["default"].ServiceTestContext,f={url:"proxied",directUrl:"direct",user:"test",password:"mupp"};b.beforeEach(b.angularMocks.module("grafana.core")),b.beforeEach(b.angularMocks.module("grafana.services")),b.beforeEach(b.angularMocks.inject(function(b,c,d,g){a.$q=b,a.$httpBackend=d,a.$rootScope=c,a.ds=g.instantiate(e.PrometheusDatasource,{instanceSettings:f}),d.when("GET",/\.html$/).respond("")})),b.describe("When querying prometheus with one target using query editor target spec",function(){var d,e="proxied/api/v1/query_range?query="+encodeURIComponent('test{job="testjob"}')+"&start=1443438675&end=1443460275&step=60",f={range:{from:c["default"](1443438674760),to:c["default"](1443460274760)},targets:[{expr:'test{job="testjob"}'}],interval:"60s"},g={status:"success",data:{resultType:"matrix",result:[{metric:{__name__:"test",job:"testjob"},values:[[1443454528,"3846"]]}]}};b.beforeEach(function(){a.$httpBackend.expect("GET",e).respond(g),a.ds.query(f).then(function(a){d=a}),a.$httpBackend.flush()}),b.it("should generate the correct query",function(){a.$httpBackend.verifyNoOutstandingExpectation()}),b.it("should return series list",function(){b.expect(d.data.length).to.be(1),b.expect(d.data[0].target).to.be('test{job="testjob"}')})}),b.describe("When querying prometheus with one target which return multiple series",function(){var d,e=1443438675,f=1443460275,g=60,h="proxied/api/v1/query_range?query="+encodeURIComponent('test{job="testjob"}')+"&start="+e+"&end="+f+"&step="+g,i={range:{from:c["default"](1443438674760),to:c["default"](1443460274760)},targets:[{expr:'test{job="testjob"}'}],interval:"60s"},j={status:"success",data:{resultType:"matrix",result:[{metric:{__name__:"test",job:"testjob",series:"series 1"},values:[[e+1*g,"3846"],[e+3*g,"3847"],[f-1*g,"3848"]]},{metric:{__name__:"test",job:"testjob",series:"series 2"},values:[[e+2*g,"4846"]]}]}};b.beforeEach(function(){a.$httpBackend.expect("GET",h).respond(j),a.ds.query(i).then(function(a){d=a}),a.$httpBackend.flush()}),b.it("should be same length",function(){b.expect(d.data.length).to.be(2),b.expect(d.data[0].datapoints.length).to.be((f-e)/g+1),b.expect(d.data[1].datapoints.length).to.be((f-e)/g+1)}),b.it("should fill null until first datapoint in response",function(){b.expect(d.data[0].datapoints[0][1]).to.be(1e3*e),b.expect(d.data[0].datapoints[0][0]).to.be(null),b.expect(d.data[0].datapoints[1][1]).to.be(1e3*(e+1*g)),b.expect(d.data[0].datapoints[1][0]).to.be(3846)}),b.it("should fill null after last datapoint in response",function(){var a=(f-e)/g+1;b.expect(d.data[0].datapoints[a-2][1]).to.be(1e3*(f-1*g)),b.expect(d.data[0].datapoints[a-2][0]).to.be(3848),b.expect(d.data[0].datapoints[a-1][1]).to.be(1e3*f),b.expect(d.data[0].datapoints[a-1][0]).to.be(null)}),b.it("should fill null at gap between series",function(){b.expect(d.data[0].datapoints[2][1]).to.be(1e3*(e+2*g)),b.expect(d.data[0].datapoints[2][0]).to.be(null),b.expect(d.data[1].datapoints[1][1]).to.be(1e3*(e+1*g)),b.expect(d.data[1].datapoints[1][0]).to.be(null),b.expect(d.data[1].datapoints[3][1]).to.be(1e3*(e+3*g)),b.expect(d.data[1].datapoints[3][0]).to.be(null)})}),b.describe("When performing annotationQuery",function(){var d,e="proxied/api/v1/query_range?query="+encodeURIComponent('ALERTS{alertstate="firing"}')+"&start=1443438675&end=1443460275&step=60s",f={annotation:{expr:'ALERTS{alertstate="firing"}',tagKeys:"job",titleFormat:"{{alertname}}",textFormat:"{{instance}}"},range:{from:c["default"](1443438674760),to:c["default"](1443460274760)}},g={status:"success",data:{resultType:"matrix",result:[{metric:{__name__:"ALERTS",alertname:"InstanceDown",alertstate:"firing",instance:"testinstance",job:"testjob"},values:[[1443454528,"1"]]}]}};b.beforeEach(function(){a.$httpBackend.expect("GET",e).respond(g),a.ds.annotationQuery(f).then(function(a){d=a}),a.$httpBackend.flush()}),b.it("should return annotation list",function(){a.$rootScope.$apply(),b.expect(d.length).to.be(1),b.expect(d[0].tags).to.contain("testjob"),b.expect(d[0].title).to.be("InstanceDown"),b.expect(d[0].text).to.be("testinstance"),b.expect(d[0].time).to.be(1443454528e3)})})})}}});