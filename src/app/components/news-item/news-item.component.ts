import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'angular-news-api';

@Component({
    selector: 'app-news-item',
    templateUrl: './news-item.component.html',
    styleUrls: ['./news-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsItemComponent {
    @Input() public item!: Article;
    @Output() public onClicked: EventEmitter<Article> = new EventEmitter();

    constructor(private _router: Router) {}

    public handleSourceClick($event: MouseEvent): void {
        window.open(this.item.url, '_blank').focus();
    }

    public handleImageClick(article: Article): void {
        /**
         * Example of handling route state programmatically
         */
        this._router.navigate(['/article'], { state: { article } });
    }
}
