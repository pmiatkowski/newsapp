import { Injectable } from '@angular/core';

/**
 * Helps to adjust content's top offset
 */
@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private _elem!: HTMLDivElement;

    /**
     * Provide top-nav element
     */
    public register(elem: HTMLDivElement): void {
        this._elem = elem;
    }

    public async getNavBarHeight(): Promise<number> {
        return this._elem ? this._elem.clientHeight : 0;
    }
}
