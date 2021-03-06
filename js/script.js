var vHome = document.getId('home');

// Tutorial
var vTutIntro = document.getId('tutorial-intro');
vTutIntro.show();

// Tutorial skip/exit button
var skips = document.getElementsByClassName('tutorial-skip');
for (i = 0; i < skips.length; i++) {
  skips[i].showView(vHome);
}

document.getId('tutorial-intro-app').showView(document.getId('tutorial-app'));
document.getId('tutorial-intro-input').showView(document.getId('tutorial-input'));
document.getId('tutorial-intro-reminders').showView(document.getId('tutorial-reminders'));
document.getId('tutorial-intro-progress').showView(document.getId('tutorial-progress'));

document.getId('tutorial-app-next').showView(document.getId('tutorial-input'));

document.getId('tutorial-input-next').showView(document.getId('tutorial-reminders'));

document.getId('tutorial-reminders-next').showView(document.getId('tutorial-progress'));

document.getId('tutorial-progress-next').showView(vHome);

// Home page
document.getId('home-add-button').showView(document.getId('home-add'));
document.getId('home-instructions-button').showView(document.getId('home-instructions'));
document.getId('home-instructions-close').showView(vHome);
document.getId('home-menu-button').showView(document.getId('home-menu'));
document.getId('home-trends-button').showView(document.getId('glucose-trends'));

// Home add menu
document.getId('home-add-close').showView(vHome);
document.getId('home-add-glucose').showView(document.getId('input-glucose'));
document.getId('home-add-meal').showView(document.getId('input-food'));
document.getId('home-add-exercise').showView(document.getId('input-exercise'));

// Home menu
document.getId('home-menu-settings').showView(document.getId('settings'))
document.getId('home-menu-reminders').showView(document.getId('reminders-day'))
document.getId('home-menu-cancel').showView(vHome)

// Glucose trends
document.getId('glucose-trends-close-top').showView(vHome);
document.getId('glucose-trends-close-bottom').showView(vHome);

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
document.getId('input-food-time-button').showView(document.getId('input-food-time'));
document.getId('input-food-date-button').showView(document.getId('input-food-date'));
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
