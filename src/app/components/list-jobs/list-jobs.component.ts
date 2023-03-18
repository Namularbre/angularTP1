import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent {
  //title of the component
  componentTitle : string = "Liste de jobs";

  //reactive forms control
  id = new FormControl('');
  title = new FormControl('');
  description = new FormControl('');
  dateOfPublish = new FormControl(`${new Date()}`);
  salary = new FormControl('');
  location = new FormControl('');

  constructor(private formBuilder : FormBuilder) {}
}
