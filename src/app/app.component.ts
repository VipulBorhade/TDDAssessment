import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TDDkata';
  escapeSpecialChars(delimiter: string): string {
    return delimiter.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
  add(numbers:string) :number {
    
    if(numbers.length == 0 ){
      return 0;
    }
    else{
      let delimiter = /[\n,]/
      if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        if (delimiterLineEnd === -1) {
          throw new Error("Invalid input format");
        }
        const delimiterLine = numbers.substring(2, delimiterLineEnd);
        delimiter = new RegExp(this.escapeSpecialChars(delimiterLine));
        numbers = numbers.substring(delimiterLineEnd + 1);
      }
      console.log(delimiter)
      let a=numbers.split(delimiter);
      console.log(numbers)
      const negatives: number[] = [];
      let sum = 0;
      for(let i=0;i<a.length;i++){
        const num = parseInt(a[i],10);
        if (!isNaN(num)) {
          if (num < 0) {
            negatives.push(num);
          } else {
            sum += num;
          }
          }
        }
        if (negatives.length > 0) {
          throw new Error("negative numbers not allowed " + negatives.join(","));
        }
      return sum
    }
   
  }
 
}
