/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a){var b;return{setters:[],execute:function(){b='\n<div class="graph-wrapper" ng-class="{\'graph-legend-rightside\': ctrl.panel.legend.rightSide}">\n  <div class="graph-canvas-wrapper">\n\n    <div class="datapoints-warning" ng-show="ctrl.datapointsCount===0">\n      <span class="small" >\n        No datapoints <tip>No datapoints returned from metric query</tip>\n      </span>\n    </div>\n\n    <div class="datapoints-warning" ng-show="ctrl.datapointsOutside">\n      <span class="small">\n        Datapoints outside time range\n        <tip>Can be caused by timezone mismatch between browser and graphite server</tip>\n      </span>\n    </div>\n\n    <div grafana-graph class="histogram-chart" ng-dblclick="ctrl.zoomOut()">\n    </div>\n\n  </div>\n\n  <div class="graph-legend-wrapper" graph-legend></div>\n  </div>\n\n<div class="clearfix"></div>\n',a("default",b)}}});