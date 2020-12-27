import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ArticleGuard implements CanActivate {
    constructor(private _router: Router) {}

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this._router.getCurrentNavigation().extras.state) {
            return this._router.navigate(['/']);
        }

        return true;
    }
}
