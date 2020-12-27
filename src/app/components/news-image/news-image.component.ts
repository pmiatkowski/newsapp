import { ChangeDetectionStrategy, Component, Input, Inject } from '@angular/core';
import { IMAGE_PLACEHOLDER } from '../../tokens';

@Component({
    selector: 'app-news-image',
    templateUrl: './news-image.component.html',
    styleUrls: ['./news-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsImageComponent {
    public isHoveringImage: boolean = false;

    @Input() public width: string = '350';
    @Input() public height: string = '233';
    @Input() public alt!: string;
    @Input() public src!: string;

    constructor(@Inject(IMAGE_PLACEHOLDER) private _placeholder: string) {}

    public handleImageHoverStart(): void {
        /**
         * There is another simpler pure css solution commented out in scss file
         */
        this.isHoveringImage = true;
    }

    public handleImageHoverEnd(): void {
        this.isHoveringImage = false;
    }

    public get imgSource(): string {
        return this.src || this._placeholder;
    }
}
