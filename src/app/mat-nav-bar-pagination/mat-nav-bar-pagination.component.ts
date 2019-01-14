import { Component, ElementRef, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, AfterContentChecked } from '@angular/core';

const SCROLL_JUMP: number = 100;    //scroll jump counter

@Component({
    selector: 'mat-nav-bar-pagination',
    templateUrl: './mat-nav-bar-pagination.component.html',
    styleUrls: ['./mat-nav-bar-pagination.component.css'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatNavBarPaginationComponent implements AfterContentChecked {

    @ViewChild('scrollMe') private scrollContainer: ElementRef;

    public disableScrollEnd: boolean = true;    //End scroll button is disabled
    public disableScrollStart: boolean = true;    //Start scroll button is disabled


    constructor() {
    }

    scrollLeft(): void {
        this.scrollContainer.nativeElement.scrollLeft -= SCROLL_JUMP;
        this.checkScrollButtons();
    }

    scrollRight(): void {
        this.scrollContainer.nativeElement.scrollLeft += SCROLL_JUMP;
        this.checkScrollButtons();
    }

    ngAfterContentChecked(): void {
        this.checkScrollButtons();
    }
    /**
     * Check if the scroll buttons is active.
     */
    checkScrollButtons(): void {
        this.disableScrollStart = this.scrollContainer.nativeElement.scrollLeft == 0;
        this.disableScrollEnd = this.scrollContainer.nativeElement.scrollLeft == this.getMaxScrollDistance();
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance.
     */
    getMaxScrollDistance(): number {
        let lengthOfTabList = this.scrollContainer.nativeElement.scrollWidth;
        let viewLength = this.scrollContainer.nativeElement.offsetWidth
        return (lengthOfTabList - viewLength) || 0;
    }

}
