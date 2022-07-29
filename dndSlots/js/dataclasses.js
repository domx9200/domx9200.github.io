//itemType is a dataclass to make adding item types easier
class itemType {
    static types = {"weapon":"weapon", "armor":"armor", "accessory":"accessory", "wonderous":"wonderous", "staff":"staff"};

    static validateItem(input){
        if(this.types[input] !== undefined){
            return true;
        }
        return false;
    }
}

class itemRates {
    static rates
}

//slotColor is a dataclass to make adding colors to slots and gems easier
class colorList {
    static colors = {"red":"red" , "blue":"blue", "green":"green"};

    static validateColor(input){
        if(this.colors[input] !== undefined){
            return true;
        }
        return false;
    }

    // randomColor takes in a rate to represent how often the first color will show up
    static randomColor(rate = 0.5, clrs = [this.colors.blue, this.colors.red]){
        if(clrs.length != 2){
            console.log("input of clrs in randomColor must be 2.");
            return null;
        }
        return (Math.random() <= rate) ? clrs[0] : clrs[1];
    }
}

class gemList {
    static list = [];

}