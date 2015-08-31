angular.module('pokitPartners', [])
  .controller('PartnersController', function(Partners) {
    var ctrl = this;
    ctrl.selectPartner = function(partner) {
      if (partner && partner.id) {
        Partners.load(partner.id)
          .then(function success(res) {
            ctrl.currentPartner = res.data.data;
          }, errorHandler);
      }
    };
    ctrl.hidePartner = function() {
      ctrl.currentPartner = null;
    };
    Partners.load()
      .then(function success(res) {
        ctrl.data = res.data.data;
      }, errorHandler);

    function errorHandler(err) {
      ctrl.error = 'All is lost.';
      console.error(err);
    }
  });