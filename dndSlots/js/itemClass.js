class baseItem {
    constructor(rarity = 0, slots = undefined){
        this.rarity = rarity;
        this.slots = {};
        if(slots == undefined){
            console.log("test");
            for(let i = 0; i < rarity + 1; i++){
                
            }
        } else {
            this.slots = slots;
        }
        
    }
}