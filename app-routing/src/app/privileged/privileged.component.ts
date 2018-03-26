import { Component, OnInit } from '@angular/core';
import { CanDeactivate, ActivatedRoute } from '@angular/Router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-privileged',
  templateUrl: './privileged.component.html',
  styleUrls: ['./privileged.component.css']
})
export class PrivilegedComponent implements OnInit, CanDeactivate<boolean> {
  data: any;
  constructor(private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data)=> {
      this.data = data.privilegedData;
    });
  }
  canDeactivate () {
    let confirmResult = window.confirm("Are you sure you must navigate away from the priviledged page ? You will be auto logged off the moment you leave");
    return confirmResult ? (this.loginService.logout() || true ) : false;
  }

}
