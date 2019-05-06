import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('userform') userform;

  title = "Template Driven Forms";
  genders =["male", "female"];
  submitForm =(form: NgForm)=>{
     console.log(form.value);
  }
  resetForm = ()=>{
     this.userform.reset();
  }
}
