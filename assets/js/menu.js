function MenuItem(foodCourse, itemName, itemDescription, price, isSpicy) {
    this.foodCourse = foodCourse;
    this.itemName = itemName;
    this.itemDescription = itemDescription;
    this.price = price;
    if(!isSpicy) this.isSpicy = false;
    else this.isSpicy = isSpicy
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

const comboSpecial = [
    new MenuItem("Combo Special", "Sweet & Sour Pork", "", [new Price("Weekdays 11:00am - 3:00pm", 6.50), new Price("Weekends & After 3:00pm", 7.50)]),
    new MenuItem("Combo Special", "Sweet & Sour Chicken", "", [new Price("Weekdays 11:00am - 3:00pm", 6.50), new Price("Weekends & After 3:00pm", 7.50)]),
    new MenuItem("Combo Special", "Moo Goo Gai Pan", "", [new Price("Weekdays 11:00am - 3:00pm", 6.95), new Price("Weekends & After 3:00pm", 7.50)]),
    new MenuItem("Combo Special", "Mixed Vegetables", "", [new Price("Weekdays 11:00am - 3:00pm", 6.95), new Price("Weekends & After 3:00pm", 7.50)]),
    new MenuItem("Combo Special", "Spicy Chicken with Onion", "", [new Price("Weekdays 11:00am - 3:00pm", 6.95), new Price("Weekends & After 3:00pm", 7.50)], true),
    new MenuItem("Combo Special", "Kung Pao Chicken", "", [new Price("Weekdays 11:00am - 3:00pm", 7.50), new Price("Weekends & After 3:00pm", 7.95)], true),
    new MenuItem("Combo Special", "Chicken with Broccoli", "", [new Price("Weekdays 11:00am - 3:00pm", 7.50), new Price("Weekends & After 3:00pm", 7.95)]),
    new MenuItem("Combo Special", "Hunan Chicken", "", [new Price("Weekdays 11:00am - 3:00pm", 7.50), new Price("Weekends & After 3:00pm", 7.95)], true),
    new MenuItem("Combo Special", "Chicken with Garlic Sauce", "", [new Price("Weekdays 11:00am - 3:00pm", 7.50), new Price("Weekends & After 3:00pm", 7.95)]),
    new MenuItem("Combo Special", "Pepper Steak", "", [new Price("Weekdays 11:00am - 3:00pm", 7.50), new Price("Weekends & After 3:00pm", 7.95)]),
    new MenuItem("Combo Special", "Beef with Broccoli", "", [new Price("Weekdays 11:00am - 3:00pm", 7.50), new Price("Weekends & After 3:00pm", 7.95)]),
    new MenuItem("Combo Special", "Beef with Garlic Sauce", "", [new Price("Weekdays 11:00am - 3:00pm", 7.50), new Price("Weekends & After 3:00pm", 7.95), true]),
    new MenuItem("Combo Special", "Sweet & Sour Shrimp", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)]),
    new MenuItem("Combo Special", "Shrimp with Broccoli", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)]),
    new MenuItem("Combo Special", "Shrimp with Vegetables", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)]),
    new MenuItem("Combo Special", "Hunan Shrimp", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)], true),
    new MenuItem("Combo Special", "General Tso's Chicekn", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)], true),
    new MenuItem("Combo Special", "Orange Flavor Chicken", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)], true),
    new MenuItem("Combo Special", "Hunan Beef", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)], true),
    new MenuItem("Combo Special", "Shrimp with Cashew Nuts", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)]),
    new MenuItem("Combo Special", "Sesame Chicken", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)], true),
    new MenuItem("Combo Special", "Triple Delight", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)]),
    new MenuItem("Combo Special", "Chicken with Snow Peas & Water Chestnuts", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)]),
    new MenuItem("Combo Special", "Beef with Snow Peas & Water Chestnuts", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)]),
    new MenuItem("Combo Special", "Shrimp with Snow Peas & Water Chestnuts", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)]),
    new MenuItem("Combo Special", "Kung Pao Shrimp", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)], true),
    new MenuItem("Combo Special", "Kung Pao Delight", "", [new Price("Weekdays 11:00am - 3:00pm", 7.95), new Price("Weekends & After 3:00pm", 8.50)], true),
]

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

function createMenuItemDiv(foodCategory) {
    let menuItemArea = "";
    foodCategory.forEach((menuItem) => {
        menuItemArea += `
    <div class="col s12 m6 l4 xl4 menu-item" data-menu-item="${menuItem.foodCourse}">
            <div class="row">
                <div class="col s8 m8 l8 xl8">
                    <h3 class="subheading-2">${menuItem.itemName}</h3>`

        if (menuItem.itemDescription) {
            menuItemArea += `<p>${menuItem.itemDescription}</p>`
        }

        menuItemArea += `
    </div>
    <div class="col s4 m3 l3 xl3 price-col right-align">`

        if (menuItem.price.length > 1) {
            menuItem.price.forEach((e) => {
                menuItemArea += `
                <p class="subheading-2">
                (${e.priceType}) ${e.priceAmount.toFixed(2)}
                </p>
            `
            })
        }
        else {
            menuItemArea += `
        
        <p class="subheading-2">
        $${menuItem.price.priceAmount.toFixed(2)}
        </p>
       
        `
        }
        menuItemArea += `</div></div></div>`
    })

    return menuItemArea;
}

