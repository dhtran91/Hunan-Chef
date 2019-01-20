// let Menu = require('./MenuItem.js');
import * as Menu from './MenuItem.js';

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
    console.log(Menu);
    const vp = window.matchMedia("(min-width: 992px)");
    vp.addListener(handleMediaQuery);

    const sideNav = document.querySelectorAll('.sidenav');
    const sideNavInstances = M.Sidenav.init(sideNav, { "edge": "right" });

    const toolTipped = document.querySelectorAll('.tooltipped');
    const toolTippedinstances = M.Tooltip.init(toolTipped, {});

    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', function () {
        const navBar = document.getElementById('navbar')
        const intro = document.getElementById("section-welcome");
        let currScrollPos = this.window.scrollY;

        if (currScrollPos < intro.offsetTop) {
            navBar.style.top = "0px";
            navBar.style.backgroundColor = "transparent";
        } else if (prevScrollPos < currScrollPos) {
            navBar.style.top = "-70px";
        } else {
            navBar.style.top = "0px";
            navBar.style.backgroundColor = "black";
        }
        prevScrollPos = currScrollPos;

        // const aboutSection = document.getElementById('about-section')
        // const locationDetailsSection = document.getElementById('location-section')

        // if (currScrollPos > intro.offsetTop) {
        // // if(currScrollPos >= (aboutSection.offsetTop-navBar.offsetHeight) && currScrollPos < (aboutSection.offsetHeight + aboutSection.offsetTop) || currScrollPos >= (locationDetailsSection.offsetTop-navBar.offsetHeight) && currScrollPos < (locationDetailsSection.offsetHeight + locationDetailsSection.offsetTop))
        //     navBar.style.backgroundColor = "black";
        // } else {
        //     navBar.style.backgroundColor = "transparent";
        // }
    })

});

function handleMediaQuery(e) {
    //If vp width > 992
    if (e.matches) {
        //Close side nav 
        let sideNav = document.querySelectorAll('.sidenav');
        var sideNavInstances = M.Sidenav.getInstance(sideNav[0]);
        sideNavInstances.close();

        //Move position of tooltip to right side
        let toolTipped = document.querySelectorAll('.tooltipped');
        for (let i = 0; i < toolTipped.length; i++) {
            toolTipped[i].dataset.position = "right";
        }
    } else {
        //On vp with width < 992px, move position of tooltip to left side
        let toolTipped = document.querySelectorAll('.tooltipped');
        for (let i = 0; i < toolTipped.length; i++) {
            toolTipped[i].dataset.position = "left";
        }
    }
}


