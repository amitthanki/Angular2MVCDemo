import { Component } from "@angular/core";

@Component({
    templateUrl: 'app/Components/Product.html'
})

export class HomeComponent {
    productList: any[] = [
        {
            'ProductID': 1,
            'ProductName': 'ABC',
            'ProductCode': 'ABC-001',
            'Rating':'4.2'
        },
        {
            'ProductID': 2,
            'ProductName': 'DEF',
            'ProductCode': 'DEF-002',
            'Rating': '3.2'
        }
    ];

  
}