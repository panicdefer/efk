/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../transformers"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("when transforming time series table",function(){var a;b.describe("given 2 time series",function(){var d=(new Date).getTime(),e=[{target:"series1",datapoints:[[12.12,d],[14.44,d+1]]},{target:"series2",datapoints:[[16.12,d]]}];b.describe("timeseries_to_rows",function(){var d={transform:"timeseries_to_rows",sort:{col:0,desc:!0}};b.beforeEach(function(){a=c.transformDataToTable(e,d)}),b.it("should return 3 rows",function(){b.expect(a.rows.length).to.be(3),b.expect(a.rows[0][1]).to.be("series1"),b.expect(a.rows[1][1]).to.be("series1"),b.expect(a.rows[2][1]).to.be("series2"),b.expect(a.rows[0][2]).to.be(12.12)}),b.it("should return 3 rows",function(){b.expect(a.columns.length).to.be(3),b.expect(a.columns[0].text).to.be("Time"),b.expect(a.columns[1].text).to.be("Metric"),b.expect(a.columns[2].text).to.be("Value")})}),b.describe("timeseries_to_columns",function(){var d={transform:"timeseries_to_columns"};b.beforeEach(function(){a=c.transformDataToTable(e,d)}),b.it("should return 3 columns",function(){b.expect(a.columns.length).to.be(3),b.expect(a.columns[0].text).to.be("Time"),b.expect(a.columns[1].text).to.be("series1"),b.expect(a.columns[2].text).to.be("series2")}),b.it("should return 2 rows",function(){b.expect(a.rows.length).to.be(2),b.expect(a.rows[0][1]).to.be(12.12),b.expect(a.rows[0][2]).to.be(16.12)}),b.it("should be undefined when no value for timestamp",function(){b.expect(a.rows[1][2]).to.be(void 0)})}),b.describe("timeseries_aggregations",function(){var d={transform:"timeseries_aggregations",sort:{col:0,desc:!0},columns:[{text:"Max",value:"max"},{text:"Min",value:"min"}]};b.beforeEach(function(){a=c.transformDataToTable(e,d)}),b.it("should return 2 rows",function(){b.expect(a.rows.length).to.be(2),b.expect(a.rows[0][0]).to.be("series1"),b.expect(a.rows[0][1]).to.be(14.44),b.expect(a.rows[0][2]).to.be(12.12)}),b.it("should return 2 columns",function(){b.expect(a.columns.length).to.be(3),b.expect(a.columns[0].text).to.be("Metric"),b.expect(a.columns[1].text).to.be("Max"),b.expect(a.columns[2].text).to.be("Min")})}),b.describe("JSON Data",function(){var d={transform:"json",columns:[{text:"Timestamp",value:"timestamp"},{text:"Message",value:"message"},{text:"nested.level2",value:"nested.level2"}]},e=[{type:"docs",datapoints:[{timestamp:"time",message:"message",nested:{level2:"level2-value"}}]}];b.describe("getColumns",function(){b.it("should return nested properties",function(){var a=c.transformers.json.getColumns(e);b.expect(a[0].text).to.be("timestamp"),b.expect(a[1].text).to.be("message"),b.expect(a[2].text).to.be("nested.level2")})}),b.describe("transform",function(){b.beforeEach(function(){a=c.transformDataToTable(e,d)}),b.it("should return 2 columns",function(){b.expect(a.columns.length).to.be(3),b.expect(a.columns[0].text).to.be("Timestamp"),b.expect(a.columns[1].text).to.be("Message"),b.expect(a.columns[2].text).to.be("nested.level2")}),b.it("should return 2 rows",function(){b.expect(a.rows.length).to.be(1),b.expect(a.rows[0][0]).to.be("time"),b.expect(a.rows[0][1]).to.be("message"),b.expect(a.rows[0][2]).to.be("level2-value")})})}),b.describe("Annnotations",function(){var d={transform:"annotations"},e=[{min:1e3,text:"hej",tags:["tags","asd"],title:"title"}];b.beforeEach(function(){a=c.transformDataToTable(e,d)}),b.it("should return 4 columns",function(){b.expect(a.columns.length).to.be(4),b.expect(a.columns[0].text).to.be("Time"),b.expect(a.columns[1].text).to.be("Title"),b.expect(a.columns[2].text).to.be("Text"),b.expect(a.columns[3].text).to.be("Tags")}),b.it("should return 1 rows",function(){b.expect(a.rows.length).to.be(1),b.expect(a.rows[0][0]).to.be(1e3)})})})})}}});