/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","moment","../index_pattern"],function(a){var b,c,d;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a}],execute:function(){b.describe("IndexPattern",function(){b.describe("when getting index for today",function(){b.it("should return correct index name",function(){var a=new d["default"]("[asd-]YYYY.MM.DD","Daily"),e="asd-"+c["default"].utc().format("YYYY.MM.DD");b.expect(a.getIndexForToday()).to.be(e)})}),b.describe("when getting index list for time range",function(){b.describe("no interval",function(){b.it("should return correct index",function(){var a=new d["default"]("my-metrics"),c=new Date(2015,4,30,1,2,3),e=new Date(2015,5,1,12,5,6);b.expect(a.getIndexList(c,e)).to.eql("my-metrics")})}),b.describe("daily",function(){b.it("should return correct index list",function(){var a=new d["default"]("[asd-]YYYY.MM.DD","Daily"),c=new Date(1432940523e3),e=new Date(1433153106e3),f=["asd-2015.05.29","asd-2015.05.30","asd-2015.05.31","asd-2015.06.01"];b.expect(a.getIndexList(c,e)).to.eql(f)})})})})}}});