var gallery;

(function() {
  gallery = {
    collection: [],
    cachTemplates: function() {
      var $photosTemplate = $('#photos').remove();
      var $photoInfoTemplate = $('#photo_information').remove();

      this.photosTemplate = Handlebars.compile($photosTemplate.html());
      this.photoInfoTemplate = Handlebars.compile($photoInfoTemplate.html());
    },
    retrievePhotos: function() {
      var photos;
      $.ajax({
        url: '/photos',
        context: this,
        success: function(data) {
          this.collection = data;
          this.renderPhotos();
          this.renderFirstPhotoInfo()
        },
      });
    },
    renderPhotos: function() {
      var $photos = $(this.photosTemplate({photos: this.collection}));
      $('#slides').html($photos);
    },
    renderFirstPhotoInfo: function() {
      var id = this.collection[0].id;
      this.renderPhotoInfo(id);
    },
    renderPhotoInfo: function(id) {
      var photo = this.collection.filter(function (item) {
        return item.id === id;
      })[0];
      var $photoInfo = $(this.photoInfoTemplate(photo));
      $('section > header').html($photoInfo);
    },
    init: function() {
      this.cachTemplates();
      this.retrievePhotos();
    }
  };
})();

$(gallery.init.bind(gallery));
