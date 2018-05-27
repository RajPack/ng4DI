import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CatalogService } from "../catalog/catalog.data";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-catalog-item",
  templateUrl: "./catalog-item.component.html",
  styleUrls: ["./catalog-item.component.css"]
})
export class CatalogItemComponent implements OnInit {
  id: number;
  name: string;
  data: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => {
        return this.catalogService.getCatalogItem(params.get("id"));
      })
      .subscribe(data => {
        this.setData(data);
        this.resetEdit();
      });
  }

  setData(data) {
    if (!data) {
      return;
    }
    this.id = data.id;
    this.name = data.name;
    this.data = data.data;
  }
  editCatalogItem() {
    this.router.navigate(
      [{ outlets: { edit: [this.route.snapshot.params.id, "editItem"] } }],
      { relativeTo: this.route.parent }
    );
  }
  resetEdit() {
    this.router.navigate([{ outlets: { edit: null } }], {
      relativeTo: this.route.parent
    });
  }
}
