import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutService } from './layout.service';
import { slideInAnimation } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
    public title = 'News';
    public article = false;
    @ViewChild('topNav') public topNav: ElementRef<HTMLDivElement>;

    constructor(public router: Router, private _layoutService: LayoutService) {
        router.events.subscribe(() => {
            if (router.url.startsWith('/article')) {
                this.article = true;
            } else {
                this.article = false;
            }
        });
    }

    public ngOnInit() {
        if (this.topNav) {
            this._layoutService.register(this.topNav.nativeElement);
        }
    }

    public prepareRoute(outlet: RouterOutlet): any {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }

    public goBack(): void {
        window.history.back();
    }
}
