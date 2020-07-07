# handlebars_helper

Register:
=============
register helpers for .hbs template like this

```
app.engine('.hbs', exphbs({
    .....,
    .....,
    helpers:  require('link_to_the_file').helpers
}));

```
Usage:
=============

1. 
