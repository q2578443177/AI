import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'url',
})
export class UrlPipe implements PipeTransform {

	transform(value: string, ...args) {
		return `../../assets/imgs/avatar/${value}.png`;
	}
}
