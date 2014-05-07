/* ==========================================================================

    Project: Project Template Test
    Author: XHTMLized.com
    Last updated: Tue May 06 2014 20:48:12

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
