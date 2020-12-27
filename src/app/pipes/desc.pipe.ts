import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'desc',
})
export class DescPipe implements PipeTransform {
    private _regExp: RegExp = /<[a-z]+>/gim;

    transform(value: string): any {
        if (!value.match(this._regExp)) {
            return value;
        }

        const nextVal = value.replace(this._regExp, '').split(/<\/[a-z]+>/gim);

        return nextVal.map((paragraph) => `<p>${paragraph}</p>`).join('');
    }
}
