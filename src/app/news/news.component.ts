import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NewsService } from '../news.service';
import { Article } from 'angular-news-api';

import { of, Subject, Subscription, timer } from 'rxjs';
import { catchError, debounce, tap } from 'rxjs/operators';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit, OnDestroy {
    private _isSearching: boolean = false;
    public articles: any[] = [];
    public search: string;

    public searchVal$: Subject<string> = new Subject();
    public debouncedListener$: Subscription;

    constructor(private _newsService: NewsService, private _changeDetectorRef: ChangeDetectorRef) {}

    public ngOnInit() {
        this._fetchArticles();

        this.debouncedListener$ = this.searchVal$
            .pipe(
                tap((searchVal) => (this.search = searchVal)),
                debounce(() => timer(500)),
            )
            .subscribe(this._fetchArticles.bind(this));
    }

    public ngOnDestroy(): void {
        this.debouncedListener$.unsubscribe();
    }

    private _fetchArticles(search?: string): void {
        this._toggleLoading(true);
        this._newsService
            .getHeadlines(search)
            .pipe(
                catchError((ex) =>
                    of({
                        status: 'false',
                        articles: [],
                    }),
                ),
            )
            .subscribe((response) => {
                this._toggleLoading(false);
                if (response.status === 'ok') {
                    this.articles = response.articles;

                    if (this.articles.length > 20) {
                        this.articles.length = 20;
                    }
                }

                this._changeDetectorRef.detectChanges();
            });
    }

    private _toggleLoading(show: boolean): void {
        this._isSearching = show;
        this._changeDetectorRef.detectChanges();
    }

    public trackBy(index: number, article: Article): string {
        return article.title;
    }

    public get isLoading(): boolean {
        return this._isSearching;
    }

    public get showNoResults(): boolean {
        return this.isLoading === false && this.articles.length === 0 && Boolean(this.search);
    }
}
