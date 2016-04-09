Shmodal = {
  // Set  default properties
  el: '',

  // Use this to reactively store the state of the modal
  state: new ReactiveDict(),

  // stacked callbacks
  cbStack: new CallbackStack(),
  /**
   * @summary Reset the state of the modal to its initial values
   */
  _resetState: function() {
    Shmodal.state.set({
      visible: false,
      template: null,
      data: {},
    });

    return this;
  },

  /**
   * @summary Toggle the modal visibility state
   */
  _toggleState: function(state) {
    Shmodal.state.set(!Shmodal.state.get(state));
    return this;
  },

    /**
   * @summary Set the default element for the modal
   */
  _setElement: function(overRide) {
    var id = overRide || 'shmodal';
    Shmodal.el = document.getElementById(id);
    return this;
  },


  /**
   * @summary Launch with a template and data
   * @param {Object} [args] template, data, callback, storedCallbacks
   */
  launch: function(args) {
    Shmodal.state.set({
      visible: true,
      template: args.templateName || '',
      data: args.data,
    });

    BackShadow.open('shmodalcover');

    if (args.storedCallbacks) {
      this.cbStack.store(args.storedCallbacks);
    }

    if (args.callback && typeof(args.callback) === 'function') {
      requestAnimationFrame(args.callback);
    }

    return this;
  },

  /**
   * @summary Close the cover up / modal
   */
  close: function(callback) {
    BackShadow.close('shmodalcover', callback);
    Shmodal.state.set('visible', false);
    if (callback && typeof(callback) === 'function') {
      requestAnimationFrame(callback);
    }

    // run stored callbacks
    Shmodal.cbStack.run();

    return this;
  },

  /**
   * @summary Reset the Modals state
   */
  reset: function(callback) {
    Shmodal._resetState();

    if (callback && typeof(callback) === 'function') {
      callback();
    }

    return this;
  },
};
