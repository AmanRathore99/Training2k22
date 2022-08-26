window.onload = function () {
  var faqs = $("faqs");
  var h2Eelements = faqs.getElementsByTagName("h2");

  var h2Node;
  for (var i = 0; i < h2Eelements.length; i++) {
    h2Node = h2Eelements[i];

    h2Node.onclick = function () {
      var h2 = this;
      if (h2.getAttribute("class") == "plus") {
        h2.setAttribute("class", "minus");
      } else {
        h2.setAttribute("class", "plus");
      }
      if (h2.nextElementSibling.getAttribute("class") == "closed") {
        h2.nextElementSibling.setAttribute("class", "open");
      } else {
        h2.nextElementSibling.setAttribute("class", "closed");
      }
    };
  }
};
var $ = function (id) {
  return document.getElementById(id);
};
