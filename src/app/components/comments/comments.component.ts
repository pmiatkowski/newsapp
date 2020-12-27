import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent {
    @Input() public comments: App.Comment[] = [];

    public get commentsTitle(): string {
        return `${this.comments.length} Comments`;
    }
}
