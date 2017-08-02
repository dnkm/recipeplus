import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "icon"
})
export class IconPipe implements PipeTransform {
    transform(charCode: string): string {
        return String.fromCharCode(parseInt(charCode));
    }
}