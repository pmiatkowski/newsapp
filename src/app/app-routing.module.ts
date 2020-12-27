import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { ArticleGuard } from './article.guard';

const routes: Routes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    { path: 'news', component: NewsComponent, data: { animation: 'NewsComponent' } },
    {
        path: 'article',
        component: NewsDetailComponent,
        data: { animation: 'NewsDetailComponent' },
        canActivate: [ArticleGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
