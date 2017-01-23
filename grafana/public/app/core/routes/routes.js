/*! grafana - v4.0.2-1481203731 - 2016-12-08
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./dashboard_loaders","app/core/core_module","./bundle_loader"],function(a){function b(a,b){b.html5Mode(!0);var c=new d.BundleLoader("app/features/org/all"),e=new d.BundleLoader("app/features/plugins/all"),f=new d.BundleLoader("app/features/admin/admin"),g=new d.BundleLoader("app/features/alerting/all");a.when("/",{templateUrl:"public/app/partials/dashboard.html",controller:"LoadDashboardCtrl",reloadOnSearch:!1,pageClass:"page-dashboard"}).when("/dashboard/:type/:slug",{templateUrl:"public/app/partials/dashboard.html",controller:"LoadDashboardCtrl",reloadOnSearch:!1,pageClass:"page-dashboard"}).when("/dashboard-solo/:type/:slug",{templateUrl:"public/app/features/panel/partials/soloPanel.html",controller:"SoloPanelCtrl",reloadOnSearch:!1,pageClass:"page-dashboard"}).when("/dashboard/new",{templateUrl:"public/app/partials/dashboard.html",controller:"NewDashboardCtrl",reloadOnSearch:!1,pageClass:"page-dashboard"}).when("/dashboards/list",{templateUrl:"public/app/features/dashboard/partials/dash_list.html",controller:"DashListCtrl"}).when("/dashboards/migrate",{templateUrl:"public/app/features/dashboard/partials/migrate.html",controller:"DashboardImportCtrl"}).when("/datasources",{templateUrl:"public/app/features/plugins/partials/ds_list.html",controller:"DataSourcesCtrl",controllerAs:"ctrl",resolve:e}).when("/datasources/edit/:id",{templateUrl:"public/app/features/plugins/partials/ds_edit.html",controller:"DataSourceEditCtrl",controllerAs:"ctrl",resolve:e}).when("/datasources/new",{templateUrl:"public/app/features/plugins/partials/ds_edit.html",controller:"DataSourceEditCtrl",controllerAs:"ctrl",resolve:e}).when("/org",{templateUrl:"public/app/features/org/partials/orgDetails.html",controller:"OrgDetailsCtrl",resolve:c}).when("/org/new",{templateUrl:"public/app/features/org/partials/newOrg.html",controller:"NewOrgCtrl",resolve:c}).when("/org/users",{templateUrl:"public/app/features/org/partials/orgUsers.html",controller:"OrgUsersCtrl",controllerAs:"ctrl",resolve:c}).when("/org/apikeys",{templateUrl:"public/app/features/org/partials/orgApiKeys.html",controller:"OrgApiKeysCtrl",resolve:c}).when("/profile",{templateUrl:"public/app/features/org/partials/profile.html",controller:"ProfileCtrl",controllerAs:"ctrl",resolve:c}).when("/profile/password",{templateUrl:"public/app/features/org/partials/change_password.html",controller:"ChangePasswordCtrl",resolve:c}).when("/profile/select-org",{templateUrl:"public/app/features/org/partials/select_org.html",controller:"SelectOrgCtrl",resolve:c}).when("/admin",{templateUrl:"public/app/features/admin/partials/admin_home.html",controller:"AdminHomeCtrl",resolve:f}).when("/admin/settings",{templateUrl:"public/app/features/admin/partials/settings.html",controller:"AdminSettingsCtrl",resolve:f}).when("/admin/users",{templateUrl:"public/app/features/admin/partials/users.html",controller:"AdminListUsersCtrl",resolve:f}).when("/admin/users/create",{templateUrl:"public/app/features/admin/partials/new_user.html",controller:"AdminEditUserCtrl",resolve:f}).when("/admin/users/edit/:id",{templateUrl:"public/app/features/admin/partials/edit_user.html",controller:"AdminEditUserCtrl",resolve:f}).when("/admin/orgs",{templateUrl:"public/app/features/admin/partials/orgs.html",controller:"AdminListOrgsCtrl",resolve:f}).when("/admin/orgs/edit/:id",{templateUrl:"public/app/features/admin/partials/edit_org.html",controller:"AdminEditOrgCtrl",resolve:f}).when("/admin/stats",{templateUrl:"public/app/features/admin/partials/stats.html",controller:"AdminStatsCtrl",controllerAs:"ctrl",resolve:f}).when("/login",{templateUrl:"public/app/partials/login.html",controller:"LoginCtrl"}).when("/invite/:code",{templateUrl:"public/app/partials/signup_invited.html",controller:"InvitedCtrl"}).when("/signup",{templateUrl:"public/app/partials/signup_step2.html",controller:"SignUpCtrl"}).when("/user/password/send-reset-email",{templateUrl:"public/app/partials/reset_password.html",controller:"ResetPasswordCtrl"}).when("/user/password/reset",{templateUrl:"public/app/partials/reset_password.html",controller:"ResetPasswordCtrl"}).when("/dashboard/snapshots",{templateUrl:"public/app/features/snapshot/partials/snapshots.html",controller:"SnapshotsCtrl",controllerAs:"ctrl"}).when("/plugins",{templateUrl:"public/app/features/plugins/partials/plugin_list.html",controller:"PluginListCtrl",controllerAs:"ctrl",resolve:e}).when("/plugins/:pluginId/edit",{templateUrl:"public/app/features/plugins/partials/plugin_edit.html",controller:"PluginEditCtrl",controllerAs:"ctrl",resolve:e}).when("/plugins/:pluginId/page/:slug",{templateUrl:"public/app/features/plugins/partials/plugin_page.html",controller:"AppPageCtrl",controllerAs:"ctrl",resolve:e}).when("/styleguide/:page?",{controller:"StyleGuideCtrl",controllerAs:"ctrl",templateUrl:"public/app/features/styleguide/styleguide.html"}).when("/alerting",{redirectTo:"/alerting/list"}).when("/alerting/list",{templateUrl:"public/app/features/alerting/partials/alert_list.html",controller:"AlertListCtrl",controllerAs:"ctrl",resolve:g}).when("/alerting/notifications",{templateUrl:"public/app/features/alerting/partials/notifications_list.html",controller:"AlertNotificationsListCtrl",controllerAs:"ctrl",resolve:g}).when("/alerting/notification/new",{templateUrl:"public/app/features/alerting/partials/notification_edit.html",controller:"AlertNotificationEditCtrl",controllerAs:"ctrl",resolve:g}).when("/alerting/notification/:id/edit",{templateUrl:"public/app/features/alerting/partials/notification_edit.html",controller:"AlertNotificationEditCtrl",controllerAs:"ctrl",resolve:g}).otherwise({templateUrl:"public/app/partials/error.html",controller:"ErrorCtrl"})}b.$inject=["$routeProvider","$locationProvider"];var c,d;return{setters:[function(a){},function(a){c=a},function(a){d=a}],execute:function(){c["default"].config(b)}}});