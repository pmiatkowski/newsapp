import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
    public search!: string;
    @Output() public onChanged: EventEmitter<string> = new EventEmitter();
    @Input() public loading: boolean = false;

    constructor() {}

    public handleValueChanged(value: string): void {
        this.onChanged.emit(value);
    }
}
