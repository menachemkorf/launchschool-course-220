var h2 = document.querySelectorAll('h2');
var counts = [];
var words;

for (var i = 0; i < h2.length; i++) {
  words = h2[i].textContent.split(' ');
  counts.push(words.length);
}

console.log(counts);