// Home page
var vHome = document.getElementById('home'),
    vHomeEstimate = document.getElementById('home-estimate'),
    vHomeAdd = document.getElementById('home-add'),
    vHomeInstructions = document.getElementById('home-instructions'),
    vHomeMenu = document.getElementById('home-menu'),
    vHomeTrends = document.getElementById('home-trends');

// Initial view
vHome.show();

document.getElementById('home-estimate-toggle').showView(vHomeEstimate);
document.getElementById('home-add-button').showView(vHomeAdd);
document.getElementById('home-instructions-button').showView(vHomeInstructions);
document.getElementById('home-menu-button').showView(vHomeMenu);
document.getElementById('home-trends-button').showView(vHomeTrends);
document.getElementById('home-trends-button').showView(vHomeTrends);
document.getElementById('home-instructions-close').showView(vHome);
