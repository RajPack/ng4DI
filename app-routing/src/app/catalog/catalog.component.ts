import { Component, OnInit } from '@angular/core';
import { CatalogData } from './catalog.data';
import { ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  private catalogData = CatalogData;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
