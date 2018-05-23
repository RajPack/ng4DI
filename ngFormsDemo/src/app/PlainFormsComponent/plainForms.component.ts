import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    templateUrl: './plainForms.component.html',
    styleUrls: ['./plainForms.component.css'],
    selector: 'app-plain-form'
})
export class PlainFormsComponent {
    nameList: string[] = ['Joe', 'Steve'];
    nameControl: FormControl = new FormControl();
    constructor() {

    }
    onSubmit() {
        const nameVal = this.nameControl.value;
        this.nameList.push(nameVal);
        this.nameControl.setValue('');
    }
}
