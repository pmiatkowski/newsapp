import { ChangeDetectionStrategy, Component, Input, Inject } from '@angular/core';
import { IMAGE_PLACEHOLDER } from '../../tokens';

@Component({
    selector: 'app-hero-image',
    templateUrl: './hero-image.component.html',
    styleUrls: ['./hero-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroImageComponent {
    @Input() public src!: string;

    constructor(@Inject(IMAGE_PLACEHOLDER) private _placeholder: string) {}

    public get imgSource(): string {
        return `url(${this.src ? this.src : this._placeholder})`;
    }
}
