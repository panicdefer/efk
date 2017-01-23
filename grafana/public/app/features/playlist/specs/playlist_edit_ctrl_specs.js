/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../playlist_edit_ctrl","test/lib/common"],function(a){var b,c;return{setters:[function(a){c=a},function(a){b=a}],execute:function(){b.describe("PlaylistEditCtrl",function(){var a;b.beforeEach(function(){a=new c.PlaylistEditCtrl(null,null,null,null,{current:{params:{}}}),a.dashboardresult=[{id:2,title:"dashboard: 2"},{id:3,title:"dashboard: 3"}],a.tagresult=[{term:"graphite",count:1},{term:"nyc",count:2}]}),b.describe("searchresult returns 2 dashboards, ",function(){b.it("found dashboard should be 2",function(){b.expect(a.dashboardresult.length).to.be(2)}),b.it("filtred result should be 2",function(){a.filterFoundPlaylistItems(),b.expect(a.filteredDashboards.length).to.be(2),b.expect(a.filteredTags.length).to.be(2)}),b.describe("adds one dashboard to playlist, ",function(){b.beforeEach(function(){a.addPlaylistItem({id:2,title:"dashboard: 2"}),a.addTagPlaylistItem({term:"graphite"}),a.filterFoundPlaylistItems()}),b.it("playlistitems should be increased by one",function(){b.expect(a.playlistItems.length).to.be(2)}),b.it("filtred playlistitems should be reduced by one",function(){b.expect(a.filteredDashboards.length).to.be(1),b.expect(a.filteredTags.length).to.be(1)}),b.it("found dashboard should be 2",function(){b.expect(a.dashboardresult.length).to.be(2)}),b.describe("removes one dashboard from playlist, ",function(){b.beforeEach(function(){a.removePlaylistItem(a.playlistItems[0]),a.removePlaylistItem(a.playlistItems[0]),a.filterFoundPlaylistItems()}),b.it("playlistitems should be increased by one",function(){b.expect(a.playlistItems.length).to.be(0)}),b.it("found dashboard should be 2",function(){b.expect(a.dashboardresult.length).to.be(2),b.expect(a.filteredDashboards.length).to.be(2),b.expect(a.filteredTags.length).to.be(2),b.expect(a.tagresult.length).to.be(2)})})})})})}}});