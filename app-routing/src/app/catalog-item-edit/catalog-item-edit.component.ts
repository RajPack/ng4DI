import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-catalog-item-edit',
  templateUrl: './catalog-item-edit.component.html',
  styleUrls: ['./catalog-item-edit.component.css']
})
export class CatalogItemEditComponent implements OnInit {
  itemId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.itemId = params.id
    });
  }

}
