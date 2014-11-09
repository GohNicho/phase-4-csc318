// For showing/hiding elements
Element.prototype.show = function() {
  this.style.display = 'block';
};

Element.prototype.hide = function() {
  this.style.display = 'none';
};


// Hide all views
function hideViews() {
  // Each screen (or view) is a direct child of the ".views" element
  var views = document.querySelectorAll('.views > div');
  for (i = 0; i < views.length; i++) {
    views[i].hide();
  }
}


// Sets this element's onclick event to show the specified view
Element.prototype.showView = function(view) {
  this.onclick = function() {
    hideViews();
    view.show();
  };
};


// Shortcuts
HTMLDocument.prototype.getId = function(id) {
  return document.getElementById(id);
}
