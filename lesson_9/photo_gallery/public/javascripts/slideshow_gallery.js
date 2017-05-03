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

  $.ajax({
    url: '/photos',
    success: function(json) {
      photos = json;
      renderPhotos();
      renderPhotoInformation(0);
      getCommentsFor(photos[0].id);
    }
  });

  function renderPhotos() {
    $('#slides').html(templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(idx) {
    $('section > header').html(templates.photo_information(photos[idx]));
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

  function getNextPhoto($photo) {
    var $photos = $('#slides figure');

    if ($photo.is(':last-child')) {
      return $photos.first();
    } else {
      return $photo.next();
    }
  }

  function getPreviousPhoto($photo) {
    var $photos = $('#slides figure');

    if ($photo.is(':first-child')) {
      return $photos.last();
    } else {
      return $photo.prev();
    }
  }

  function hidePhoto($photo) {
    $photo.fadeOut(500);
  }

  function showPhoto($photo) {
    $photo.delay(500).fadeIn(500);
  }

  function getIndex($newPhoto) {
    var photoIds = photos.map(function(item) {
      return item.id;
    });

    var dataId = +$newPhoto.attr('data-id');
    return photoIds.indexOf(+$newPhoto.attr('data-id'));
  }

  $('.prev').on('click', function(e) {
    e.preventDefault();

    var $oldPhoto = $('#slides figure').filter(':visible');
    var $newPhoto = getPreviousPhoto($oldPhoto);

    hidePhoto($oldPhoto);
    showPhoto($newPhoto);
    renderPhotoInformation(getIndex($newPhoto));
    getCommentsFor(+$newPhoto.attr('data-id'));
    console.log('clicked');

  });

  $('.next').on('click', function(e) {
    e.preventDefault();

    var $oldPhoto = $('#slides figure').filter(':visible');
    var $newPhoto = getNextPhoto($oldPhoto);

    hidePhoto($oldPhoto);
    showPhoto($newPhoto);
    renderPhotoInformation(getIndex($newPhoto));
    getCommentsFor(+$newPhoto.attr('data-id'));
  });
});