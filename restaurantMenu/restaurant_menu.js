const breakfastMenu = ["Pancakes- $12", "Eggs Benedict- $22.99", "Oatmeal- $21.99", "Frittata- $15"];
const mainCourseMenu = ['Steak- $100', 'Pasta- $75.99', 'Burger- %29.99', 'Salmon- $49.99'];
const dessertMenu = ['Cake- $18.99', 'Ice Cream- $12.99', 'Pudding- $16.99', 'Fruit Salad- $9.99'];

// Generate HTML for breakfast menu items
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

// Generate HTML for main course menu items
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Generate HTML for dessert menu items
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
