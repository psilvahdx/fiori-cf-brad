sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController,JSONModel) {
	"use strict";

	return BaseController.extend("test.testUiv2.controller.DetailView", {

		onInit: function () {
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
				var oViewModel = new JSONModel({
				busy : false,
				delay : 0,
				lineItemListTitle : this.getResourceBundle().getText("detailLineItemTableHeading")
			});
			oRouter.getRoute("DetailView").attachPatternMatched(this._onObjectMatched, this);
			
			this.setModel(oViewModel, "detailView");
		},
		
		_onObjectMatched:function(oEvent){
			
			var sPath = oEvent.getParameter("arguments").ID,
				oTemplateTable = this.getView().byId("lineItemsList").getBindingInfo("items").template;
			
			this.getView().byId("objectheaderid").bindElement({path:"/".concat(sPath)});
			
			this.getView().byId("lineItemsList").bindItems(
				{path: "/".concat(sPath).concat("/products"), template: oTemplateTable});
			
		},
		onListUpdateFinished : function (oEvent) {
			var sTitle,
				iTotalItems = oEvent.getParameter("total"),
				oViewModel = this.getModel("detailView");

			if (this.byId("lineItemsList").getBinding("items").isLengthFinal()) {
				if (iTotalItems) {
					sTitle = this.getResourceBundle().getText("detailLineItemTableHeadingCount", [iTotalItems]);
				} else {
					sTitle = this.getResourceBundle().getText("detailLineItemTableHeading");
				}
				oViewModel.setProperty("/lineItemListTitle", sTitle);
			}
		},
		onNavBackPress: function (oEvent){
			
			this.getOwnerComponent().oListSelector.clearMasterListSelection();
			this.getRouter().navTo("MasterView");
		}
	
	});

});