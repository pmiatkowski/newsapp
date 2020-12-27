import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
} from '@angular/material';
import { NgnewsModule } from 'angular-news-api';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsImageComponent } from './components/news-image/news-image.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { IMAGE_PLACEHOLDER } from './tokens';
import { DescPipe } from './pipes/desc.pipe';
import { CommentsComponent } from './components/comments/comments.component';
import { ContainerComponent } from './components/container/container.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

const newsApiKey = '55979bc1b2994289a73477060ee4f864';

@NgModule({
    declarations: [
        AppComponent,
        NewsDetailComponent,
        NewsComponent,
        NewsItemComponent,
        NewsImageComponent,
        HeroImageComponent,
        DescPipe,
        CommentsComponent,
        ContainerComponent,
        SearchInputComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgnewsModule.forRoot({
            key: newsApiKey,
        }),
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
    ],
    providers: [{ provide: IMAGE_PLACEHOLDER, useValue: '/assets/images/placeholder.jpg' }],
    bootstrap: [AppComponent],
})
export class AppModule {}
