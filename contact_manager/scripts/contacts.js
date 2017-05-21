var Contact = {
  init: function(info) {
  this.id = info.id;
  this.name = info.name;
  this.email = info.email;
  this.phone = info.phone;
  this.tags = info.tags;
  return this;
  }
};

var Manager = {
  tags: ['family', 'work', 'friends','charity', 'other'],
  templates: {},
  cacheTemplates: function() {
    var self = this;
    var $templates = $('script[type="text/x-handlebars"]');
    $templates.each(function() {
      self.templates[$(this).attr('id')] = Handlebars.compile($(this).html());
    });
  },
  renderForm: function(e) {
    e.preventDefault()
    var $target = ($(e.target));
    var id = !$target.hasClass('add');
    if (!id) {
      $('main').html(this.templates.formTemplate({tags: this.tags}));
      $('form').on('submit', this.createContact.bind(this));
    } else {

    }

    $('form #cancel').on('click', this.renderMain.bind(this));
  },
  renderMain: function() {
    $('main').html(this.templates.mainTemplate({contacts: this.collection}));
    this.bind();
  },
  setId: function() {
    var highestId = this.collection.map(function(obj) {
      return obj.id;
    }).reduce(function(a, b) {
      return Math.max(a, b);
    }, 0);

    return highestId + 1;
  },
  mapFormToObject: function(e) {
    var $form = $(e.target);
    var contact = {};

    var fields = $form.serializeArray();
    fields.forEach(function(field, idx) {
      contact[field.name] = field.value;
    });

    contact.tags = [];
    var $checkboxes = $form.find(':checked');
    $checkboxes.each(function() {
      contact.tags.push($(this).attr('name').replace('tag-', ''));
    });

    return contact;
  },
  deleteContact: function(e) {
    e.preventDefault();
    var $contact = $(e.target).closest('li')
    var id = +$contact.attr('data-contact-id');
    var contact = this.collection.filter(function(obj) {
      return id === obj.id;
    })[0];

    if (window.confirm('Delete contact?')) {
      this.collection.splice(this.collection.indexOf(contact), 1);
      $contact.remove();
    }
  },
  createContact: function(e) {
    e.preventDefault();
    var contact = this.mapFormToObject(e);
    contact.id = this.setId();
    contact = Object.create(Contact).init(contact);
    this.collection.push(contact);
    this.renderMain();
  },
  bind: function() {
    $('.add').on('click', this.renderForm.bind(this));
    $('main').on('click', '.delete', this.deleteContact.bind(this));
  },
  initializeCollection: function() {
    var ls = localStorage.getItem('contacts');
    var collection = JSON.parse(ls) || [];
    return collection;
  },
  storeCollection: function() {
    var json = JSON.stringify(this.collection);
    localStorage.setItem('contacts', json);
  },
  init: function() {
    this.collection = this.initializeCollection();
    this.cacheTemplates();
    this.renderMain();
    $(window).on('unload', this.storeCollection.bind(this));
    return this;
  }
};


var app = Object.create(Manager).init();
