import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/Router";
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class PrivilegedGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loginService.isPrivileged()
            .then((isPriviledged: boolean) => {
                if (isPriviledged) {
                    return true;
                } else {
                    alert("You are not priviledged !! Routing back to Home !!");
                    this.router.navigate(["/login"]);
                }
            });
    }
}
