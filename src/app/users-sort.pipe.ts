import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersSort'
})
export class UsersSortPipe implements PipeTransform {

  transform(users: any[], ...args: unknown[]): any[] {
 users.sort((u1,u2)=>u1.age - u2.age);  
 return users;
  }

}
