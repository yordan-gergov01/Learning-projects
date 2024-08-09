function delivery (input) {
    let chickenMenus = Number (input[0]);
    let fishMenus = Number (input[1]);
    let vegMenus = Number (input[2]);

    let menusSum = chickenMenus * 10.35 + fishMenus * 12.40 + vegMenus * 8.15;
    let dessert = 0.2 * menusSum;

    let totalPrice = menusSum + dessert
    console.log (totalPrice);

}
delivery (["9", "2", "6"]);