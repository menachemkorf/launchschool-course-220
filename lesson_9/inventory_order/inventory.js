var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    cacheTemplate: function() {
      var $template = $('#inventory_item').remove();
      this.template = $template.html();
    },
    setDate: function() {
      $('#order_date').text(new Date().toUTCString());
    },
    add: function(id) {
      var item = {
        id: id,
        name: '',
        stockNumber: '',
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(id) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== id;
      });
    },
    get: function(id) {
      var foundItem;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          foundItem = item;
          return false;
        }
      });

      return foundItem;
    },
    update: function($item) {
      var id = this.findID($item);
      var item = this.get(id);

      item.name = $item.find('[name^=item_name]').val();
      item.stockNumber = $item.find('[name^=item_stock_number]').val();
      item.quantity = $item.find('[name^=item_quantity]').val();

    },
    newItem: function() {
      this.lastId++;
      var item = this.add(this.lastId);
      var $item = $(this.template.replace(/ID/g, item.id));
      $('#inventory').append($item);
    },
    findParent: function(e) {
      return $(e.target).closest('tr');
    },
    findID: function($item) {
      return +$item.find('input:hidden').val();
    },
    deleteItem: function(e) {
      e.preventDefault();

      var $item = this.findParent(e).remove();
      this.remove(this.findID($item));
    },
    updateItem: function(e) {
      var $item = this.findParent(e);

      this.update($item);
    },
    bindEvents: function() {
      $('#add_item').on('click', this.newItem.bind(this));
      $('#inventory').on('click', '.delete', this.deleteItem.bind(this));
      $('#inventory').on('blur', ':input', this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  }
})();

$(inventory.init.bind(inventory));