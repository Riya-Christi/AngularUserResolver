import { Injectable } from '@angular/core';
import { UsersListService } from './../service/users-list.service';
import { Resolve } from '@angular/router';

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class RouteResolver implements Resolve<any> {
   constructor(public usersListService: UsersListService) { }

   resolve() {
      return this.usersListService.getUsers().pipe(
         catchError((error) => {
            return of('No data');
         })
      )
   }
}
