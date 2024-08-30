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
      let sum = 0;
      for(let i=0;i<a.length;i++){
        const num = parseInt(a[i],10);
        if (!isNaN(num)) {
            sum += num;
          }
        }
      return sum
    }
   
  }
 
}
