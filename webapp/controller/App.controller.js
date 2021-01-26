sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/resource/ResourceModel',

], function(Controller, MessageToast, JSONModel, ResourceModel) {
  'use strict';

  return Controller.extend('sap.ui.demo.try.App', {

    onShowHello: function() {
      // read message from i18n Model
      const oBundle = this.getView().getModel('i18n').getResourceBundle();
      const sRecipient = this.getView().getModel().getProperty('/recipient/name');
      const sMsg = oBundle.getText('helloMsg', [sRecipient]);

      // Show message
      MessageToast.show(sMsg);
    },
  });
});