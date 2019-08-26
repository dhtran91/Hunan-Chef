document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
    const sideNav = document.querySelectorAll('.sidenav');
    const sideNavInstances = M.Sidenav.init(sideNav, { "edge": "right" });
    const toolTipped = document.querySelectorAll('.tooltipped');
    const toolTippedInstaces = M.Tooltip.init(toolTipped, {});

    let prevScrollPosition = 0;
    let introPosition = document.querySelector('#parallax-1 .intro').offsetTop;
    let activeFilter = document.querySelector('.active-filter');

    function transitionNavbar() {
        const navBar = document.getElementById('navbar');
        const scroll_pos = window.scrollY;

        // If scroll position is pass intro
        if (scroll_pos > introPosition) {
            // If scrolling down 
            if (prevScrollPosition < scroll_pos) {
                navBar.classList.add('hide-navbar')
                navBar.classList.add('navbar-black')
            } else {
                navBar.classList.remove('hide-navbar')
            }
        } else {
            navBar.classList.remove('navbar-black')
            navBar.classList.remove('hide-navbar')
        }
        prevScrollPosition = scroll_pos;
    }

    function handleMenuFilter(e) {
        if (e.target !== activeFilter) {
            activeFilter.classList.remove('active-filter');
            e.target.classList.add('active-filter');

            const menuCourse = e.target.dataset.menuFoodCourse;
            const menuSectionNotesDiv = document.getElementById('menuSectionNotes');

            if ((menuCourse === "Appetizers" || menuCourse === "Soup")) {
                menuSectionNotesDiv.classList.remove('show');
            } else {
                menuSectionNotesDiv.classList.add('show');
                animateCss('#menuSectionNotes', 'fadeInUp')
            }

            document.querySelectorAll(`.menu-item.show`).forEach(item => item.classList.remove('show'));
            document.querySelectorAll(`[data-menu-item="${menuCourse}"]`).forEach(item => item.classList.add('show'))

            animateCss('#menuSectionItems', 'fadeInUp')

            activeFilter = e.target;
        }
    }

    function animateCss(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)
            if (typeof callback === 'function') callback()
        }
        node.addEventListener('animationend', handleAnimationEnd)
    }

    // Event Listeners
    document.querySelectorAll('.menu-filter-btn').forEach(btn => btn.addEventListener("click", handleMenuFilter, { passive: true }))
    window.addEventListener('scroll', transitionNavbar, { passive: true });
    window.addEventListener('resize', () => {
        introPosition = document.querySelector('#parallax-1 .intro').offsetTop;
        toolTipped.forEach((elem, i) => {
            if (M.Tooltip.getInstance(elem).tooltipEl.style.top !== 0) {
                M.Tooltip.getInstance(elem).tooltipEl.style.top = 0
            }
        })
    })
    window.matchMedia("(min-width: 992px)").addListener((e) => {
        if (e.matches) {
            sideNavInstances.map((instant) => instant.isOpen && instant.close())
        }
    }
    );
}
);
