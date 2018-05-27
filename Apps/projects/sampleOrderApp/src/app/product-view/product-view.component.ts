import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ResolveData, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {
  @Input() key: string;
  product: any;
  subscription: Subscription;
  purchaseForm: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
   this.subscription = this.route.data.subscribe((resp) => {
      this.product = resp.data;
    });
    this.setFormData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setFormData() {
    this.purchaseForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      quantity: '1',
      additionalInfo: ''
    });
  }

  onSubmit() {
    
    console.log(this.purchaseForm.value);
  }
}
