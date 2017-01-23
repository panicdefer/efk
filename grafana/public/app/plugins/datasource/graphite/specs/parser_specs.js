/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../parser"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("when parsing",function(){b.it("simple metric expression",function(){var a=new c.Parser("metric.test.*.asd.count"),d=a.getAst();b.expect(d.type).to.be("metric"),b.expect(d.segments.length).to.be(5),b.expect(d.segments[0].value).to.be("metric")}),b.it("simple metric expression with numbers in segments",function(){var a=new c.Parser("metric.10.15_20.5"),d=a.getAst();b.expect(d.type).to.be("metric"),b.expect(d.segments.length).to.be(4),b.expect(d.segments[1].value).to.be("10"),b.expect(d.segments[2].value).to.be("15_20"),b.expect(d.segments[3].value).to.be("5")}),b.it("simple metric expression with curly braces",function(){var a=new c.Parser("metric.se1-{count, max}"),d=a.getAst();b.expect(d.type).to.be("metric"),b.expect(d.segments.length).to.be(2),b.expect(d.segments[1].value).to.be("se1-{count,max}")}),b.it("simple metric expression with curly braces at start of segment and with post chars",function(){var a=new c.Parser("metric.{count, max}-something.count"),d=a.getAst();b.expect(d.type).to.be("metric"),b.expect(d.segments.length).to.be(3),b.expect(d.segments[1].value).to.be("{count,max}-something")}),b.it("simple function",function(){var a=new c.Parser("sum(test)"),d=a.getAst();b.expect(d.type).to.be("function"),b.expect(d.params.length).to.be(1)}),b.it("simple function2",function(){var a=new c.Parser("offset(test.metric, -100)"),d=a.getAst();b.expect(d.type).to.be("function"),b.expect(d.params[0].type).to.be("metric"),b.expect(d.params[1].type).to.be("number")}),b.it("simple function with string arg",function(){var a=new c.Parser("randomWalk('test')"),d=a.getAst();b.expect(d.type).to.be("function"),b.expect(d.params.length).to.be(1),b.expect(d.params[0].type).to.be("string")}),b.it("function with multiple args",function(){var a=new c.Parser("sum(test, 1, 'test')"),d=a.getAst();b.expect(d.type).to.be("function"),b.expect(d.params.length).to.be(3),b.expect(d.params[0].type).to.be("metric"),b.expect(d.params[1].type).to.be("number"),b.expect(d.params[2].type).to.be("string")}),b.it("function with nested function",function(){var a=new c.Parser("sum(scaleToSeconds(test, 1))"),d=a.getAst();b.expect(d.type).to.be("function"),b.expect(d.params.length).to.be(1),b.expect(d.params[0].type).to.be("function"),b.expect(d.params[0].name).to.be("scaleToSeconds"),b.expect(d.params[0].params.length).to.be(2),b.expect(d.params[0].params[0].type).to.be("metric"),b.expect(d.params[0].params[1].type).to.be("number")}),b.it("function with multiple series",function(){var a=new c.Parser("sum(test.test.*.count, test.timers.*.count)"),d=a.getAst();b.expect(d.type).to.be("function"),b.expect(d.params.length).to.be(2),b.expect(d.params[0].type).to.be("metric"),b.expect(d.params[1].type).to.be("metric")}),b.it("function with templated series",function(){var a=new c.Parser("sum(test.[[server]].count)"),d=a.getAst();b.expect(d.message).to.be(void 0),b.expect(d.params[0].type).to.be("metric"),b.expect(d.params[0].segments[1].type).to.be("segment"),b.expect(d.params[0].segments[1].value).to.be("[[server]]")}),b.it("invalid metric expression",function(){var a=new c.Parser("metric.test.*.asd."),d=a.getAst();b.expect(d.message).to.be("Expected metric identifier instead found end of string"),b.expect(d.pos).to.be(19)}),b.it("invalid function expression missing closing parenthesis",function(){var a=new c.Parser("sum(test"),d=a.getAst();b.expect(d.message).to.be("Expected closing parenthesis instead found end of string"),b.expect(d.pos).to.be(9)}),b.it("unclosed string in function",function(){var a=new c.Parser("sum('test)"),d=a.getAst();b.expect(d.message).to.be("Unclosed string parameter"),b.expect(d.pos).to.be(11)}),b.it("handle issue #69",function(){var a=new c.Parser("cactiStyle(offset(scale(net.192-168-1-1.192-168-1-9.ping_value.*,0.001),-100))"),d=a.getAst();b.expect(d.type).to.be("function")}),b.it("handle float function arguments",function(){var a=new c.Parser("scale(test, 0.002)"),d=a.getAst();b.expect(d.type).to.be("function"),b.expect(d.params[1].type).to.be("number"),b.expect(d.params[1].value).to.be(.002)}),b.it("handle curly brace pattern at start",function(){var a=new c.Parser("{apps}.test"),d=a.getAst();b.expect(d.type).to.be("metric"),b.expect(d.segments[0].value).to.be("{apps}"),b.expect(d.segments[1].value).to.be("test")}),b.it("series parameters",function(){var a=new c.Parser("asPercent(#A, #B)"),d=a.getAst();b.expect(d.type).to.be("function"),b.expect(d.params[0].type).to.be("series-ref"),b.expect(d.params[0].value).to.be("#A"),b.expect(d.params[1].value).to.be("#B")}),b.it("series parameters, issue 2788",function(){var a=new c.Parser("summarize(diffSeries(#A, #B), '10m', 'sum', false)"),d=a.getAst();b.expect(d.type).to.be("function"),b.expect(d.params[0].type).to.be("function"),b.expect(d.params[1].value).to.be("10m"),b.expect(d.params[3].type).to.be("bool")}),b.it("should parse metric expression with ip number segments",function(){var a=new c.Parser("5.10.123.5"),d=a.getAst();b.expect(d.segments[0].value).to.be("5"),b.expect(d.segments[1].value).to.be("10"),b.expect(d.segments[2].value).to.be("123"),b.expect(d.segments[3].value).to.be("5")})})}}});