function createFamilyDinner(foodCategory) {
    let menuItemArea = "";
    foodCategory.forEach((menuItem) => {
        menuItemArea += `
    <div class="col s12 m4 l4 xl4 menu-item" data-menu-item="${menuItem.foodCourse}">
            <div class="row">
                <div class="col s8 m8 l8 xl8">
                    <h3 class="subheading-2">${menuItem.itemName}</h3>`

        menuItemArea += `
    </div>
    <div class="col s4 m3 l3 xl3 price-col right-align">`

        if (menuItem.price.length > 1) {
            menuItem.price.forEach((e) => {
                menuItemArea += `
                <p class="subheading-2">
                (${e.priceType}) ${e.priceAmount.toFixed(2)}
                </p>
            `
            })
        }
        else {
            menuItemArea += `
        
        <p class="subheading-2">
        $${menuItem.price.priceAmount.toFixed(2)}
        </p>
       
        `
        }
        menuItemArea += `</div></div></div>`
    })

    return menuItemArea;
}

function createMenuTable(foodCategory) {
    let menuTable = `<div class="col s12 m12 l12 xl12 menu-item" data-menu-item="Combo Special">
    <table class="table">
    <thead style="color: rgba(255, 230, 204, 1);">
      <tr>
        <th></th>
        <th></th>
        <th class="col-center">Weekdays<br/>11:00am - 3:00pm</th>
        <th class="col-center">Weekends & After<br/>3:00pm</th>
      </tr>
    </thead>
    <tbody style="color: rgba(255, 230, 204, 0.80);">`;
    let count = 0;
    foodCategory.forEach((menuItem) => {
        menuTable += `
                  <tr>
                    <td>(${++count})</td>
                    <td>${menuItem.itemName}${menuItem.isSpicy ? '<i class="fas fa-pepper-hot"></i>' : ''}</td>
                    <td class="col-center">$${menuItem.price[0].priceAmount.toFixed(2)}</td>
                    <td class="col-center">$${menuItem.price[1].priceAmount.toFixed(2)}</td>
                  </tr>
    `
    })
    menuTable += `</tbody></table></div>`;

    return menuTable;
}

let menuItem = ""
Menu.forEach(m => menuItem += createMenuItemDiv(m));
menuItem += createMenuTable(comboSpecial);
menuItem += `<div class="col s12 m12 l12 xl12 menu-item" data-menu-item="Family Dinner">
<div style="display: flex; flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap; color: #ffe6cc; text-align: center">
    <div style="margin: 10px; border: 1px solid; padding: 10px 20px; width:250px;">
        <div style="margin-bottom: 20px; font-size: 2.2em; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly; display: flex;">D-2 <span style="">$24.95<span></div>
        <ul>
            <li>Sweet & Sour Pork<br>or<br>Sweet & Sour Chicken</li>
            <hr>
            <li>Hunan Beef<i class="fas fa-pepper-hot"></i><br>or<br>Hunan Chicken<i class="fas fa-pepper-hot"></i></li>
            <hr>
            <li>Dinner Fried Rice<br>or<br>Steamed Rice</li>
        </ul>
    </div>
    <div style="margin: 10px; border: 1px solid; padding: 10px 20px; width:250px;">
        <div style="margin-bottom: 20px; font-size: 2.2em; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly; display: flex;">D-3 <span style="">$35.95</span></div>
        <ul>
            <li>Sweet & Sour Pork<br>or<br>Sweet & Sour Chicken</li>
            <hr>
            <li>Hunan Beef<i class="fas fa-pepper-hot"></i><br>or<br>Hunan Chicken<i class="fas fa-pepper-hot"></i></li>
            <hr>
            <li>Shrimp with Cashew Nuts<br>or<br>Kung Pao Shrimp<i class="fas fa-pepper-hot"></i></li>
            <hr>
            <li>Dinner Fried Rice<br>or<br>Steamed Rice</li>
        </ul>
    </div>
    <div style="margin: 10px; border: 1px solid; padding: 10px 20px; width:250px;">
        <div style="margin-bottom: 20px; font-size: 2.2em; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly; display: flex;">D-4 <span style="">$46.95</span></div>
        <ul>
            <li>Sweet & Sour Pork<br>or<br>Sweet & Sour Chicken</li>
            <hr>
            <li>Hunan Beef<i class="fas fa-pepper-hot"></i><br>or<br>Hunan Chicken<i class="fas fa-pepper-hot"></i></li>
            <hr>
            <li>Shrimp with Cashew Nuts<br>or<br>Kung Pao Shrimp<i class="fas fa-pepper-hot"></i></li>
            <hr>
            <li>General Tso's Chicken<i class="fas fa-pepper-hot"></i><br>or<br>Orange Chicken<i class="fas fa-pepper-hot"></i></li>
            <hr>
            <li>Dinner Fried Rice<br>or<br>Steamed Rice</li>
        </ul>
    </div></div>`;
const menuSectionItems = document.getElementById("menuSectionItems");
menuSectionItems.innerHTML = menuItem;

function showMenu(item) {
    const items = document.querySelectorAll(`[data-menu-item="${item}"]`);
    items.forEach(e => {
        e.classList.add('show');
    })
}

const active = document.querySelector('.active-filter').dataset.menuFoodCourse;
showMenu(active);