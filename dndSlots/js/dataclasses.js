//itemType is a dataclass to make adding item types easier
class itemType {
    static Type = {"weapon":"weapon", "armor":"armor", 
                    "accessory":"accessory", "wonderous":"wonderous", 
                    "staff":"staff"};

    static validateItem(input){
        if(this.Type[input] !== undefined){
            return true;
        }
        return false;
    }
}

//slotColor is a dataclass to make adding colors to slots and gems easier
class slotColor {
    static colors = {"red":"red" , "blue":"blue", "green":"green"};

    static validateColor(input){
        if(this.colors[input] !== undefined){
            return true;
        }
        return false;
    }

    static randomColor(){
        let clr = [this.colors.blue, this.colors.red];
        return clr[Math.floor(Math.random() * 2)];
    }
}

class gemList {
    static list = [];

}