import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
    loggedIn = false;
    privilegedUser = false;
    redirectURL: string;

    constructor(private router: Router) {
    }

    isPrivileged(): Promise<boolean> {
        const promise: Promise<boolean> = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.privilegedUser);
            }, 500);
        });
        return promise;
    }

    login(username: string, password: string, redirectURL?: string) {
        this.loggedIn = true;
        if (username === "admin") {
            this.privilegedUser = true;
        }
        this.redirectPendingURL();
    }
    setRedirectURL (url) {
        this.redirectURL = url;
    }
    redirectPendingURL () {
        const url = this.redirectURL ? this.redirectURL : "/";
        this.redirectURL = null;
        this.router.navigate([url]);
    }
    logout() {
        this.loggedIn = false;
        this.privilegedUser = false;
    }
}
