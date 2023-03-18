import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jobs } from '../models/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private _jobs : Jobs[] = [
    {
      id : 1,
      title : "Développeur C++/Qt",
      description : "C pour une app tkt",
      dateOfPublish : new Date(2023, 18, 3),
      location : "Nantes",
      salary : "35k"
    },
    {
      id : 2,
      title : "Développeur JavaScript",
      description : "C pour une app tkt",
      dateOfPublish : new Date(2023, 25, 3),
      location : "Toulouse",
      salary : "25k"
    },
    {
      id : 3,
      title : "Développeur TypeScript",
      description : "C pour une app tkt",
      dateOfPublish : new Date(2023, 4, 3),
      location : "Limoges",
      salary : "150k"
    }
  ];

  constructor() { }

  //of create an observable taking data from the array above
  getJobs() : Observable<Jobs[]> {
    return of(this._jobs);
  }

  addJob(job : Jobs) {
    this._jobs.push(job);
  }
}
