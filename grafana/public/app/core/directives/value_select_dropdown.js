/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","../core_module"],function(a,b,c){"use strict";c["default"].controller("ValueSelectDropdownCtrl",["$q",function(a){var c=this;c.show=function(){c.oldVariableText=c.variable.current.text,c.highlightIndex=-1,c.options=c.variable.options,c.selectedValues=b.filter(c.options,{selected:!0}),c.tags=b.map(c.variable.tags,function(a){var d={text:a,selected:!1};return b.each(c.variable.current.tags,function(b){b.text===a&&(d=b)}),d}),c.search={query:"",options:c.options.slice(0,Math.min(c.options.length,1e3))},c.dropdownVisible=!0},c.updateLinkText=function(){var a=c.variable.current;if(a.tags&&a.tags.length){var d=b.filter(c.variable.options,function(c){if(!c.selected)return!1;for(var d=0;d<a.tags.length;d++){var e=a.tags[d];if(b.indexOf(e.values,c.value)!==-1)return!1}return!0}),e=b.map(d,"text");c.linkText=e.join(" + "),c.linkText.length>0&&(c.linkText+=" + ")}else c.linkText=c.variable.current.text},c.clearSelections=function(){b.each(c.options,function(a){a.selected=!1}),c.selectionsChanged(!1)},c.selectTag=function(d){d.selected=!d.selected;var e;e=d.values?a.when(d.values):c.getValuesForTag({tagKey:d.text}),e.then(function(a){d.values=a,d.valuesText=a.join(" + "),b.each(c.options,function(a){b.indexOf(d.values,a.value)!==-1&&(a.selected=d.selected)}),c.selectionsChanged(!1)})},c.keyDown=function(a){27===a.keyCode&&c.hide(),40===a.keyCode&&c.moveHighlight(1),38===a.keyCode&&c.moveHighlight(-1),13===a.keyCode&&(0===c.search.options.length?c.commitChanges():c.selectValue(c.search.options[c.highlightIndex],{},!0,!1)),32===a.keyCode&&c.selectValue(c.search.options[c.highlightIndex],{},!1,!1)},c.moveHighlight=function(a){c.highlightIndex=(c.highlightIndex+a)%c.search.options.length},c.selectValue=function(a,d,e,f){if(a){a.selected=!a.selected,e=e||!1,f=f||!1;var g=function(d){b.each(c.options,function(b){a!==b&&(b.selected=d)})};e&&(a.selected=!0),"All"===a.text||f?(g(!1),e=!0):c.variable.multi?(d.ctrlKey||d.metaKey||d.shiftKey)&&(e=!0,g(!1)):(g(!1),e=!0),c.selectionsChanged(e)}},c.selectionsChanged=function(a){c.selectedValues=b.filter(c.options,{selected:!0}),c.selectedValues.length>1&&"All"===c.selectedValues[0].text&&(c.selectedValues[0].selected=!1,c.selectedValues=c.selectedValues.slice(1,c.selectedValues.length)),b.each(c.tags,function(a){a.selected&&b.each(a.values,function(d){b.find(c.selectedValues,{value:d})||(a.selected=!1)})}),c.selectedTags=b.filter(c.tags,{selected:!0}),c.variable.current.value=b.map(c.selectedValues,"value"),c.variable.current.text=b.map(c.selectedValues,"text").join(" + "),c.variable.current.tags=c.selectedTags,c.variable.multi||(c.variable.current.value=c.selectedValues[0].value),a&&c.commitChanges()},c.commitChanges=function(){0===c.search.options.length&&c.search.query.length>0?c.variable.current={text:c.search.query,value:c.search.query}:0===c.selectedValues.length&&(c.options[0].selected=!0,c.selectionsChanged(!1)),c.dropdownVisible=!1,c.updateLinkText(),c.variable.current.text!==c.oldVariableText&&c.onUpdated()},c.queryChanged=function(){c.highlightIndex=-1,c.search.options=b.filter(c.options,function(a){return a.text.toLowerCase().indexOf(c.search.query.toLowerCase())!==-1}),c.search.options=c.search.options.slice(0,Math.min(c.search.options.length,1e3))},c.init=function(){c.selectedTags=c.variable.current.tags||[],c.updateLinkText()}}]),c["default"].directive("valueSelectDropdown",["$compile","$window","$timeout","$rootScope",function(b,c,d,e){return{scope:{variable:"=",onUpdated:"&",getValuesForTag:"&"},templateUrl:"public/app/partials/valueSelectDropdown.html",controller:"ValueSelectDropdownCtrl",controllerAs:"vm",bindToController:!0,link:function(b,f){function g(){l.css("width",Math.max(k.width(),80)+"px"),l.show(),k.hide(),l.focus(),d(function(){j.on("click",i)},0,!1)}function h(){l.hide(),k.show(),j.off("click",i)}function i(a){0===f.has(a.target).length&&b.$apply(function(){b.vm.commitChanges()})}var j=a.element(c.document.body),k=f.find(".variable-value-link"),l=f.find("input");b.$watch("vm.dropdownVisible",function(a){a?g():h()});var m=e.$on("template-variable-value-updated",function(){b.vm.updateLinkText()});b.$on("$destroy",function(){m()}),b.vm.init()}}}])});