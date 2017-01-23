/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","../../../core/utils/flatten","../../../core/time_series2","../../../core/table_model"],function(a){function b(a,b){var c=new f["default"];if(!a||0===a.length)return c;var d=g[b.transform];if(!d)throw{message:"Transformer "+b.transformer+" not found"};return d.transform(a,b,c),c}var c,d,e,f,g;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g={},g.timeseries_to_rows={description:"Time series to rows",getColumns:function(){return[]},transform:function(a,b,c){c.columns=[{text:"Time",type:"date"},{text:"Metric"},{text:"Value"}];for(var d=0;d<a.length;d++)for(var e=a[d],f=0;f<e.datapoints.length;f++){var g=e.datapoints[f];c.rows.push([g[1],e.target,g[0]])}}},g.timeseries_to_columns={description:"Time series to columns",getColumns:function(){return[]},transform:function(a,b,c){c.columns.push({text:"Time",type:"date"});for(var d={},e=0;e<a.length;e++){var f=a[e];c.columns.push({text:f.target});for(var g=0;g<f.datapoints.length;g++){var h=f.datapoints[g],i=h[1].toString();d[i]?d[i][e]=h[0]:(d[i]={time:h[1]},d[i][e]=h[0])}}for(var j in d){for(var k=d[j],l=[k.time],e=0;e<a.length;e++){var m=k[e];l.push(m)}c.rows.push(l)}}},g.timeseries_aggregations={description:"Time series aggregations",getColumns:function(){return[{text:"Avg",value:"avg"},{text:"Min",value:"min"},{text:"Max",value:"max"},{text:"Total",value:"total"},{text:"Current",value:"current"},{text:"Count",value:"count"}]},transform:function(a,b,c){var d,f;for(c.columns.push({text:"Metric"}),0===b.columns.length&&b.columns.push({text:"Avg",value:"avg"}),d=0;d<b.columns.length;d++)c.columns.push({text:b.columns[d].text});for(d=0;d<a.length;d++){var g=new e["default"]({datapoints:a[d].datapoints,alias:a[d].target});g.getFlotPairs("connected");var h=[g.alias];for(f=0;f<b.columns.length;f++)h.push(g.stats[b.columns[f].value]);c.rows.push(h)}}},g.annotations={description:"Annotations",getColumns:function(){return[]},transform:function(a,b,c){if(c.columns.push({text:"Time",type:"date"}),c.columns.push({text:"Title"}),c.columns.push({text:"Text"}),c.columns.push({text:"Tags"}),a&&0!==a.length)for(var d=0;d<a.length;d++){var e=a[d];c.rows.push([e.min,e.title,e.text,e.tags])}}},g.table={description:"Table",getColumns:function(a){if(!a||0===a.length)return[]},transform:function(a,b,c){if(a&&0!==a.length){if("table"!==a[0].type)throw{message:"Query result is not in table format, try using another transform."};c.columns=a[0].columns,c.rows=a[0].rows}}},g.json={description:"JSON Data",getColumns:function(a){if(!a||0===a.length)return[];for(var b={},e=0;e<a.length;e++){var f=a[e];if("docs"===f.type)for(var g=Math.min(f.datapoints.length,100),h=0;h<g;h++){var i=f.datapoints[h],j=d["default"](i,null);for(var k in j)b[k]=!0}}return c["default"].map(b,function(a,b){return{text:b,value:b}})},transform:function(a,b,e){var f,g,h;for(f=0;f<b.columns.length;f++)e.columns.push({text:b.columns[f].text});for(0===e.columns.length&&e.columns.push({text:"JSON"}),f=0;f<a.length;f++){var i=a[f];for(g=0;g<i.datapoints.length;g++){var j=i.datapoints[g],k=[];if(c["default"].isObject(j)&&b.columns.length>0){var l=d["default"](j,null);for(h=0;h<b.columns.length;h++)k.push(l[b.columns[h].value])}else k.push(JSON.stringify(j));e.rows.push(k)}}}},a("transformers",g),a("transformDataToTable",b)}}});