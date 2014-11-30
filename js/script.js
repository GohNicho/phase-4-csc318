var vHome = document.getId('home');

// Tutorial
var vTut1 = document.getId('tutorial-1');
vTut1.show();

// Tutorial exit button
var skips = document.getElementsByClassName('tutorial-exit');
for (i = 0; i < skips.length; i++) {
  skips[i].showView(vHome);
}

// Tutorial next buttons
document.getId('tutorial-1-next').showView(document.getId('tutorial-2'));
document.getId('tutorial-2-next').showView(document.getId('tutorial-3'));
document.getId('tutorial-3-next').showView(document.getId('tutorial-4'));
document.getId('tutorial-4-next').showView(document.getId('tutorial-5'));
document.getId('tutorial-5-next').showView(document.getId('tutorial-6'));
document.getId('tutorial-6-next').showView(document.getId('tutorial-7'));
document.getId('tutorial-7-next').showView(document.getId('tutorial-8'));
document.getId('tutorial-8-next').showView(document.getId('tutorial-9'));
document.getId('tutorial-9-next').showView(document.getId('tutorial-10'));
document.getId('tutorial-10-next').showView(document.getId('tutorial-11'));
document.getId('tutorial-11-next').showView(document.getId('tutorial-12'));
document.getId('tutorial-12-next').showView(document.getId('tutorial-13'));


// Home page
document.getId('home-add-button').showView(document.getId('home-add'));
document.getId('home-instructions-button').showView(document.getId('home-instructions'));
document.getId('home-instructions-tutorial').showView(vTut1);
document.getId('home-instructions-close').showView(vHome);
document.getId('home-trends-button').showView(document.getId('glucose-trends'));

// Home add menu
document.getId('home-add-close').showView(vHome);
document.getId('home-add-glucose').showView(document.getId('input-glucose'));
document.getId('home-add-meal').showView(document.getId('input-food'));
document.getId('home-add-exercise').showView(document.getId('input-exercise'));

// Home menu
document.getId('home-menu-settings').showView(document.getId('settings'))
document.getId('home-menu-reminders').showView(document.getId('reminders-day'))

// Glucose trends
document.getId('glucose-trends-back').showView(vHome);

// Settings
document.getId('settings-back').showView(vHome);

// Input
// Input cancel/done buttons
var inputActions = document.getElementsByClassName('input-action');
for (i = 0; i < inputActions.length; i++) {
  inputActions[i].showView(vHome);
}

document.getId('input-glucose-back').showView(vHome);
document.getId('input-glucose-time-button').showView(document.getId('input-glucose-time'));
document.getId('input-glucose-date-button').showView(document.getId('input-glucose-date'));
document.getId('input-glucose-time-done').showView(document.getId('input-glucose'));
document.getId('input-glucose-date-done').showView(document.getId('input-glucose'));

document.getId('input-food-back').showView(vHome);
document.getId('input-food-photo-button').showView(document.getId('input-food-photo'));
document.getId('input-food-time-button').showView(document.getId('input-food-time'));
document.getId('input-food-date-button').showView(document.getId('input-food-date'));
document.getId('input-food-photo-back').showView(document.getId('input-food'));
document.getId('input-food-time-done').showView(document.getId('input-food'));
document.getId('input-food-date-done').showView(document.getId('input-food'));

document.getId('input-exercise-back').showView(vHome);
document.getId('input-exercise-time-button').showView(document.getId('input-exercise-time'));
document.getId('input-exercise-date-button').showView(document.getId('input-exercise-date'));
document.getId('input-exercise-time-done').showView(document.getId('input-exercise'));
document.getId('input-exercise-date-done').showView(document.getId('input-exercise'));

document.getId('input-exercise-options-dropdown').showView(document.getId('input-exercise-options'))
document.getId('input-exercise-running').showView(document.getId('input-exercise'))


// Reminders
var vReminderDetails = document.getId('reminder-details');

document.getId('reminders-day-back').showView(vHome);
document.getId('reminders-month-tab').showView(document.getId('reminders-month'));
document.getId('reminder-edit').showView(vReminderDetails);
document.getId('reminders-day-add').showView(document.getId('reminders-add'));
document.getId('reminder-day-time-5').showView(document.getId('reminders-day'));
document.getId('reminder-day-time-1030').showView(document.getId('reminders-day-alt'));

document.getId('reminders-month-back').showView(vHome);
document.getId('reminders-day-tab').showView(document.getId('reminders-day'));
document.getId('reminders-month-add').showView(document.getId('reminders-add'));

document.getId('reminders-add-back').showView(document.getId('reminders-day'));
document.getId('reminders-add-medicine').showView(vReminderDetails);

document.getId('reminders-back').showView(vHome);
document.getId('reminder-example').showView(vReminderDetails);

document.getId('reminder-details-back').showView(document.getId('reminders-day'));
document.getId('reminder-details-settings').showView(document.getId('reminder-details-repeat'));

document.getId('reminder-details-repeat-close').showView(vReminderDetails);
document.getId('reminder-details-repeat-time').showView(document.getId('reminder-details-time'));

document.getId('reminder-details-time-close').showView(vReminderDetails);
document.getId('reminder-details-time-repeat').showView(document.getId('reminder-details-repeat'));
