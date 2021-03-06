import { Component } from "@angular/core";
import { LoginService } from "../login.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login-component.html",
    styleUrls: ["./login-component.css"]
})
export class LoginComponent {
    loginForm: FormGroup;
    login: boolean;
    priviledgedLogin: boolean;
    constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
        this.createForm();
    }
    createForm() {
        this.loginForm = this.formBuilder.group({
            userid: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    onSubmit() {
       const userid = this.loginForm.get("userid");
       const password  = this.loginForm.get("password");
        this.loginService.login(userid.value, password.value);
        this.login = this.loginService.loggedIn;
        this.priviledgedLogin = this.loginService.privilegedUser;
    }
    updateProperties () {

    }
}
