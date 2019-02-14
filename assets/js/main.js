document.addEventListener('DOMContentLoaded', function () {
    const menuSectionFilters = document.getElementById('menuSectionFilters');
    const menuFilterBtns = createMenuFilterBtns(Menu);
    menuSectionFilters.appendChild(menuFilterBtns);

    const menuSectionItems = document.getElementById("menuSectionItems");
    let menuItems = "";
    Menu.forEach(foodCategory => menuItems += createMenuItemDiv(foodCategory));
    menuSectionItems.innerHTML = menuItems;

    loadMenu();

    AOS.init();

    const vp = window.matchMedia("(min-width: 992px)");
    vp.addListener(handleMediaQuery);

    // Initializize Materialize DOM Elements
    const sideNav = document.querySelectorAll('.sidenav');
    const sideNavInstances = M.Sidenav.init(sideNav, { "edge": "right" });

    const toolTipped = document.querySelectorAll('.tooltipped');
    const toolTippedinstances = M.Tooltip.init(toolTipped, {});

    document.querySelectorAll('.tooltipped').forEach((x,i) => {
        x.addEventListener('mouseleave', function() {
            let style = document.querySelectorAll('.material-tooltip')[i].style;
            style.top = 0;
            style.left = 0;
        })
    })

    let prevScrollPos;

    window.addEventListener('scroll', function () {
        const navBar = document.getElementById('navbar');
        const intro = document.querySelector('#parallax-1 .container');
        
        const introPos = intro.offsetTop;
        let currScrollPos = window.scrollY;

        if (currScrollPos <= introPos) {
            navBar.style.top = "0px";
            navBar.style.backgroundColor = "transparent";
        } else if (prevScrollPos < currScrollPos) {
            navBar.style.top = "-70px";
        } else {
            navBar.style.top = "0px";
            navBar.style.backgroundColor = "black";
        }

        prevScrollPos = currScrollPos;
    })
});

function MenuItem(foodCourse, itemName, itemDescription, price) {
    this.foodCourse = foodCourse;
    this.itemName = itemName;
    this.itemDescription = itemDescription;
    this.price = price;
}

function Price(priceType, priceAmount) {
    this.priceType = priceType;
    this.priceAmount = priceAmount;
}

const appetizers = [
    new MenuItem("Appetizers", "Steamed Spring Roll", "", new Price(3, 3.75)),
    new MenuItem("Appetizers", "Egg Roll", "", new Price(2, 2.75)),
    new MenuItem("Appetizers", "Vegetable Egg Roll", "", new Price(3, 6.95)),
    new MenuItem("Appetizers", "Crab Puff", "", new Price(8, 6.95)),
    new MenuItem("Appetizers", "Steamed or Pan Fried Pork Dumpling", "", new Price(8, 6.95)),
    new MenuItem("Appetizers", "Bar-B-Q Spare Rib", "", new Price(6, 6.95)),
    new MenuItem("Appetizers", "Grilled Chicken Sticks", "", new Price(4, 4.95)),
    new MenuItem("Appetizers", "Grilled Pork Sticks", "", new Price(4, 4.95)),
    new MenuItem("Appetizers", "Chicken Wings", "", new Price(6, 4.95)),
    new MenuItem("Appetizers", "Biscuits", "", new Price(5, 2.50)),
    new MenuItem("Appetizers", "French Fries", "", new Price(1, 3.95))
];

const soups = [
    new MenuItem("Soup", "Wonton Soup", "", [new Price("S", 2.25), new Price("L", 3.95)]),
    new MenuItem("Soup", "Hot & Sour Soup", "", [new Price("S", 2.25), new Price("L", 3.95)]),
    new MenuItem("Soup", "Egg Drop Soup", "", [new Price("S", 2.25), new Price("L", 3.95)]),
    new MenuItem("Soup", "Vegetable with Tofu Soup", "", new Price(2, 3.95)),
    new MenuItem("Soup", "Velvet Chicken Corn Soup", "", new Price(2, 4.95)),
    new MenuItem("Soup", "Seafood Delight Soup", "", new Price(2, 4.95)),
    new MenuItem("Soup", "House Special Wonton Soup", "", new Price(2, 4.95))
]

