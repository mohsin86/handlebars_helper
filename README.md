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
1. #inArray:
Check if an item is in array
```
{{#inArray aVariable arrayVariable}} something {{/inArray}}
```
2. #ifValue
Equality check in
```
{{#ifValue aVariable SomeOtherVarialbe }} somthing {{/ifValueIsInHax}}
```

3. #isnt
Not Equal to
```
 {{#isnt aVariable 'NotThis'}} something {{/isnt}}
```

4. #ifValueIsInHax
Haxa Value checking
```
{{#ifValueIsInHax _id someId }} checked="checked" {{/ifValueIsInHax}}
```
5. #toUpperCase
To Uppercase a Word
```
{{toUpperCase aVariable}}
```

6. #capitalize
To capitalize a Word
```
{{capitalize aVariable}}
```

7. #toLowerCase
For toLowerCase
```
{{toLowerCase aVariable}}
```

