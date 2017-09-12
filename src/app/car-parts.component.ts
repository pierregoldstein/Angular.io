import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mock';
import { RacingDataService } from './racing-data.services';

@Component({
    selector: 'car-parts',
    templateUrl: 'car-parts.component.html',
    styleUrls: ['car-parts.component.css']
})

export class CarPartsComponent {
    title = 'Ultra Racing';

    carparts: CarPart[];

    constructor(private racingDataService: RacingDataService) { }

    ngOnInit() {
        //this.carparts = CARPARTS;
        let racingDataService = new RacingDataService();
        this.racingDataService.getCarParts().
            subscribe(carparts => this.carparts = carparts);
    }

    totalCarParts() {
        //return this.carparts.reduce(function(prev,current){return prev + current.inStock},0);
        return this.carparts.reduce((prev, current) => prev + current.instock, 0);
        let sum = 0;
        if (Array.isArray(this.carparts)) {
            for (let carpart of this.carparts) {
                sum += carpart.inStock;
            }
        }
        return sum;
    }
    upQuantity(carPart) {
        if (carPart.quantity > carPart.instock) carPart.quantity++;
    }
    downQuantity(carPart) {
        while (carPart.instock > 0) { carPart.quantity--; }
    }
}