const chefsSpecialties = [
    new MenuItem("Chef's Specialties", "General Tso's Chicken", "Chucks of crispy boneless chicken, blended in a tasty sweet & sour and spicy brown sauce.", new Price(1, 10.50)),
    new MenuItem("Chef's Specialties", "Orange Flavored Chicken", "Chunks of chicken lightly breaded and glazed with a spicy orange peel sauce.", new Price(1, 10.50)),
    new MenuItem("Chef's Specialties", "Sesame Chicken", "Marinated slices of chicken breast glazed with delightfully flavored sesame sauce.", new Price(1, 10.50)),
    new MenuItem("Chef's Specialties", "Orange Flavored Beef", "Tender chunks of beef lightly breaded and glazed with chef's spicy orange sauce.", new Price(1, 11.95)),
    new MenuItem("Chef's Specialties", "Sesame Beef", "Marinated slices of beef glazed with delightfully flavored sesame sauce.", new Price(1, 11.95)),
    new MenuItem("Chef's Specialties", "Orange Flavored Shrimp", "Jumbo shrimp lightly breaded and glazed with chef's spicy orange sauce.", new Price(1, 12.95)),
    new MenuItem("Chef's Specialties", "Sesame Shrimp", "Jumbo shrimp marinated and glazed with delightfully flavored sesame sauce.", new Price(1, 12.95)),
    new MenuItem("Chef's Specialties", "Kung Pao Delight", "Chicken, beef, shrimp and scallop stir fried in hot & spicy sauce with crunchy peanuts.", new Price(1, 12.95)),
    new MenuItem("Chef's Specialties", "Happy Family", "Chicken, beef, shrimp and scallop sautéed with water chestnut, mushroom, snow peas and broccoli in a flavored brown sauce.", new Price(1, 12.95)),
    new MenuItem("Chef's Specialties", "Sizzling Scallop & Beef", "Sliced tenderloin of beef & fresh scallop sautéed with vegetable in a rich brown sauce, served on a sizzling plate.", new Price(1, 12.95))
]

const healthFoodSelection = [
    new MenuItem("Healthy Selections", "Steamed Mixed Vegetables", "", new Price(1, 7.50)),
    new MenuItem("Healthy Selections", "Steamed Chicken with Vegetables", "", new Price(1, 8.50)),
    new MenuItem("Healthy Selections", "Steamed Chicken with Broccoli", "", new Price(1, 8.50)),
    new MenuItem("Healthy Selections", "Steamed Chicken with Snow Peas", "", new Price(1, 9.50)),
    new MenuItem("Healthy Selections", "Steamed Shrimp with Vegetables", "", new Price(1, 10.95)),
    new MenuItem("Healthy Selections", "Steamed Shrimp with Broccoli", "", new Price(1, 10.95)),
    new MenuItem("Healthy Selections", "Steamed Shrimp with Snow Peas & Water Chestnuts", "", new Price(1, 11.95))
]

const vegetables = [
    new MenuItem("Vegetables", "Mixed Vegetables", "Chinese cabbage, mushroom, water chestnut, broccoli & snow peas in white sauce.", new Price(1, 7.50)),
    new MenuItem("Vegetables", "Broccoli with Garlic Sauce", "Broccoli and water chestnuts sautéed in spicy garlic sauce.", new Price(1, 7.50)),
    new MenuItem("Vegetables", "Mixed Vegetables with Garlic Sauce", "Sauteed mixed vegetables with garlic sauce.", new Price(1, 7.50)),
    new MenuItem("Vegetables", "House Style Tofu", "Deep fried bean curd with mix vegetables in brown sauce.", new Price(1, 7.50)),
    new MenuItem("Vegetables", "Moo Shu Vegetables", "Shredded vegetables with plum sauce. Served with 4 Pancakes.", new Price(1, 8.50)),
    new MenuItem("Vegetables", "Sautéed Snow Peas & Water Chestnut", "Sauteed snow peas & water chestnut stir fried with light sauce.", new Price(1, 8.50)),
    new MenuItem("Vegetables", "Hot Braised String Beans", "Spicy string beans with minced pork.", new Price(1, 8.50))
]

