import Event from "node:events";

export class PizzaShop extends Event {
  constructor() {
    super();
    this.ordernumber = 0;
  }

  order(size, topping) {
    this.ordernumber++;
    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log(`Your order number is ${this.ordernumber}`);
  }
}
