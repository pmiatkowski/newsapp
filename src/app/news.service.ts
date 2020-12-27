import { Injectable } from '@angular/core';
import { NewsApiService, TopHeadlinesConfig, TopHeadlinesResponse } from 'angular-news-api';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    private _config: TopHeadlinesConfig = {
        language: 'en',
    };
    constructor(private _newsApiService: NewsApiService) {}

    public getHeadlines(q?: string): Observable<TopHeadlinesResponse> {
        return this._newsApiService.topHeadlines({
            ...this._config,
            q,
        });
    }
}
