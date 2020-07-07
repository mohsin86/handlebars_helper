# handlebars_helper

You Can do with this file:

1. Logical operator usage in handlebars Templat
2. Transform String to Upper Case and LowerCase
3. Debugging a Varialbe
4. for usage in logical syntax

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
7. degug
for debuging varible
```
{{debug scripts}}
```
8. #ifCond :
For Logical Comparison (==,===,!=,!==,<,<=,>,>=,&&,||)
Example: use your logical Operator instead of ||  
```
{{#ifCond aVariable '||' other Varialbe }} Somthing {{/ifCond}}
```


