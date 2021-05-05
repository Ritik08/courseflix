import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

users=[{
"name":"kishore",
"age":25}
,
{
"name":"kishore",
"age":25}
,
{
"name":"kishore",
"age":25}
,
{
"name":"kishore",
"age":25}
]

fetchAllUsers():any[]
{return this.users;
}
}
