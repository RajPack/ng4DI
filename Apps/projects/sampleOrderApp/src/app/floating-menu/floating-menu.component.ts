import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MenuProdService } from '../services/menu-prod.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.css']
})
export class FloatingMenuComponent implements OnInit, OnChanges {
  @Input() key: string;
  hide = false;
  floatingItems: Observable<string[]>;
  constructor(private menuService: MenuProdService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.floatingItems = this.menuService.getFloatingMenuItems(this.key);
    this.hide = false;
  }
  onLeave() {
    this.hide = true;
  }
}
