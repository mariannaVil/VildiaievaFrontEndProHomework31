class Hamburger {
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    calculatePrice() {
      let totalPrice = this.size.price + this.stuffing.price;
      for (let topping of this.toppings) {
        totalPrice += topping.price;
      }
      return totalPrice;
    }
  
    calculateCalories() {
      let totalCalories = this.size.calories + this.stuffing.calories;
      for (let topping of this.toppings) {
        totalCalories += topping.calories;
      }
      return totalCalories;
    }
  }
  
  let SIZE_SMALL = { price: 50, calories: 20 };
  let SIZE_LARGE = { price: 100, calories: 40 };
  let STUFFING_CHEESE = { price: 10, calories: 20 };
  let STUFFING_SALAD = { price: 20, calories: 5 };
  let STUFFING_POTATO = { price: 15, calories: 10 };
  
  let TOPPING_MAYO = { price: 20, calories: 5 };
  let TOPPING_SAUCE = { price: 15, calories: 0 };
 
  let hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
 
  hamburger.addTopping(TOPPING_MAYO);
  
  console.log("Calories: " + hamburger.calculateCalories());
  
  console.log("Price: " + hamburger.calculatePrice());

  hamburger.addTopping(TOPPING_SAUCE);

  console.log("Price with sauce:" + hamburger.calculatePrice());