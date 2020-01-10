sap.ui.define([
	"./BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("test.testui.testUiv2.controller.MasterView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf test.testui.testUiv2.view.MasterView
		 */
		onInit: function () {
			// access OData model declared in manifest.json file
			var oModel = this.getOwnerComponent().getModel("myModel");
			//set the model on view to be used by the UI controls
			this.getView().setModel(oModel);
			
		},
		onSelectionChange: function (oEvent) {
			
			var oItem = oEvent.getSource(),
				oCtx = oItem.getBindingContext(),
				sPath = oCtx.getPath().substr(1),
				oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("DetailView",{ID:sPath});
		},
		onSearch: function (oEvent){
		
			var aFilter = [],
				sQuery = oEvent.getParameter("query"),
				oFilter = new sap.ui.model.Filter("ID", FilterOperator.EQ, sQuery),
				oBinding = this.getView().byId("persontList").getBinding("items");
			
			aFilter.push(oFilter);
			if(sQuery){
				oBinding.filter(aFilter);
			}
			else{
				oBinding.filter([]);
			}
		}
	});

});