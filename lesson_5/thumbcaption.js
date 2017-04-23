var thumbCaptions = document.querySelectorAll('.thumbcaption');
var contents = [];
for (var i = 0; i < thumbCaptions.length; i++) {
  contents.push(thumbCaptions[i].textContent.trim());
}

console.log(contents);