 /*!
  * jquery.fancytree.bspopover.js
  *
  * Generated bootstrap popover
  * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
  *
  * Copyright (c) 2008-2016, Louis-Sébastien Gac Artigas
  * Released under the MIT license
  * https://github.com/LouisGac/fancytree-bootstrap-extensions
  *
  * @version 0.0.1
  * @date 2016-06-23
  */

  ;(function($, undefined) {
      "use strict";
      $.ui.fancytree.registerExtension({
          name: "bspopover",
          version: "0.0.1",
          options: {},                                                           // Options are provided in the bootstrap way, using element's data attributes

          /* We overload nodeRenderTitle to apply the popover plugin to each node*/
          nodeRenderTitle: function(ctx, title) {
             var node = ctx.node;
             this._superApply(arguments);

             // To respect the bootstrap way of doing, only element with data-toggle='popover' will use popover
             if (node.data.toggle=='popover')
             {
                 var options = [];

                 // @see: http://getbootstrap.com/javascript/#popover-options
                 options['animation'] = node.data.animation;
                 options['container'] = node.data.container;
                 options['content']   = node.data.container;
                 options['delay']     = node.data.delay;
                 options['html']      = node.data.html;
                 options['placement'] = node.data.placement;
                 options['selector']  = node.data.selector;
                 options['template']  = node.data.template;
                 options['title']     = node.data.title;
                 options['trigger']   = node.data.trigger;
                 options['viewport']  = node.data.viewport;

                 $("span.fancytree-title", node.span).popover(options);
             }

          }
      });
  }(jQuery));
