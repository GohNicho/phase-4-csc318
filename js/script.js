// For showing/hiding elements
Element.prototype.show = function() {
  this.style.display = 'block';
};

Element.prototype.hide = function() {
  this.style.display = 'none';
};


// The views
var view1 = document.getElementById('view-1'),
    view2 = document.getElementById('view-2'),
    view3 = document.getElementById('view-3'),
    view4 = document.getElementById('view-4'),
    view5 = document.getElementById('view-5'),
    view6 = document.getElementById('view-6');

// Hide all views
function hideViews() {
  view1.hide();
  view2.hide();
  view3.hide();
  view4.hide();
  view5.hide();
  view6.hide();
}

Element.prototype.showView = function(view) {
  this.onclick = function() {
    hideViews();
    view.show();
  }
};


// Initial view
view1.show();


// View 1 (main)
document.getElementById('view-1-add').showView(view2);

document.getElementById('view-1-reminders').showView(view6);


// View 2 (add)
document.getElementById('view-2-add-blood').showView(view3);

document.getElementById('view-2-add-food').showView(view5);

document.getElementById('view-2-add-exercise').showView(view4);


// View 3-5 (input data)
document.getElementById('view-3-cancel').showView(view1);
document.getElementById('view-3-done').showView(view1);
document.getElementById('view-4-cancel').showView(view1);
document.getElementById('view-4-done').showView(view1);
document.getElementById('view-5-cancel').showView(view1);
document.getElementById('view-5-done').showView(view1);


// View 6 (reminders)
document.getElementById('view-6-glucose').showView(view1);
