import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';
import { Jobs } from 'src/app/models/jobs';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent {
  //title of the component
  componentTitle : string = "Liste de jobs";

  //form
  jobForm : FormGroup;

  //data from service
  jobs : Jobs[] = [];

  constructor(private formBuilder : FormBuilder, private service : JobsService) {
    this.jobForm = this.formBuilder.group({
      id : ['', Validators.required],
      title : ['', Validators.required],
      description : ['', Validators.required],
      dateOfPublish : ['', Validators.required],
      salary : ['', Validators.required],
      location : ['', Validators.required]
    });
  }

  onFormSubmit() {
    let job : Jobs = this.jobForm.value;

    this.setJobs(job);
  }

  ngOnInit() {
    this.service.getJobs().subscribe(jobs => this.jobs = jobs);
  }

  setJobs(currentJobs : Jobs) {
    this.service.addJob(currentJobs);
  }
}
