// Write a JavaScript Function that returns the p Elements in this DOM.

function addClassToAllParagraphs() {
  var nodes = document.body.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeName === 'P') {
      nodes[i].classList.add('article-text');
    }
  }

  // return matches;
}

console.log(addClassToAllParagraphs());