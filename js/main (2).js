

jQuery.fn.extend({
    check: function() {
        
      return this.each(function() { this.checked = true; });
    },
    uncheck: function() {
      return this.each(function() { this.checked = false; });
    }
  })

  jQuery.extend({
    min: function(a, b) { return a < b ? a : b; },
    max: function(a, b) { return a > b ? a : b; }
  });