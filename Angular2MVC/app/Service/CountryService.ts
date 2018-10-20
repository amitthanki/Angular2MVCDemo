import { Component,Injectable } from '@angular/core';
import { Country } from '../Model/Country';
import { State } from '../Model/State';

@Injectable()
export class CountryState {
    getCountries() {
        return [
            new Country(1, 'India'),
            new Country(2, 'US'),
            new Country(3, 'Other'),
          ];
    }
    getStatus() {
        return [
            new State(1, 1, 'New Delhi'),
            new State(2, 1, 'Maharashtra'),
            new State(3, 1, 'Goa'),  
            new State(4, 2, 'Alabama'),
            new State(5, 2, 'Alaska'),
            new State(6, 2, 'Arizona'),  
        ];
    }
}