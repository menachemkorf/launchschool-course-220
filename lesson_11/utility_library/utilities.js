(function() {

  var findObjs = function(element, props, multiple) {
    var match = multiple ? [] : undefined;

    element.some(function(obj) {
      var allMatched = true;
      for (prop in props) {
        if (!(prop in obj) || obj[prop] !== props[prop]) {
          allMatched = false;
        }
      }

      if (allMatched) {
        if (multiple) {
          match.push(obj);
        } else {
          match = obj;
          return true;
        }
      }
    });

    return match;
  }

  var _ = function(element) {
    var u = {
      first: function() {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function() {
        var newArr = [];
        var args = Array.prototype.slice.call(arguments);

        element.forEach(function(el) {
          if (args.indexOf(el) === -1) {
            newArr.push(el);
          }
        });

        return newArr;
      },
      lastIndexOf: function(search) {
        var idx = -1;

        for (var i = element.length - 1; i >= 0; i--) {
          if (element[i] === search) {
            idx = i;
            break;
          }
        }

        return idx;
      },
      sample: function(qty) {
        var sampled = [];
        var copy = element.slice();
        var get = function() {
          var idx = Math.floor(Math.random() * copy.length)
          var el = copy[idx];
          copy.splice(idx, 1);
          return el;
        }

        if (!qty) {
          return get();
        }

        while(qty) {
          sampled.push(get());
          qty--;
        }

        return sampled;
      },
      findWhere: function(props) {
        return findObjs(element, props, false);
      },
      where: function(props) {
        return findObjs(element, props, true);
      },
      pluck: function(key) {
        var values = [];

        element.forEach(function(obj) {
          if (obj[key]) {
            values.push(obj[key]);
          }
        });
        return values;
      },
      keys: function() {
        var keys = [];
        for (prop in element) {
          keys.push(prop);
        }

        return keys;
      },
      values: function() {
        var values = [];
        for (prop in element) {
          values.push(element[prop]);
        }

        return values;
      },
      pick: function() {
        var args = [].slice.call(arguments);
        var newObj = {};

        args.forEach(function(prop) {
          if (prop in element) {
            newObj[prop] = element[prop];
          }
        });

        return newObj;
      },
      omit: function() {
        var args = [].slice.call(arguments);
        var newObj = {};

        for (var prop in element) {
          if (args.indexOf(prop) === -1) {
            newObj[prop] = element[prop];
          }
        }

        return newObj;
      },
      has: function(prop) {
        return {}.hasOwnProperty.call(element, prop);
      }
    };

    (['isElement', 'isArray', 'isObject', 'isFunction', 'isBoolean', 'isString', 'isNumber']).forEach(function(method) {
      u[method] = function() {
        return _[method].call(u, element);
      };
    });

    return u;
  };

  _.range = function(start, stop) {
    var newArr = [];

    if (stop === undefined) {
      stop = start;
      start = 0
    }

    for (var i = start; i < stop; i++) {
      newArr.push(i);
    }
    return newArr;
  };

  _.extend = function() {
    var args = [].slice.call(arguments);
    var oldObj = args.pop();
    var newObj = args[args.length - 1];

    for (var prop in oldObj) {
      newObj[prop] = oldObj[prop];
    }

    return args.length === 1 ? newObj : _.extend.apply(null, args);
  };

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1;
  };

  _.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  _.isFunction = function(obj) {
    var type = typeof obj;
    return type === 'function';
  };

  _.isBoolean = function(obj) {
    return toString.call(obj) === '[object Boolean]';
  };

  _.isString = function(obj) {
    return toString.call(obj) === '[object String]';
  };

  _.isNumber = function(obj) {
    return toString.call(obj) === '[object Number]';
  }

  window._ = _;

})();

_()