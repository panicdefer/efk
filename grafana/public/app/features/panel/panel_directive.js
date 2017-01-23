/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","jquery"],function(a){var b,c,d,e;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=b["default"].module("grafana.directives"),e='\n  <div class="panel-container">\n    <div class="panel-header">\n      <span class="alert-error panel-error small pointer" ng-if="ctrl.error" ng-click="ctrl.openInspector()">\n        <span data-placement="top" bs-tooltip="ctrl.error">\n          <i class="fa fa-exclamation"></i><span class="panel-error-arrow"></span>\n        </span>\n      </span>\n\n      <span class="panel-loading" ng-show="ctrl.loading">\n        <i class="fa fa-spinner fa-spin"></i>\n      </span>\n\n      <div class="panel-title-container drag-handle" panel-menu></div>\n    </div>\n\n    <div class="panel-content">\n      <ng-transclude></ng-transclude>\n    </div>\n    <panel-resizer></panel-resizer>\n  </div>\n\n  <div class="panel-full-edit" ng-if="ctrl.editMode">\n    <div class="tabbed-view tabbed-view--panel-edit">\n      <div class="tabbed-view-header">\n        <h2 class="tabbed-view-title">\n          {{ctrl.pluginName}}\n        </h2>\n\n        <ul class="gf-tabs">\n          <li class="gf-tabs-item" ng-repeat="tab in ::ctrl.editorTabs">\n            <a class="gf-tabs-link" ng-click="ctrl.changeTab($index)" ng-class="{active: ctrl.editorTabIndex === $index}">\n              {{::tab.title}}\n            </a>\n          </li>\n        </ul>\n\n        <button class="tabbed-view-close-btn" ng-click="ctrl.exitFullscreen();">\n          <i class="fa fa-remove"></i>\n        </button>\n      </div>\n\n      <div class="tabbed-view-body">\n        <div ng-repeat="tab in ctrl.editorTabs" ng-if="ctrl.editorTabIndex === $index">\n          <panel-editor-tab editor-tab="tab" ctrl="ctrl" index="$index"></panel-editor-tab>\n        </div>\n      </div>\n    </div>\n  </div>\n',d.directive("grafanaPanel",["$rootScope",function(a){return{restrict:"E",template:e,transclude:!0,scope:{ctrl:"="},link:function(b,c){function d(){h.toggleClass("panel-hover-highlight",!0),i.dashboard.setPanelFocus(i.panel.id)}function e(){h.toggleClass("panel-hover-highlight",!1),i.dashboard.setPanelFocus(0)}var f,g,h=c.find(".panel-container"),i=b.ctrl,j=!1,k=!1,l=0;i.containerHeight||(i.calculatePanelHeight(),h.css({minHeight:i.containerHeight}),l=i.containerHeight),i.panel.transparent&&(j=!0,h.addClass("panel-transparent",!0)),i.events.on("render",function(){l!==i.containerHeight&&(h.css({minHeight:i.containerHeight}),l=i.containerHeight),j!==i.panel.transparent&&(h.toggleClass("panel-transparent",i.panel.transparent===!0),j=i.panel.transparent),g=void 0!==i.panel.alert,k!==g&&(h.toggleClass("panel-has-alert",g),k=g),i.alertState?(f&&h.removeClass("panel-alert-state--"+f),"ok"!==i.alertState.state&&"alerting"!==i.alertState.state||h.addClass("panel-alert-state--"+i.alertState.state),f=i.alertState.state):f&&(h.removeClass("panel-alert-state--"+f),f=null)});var m;a.onAppEvent("panel-change-view",function(a,b){m!==i.fullscreen&&(c.toggleClass("panel-fullscreen",!!i.fullscreen),m=i.fullscreen)},b),c.on("mouseenter",d),c.on("mouseleave",e),b.$on("$destroy",function(){c.off()})}}}]),d.directive("panelResizer",["$rootScope",function(a){return{restrict:"E",template:'<span class="resize-panel-handle fa fa-signal"></span>',link:function(b,d){function e(a){a.preventDefault(),m=!0,i=c["default"](a.target).offset(),j=parseInt(n.row.height),k=n.panel.span,l=c["default"](document).width(),h=n.row.panels[n.row.panels.length-1],c["default"]("body").on("mousemove",f),c["default"]("body").on("mouseup",g)}function f(a){n.row.height=Math.round(j+(a.pageY-i.top)),n.panel.span=k+(a.pageX-i.left)/l*12,n.panel.span=Math.min(Math.max(n.panel.span,1),12),n.row.updateRowSpan();var c=n.row.span;Math.floor(c)<14&&(h===n.panel&&c>12?h.span-=c-12:h!==n.panel&&(h.span=h.span-(c-12),h.span=Math.min(Math.max(h.span,1),12))),n.row.panelSpanChanged(!0),b.$apply(function(){n.render()})}function g(){n.panel.span=Math.round(n.panel.span),h&&(h.span=Math.round(h.span)),a.$apply(function(){n.row.panelSpanChanged(),setTimeout(function(){a.$broadcast("render")})}),c["default"]("body").off("mousemove",f),c["default"]("body").off("mouseup",g)}var h,i,j,k,l,m=!1,n=b.ctrl;d.on("mousedown",e);var o=b.$on("$destroy",function(){d.off("mousedown",e),o()})}}}])}}});