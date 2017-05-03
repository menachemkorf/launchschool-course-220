$(function() {
  var templates = {};
  var photos;

  $('script[type="text/x-handlebars"]').each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr('id')] = Handlebars.compile($tmpl.html());
  });

  $('[data-type="partial"]').each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr('id'), $partial.html());
  });

  var slideshow = {
    $el: $('#slideshow'),
    duration: 500,
    prevSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find('figure:visible');
      var $prev = $current.prev('figure');

      if (!$prev.length) {
        $prev = this.$el.find('figure').last();
      }

      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      this.renderPhotoContent($prev.attr('data-id'));
    },
    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find('figure:visible');
      var $next = $current.next('figure');

      if (!$next.length) {
        $next = this.$el.find('figure').first();
      }

      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      this.renderPhotoContent($next.attr('data-id'));
    },
    renderPhotoContent: function(id) {
      $('[name=photo_id]').val(id);
      renderPhotoInformation(+id);
      getCommentsFor(id);
    },
    bind: function() {
      this.$el.find('a.prev').on('click', this.prevSlide.bind(this));
      this.$el.find('a.next').on('click', this.nextSlide.bind(this));
    },
    init: function() {
      this.bind();
    }
  };

  $.ajax({
    url: '/photos',
    success: function(json) {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      slideshow.init();
      getCommentsFor(photos[0].id);
    }
  });

  // function updateLike(id, total) {
  //   var photo = photos.filter(function(item) {
  //     return item.id === id;
  //   })[0];
  //   photo.likes = total;
  // }

  // function updateFavorite(id, total) {
  //   var photo = photos.filter(function(item) {
  //     return item.id === id;
  //   })[0];
  //   photo.favorites = total;
  // }

  // function likePhoto(e) {
  //   e.preventDefault();
  //   var id = $(this).attr('data-id');

  //   $.ajax({
  //     url: '/photos/like',
  //     method: 'POST',
  //     data: {photo_id: id},
  //     success: function(res) {
  //       updateLike(+id, res.total);
  //       renderPhotoInformation(+id);
  //     }
  //   });
  // }

  // function favoritePhoto(e) {
  //   e.preventDefault();
  //   var id = $(this).attr('data-id');

  //   $.ajax({
  //     url: '/photos/favorite',
  //     method: 'POST',
  //     data: {photo_id: id},
  //     success: function(res) {
  //       updateFavorite(+id, res.total);
  //       renderPhotoInformation(+id);
  //     }
  //   });
  // }

  $('section > header').on('click', '.actions a', function(e) {
    e.preventDefault();
    var $e = $(e.target);

    $.ajax({
      url: $e.attr('href'),
      type: 'post',
      data: {photo_id: $e.attr('data-id')},
      success: function(json) {
        $e.text(function(i, txt) {
          return txt.replace(/\d+/, json.total);
        });
      }
    });
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    var $f = $(this);

    var data = $f.serialize();
    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        console.log(json);
        $('#comments ul').append(templates.comment(json));
      }
    });
  });

  function renderPhotos() {
    $('#slides').html(templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(id) {
    var photo = photos.filter(function(item) {
      return item.id === id;
    })[0];
    $('section > header').html(templates.photo_information(photo));
  }

  function getCommentsFor(id) {
    $.ajax({
      url: 'comments',
      data: 'photo_id=' + id,
      success: function(json) {
        $('#comments ul').html(templates.comments({comments: json}));
      }
    });
  }
});