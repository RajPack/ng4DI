import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuProdService } from './services/menu-prod.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navItems: any;
  currentMenuKey: string;
  showMenu: boolean;
  constructor(private menuService: MenuProdService) {}
  ngOnInit() {
    this.menuService.getNavBarMenu().subscribe((data) => {
      this.navItems = data;
    });
  }
  menuEnter(event) {
    const el = event.target;
    const keyVal = el.attributes.key.value;
    this.currentMenuKey = keyVal;
    this.changedNavitemClass(this.currentMenuKey);
    this.showMenu = true;
  }
  changedNavitemClass(key) {
    this.navItems.forEach((item) => {
      item.hovered = item.key === key ? true : false;
    });
  }
}
