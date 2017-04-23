// Write a JavaScript function that extracts this information from the web page and returns an Object with the ranks as keys and the specific groups as values.

// representation on page:
//    rank name: first 'td' in 'tr' + ':'
//    value: second/last 'td' in same 'tr'

// Algorithm:
//    define an array with rank names
//    define empty object
//    get all the 'tr's within the '.biota' box
//    loop through and thr 'tr's
//        on each step check if the first 'td' + ':' is in the keays array
//            add it as a key to the object with the textContent of the last 'td' as the 'value'
//



var keys = ['Kingdom', 'Phylum', 'Class', 'Order', 'Suborder', 'Family', 'Genus', 'Species'];
var obj = {};
var dataTerm;
var index;

var trs = document.querySelectorAll('.biota tr');

for (var i = 0; i < trs.length; i++) {
  dataTerm = trs[i].firstElementChild.textContent.trim()
  index = keys.indexOf(dataTerm.slice(0, -1))
  if (index >= 0) {
    obj[keys[index]] = trs[i].lastElementChild.textContent;
  }

  // console.log(dataTerm.slice(0, -1));
}

console.log(obj);


