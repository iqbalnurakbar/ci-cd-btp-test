sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("btpdeploy.controller.View1", {
      onInit() {},
      sayHello: function () {
        MessageToast.show("Hello! Nice to meet you!");
      },
    });
  }
);