const poultry = [
    new MenuItem("Poultry", "Sweet & Sour Chicken", "Batter deep fried chicken with sweet & sour sauce.", new Price(1, 7.95)),
    new MenuItem("Poultry", "Moo Goo Gai Pan", "Sliced chicken with vegetables in white sauce.", new Price(1, 7.95)),
    new MenuItem("Poultry", "Cashew Chicken", "Sliced chicken with vegetables and roasted cashew nut in brown sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken with Black Bean Sauce", "Sliced chicken breast with bell pepper and onion in black bean sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken with Broccoli", "Sliced chicken stir fried with broccoli in brown sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken with Garlic Sauce", "Sliced chicken breast with vegetables in spicy garlic sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Curry Chicken", "Sliced chicken with onions in curry sauce.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken Egg Foo Young", "Chinese style egg omelette with chicken & vegetable in oyster flavored gravy.", new Price(1, 8.50)),
    new MenuItem("Poultry", "Chicken w/ Snow Peas & water Chestnut", "Sliced chicken stir fried with snow peas in white sauce.", new Price(1, 9.50)),
    new MenuItem("Poultry", "Kung Pao Chicken", "Dried chicken with roasted peanut in spicy brown sauce.", new Price(1, 9.50)),
    new MenuItem("Poultry", "Hunan Chicken", "Sliced chicken breast w/ carrot, snow peas, straw mushroom, and broccoli in chef's spicy sauce.", new Price(1, 9.50)),
    new MenuItem("Poultry", "Moo Shu Chicken", "Shredded chicken & vegetables with plum sauce. Served with 4 Pancakes. Additional 4 pancakes $1.50.", new Price(1, 9.50))
];

const beef = [
    new MenuItem("Beef", "Pepper Steak", "Tender beef sautéed with green pepper and onion in brown sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Beef with Broccoli", "Sliced tender beef with broccoli in brown sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Beef with Garlic Sauce", "Sliced tender beef with spicy garlic sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Szechuan Beef", "Shredded beef stir fried with carrot and celery in spicy sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Mongolian Beef", "Sliced tender beef with onions.", new Price(1, 9.95)),
    new MenuItem("Beef", "Kung Pao Beef", "Sliced tender beef sautéed with peanuts in spicy sauce.", new Price(1, 9.95)),
    new MenuItem("Beef", "Beef Egg Foo Young", "Chinese style egg omelette with beef & vegetables in oyster flavored gravy.", new Price(1, 9.95)),
    new MenuItem("Beef", "Beef with Snow Peas & Water Chestnut", "Sliced tender beef sautéed with snow peas & water chestnuts in brown sauce.", new Price(1, 10.95)),
    new MenuItem("Beef", "Hunan Beef", "Sliced beef with carrot, snow peas, straw mushrooms, broccoli in chef's spicy sauce.", new Price(1, 10.95)),
    new MenuItem("Beef", "Moo Shu Beef", "Beef & vegetables plum sauce. Served with 4 Pancakes. Additional 4 pancakes $1.50.", new Price(1, 10.95))
];

const seafood = [
    new MenuItem("Seafood", "Sweet & Sour Shrimp", "Battered fried shrimp with sweet and sour sauce.", new Price(1, 10.50)),
    new MenuItem("Seafood", "Kung Pao Shrimp", "Shrimp with diced vegetable and peanuts in spicy sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Cashew Nuts", "Fried jumbo shrimp with bamboo shoot, celery, water chestnut and roasted cashew nut.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp Garlic Sauce", "Fresh jumbo shrimp sautéed with shredded bamboo shoot in spicy garlic sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Lobster Sauce", "Shrimp with minced pork in white lobster sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Vegetables", "Shrimp with mix vegetables in white sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Broccoli", "Fresh jumbo shrimp with broccoli in brown sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp Egg Foo Young", "Chinese style egg omelette with shrimp & vegetables in oyster flavored gravy.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Curry Shrimp", "Fresh jumbo shrimp and onions sautéed with curry sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Shrimp with Snow Peas & Water Chestnut", "Fresh jumbo shrimp with snow peas & water chestnut in white sauce.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Moo Shu Shrimp", "Fresh shrimp and vegetables with plum sauce. Served with 4 Pancakes.", new Price(1, 10.95)),
    new MenuItem("Seafood", "Hunan Shrimp", "Fresh jumbo shrimp with snow peas, straw mushroom & broccoli in chef's spicy sauce.", new Price(1, 11.95)),
    new MenuItem("Seafood", "Scallops with Garlic Sauce", "Scallops sautéed with spicy garlic sauce.", new Price(1, 12.95)),
    new MenuItem("Seafood", "Scallops with Vegetables", "Scallops sautéed with mix vegetables.", new Price(1, 12.95))
];

