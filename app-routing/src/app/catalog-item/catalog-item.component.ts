import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';
import { CatalogData } from '../catalog/catalog.data';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  id: number;
  name: string;
  data: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.setData(params.id);
    })
  }

  setData(idStr) {
    this.id = +idStr;
    let data = this.filterData(this.id);
    this.name = data.name;
    this.data = data.data;

  }
  filterData(id) {
    let filteredData = CatalogData.filter(
      (item) => {
        return item.id === id ? true : false;
      }
    );
    return filteredData[0];
  }
}
