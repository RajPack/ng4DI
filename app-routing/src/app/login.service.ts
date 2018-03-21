export class LoginService {
    loggedIn = false;
    privilegedUser = false;

    isPrivileged (): Promise<boolean> {
        const promise: Promise<boolean> = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(this.privilegedUser);
            }, 500);
        });
        return promise;
    }

    login() {

    }
    logout () {

    }
}