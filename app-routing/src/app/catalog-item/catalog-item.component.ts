import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';
import { CatalogService } from '../catalog/catalog.data';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  id: number;
  name: string;
  data: string;
  constructor(private route: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit() {

    this.route.paramMap.switchMap((params) => {
      return this.catalogService.getCatalogItem(params.get('id'));
    }).subscribe(this.setData.bind(this));
  }

  setData(data) {
    if (!data) { return; }
    this.id = data.id;
    this.name = data.name;
    this.data = data.data;

  }
}
