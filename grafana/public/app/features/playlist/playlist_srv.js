/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../../core/core_module","app/core/utils/kbn"],function(a){var b,c,d;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(){function a(a,b,c,d){this.$rootScope=a,this.$location=b,this.$timeout=c,this.backendSrv=d}return a.$inject=["$rootScope","$location","$timeout","backendSrv"],a.prototype.next=function(){var a=this;this.$timeout.cancel(this.cancelPromise);var b=this.index>this.dashboards.length-1;if(b)window.location.href=this.startUrl;else{var c=this.dashboards[this.index];this.$location.url("dashboard/"+c.uri),this.index++,this.cancelPromise=this.$timeout(function(){return a.next()},this.interval)}},a.prototype.prev=function(){this.index=Math.max(this.index-2,0),this.next()},a.prototype.start=function(a){var b=this;this.stop(),this.startUrl=window.location.href,this.index=0,this.playlistId=a,this.$rootScope.playlistSrv=this,this.backendSrv.get("/api/playlists/"+a).then(function(d){b.backendSrv.get("/api/playlists/"+a+"/dashboards").then(function(a){b.dashboards=a,b.interval=c["default"].interval_to_ms(d.interval),b.next()})})},a.prototype.stop=function(){this.index=0,this.playlistId=0,this.cancelPromise&&this.$timeout.cancel(this.cancelPromise),this.$rootScope.playlistSrv=null},a}(),b["default"].service("playlistSrv",d)}}});