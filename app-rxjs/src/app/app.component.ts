import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from './blog/blog.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  createMode: boolean = false;
  creationSubscription: Subscription;
  creationSubject: Subject<boolean>;
  constructor(private blogService: BlogService) {
    this.creationSubject = this.blogService.creationComplete;
  }

  ngOnInit() {
    this.creationSubscription = this.creationSubject.subscribe((complete) => {
      if (complete) {
        this.exitCreateMode();
      }
    });
  }
  enterCreateMode() {
    this.createMode = true;
  }
  exitCreateMode() {
    this.createMode = false;
  }

  ngOnDestroy() {
    this.creationSubscription.unsubscribe();
  }
}
