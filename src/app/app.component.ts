import { Component } from '@angular/core';

@Component({
  selector: 'cs-app',
  template:   `<h1>{{title}}</h1><hr/>
              <car-parts></car-parts>`
})


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
export class AppComponent {
  title = 'Ultra Racing';

  carparts = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "instock": 5,
    "price": 299.99
    // "image": "/images/tires.png",
    // "featured":true,
  },
  {
    "id": 2,
    "name": "Super Reinforced Shocks",
    "description": "Shocks made from Kryptonite",
    "instock": 4,
    "price": 199.99
    // "image": "/images/shocks.png",
    // "featured":true,
  }, {
    "id": 3,
    "name": "Super intake",
    "description": "Intake made for the DeathStar",
    "instock": 10,
    "price": 499.99
    // "image": "/images/intake.png",
    // "featured":true,
  }, {
    "id": 4,
    "name": "Super Flo Exhaust",
    "description": "Tension release for the Milenium Falcon",
    "instock": 0,
    "price": 1099.99
    // "image": "/images/exhaust.png",
    // "featured":true,
  }]

  totalCarParts() {

        return this.carparts.reduce((prev, current) => prev + current.instock, 0);
        //return this.carparts.reduce(function(prev,current){return prev + current.inStock},0);

        // let sum = 0;
        // for (let carpart of this.carparts) {
        //   sum += carpart.inStock;
        // }
        // return sum;
    }
}
