var manager = {
  collection: [],
  templates: {},
  Tags: function() {
    this.marketing = false;
    this.sales = false;
    this.engineering = false;
    this.other = false;
  },
  getTemplates: function() {
    var templateObj = {};
    var $templates = $('script[type="text/x-handlebars"]');
    $templates.each(function() {
      templateObj[$(this).attr('id')] = Handlebars.compile($(this).html());
    });

    return templateObj;
  },
  retrieveCollection: function() {
    var json = localStorage.getItem('contacts');
    return JSON.parse(json);
  },
  renderMain: function() {
    var html = this.templates.mainTemplate({contacts: this.collection, filterTags: new this.Tags()});
    $('main').html(html).hide().slideDown('slow');
  },
  matchTerm: function($el) {
    var term = $('#search').val().toLowerCase();
    return $el.find('h3').text().toLowerCase().indexOf(term) === 0;
  },
  matchTags: function($el) {
    var option = $('#filter').find(':selected').val();

    if (option === 'all') {
      return true;
    } else {
      return $el.find('span:contains("' + option +'")').length > 0;
    }
  },
  filter: function(e) {
    var $contacts = $('li');
    var self = this;
    $contacts.hide().filter(function() {
      return self.matchTerm($(this)) && self.matchTags($(this));
    }).show();
  },
  renderAddForm: function(e) {
    e.preventDefault();
    var $target = ($(e.target));
    var html = this.templates.formTemplate({tags: new this.Tags()});

    $('main').html(html).hide().slideDown('slow');
    $('form').off().on('submit', this.handleAddSubmit.bind(this));
  },
  handleAddSubmit: function(e) {
    e.preventDefault();

    this.addContact();
    this.renderMain();
  },
  renderEditForm: function(e) {
    e.preventDefault();

    var $contact = $(e.target).closest('li')
    var id = +$contact.attr('data-contact-id');
    var contact = this.getContact(id);
    var html = this.templates.formTemplate(contact);

    $('main').html(html).hide().slideDown('slow');
    $('form').off().on('submit', {contact: contact}, this.handleEditSubmit.bind(this));
  },
  handleEditSubmit: function(e) {
    e.preventDefault();
    var contact = e.data.contact;
    this.editContact(contact);
    this.renderMain();
  },
  addContact: function() {
    var $form = $('form');
    var contact = {};
    contact.id = this.setId();
    contact.name = $form.find('[name="name"]').val();
    contact.email = $form.find('[name="email"]').val();
    contact.phone = $form.find('[name="phone"]').val();
    contact.tags = new this.Tags();

    var $checkedTags = $form.find(':checked');
    $checkedTags.each(function() {
      contact.tags[$(this).attr('name')] = true;
    });

    this.collection.push(contact);
  },
  removeContact: function(e) {
    e.preventDefault();

    var $contact = $(e.target).closest('li')
    var id = +$contact.attr('data-contact-id');
    var contact = this.getContact(id);

    if (window.confirm('Delete contact?')) {
      this.collection.splice(this.collection.indexOf(contact), 1);
      $contact.remove();
    }

    if (this.collection.length === 0) {
      this.renderMain();
    }
  },
  getContact: function(id) {
    return this.collection.filter(function(obj) {
      return id === obj.id;
    })[0];
  },
  editContact: function(contact) {
    var $form = $('form');
    contact.id = this.setId();
    contact.name = $form.find('[name="name"]').val();
    contact.email = $form.find('[name="email"]').val();
    contact.phone = $form.find('[name="phone"]').val();
    contact.tags = new this.Tags();

    var $checkedTags = $form.find(':checked');
    $checkedTags.each(function() {
      contact.tags[$(this).attr('name')] = true;
    });
  },
  setId: function() {
    var highestId = this.collection.map(function(obj) {
      return obj.id;
    }).reduce(function(a, b) {
      return Math.max(a, b);
    }, 0);

    return highestId + 1;
  },
  storeCollection: function() {
    var json = JSON.stringify(this.collection);
    localStorage.setItem('contacts', json);
  },
  bind: function() {
    var $main = $('main');

    $main.on('keyup', '#search', this.filter.bind(this));
    $main.on('change', '#filter', this.filter.bind(this));

    $main.on('click', '.add', this.renderAddForm.bind(this));
    $main.on('click', '.delete', this.removeContact.bind(this));
    $main.on('click', '.edit', this.renderEditForm.bind(this));
    $main.on('click', '#cancel', function(e) {
      e.preventDefault();
      this.renderMain();
    }.bind(this));
    $(window).unload(this.storeCollection.bind(this));
  },
  init: function() {
    this.templates = this.getTemplates();
    this.collection =  this.retrieveCollection() || [];
    this.bind();
    this.renderMain();
  }
};

manager.init();