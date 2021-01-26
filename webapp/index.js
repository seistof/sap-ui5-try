sap.ui.define([
  'sap/ui/core/ComponentContainer',

], function(ComponentContainer) {
  'use strict';

  new ComponentContainer({
    name: 'sap.ui.demo.try',
    settings: {
      id: 'try',
    },
    async: true,
  }).placeAt('content');
});
