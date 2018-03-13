import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog/blog.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  createMode: boolean = false;
  creationSubject: Subject<boolean>;
  constructor(private blogService: BlogService){
    this.creationSubject = this.blogService.creationComplete;
  }

  ngOnInit(){
    this.creationSubject.subscribe((complete) => {
      if(complete){
        this.exitCreateMode();
      }
    })
  }
  enterCreateMode(){
    this.createMode = true;
  }
  exitCreateMode(){
    this.createMode = false;
  }
}
