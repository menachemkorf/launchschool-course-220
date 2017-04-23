function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

var words = [];

walk(document, function(node) {
  if (node.nodeName === 'P') {
    words.push(node.textContent.trim().split(' ')[0]);
  }
});

console.log(words);