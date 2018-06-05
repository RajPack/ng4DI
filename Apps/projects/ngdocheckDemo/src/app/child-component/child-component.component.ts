import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  DoCheck,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent implements OnInit, DoCheck {
  // tslint:disable-next-line:no-input-rename
  @Input("in") parentObj: any;
  prevName: string;
  message: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    console.log(this.parentObj);
  }

  ngDoCheck() {
    if (this.prevName && this.parentObj.name !== this.prevName) {
      this.message = `Caught the name change ${this.prevName} to ${
        this.parentObj.name
      }. I have updated the name in child component after 2 seconds`;
      setTimeout(() => {
        this.cd.detectChanges();
        this.prevName = this.parentObj.name;
      }, 2000);
      return;
    }
    
    this.message = '';
    this.prevName = this.parentObj.name;
    console.log(this.parentObj.name);
  }
}
