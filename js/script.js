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
