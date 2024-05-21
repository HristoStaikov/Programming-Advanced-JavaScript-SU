function solve(arrData, sortCriteria) {
    
  let arrTickets = [];

  for (let index = 0; index < arrData.length; index++) {
    const element = arrData[index];

    let [destinationName, price, status] = element.split("|");
    price = Number(price);

    arrTickets.push([destinationName, price, status]);
  }

  class Sort {
    static destination(a, b) {
      return a[0].localeCompare(b[0]);
    }

    static price(a, b) {
      return a[1] - b[1];
    }

    static status(a, b) {
      return a[2].localeCompare(b[2]);
    }
  }

  let sortedByCriteria = arrTickets.sort(Sort[sortCriteria]);

  let result = [];

  for (let i = 0; i < sortedByCriteria.length; i++) {
    const currentTicket = sortedByCriteria[i];

    class Ticket {
      constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
      }
    }

    let ticketArr = new Ticket(currentTicket[0], currentTicket[1], currentTicket[2]);
    result.push(ticketArr);
  }

  return result;
}
let arr = solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "price"
);
