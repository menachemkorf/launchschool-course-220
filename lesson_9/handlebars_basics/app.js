var posts = [{
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <strong>dicta</strong> sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: ['html', 'css', 'js', 'jquery']
},{
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <strong>dicta</strong> sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: []
}];

$(function() {
  var postTemplate = Handlebars.compile($('#post').html());
  var tagTemplate = Handlebars.compile($('#tag').html());

  Handlebars.registerPartial('tagTemplate', $('#tag').html());
  $('body').html(postTemplate({posts: posts}));
});
