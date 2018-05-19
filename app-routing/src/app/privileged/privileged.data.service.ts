import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/Router';

const secretData = {
    tokenName: "Hollywood Specials",
    value: "Sean Connery is the best James bond so far"
}
export class PrivilegeDataService implements Resolve<Observable<any>> {
    getPrivilegedData () : Observable<any> {
        let dataObservable : Observable<any> = Observable.create( (observer: Observer<any>)=>{
            setTimeout(()=>{
                observer.next(secretData);
                observer.complete();
            }, 1000 );
        });
        return dataObservable;
    }

    resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.getPrivilegedData();
    }
}