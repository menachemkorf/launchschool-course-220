function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

walk(document, function(node) {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});

