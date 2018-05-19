import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/Router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(
      (frag) => {
        this.handleFragments(frag);
      }
    );
  }
  gotoAbout(path) {
    // do soemting first.. then navigate
    this.router.navigate([path], { relativeTo: this.activatedRoute })
  }

  handleFragments(frag) {
    if(!frag){return}
    document.getElementById(frag).scrollIntoView();
  }
}
