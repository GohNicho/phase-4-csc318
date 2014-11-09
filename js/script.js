// Home page
var vHome = document.getId('home');
vHome.show();

document.getId('home-estimate-toggle').showView(document.getId('home-estimate'));
document.getId('home-estimate-back').showView(vHome);
document.getId('home-add-button').showView(document.getId('home-add'));
document.getId('home-instructions-button').showView(document.getId('home-instructions'));
document.getId('home-instructions-close').showView(vHome);
document.getId('home-menu-button').showView(document.getId('home-menu'));
document.getId('home-trends-button').showView(document.getId('home-trends'));

// Home add menu
document.getId('home-add-close').showView(vHome);
document.getId('home-add-glucose').showView(document.getId('input-glucose'));
document.getId('home-add-meal').showView(document.getId('input-food'));
document.getId('home-add-exercise').showView(document.getId('input-exercise'));

// Home trends menu
document.getId('home-trends-close').showView(vHome);

// Home menu
document.getId('home-menu-settings').showView(document.getId('settings'))
document.getId('home-menu-passcode').showView(document.getId('passcode'))
document.getId('home-menu-cancel').showView(vHome)

// Passcode
document.getId('passcode-back').showView(vHome);

// Settings
document.getId('settings-back').showView(vHome);

// Input
// Input cancel/done buttons
var inputActions = document.getElementsByClassName('input-action');
for (var i = 0; i < inputActions.length; i++) {
  inputActions[i].showView(vHome);
}

document.getId('input-glucose-back').showView(vHome);
document.getId('input-food-back').showView(vHome);
document.getId('input-exercise-back').showView(vHome);

document.getId('input-exercise-options-dropdown').showView(document.getId('input-exercise-options'))
document.getId('input-exercise-running').showView(document.getId('input-exercise'))
