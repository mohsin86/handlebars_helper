// HOME_URL is a global variable

const {SITE_URL} = ''
var register = function(Handlebars) {
    var helpers = {
        inc: function(value, options) {
            return parseInt(value) + 1;
        },
        ifValue: function(var1, var2, options) {
            if (var1 === var2) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        },
        ifValueIsInHax: function(var1, var2, options) {
            let arg1 = parseInt(var1, 16);
            let arg2 = parseInt(var2, 16);
            if (arg1 === arg2) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        },
        toUpperCase: function(str, options){
            return str.toUpperCase();
        },
        toLowerCase: function(str, options){
            return str.toLowerCase();
        },
        capitalize: function(str, options){
            return str;
           // return str.charAt(0).toUpperCase() + str.slice(1);
        },
        debug: function(option){
            console.log('Current Context');
            console.log('====================');
            console.log(this);
            if (option) {
                console.log('Value');
                console.log('====================');
                console.log(option);
            }
        },
        inArray:function(elem, list, options){
            if(list.indexOf(elem) > -1) {
                return options.fn(this);
            }
            return options.inverse(this);
        },
        SITE_URL: SITE_URL,
        copyright:new Date().getFullYear(),
        ifCond:function (v1, operator, v2, options) {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                case '!=':
                    return (v1 != v2) ? options.fn(this) : options.inverse(this);
                case '!==':
                    return (v1 !== v2) ? options.fn(this) : options.inverse(this);
                case '<':
                    return (v1 < v2) ? options.fn(this) : options.inverse(this);
                case '<=':
                    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                case '>':
                    return (v1 > v2) ? options.fn(this) : options.inverse(this);
                case '>=':
                    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                case '&&':
                    return (v1 && v2) ? options.fn(this) : options.inverse(this);
                case '||':
                    return (v1 || v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        }
    };

    if (Handlebars && typeof Handlebars.registerHelper === 'function') {
        for (var prop in helpers) {
            Handlebars.registerHelper(prop, helpers[prop]);
        }
    } else {
        return helpers;
    }

};

module.exports.register = register;
module.exports.helpers = register(null);
