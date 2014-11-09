// The views
var view1 = document.getElementById('view-1'),
    view2 = document.getElementById('view-2'),
    view3 = document.getElementById('view-3'),
    view4 = document.getElementById('view-4'),
    view5 = document.getElementById('view-5'),
    view6 = document.getElementById('view-6');


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
