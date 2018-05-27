import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from "@angular/core";
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
                    this.loginService.setRedirectURL(state.url);
                    this.router.navigate(["/login"] );
                }
            });
    }
}
interface CanDeactivateComponent {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable() 
export class PrivilegedDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
    constructor(private router: Router) {}
    canDeactivate(component: CanDeactivateComponent) {
        console.log("inside can deactivate !!")
        return component.canDeactivate ? component.canDeactivate() : true;
    }

}