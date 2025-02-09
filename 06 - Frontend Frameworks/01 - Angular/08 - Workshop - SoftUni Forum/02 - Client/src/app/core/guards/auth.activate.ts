import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable()
export class AuthActivate implements CanActivate {
    constructor(private router: Router, private userService: UserService) {
        console.log('in auth activate constructor');
        
    }
    
    canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const { authRequired, authFailureRedirectUrl } = route.data;
        if (typeof authRequired == 'boolean' &&
            authRequired == this.userService.isLogged) {
                console.log('in auth activate 1');
            return true;
        }

        let authRedirectUrl = authFailureRedirectUrl;
        if (authRequired) {
            const previousUrl = route.url.reduce((acc, s) => `${acc}/${s.path}`, '');
            console.log('in auth activate 2');
            
            authRedirectUrl += `?redirectUrl=${previousUrl}`;
        }
        return this.router.parseUrl(authRedirectUrl || '/');
    }
}