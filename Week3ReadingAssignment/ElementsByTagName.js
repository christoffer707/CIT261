
    // Your code here.
    function byTagName(node, tagName) {
      var add = [];
      tagName = tagName.toUpperCase();
      function find(node) {
        for (var i = 0; i < node.childNodes.length; i++) {
          var next = node.childNodes[i];
          if (next.nodeType == document.ELEMENT_NODE) {
            if (next.nodeName == tagName)
              add.push(next);
            find(next);
          }
        }
      }
      find(node);
      return add;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2