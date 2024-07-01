class BikeRentalService {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.availableBikes = [];
  }

  addBikes(bikes) {

    let result = `Successfully added `;

    for (let index = 0; index < bikes.length; index++) {
      const element = bikes[index];

      let [brand, quantity, price] = element.split("-");
      quantity = +quantity
      price = +price

      let bikesFound = this.availableBikes.findIndex((x) => x.brand === brand);

      if (bikesFound === -1) {
        this.availableBikes.push({ brand, quantity, price });
        result += `${brand}, `;
      } else {
        let bike = this.availableBikes[bikesFound]; 
        bike.quantity += quantity;
        if (price > bike.price) {
          bike.price = price;
        }
      }
    }

    result = result.trim();
    return result.slice(0, result.length - 1);
  }

  rentBikes(selectedBikes) {

    let totalPrice = 0;

    for (let index = 0; index < selectedBikes.length; index++) {
      const element = selectedBikes[index];

      let [brand, quantity] = element.split("-");
      quantity = +quantity

      let bike = this.availableBikes.find((x) => x.brand === brand);

      if (!bike || bike.quantity < quantity) {
        return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
      } else {
        totalPrice += bike.price * quantity;
        bike.quantity -= quantity;
      }
    }
    return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
  }

  returnBikes(returnedBikes) {

    for (let index = 0; index < returnedBikes.length; index++) {
      const element = returnedBikes[index];
      let [brand, quantity] = element.split("-");

      quantity = +quantity;

      let bikeIndex = this.availableBikes.findIndex((x) => x.brand === brand);

      if (bikeIndex === -1) {
        return "Some of the returned bikes are not from our selection.";
      } else {
        if(bikeIndex.quantity < quantity)
        return "Some of the bikes are unavailable or low on quantity in the bike rental service."
        
      }
      this.availableBikes[bikeIndex].quantity += quantity;
    }
    return "Thank you for returning!";
  }
 
  revision() {

    let bikesInfo = "Available bikes:";
    let sorted = this.availableBikes.sort((a, b) => a.price - b.price);

    for (let i = 0; i < sorted.length; i++) {
      const bike = sorted[i];
      bikesInfo += `\n${bike.brand} quantity:${bike.quantity} price:$${bike.price}`;
    }

    bikesInfo += `\nThe name of the bike rental service is ${this.name}, and the location is ${this.location}.`
    bikesInfo = bikesInfo.trim()
    return bikesInfo
  }
  
}
const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5", "Stunt Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
console.log(rentalService.revision())
