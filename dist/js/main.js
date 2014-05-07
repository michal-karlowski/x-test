/* ==========================================================================

    Project: Project Template Test
    Author: XHTMLized.com
    Last updated: Wed May 07 2014 21:41:00

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.feature1();
      // App.feature2();
    },

    /**
     * Custom feature 1
     */
    feature1: function() {
      $(".group1").colorbox({
        rel: 'group1'
      });
    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
