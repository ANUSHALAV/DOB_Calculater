import { Component } from '@angular/core';

@Component({
  selector: 'app-dob-calculater',
  templateUrl: './dob-calculater.component.html',
  styleUrls: ['./dob-calculater.component.css']
})
export class DOBCalculaterComponent {

  date: Date;
  todaydate!: Date;
  dobdate!: Date;
  age: number | undefined;
 

  constructor() {
    this.date = new Date();
  }

  result(): void {
   
    console.log(this.todaydate);
    console.log(this.dobdate);
  
    
    if (this.todaydate && this.dobdate) {
     
      const timeDiff = Math.abs(this.todaydate.getFullYear() - this.dobdate.getFullYear());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
      
      
      console.log(timeDiff);
      
      console.log('Age:', this.age);
    } else {
      
      alert('Both todaydate and dobdate must be provided...');
    }
  }

  calculatebtn() {

    var insertdata={
      todaydate:this.todaydate,
      dobdate:this.dobdate
    }

    this.result();
  }
}
