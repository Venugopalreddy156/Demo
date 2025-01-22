sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,MessageBox) => {
    "use strict";

    return Controller.extend("zhcp.controller.View1", {
        onInit() {
        },
        messagebox:function(){
           MessageBox.success("Success Message");
        }
    });
});