import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TDDkata';
  add(numbers:string) :number {
    let delimiter = /[\n,]/
    if(numbers.length == 0 ){
      return 0;
    }
    else{
      let a=numbers.split(delimiter);
      console.log(numbers)
      let sum = 0;
      for(let i=0;i<a.length;i++){
        sum = sum + parseInt(a[i]);
      }
      return sum
    }
   
  }
}
