class gem {
    // input is as follows:
    // name: string, represents the name of the Core
    // level: int, represents the max level of the Core, used only when randomly generating loot tables with Cores
    // requiredSlots: int, represents the number of slots required for this Core to work.
    
    // effectList: {{itemType : {color : effect}}}
    //      itemType is one of the types within the itemType dataclass
    //      color is one of the colors within the slotColor dataclass
    //      effect is the effect for that item type and color, this must be a string
    //  example input: {itemType.weapon: {slotColor.red: "Fire adds an additional 1d4/6/8 fire damage to any weapon applied to it."}}

    // incompatableList: {gem names} hash set that represents the gems that cannot be slotted together.
    constructor(name, level, requiredSlots, effectList, incompatableList = {}){
        // name type validation
        if(typeof(name) != "string"){
            console.log("Input name isn't a string. defaulting name to null.");
            this.name = 'null';
        } else {
            this.name = name;
        }

        // level type validation
        if(typeof(level) != "number"){
            console.log("Input level isn't a number, defaulting to 1.");
            this.level = 1;
        } else {
            this.level = level;
        }

        // requiredSlots type validation
        if(typeof(requiredSlots) != 'number'){
            console.log("Input required slots isn't a Number. defaulting to 1");
            this.requiredSlots = 1;
        } else {
            this.requiredSlots = requiredSlots;
        }
        this.effectList = this.validateEffectList(effectList);
    }

    validateEffectList(effectList){
        let retList = new Map();
        for(let k in effectList){
            if(itemType.validateItem(k)){
                retList[k] = new Map();
                for(let i in effectList[k]){
                    if(colorList.validateColor(i)){
                        if(typeof(effectList[k][i]) != "string"){
                            console.log("effect at item type " + k + " and color " + i + " is not a string, ignoring.");
                        } else {
                            retList[k][i] = effectList[k][i];
                        }
                    } else {
                        console.log("color " + i + " for item " + k + " is not a valid color. ignoring.");
                    }
                }
            } else {
                console.log("item " + k + "is not a valid item. ignoring.");
            }
        }
        return retList;
    }
}

class Slot {
    constructor(item, color = colorList.colors.red, gem = undefined){
        this.filled = false;
        this.setColor(color);
        if(gem == undefined){
            this.gem = gem;
        } else {
            this.setGem(item, gem);
        }
        this.updateFilled();
    }

    setColor(newColor){
        if(colorList.validateColor(newColor)){
            this.color = newColor;
            return true;
        }
        console.log("slot.setColor: color given is not one of the defined colors. defaulting to red.");
        this.color = colorList.colors.red;
    }

    setGem(item, newGem){
        if(this.filled){
            console.log("slot.setGem: this slot already has a gem in it.");
            this.gem = undefined;
            return false;
        }

        if(!itemType.validateItem(item)){
            console.log("slot.setGem: the item given is invalid.");
            this.gem = undefined;
            return false;
        }

        if(typeof(newGem) != "gem"){
            console.log("slot.setGem: input is not a gem, cannot place in slot.");
            this.gem = undefined;
            return false;
        }

        if(!newGem.effectList[item][this.color]){
            console.log("slot.setGem: gem doesn't have valid effect for this color and item combination.");
            this.gem = undefined;
            return false;
        }

        this.gem = newGem;
        return true;
    }

    updateFilled(){
        this.filled = (this.gem != undefined) ? true : false;
    }

    removeGem(){
        this.gem = undefined;
        this.filled = false;
    }
}