const pork = [
    new MenuItem("Pork", "Sweet & Sour Pork", "Batter deep fried pork with sweet & sour sauce.", new Price(1, 7.95)),
    new MenuItem("Pork", "Pork with Garlic Sauce", "Shredded pork with shredded vegetables in spicy garlic sauce.", new Price(1, 8.50)),
    new MenuItem("Pork", "Twice cooked Pork", "Twice cooked sliced pork with vegetables in spicy brown sauce.", new Price(1, 8.50)),
    new MenuItem("Pork", "Pork Chow Mein", "Shredded pork and vegetables with crunchy noodles.", new Price(1, 8.50)),
    new MenuItem("Pork", "Roasted Pork with Vegetables", "Sliced BBQ pork with vegetables.", new Price(1, 8.50)),
    new MenuItem("Pork", "Roasted Pork with Broccoli", "Roasted BBQ pork with broccoli.", new Price(1, 8.50)),
    new MenuItem("Pork", "Roasted Pork Egg Foo Young", "Chinese style egg omelet with roasted pork and vegetables with oyster flavored gravy.", new Price(1, 8.50)),
    new MenuItem("Pork", "Roasted Pork with Snow Peas & Water Chestnut", "Sliced BBQ pork with snow peas and water chestnuts in brown sauce.", new Price(1, 9.50)),
    new MenuItem("Pork", "Hunan Pork", "Sliced pork with carrot, snow peas, baby corn, straw mushroom and broccoli in chef's spicy sauce.", new Price(1, 9.50)),
    new MenuItem("Pork", "Moo Shu Pork", "Shredded pork with vegetables served with plum sauce. Served with 4 Pancakes. Additional 4 pancakes $1.50.", new Price(1, 9.50))
];

const friedRiceAndNoodles = [
    new MenuItem("Fried Rice & Noodle", "Vegetables Fried Rice", "", new Price(1, 6.50)),
    new MenuItem("Fried Rice & Noodle", "Chicken & Pork Fried Rice", "", new Price(1, 6.50)),
    new MenuItem("Fried Rice & Noodle", "Beef or Shrimp Fried Rice", "", new Price(1, 7.50)),
    new MenuItem("Fried Rice & Noodle", "House Special Fried Rice", "", new Price(1, 8.50)),
    new MenuItem("Fried Rice & Noodle", "Vegetables Lo Mein", "Soft Noodles.", new Price(1, 6.95)),
    new MenuItem("Fried Rice & Noodle", "Chicken or Pork Lo Mein", "Soft Noodles.", new Price(1, 6.95)),
    new MenuItem("Fried Rice & Noodle", "Beef or Shrimp Lo Mein", "Soft Noodles.", new Price(1, 7.95)),
    new MenuItem("Fried Rice & Noodle", "House Special Lo Mein", "Soft Noodles.", new Price(1, 8.50)),
    new MenuItem("Fried Rice & Noodle", "House Special Pan Fried Noodles", "Soft Noodles.", new Price(1, 8.50)),
];

const Menu = [
    appetizers,
    soups,
    chefsSpecialties,
    healthFoodSelection,
    vegetables,
    poultry,
    beef,
    seafood,
    pork,
    friedRiceAndNoodles
];

