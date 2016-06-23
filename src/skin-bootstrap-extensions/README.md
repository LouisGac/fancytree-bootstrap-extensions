# NOTE: 

This less file is based on the original : [skin-bootstrap-n](https://github.com/mar10/fancytree/tree/master/src/skin-bootstrap-n)

It removes the white space definition to avoid long text to exceed the tooltip,
and it force the overflow attribute of fancytree container to 'visible'for the popover
It just add :



It just add :
```css
ul.fancytree-container .tooltip-inner { white-space: normal;}
ul.fancytree-container {overflow: visible;}
```
