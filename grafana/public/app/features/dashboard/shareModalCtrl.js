/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","require","app/core/config"],function(a,b,c,d){"use strict";var e=a.module("grafana.controllers");e.controller("ShareModalCtrl",["$scope","$rootScope","$location","$timeout","timeSrv","templateSrv","linkSrv",function(b,c,e,f,g,h,i){b.options={forCurrent:!0,includeTemplateVars:!0,theme:"current"},b.editor={index:b.tabIndex||0},b.init=function(){b.modeSharePanel=!!b.panel,b.tabs=[{title:"Link",src:"shareLink.html"}],b.modeSharePanel?(b.modalTitle="Share Panel",b.tabs.push({title:"Embed",src:"shareEmbed.html"})):b.modalTitle="Share",b.dashboard.meta.isSnapshot||b.tabs.push({title:"Snapshot",src:"shareSnapshot.html"}),b.dashboard.meta.isSnapshot||b.modeSharePanel||b.tabs.push({title:"Export",src:"shareExport.html"}),b.buildUrl()},b.buildUrl=function(){var c=e.absUrl(),f=c.indexOf("?");f!==-1&&(c=c.substring(0,f));var j=a.copy(e.search()),k=g.timeRange();j.from=k.from.valueOf(),j.to=k.to.valueOf(),b.options.includeTemplateVars&&h.fillVariableValuesForUrl(j),b.options.forCurrent||(delete j.from,delete j.to),"current"!==b.options.theme&&(j.theme=b.options.theme),b.modeSharePanel?(j.panelId=b.panel.id,j.fullscreen=!0):(delete j.panelId,delete j.fullscreen),b.shareUrl=i.addParamsToUrl(c,j);var l=b.shareUrl;l=l.replace(d.appSubUrl+"/dashboard/",d.appSubUrl+"/dashboard-solo/"),l=l.replace("&fullscreen","").replace("&edit",""),b.iframeHtml='<iframe src="'+l+'" width="450" height="200" frameborder="0"></iframe>',b.imageUrl=l.replace(d.appSubUrl+"/dashboard-solo/",d.appSubUrl+"/render/dashboard-solo/"),b.imageUrl+="&width=1000",b.imageUrl+="&height=500"}}]),e.directive("clipboardButton",function(){return function(a,b){c(["vendor/zero_clipboard"],function(a){a.config({swfPath:d.appSubUrl+"/public/vendor/zero_clipboard.swf"}),new a(b[0])})}})});