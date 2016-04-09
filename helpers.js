if (Meteor.isClient) {
  Template.Shmodal.onRendered(function() {
    Shmodal._setElement();
  });

  Template.Shmodal.helpers({
    state: function() {
      return Shmodal.state.get('visible') ? 'open' : 'closed';
    },
    modalTemplate: function() {
      return Shmodal.state.get('template');
    },
    modalData: function() {
      return Shmodal.state.get('data');
    },
    showCloseButton: function() {
      return Shmodal.state.get('showCloseButton');
    },
    noClose: function() {
      return Shmodal.state.get('noClose');
    }
  });

  Template.Shmodal.events({
    'click .close, click .panelclose': function(event, tempalte) {
      event.preventDefault();
      requestAnimationFrame(function() {
        Shmodal.close(false, function() {
          Shmodal.reset();
        });
      });
    }
  });
}