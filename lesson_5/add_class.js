function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

var first = true;
walk(document, function(node) {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});
