// Write a JavaScript Function that returns the p Elements in this DOM.

function findAllParagraphs() {
  var matches = [];

  var nodes = document.body.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeName === 'P') {
      matches.push(nodes[i]);
    }
  }

  return matches;
}

console.log(findAllParagraphs());