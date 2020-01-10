sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, Filter, FilterOperator) {
	"use strict";
	return BaseController.extend("test.testui.testUiv2.controller.SplitAppView", {
		onInit: function () {
			var oViewModel;
			oViewModel = new JSONModel({
				busy: false,
				delay: 0,
				layout: "OneColumn",
				previousLayout: "",
				actionButtonsInfo: {
					midColumn: {
						fullScreen: false
					}
				}
			});
			this.setModel(oViewModel, "appView");
		}
	});
});