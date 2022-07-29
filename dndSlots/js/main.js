function test(){
    
    // let items = new Map();
    // let colors = new Map();
    // colors[slotColor.colors.red] = "testing";
    // colors[slotColor.colors.blue] = "testing blue";
    // items[itemType.Type.weapon] = colors;
    // items[itemType.Type.armor] = colors;
    
    // tst = new gem("fire", 3, 1, items);
    // console.log(tst);
    armor = new item(itemType.types.armor, 4, 0.7);
    weapon = new item(itemType.types.weapon, 2, 0.3);
    console.log(armor);
    console.log(weapon);
}