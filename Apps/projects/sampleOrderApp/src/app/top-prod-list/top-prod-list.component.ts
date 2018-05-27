import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../data/prod.interface';
import { TopProdService } from '../services/top-prod.service';

@Component({
  selector: 'app-top-prod-list',
  templateUrl: './top-prod-list.component.html',
  styleUrls: ['./top-prod-list.component.css']
})
export class TopProdListComponent implements OnInit {
  topItems: Observable<Product[]>;
  constructor(private topProdService: TopProdService) { }

  ngOnInit() {
    this.topItems = this.topProdService.getTopProdList();
  }

}
