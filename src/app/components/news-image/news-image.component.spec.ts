import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsImageComponent } from './news-image.component';

describe('NewsImageComponent', () => {
    let component: NewsImageComponent;
    let fixture: ComponentFixture<NewsImageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewsImageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
