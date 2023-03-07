class transportation{
   constructor(car ,fuel){
    this._car =car;
    this._feul = fuel;
   } 
}
class Toyota extends transportation{
    constructor(fuel){
        //here is the constructor an overiiding the car to min_car;
        super("min_car" ,fuel)
    }
    
}

const min_small = new Toyota('Desel fuel');
console.log(min_small._car)
console.log(min_small._feul)
