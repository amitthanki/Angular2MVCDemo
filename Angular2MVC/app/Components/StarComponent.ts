import { Component, Input, Output,OnChanges } from '@angular/core';
@Component({
    selector: 'pm-star',
    templateUrl:'app/Components/DesignStarComponent.html'
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5
    }


}