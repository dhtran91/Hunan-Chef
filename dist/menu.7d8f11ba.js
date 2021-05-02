parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"i6s7":[function(require,module,exports) {
function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var n=function n(i,o,a,t,s){e(this,n),this.foodCourse=i,this.itemName=o,this.itemDescription=a,this.price=t,this.isSpicy=s||!1},i=function n(i,o){e(this,n),this.priceType=i,this.priceAmount=o},o=[new n("Appetizers","Steamed Spring Roll","",new i(3,3.75)),new n("Appetizers","Egg Roll","",new i(2,2.75)),new n("Appetizers","Vegetable Egg Roll","",new i(3,3.25)),new n("Appetizers","Crab Puff","",new i(8,7.95)),new n("Appetizers","Steamed or Pan Fried Pork Dumpling","",new i(8,7.95)),new n("Appetizers","Bar-B-Q Spare Rib","",new i(6,7.95)),new n("Appetizers","Grilled Chicken Sticks","",new i(4,4.95)),new n("Appetizers","Grilled Pork Sticks","",new i(4,4.95)),new n("Appetizers","Chicken Wings","",new i(6,5.95)),new n("Appetizers","Biscuits","",new i(5,2.5)),new n("Appetizers","French Fries","",new i(1,2.5))],a=[new n("Soup","Wonton Soup","",[new i("S",2.95),new i("L",4.95)]),new n("Soup","Hot & Sour Soup","",[new i("S",2.95),new i("L",4.95)]),new n("Soup","Egg Drop Soup","",[new i("S",2.95),new i("L",4.95)]),new n("Soup","Vegetable with Tofu Soup","",new i(2,4.95)),new n("Soup","Spicy Chicken With Vegetable Soup","",new i(2,5.95)),new n("Soup","Velvet Chicken Corn Soup","",new i(2,5.95)),new n("Soup","Seafood Delight Soup","",new i(2,5.95)),new n("Soup","House Special Wonton Soup","",new i(2,5.95))],t=[new n("Chef's Specialties","General Tso's Chicken","Chucks of crispy boneless chicken, blended in a tasty sweet & sour and spicy brown sauce.",new i(1,11.95)),new n("Chef's Specialties","Orange Flavored Chicken","Chunks of chicken lightly breaded and glazed with a spicy orange peel sauce.",new i(1,11.95)),new n("Chef's Specialties","Sesame Chicken","Marinated slices of chicken breast glazed with delightfully flavored sesame sauce.",new i(1,11.95)),new n("Chef's Specialties","Orange Flavored Beef","Tender chunks of beef lightly breaded and glazed with chef's spicy orange sauce.",new i(1,12.95)),new n("Chef's Specialties","Sesame Beef","Marinated slices of beef glazed with delightfully flavored sesame sauce.",new i(1,12.95)),new n("Chef's Specialties","Orange Flavored Shrimp","Jumbo shrimp lightly breaded and glazed with chef's spicy orange sauce.",new i(1,14.95)),new n("Chef's Specialties","Sesame Shrimp","Jumbo shrimp marinated and glazed with delightfully flavored sesame sauce.",new i(1,14.95)),new n("Chef's Specialties","Kung Pao Delight","Chicken, beef, shrimp and scallop stir fried in hot & spicy sauce with crunchy peanuts.",new i(1,14.95)),new n("Chef's Specialties","Happy Family","Chicken, beef, shrimp and scallop sautéed with water chestnut, mushroom, snow peas and broccoli in a flavored brown sauce.",new i(1,14.95)),new n("Chef's Specialties","Sizzling Scallop & Beef","Sliced tenderloin of beef & fresh scallop sautéed with vegetable in a rich brown sauce, served on a sizzling plate.",new i(1,14.95))],s=[new n("Healthy Selections","Steamed Mixed Vegetables","",new i(1,7.95)),new n("Healthy Selections","Steamed Chicken with Vegetables","",new i(1,8.95)),new n("Healthy Selections","Steamed Chicken with Broccoli","",new i(1,8.95)),new n("Healthy Selections","Steamed Chicken with Snow Peas","",new i(1,9.95)),new n("Healthy Selections","Steamed Shrimp with Vegetables","",new i(1,12.95)),new n("Healthy Selections","Steamed Shrimp with Broccoli","",new i(1,12.95)),new n("Healthy Selections","Steamed Shrimp with Snow Peas & Water Chestnuts","",new i(1,13.95))],r=[new n("Vegetables","Mixed Vegetables","Chinese cabbage, mushroom, water chestnut, broccoli & snow peas in white sauce.",new i(1,7.95)),new n("Vegetables","Broccoli with Garlic Sauce","Broccoli and water chestnuts sautéed in spicy garlic sauce.",new i(1,7.95)),new n("Vegetables","Mixed Vegetables with Garlic Sauce","Sauteed mixed vegetables with garlic sauce.",new i(1,7.95)),new n("Vegetables","House Style Tofu","Deep fried bean curd with mix vegetables in brown sauce.",new i(1,7.95)),new n("Vegetables","Moo Shu Vegetables","Shredded vegetables with plum sauce. Served with 4 Pancakes.",new i(1,8.95)),new n("Vegetables","Sautéed Snow Peas & Water Chestnut","Sauteed snow peas & water chestnut stir fried with light sauce.",new i(1,8.95)),new n("Vegetables","Hot Braised String Beans","Spicy string beans with minced pork.",new i(1,8.95))],c=[new n("Poultry","Sweet & Sour Chicken","Batter deep fried chicken with sweet & sour sauce.",new i(1,8.95)),new n("Poultry","Moo Goo Gai Pan","Sliced chicken with vegetables in white sauce.",new i(1,8.95)),new n("Poultry","Cashew Chicken","Sliced chicken with vegetables and roasted cashew nut in brown sauce.",new i(1,8.95)),new n("Poultry","Chicken with Black Bean Sauce","Sliced chicken breast with bell pepper and onion in black bean sauce.",new i(1,8.95)),new n("Poultry","Chicken with Broccoli","Sliced chicken stir fried with broccoli in brown sauce.",new i(1,8.95)),new n("Poultry","Chicken with Garlic Sauce","Sliced chicken breast with vegetables in spicy garlic sauce.",new i(1,8.95)),new n("Poultry","Curry Chicken","Sliced chicken with onions in curry sauce.",new i(1,8.95)),new n("Poultry","Chicken Egg Foo Young","Chinese style egg omelette with chicken & vegetable in oyster flavored gravy.",new i(1,9.95)),new n("Poultry","Chicken w/ Snow Peas & water Chestnut","Sliced chicken stir fried with snow peas in white sauce.",new i(1,9.95)),new n("Poultry","Kung Pao Chicken","Dried chicken with roasted peanut in spicy brown sauce.",new i(1,9.95)),new n("Poultry","Hunan Chicken","Sliced chicken breast w/ carrot, snow peas, straw mushroom, and broccoli in chef's spicy sauce.",new i(1,9.95)),new n("Poultry","Moo Shu Chicken","Shredded chicken & vegetables with plum sauce. Served with 4 Pancakes. Additional 4 pancakes $1.50.",new i(1,9.95))],w=[new n("Beef","Pepper Steak","Tender beef sautéed with green pepper and onion in brown sauce.",new i(1,10.95)),new n("Beef","Beef with Broccoli","Sliced tender beef with broccoli in brown sauce.",new i(1,10.95)),new n("Beef","Beef with Garlic Sauce","Sliced tender beef with spicy garlic sauce.",new i(1,10.95)),new n("Beef","Szechuan Beef","Shredded beef stir fried with carrot and celery in spicy sauce.",new i(1,10.95)),new n("Beef","Mongolian Beef","Sliced tender beef with onions.",new i(1,10.95)),new n("Beef","Kung Pao Beef","Sliced tender beef sautéed with peanuts in spicy sauce.",new i(1,10.95)),new n("Beef","Beef Egg Foo Young","Chinese style egg omelette with beef & vegetables in oyster flavored gravy.",new i(1,11.95)),new n("Beef","Beef with Snow Peas & Water Chestnut","Sliced tender beef sautéed with snow peas & water chestnuts in brown sauce.",new i(1,11.95)),new n("Beef","Hunan Beef","Sliced beef with carrot, snow peas, straw mushrooms, broccoli in chef's spicy sauce.",new i(1,11.95)),new n("Beef","Moo Shu Beef","Beef & vegetables plum sauce. Served with 4 Pancakes. Additional 4 pancakes $1.50.",new i(1,11.95))],l=[new n("Seafood","Sweet & Sour Shrimp","Battered fried shrimp with sweet and sour sauce.",new i(1,12.95)),new n("Seafood","Salt & Pepper Shrimp (Shell On)","Shrimp with salt pepper.",new i(1,12.95)),new n("Seafood","Kung Pao Shrimp","Shrimp with diced vegetable and peanuts in spicy sauce.",new i(1,12.95)),new n("Seafood","Shrimp with Cashew Nuts","Fried jumbo shrimp with bamboo shoot, celery, water chestnut and roasted cashew nut.",new i(1,12.95)),new n("Seafood","Shrimp Garlic Sauce","Fresh jumbo shrimp sautéed with shredded bamboo shoot in spicy garlic sauce.",new i(1,12.95)),new n("Seafood","Shrimp with Lobster Sauce","Shrimp with minced pork in white lobster sauce.",new i(1,12.95)),new n("Seafood","Shrimp with Vegetables","Shrimp with mix vegetables in white sauce.",new i(1,12.95)),new n("Seafood","Shrimp with Broccoli","Fresh jumbo shrimp with broccoli in brown sauce.",new i(1,12.95)),new n("Seafood","Curry Shrimp","Fresh jumbo shrimp and onions sautéed with curry sauce.",new i(1,12.95)),new n("Seafood","Shrimp Egg Foo Young","Chinese style egg omelette with shrimp & vegetables in oyster flavored gravy.",new i(1,13.95)),new n("Seafood","Shrimp with Snow Peas & Water Chestnut","Fresh jumbo shrimp with snow peas & water chestnut in white sauce.",new i(1,13.95)),new n("Seafood","Moo Shu Shrimp (Served with 4 Pancakes)","Fresh shrimp and vegetables with plum sauce. Additional 4 pan cakes $2.50.",new i(1,13.95)),new n("Seafood","Hunan Shrimp","Fresh jumbo shrimp with snow peas, straw mushroom & broccoli in chef's spicy sauce.",new i(1,13.95)),new n("Seafood","Scallops with Garlic Sauce","Scallops sautéed with spicy garlic sauce.",new i(1,13.95)),new n("Seafood","Scallops with Vegetables","Scallops sautéed with mix vegetables.",new i(1,13.95)),new n("Seafood","Salt & Pepper Fried Fish","Fish with salt & pepper.",new i(1,13.95))],h=[new n("Pork","Sweet & Sour Pork","Batter deep fried pork with sweet & sour sauce.",new i(1,8.95)),new n("Pork","Pork with Garlic Sauce","Shredded pork with shredded vegetables in spicy garlic sauce.",new i(1,8.95)),new n("Pork","Twice cooked Pork","Twice cooked sliced pork with vegetables in spicy brown sauce.",new i(1,8.95)),new n("Pork","Pork Chow Mein","Shredded pork and vegetables with crunchy noodles.",new i(1,8.95)),new n("Pork","Roasted Pork with Vegetables","Sliced BBQ pork with vegetables.",new i(1,8.95)),new n("Pork","Roasted Pork with Broccoli","Roasted BBQ pork with broccoli.",new i(1,8.95)),new n("Pork","Roasted Pork Egg Foo Young","Chinese style egg omelet with roasted pork and vegetables with oyster flavored gravy.",new i(1,9.95)),new n("Pork","Roasted Pork with Snow Peas & Water Chestnut","Sliced BBQ pork with snow peas and water chestnuts in brown sauce.",new i(1,9.95)),new n("Pork","Hunan Pork","Sliced pork with carrot, snow peas, baby corn, straw mushroom and broccoli in chef's spicy sauce.",new i(1,9.95)),new n("Pork","Moo Shu Pork","Shredded pork with vegetables served with plum sauce. Served with 4 Pancakes. Additional 4 pancakes $1.50.",new i(1,9.95))],p=[new n("Fried Rice & Noodle","Vegetables Fried Rice","",new i(1,7.5)),new n("Fried Rice & Noodle","Chicken Fried Rice","",new i(1,7.5)),new n("Fried Rice & Noodle","Pork Fried Rice","",new i(1,7.5)),new n("Fried Rice & Noodle","Beef Fried Rice","",new i(1,8.5)),new n("Fried Rice & Noodle","Shrimp Fried Rice","",new i(1,8.5)),new n("Fried Rice & Noodle","House Special Fried Rice","",new i(1,9.5)),new n("Fried Rice & Noodle","Vegetables Lo Mein","Soft Noodles.",new i(1,7.95)),new n("Fried Rice & Noodle","Chicken Lo Mein","Soft Noodles.",new i(1,7.95)),new n("Fried Rice & Noodle","Pork Lo Mein","Soft Noodles.",new i(1,7.95)),new n("Fried Rice & Noodle","Beef Lo Mein","Soft Noodles.",new i(1,8.95)),new n("Fried Rice & Noodle","Shrimp Lo Mein","Soft Noodles.",new i(1,8.95)),new n("Fried Rice & Noodle","House Special Lo Mein","Soft Noodles.",new i(1,9.95)),new n("Fried Rice & Noodle","House Special Pan Fried Noodles","Soft Noodles.",new i(1,10.95))],d=[new n("Combo Special","Sweet & Sour Pork","",new i(1,7.5)),new n("Combo Special","Sweet & Sour Chicken","",new i(1,7.5)),new n("Combo Special","Moo Goo Gai Pan","",new i(1,7.5)),new n("Combo Special","Mixed Vegetables","",new i(1,7.5)),new n("Combo Special","Spicy Chicken with Onion","",new i(1,7.5),!0),new n("Combo Special","Kung Pao Chicken","",new i(1,8.5),!0),new n("Combo Special","Chicken with Broccoli","",new i(1,8.5)),new n("Combo Special","Hunan Chicken","",new i(1,8.5),!0),new n("Combo Special","Chicken with Garlic Sauce","",new i(1,8.5)),new n("Combo Special","Pepper Steak","",new i(1,8.5)),new n("Combo Special","Beef with Broccoli","",new i(1,8.5)),new n("Combo Special","Beef with Garlic Sauce","",new i(1,8.5),!0),new n("Combo Special","Sweet & Sour Shrimp","",new i(1,8.95)),new n("Combo Special","Shrimp with Broccoli","",new i(1,8.95)),new n("Combo Special","Shrimp with Vegetables","",new i(1,8.95)),new n("Combo Special","Hunan Shrimp","",new i(1,8.95),!0),new n("Combo Special","General Tso's Chicken","",new i(1,8.95),!0),new n("Combo Special","Orange Flavor Chicken","",new i(1,8.95),!0),new n("Combo Special","Hunan Beef","",new i(1,8.95),!0),new n("Combo Special","Shrimp with Cashew Nuts","",new i(1,8.95)),new n("Combo Special","Sesame Chicken","",new i(1,8.95),!0),new n("Combo Special","Triple Delight","",new i(1,8.95)),new n("Combo Special","Chicken with Snow Peas & Water Chestnuts","",new i(1,8.95)),new n("Combo Special","Beef with Snow Peas & Water Chestnuts","",new i(1,8.95)),new n("Combo Special","Shrimp with Snow Peas & Water Chestnuts","",new i(1,8.95)),new n("Combo Special","Kung Pao Shrimp","",new i(1,8.95),!0),new n("Combo Special","Kung Pao Delight","",new i(1,9.95),!0)],u=[o,a,t,s,r,c,w,l,h,p];function S(e){var n="";return e.forEach(function(e){n+='\n    <div class="col s12 m6 l4 xl4 menu-item" data-menu-item="'.concat(e.foodCourse,'">\n            <div class="row">\n                <div class="col s8 m8 l8 xl8">\n                    <h3 class="subheading-2">').concat(e.itemName,"</h3>"),e.itemDescription&&(n+="<p>".concat(e.itemDescription,"</p>")),n+='\n    </div>\n    <div class="col s4 m3 l3 xl3 price-col right-align">',e.price.length>1?e.price.forEach(function(e){n+='\n                <p class="subheading-2">\n                ('.concat(e.priceType,") ").concat(e.priceAmount.toFixed(2),"\n                </p>\n            ")}):n+='\n        \n        <p class="subheading-2">\n        $'.concat(e.price.priceAmount.toFixed(2),"\n        </p>\n       \n        "),n+="</div></div></div>"}),n}function m(e){var n="";return e.forEach(function(e){n+='\n    <div class="col s12 m4 l4 xl4 menu-item" data-menu-item="'.concat(e.foodCourse,'">\n            <div class="row">\n                <div class="col s8 m8 l8 xl8">\n                    <h3 class="subheading-2">').concat(e.itemName,"</h3>"),n+='\n    </div>\n    <div class="col s4 m3 l3 xl3 price-col right-align">',e.price.length>1?e.price.forEach(function(e){n+='\n                <p class="subheading-2">\n                ('.concat(e.priceType,") ").concat(e.priceAmount.toFixed(2),"\n                </p>\n            ")}):n+='\n        \n        <p class="subheading-2">\n        $'.concat(e.price.priceAmount.toFixed(2),"\n        </p>\n       \n        "),n+="</div></div></div>"}),n}function f(e){var n='<div class="col s12 m12 l12 xl12 menu-item" data-menu-item="Combo Special">\n    <table class="table">\n    <thead style="color: rgba(255, 230, 204, 1);">\n    </thead>\n    <tbody style="color: rgba(255, 230, 204, 0.80);">',i=0;return e.forEach(function(e){n+="\n                  <tr>\n                    <td>(".concat(++i,")</td>\n                    <td>").concat(e.itemName).concat(e.isSpicy?'<i class="fas fa-pepper-hot"></i>':"",'</td>\n                    <td class="col-center">$').concat(e.price.priceAmount.toFixed(2),"</td>\n                  </tr>\n    ")}),n+="</tbody></table></div>"}function b(e){document.querySelectorAll('[data-menu-item="'.concat(e,'"]')).forEach(function(e){e.classList.add("show")})}!function(){var e="";u.forEach(function(n){return e+=S(n)}),e+=f(d),e+='<div class="col s12 m12 l12 xl12 menu-item" data-menu-item="Family Dinner">\n    <div style="display: flex; flex-direction: row;\n    justify-content: space-evenly;\n    flex-wrap: wrap; color: #ffe6cc; text-align: center">\n        <div style="margin: 10px; border: 1px solid; padding: 10px 20px; width:250px;">\n            <div style="margin-bottom: 20px; font-size: 2.2em; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly; display: flex;">D-2 <span style="">$27.95<span></div>\n            <ul>\n                <li>Sweet & Sour Pork<br>or<br>Sweet & Sour Chicken</li>\n                <hr>\n                <li>Hunan Beef<i class="fas fa-pepper-hot"></i><br>or<br>Hunan Chicken<i class="fas fa-pepper-hot"></i></li>\n                <hr>\n                <li>Dinner Fried Rice<br>or<br>Steamed Rice</li>\n            </ul>\n        </div>\n        <div style="margin: 10px; border: 1px solid; padding: 10px 20px; width:250px;">\n            <div style="margin-bottom: 20px; font-size: 2.2em; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly; display: flex;">D-3 <span style="">$39.95</span></div>\n            <ul>\n                <li>Sweet & Sour Pork<br>or<br>Sweet & Sour Chicken</li>\n                <hr>\n                <li>Hunan Beef<i class="fas fa-pepper-hot"></i><br>or<br>Hunan Chicken<i class="fas fa-pepper-hot"></i></li>\n                <hr>\n                <li>Shrimp with Cashew Nuts<br>or<br>Kung Pao Shrimp<i class="fas fa-pepper-hot"></i></li>\n                <hr>\n                <li>Dinner Fried Rice<br>or<br>Steamed Rice</li>\n            </ul>\n        </div>\n        <div style="margin: 10px; border: 1px solid; padding: 10px 20px; width:250px;">\n            <div style="margin-bottom: 20px; font-size: 2.2em; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly; display: flex;">D-4 <span style="">$49.95</span></div>\n            <ul>\n                <li>Sweet & Sour Pork<br>or<br>Sweet & Sour Chicken</li>\n                <hr>\n                <li>Hunan Beef<i class="fas fa-pepper-hot"></i><br>or<br>Hunan Chicken<i class="fas fa-pepper-hot"></i></li>\n                <hr>\n                <li>Shrimp with Cashew Nuts<br>or<br>Kung Pao Shrimp<i class="fas fa-pepper-hot"></i></li>\n                <hr>\n                <li>General Tso\'s Chicken<i class="fas fa-pepper-hot"></i><br>or<br>Orange Chicken<i class="fas fa-pepper-hot"></i></li>\n                <hr>\n                <li>Dinner Fried Rice<br>or<br>Steamed Rice</li>\n            </ul>\n        </div></div>',document.getElementById("menuSectionItems").innerHTML=e,b(document.querySelector(".active-filter").dataset.menuFoodCourse)}();
},{}]},{},["i6s7"], null)
//# sourceMappingURL=/menu.7d8f11ba.js.map