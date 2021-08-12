import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  queryField: FormControl = new FormControl();

  constructor() {
    
  }

  ngOnInit() {
    this.queryField.valueChanges.subscribe( result => console.log(result));
  }  
}
