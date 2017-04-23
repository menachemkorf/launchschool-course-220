var tocLinks = document.querySelectorAll('#toc a');

for (var i = 0; i < tocLinks.length; i += 2) {
  tocLinks[i].style.color = 'green';
}