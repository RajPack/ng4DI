import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from './blog/blog.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  createMode: boolean = false;
  creationSubscription: Subscription;
  creationSubject: Subject<boolean>;
  sampleResponse: any;
  constructor(private blogService: BlogService, private http: HttpClient) {
    this.creationSubject = this.blogService.creationComplete;
  }

  ngOnInit() {
  }

  getData() {
    let promise = this.http.get("/getAllBlogs");
    promise.subscribe((data)=>{
      this.sampleResponse = JSON.stringify(data);
    });
  }

}
