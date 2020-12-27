import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, Input } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
    @Input() public topOffset: number = 0;
    @ViewChild('container') public container: ElementRef<HTMLDivElement>;

    constructor(private _layoutService: LayoutService) {}

    public ngAfterViewInit() {
        if (this.container) {
            this._layoutService.getNavBarHeight().then((height) => {
                this.container.nativeElement.style.paddingTop = `${height + this.topOffset}px`;
            });
        }
    }
}
