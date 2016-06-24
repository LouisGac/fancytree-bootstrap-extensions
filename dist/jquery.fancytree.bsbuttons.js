/*!
 * jquery.fancytree.bsbuttons.js
 *
 * Generat bootstrap buttons for nodes
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2008-2016, Louis-Sébastien Gac Artigas
 * Released under the MIT license
 * https://github.com/LouisGac/fancytree-bootstrap-extensions
 *
 * @version 0.0.1
 * @date 2016-06-24
 */

 ;(function($, undefined) {
     "use strict";
     $.ui.fancytree.registerExtension({
         name: "bsbuttons",
         version: "0.0.A",

         /* We overload nodeRenderTitle to apply the tooltip plugin to each node*/
         nodeRenderTitle: function(ctx, title) {
            var node = ctx.node;
            this._superApply(arguments);

            if (node.data.buttonlinks)
            {
                $.each( node.data.buttonlinks, function( key, button ){

                    var buttonHtml = '<a href="'+button.url+'" role="button"';

                    if (button.cssclasses)
                    {
                        buttonHtml += ' class="'+button.cssclasses+'"';
                    }
                    else
                    {
                        buttonHtml += ' class="btn btn-xs btn-default" ';
                    }

                    if (button.toggle)
                    {
                        buttonHtml += ' data-toggle="'+button.toggle+'"';
                    }

                    if (button.placement)
                    {
                        buttonHtml += ' data-placement="'+button.placement+'"';
                    }

                    if (button.title)
                    {
                        buttonHtml += ' title="'+button.title+'"';
                    }

                    buttonHtml += '>';

                    if (button.icon)
                    {
                        buttonHtml += '<span class="'+button.icon+'"></span>';
                    }

                    if (button.buttontext)
                    {
                        buttonHtml += button.buttontext;
                    }

                    buttonHtml += '</a>';

                    var $elButton = $(buttonHtml);

                    $("span.fancytree-title", node.span).append(' ').append( $elButton );

                    if (button.toggle=='tooltip')
                    {
                        $elButton.tooltip();
                    }

                    if (button.toggle=='popover')
                    {
                        $elButton.popover();
                    }

                } );
            }
         }
     });
 }(jQuery));
