/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/components/query_part/query_part"],function(a){function b(a){var b=new f.QueryPartDef({type:a.type,defaultParams:[]});return new f.QueryPart(a,b)}function c(a){switch(a){case"ok":return{text:"OK",iconClass:"icon-gf icon-gf-online",stateClass:"alert-state-ok"};case"alerting":return{text:"ALERTING",iconClass:"icon-gf icon-gf-critical",stateClass:"alert-state-critical"};case"no_data":return{text:"NO DATA",iconClass:"fa fa-question",stateClass:"alert-state-warning"};case"execution_error":return{text:"EXECUTION ERROR",iconClass:"icon-gf icon-gf-critical",stateClass:"alert-state-critical"};case"paused":return{text:"paused",iconClass:"fa fa-pause",stateClass:"alert-state-paused"};case"pending":return{text:"PENDING",iconClass:"fa fa-exclamation",stateClass:"alert-state-warning"}}}function d(a,b){return e["default"].reduce(a,function(a,b){return void 0!==b.Metric&&void 0!==b.Value&&a.push(b.Metric+"="+b.Value),a},[]).join(b)}var e,f,g,h,i,j,k,l,m;return{setters:[function(a){e=a},function(a){f=a}],execute:function(){g=new f.QueryPartDef({type:"query",params:[{name:"queryRefId",type:"string",dynamicLookup:!0},{name:"from",type:"string",options:["1s","10s","1m","5m","10m","15m","1h"]},{name:"to",type:"string",options:["now"]}],defaultParams:["#A","5m","now","avg"]}),h=[{text:"Query",value:"query"}],i=[{text:"IS ABOVE",value:"gt"},{text:"IS BELOW",value:"lt"},{text:"IS OUTSIDE RANGE",value:"outside_range"},{text:"IS WITHIN RANGE",value:"within_range"},{text:"HAS NO VALUE",value:"no_value"}],j=[{text:"OR",value:"or"},{text:"AND",value:"and"}],k=[{text:"avg()",value:"avg"},{text:"min()",value:"min"},{text:"max()",value:"max"},{text:"sum()",value:"sum"},{text:"count()",value:"count"},{text:"last()",value:"last"},{text:"median()",value:"median"}],l=[{text:"Alerting",value:"alerting"},{text:"No Data",value:"no_data"},{text:"Keep Last State",value:"keep_state"}],m=[{text:"Alerting",value:"alerting"},{text:"Keep Last State",value:"keep_state"}],a("default",{alertQueryDef:g,getStateDisplayModel:c,conditionTypes:h,evalFunctions:i,evalOperators:j,noDataModes:l,executionErrorModes:m,reducerTypes:k,createReducerPart:b,joinEvalMatches:d})}}});