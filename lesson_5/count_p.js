function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

var count = 0;


walk(document, function(node) {
  if (node.nodeName === 'P') {
    count++;
  }
});

console.log(count);