import {CARPARTS} from './mock';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService(){
    constructor(private  http: Http){}
    getCarParts(){
        return CARPARTS;
    }
}