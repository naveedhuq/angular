import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let newValue:string = '';
    let wordCount:number = 0;
    
    value.split(' ').forEach(word => {
      wordCount ++;
      if (wordCount>1 && this.isPreposition(word))
        newValue += `${word.toLowerCase()} `;
      else
        newValue += `${this.toTitleCase(word) } `;
    });
    return newValue.trim();
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];
    return (prepositions.includes(word.toLowerCase()));
  }

  private toTitleCase(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
