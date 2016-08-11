var dom = (function () {
  var notFound = '404 not found';
  return {  remove: function (element) {
      if (!document.contains(element)) {
        return notFound;
      }
      element.parentNode.removeChild(element);
    },
    append: function (element, newElement) {
      element.appendChild(newElement);
    },
    prepend: function (element, newElement) {
      element.insertBefore(newElement, element.firstChild);
    },
    after: function (element, newElement) {
      if (!document.contains(element)) {
        return notFound;
      }
      element.parentNode.insertBefore(newElement, element.nextSibling);
    },

    before: function (element, newElement) {
      element.parentNode.insertBefore(newElement, element);
    },
    val: function (element) {
      return element.value;
    }
  };
})();