function createMenuFilterBtns(menu) {
    let ul = document.createElement('ul');

    menu.forEach((foodCategory, i) => {
        let li = document.createElement('li');
        let course = foodCategory[0].foodCourse;
        let button = document.createElement('button');

        button.classList = 'menu-filter-btn';
        button.type = "button";
        button.textContent = course.toUpperCase();
        button.dataset.menuFoodCourse = course;
        button.addEventListener('click', () => {
            handleMenuFilter(course);
        })

        li.appendChild(button)
        ul.appendChild(li);
    });

    return ul;
}

function createMenuItemDiv(foodCategory) {
    let menuItemArea = "";
    foodCategory.forEach((menuItem) => {
        menuItemArea += `
    <div class="col s12 m6 l4 xl4 menu-item hide" data-menu-item="${menuItem.foodCourse}">
            <div class="row">
                <div class="col s8 m8 l8 xl8">
                    <h6>${menuItem.itemName}</h6>`

        if (menuItem.itemDescription) {
            menuItemArea += `<p>${menuItem.itemDescription}</p>`
        }

        menuItemArea += `
    </div>
    <div class="col s4 m3 l3 xl3 price-col right-align">`

        if (menuItem.price.length > 1) {
            menuItem.price.forEach((e) => {
                menuItemArea += `<div class="row multi-price-row">
                <h6>
                (${e.priceType}) ${e.priceAmount.toFixed(2)}
                </h6>
            </div>`
            })
        }
        else {
            menuItemArea += `
        <div class="row">
        <h6>
        $${menuItem.price.priceAmount.toFixed(2)}
        </h6>
        </div>
        `
        }

        menuItemArea += `</div></div></div>`
    })

    return menuItemArea;
}

function handleMenuFilter(menuCourse) {
    const menuSectionNotesDiv = document.getElementById('menuSectionNotes');

    if ((menuCourse === "Appetizers" || menuCourse === "Soup")) {
        if (!menuSectionNotesDiv.classList.contains('hide')) {
            menuSectionNotesDiv.classList.add('hide');
        }
    } else {
        if(menuSectionNotesDiv.classList.contains('hide')) {
            menuSectionNotesDiv.classList.remove('hide');
        }
        animateCss('#menuSectionNotes', 'fadeInUp')
    }

    // Filter Btns
    const previousFilter = document.querySelector(`.active-filter-btn`);
    previousFilter.classList.remove('active-filter-btn');

    const selectedFilterBtn = document.querySelector(`.menu-filter-btn[data-menu-food-course="${menuCourse}"]`);
    selectedFilterBtn.classList.add('active-filter-btn');
    
    // Filtered Items
    const previousMenuItems = document.querySelectorAll(`.show`);
    previousMenuItems.forEach(item => {
        item.classList.remove('show');
    });

    const selectedMenuItems = document.querySelectorAll(`[data-menu-item="${menuCourse}"]`);
    selectedMenuItems.forEach(item => {
        item.classList.add('show');
    });
    animateCss('#menuSectionItems', 'fadeInUp');
}

function loadMenu() {
    let activeFilter = document.querySelector(`active-filter-btn`);
    if (activeFilter === null) {
        const defaultMenuFilterBtn = document.querySelectorAll('.menu-filter-btn')[0];
        defaultMenuFilterBtn.classList.add('active-filter-btn');

        const menuSectionNotesDiv = document.getElementById('menuSectionNotes');
        menuSectionNotesDiv.classList.add('hide', 'center-align');
        const para = document.createElement('p');
        para.innerText = 'Served with Steamed White or Brown Rice\nAdd $1.95 for Substitute Fried Rice';
        menuSectionNotesDiv.appendChild(para);

        const items = document.querySelectorAll(`[data-menu-item="${defaultMenuFilterBtn.dataset.menuFoodCourse}"]`);
        items.forEach(e => {
            e.classList.add('show');
        })
    }
}

function handleMediaQuery(e) {
    //If vp width > 992
    if (e.matches) {
        //Close side nav 
        const sideNav = document.querySelector('.sidenav');
        const sideNavInstances = M.Sidenav.getInstance(sideNav);
        sideNavInstances.close();
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