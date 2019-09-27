import { Injectable } from '@angular/core';
import { RealApiData, User, SingleUserData } from './types';

@Injectable({
  providedIn: 'root'
})
export class CentralizedServiceService {

  public users: RealApiData[];
  public allUsers: User[];
  public singleUser: SingleUserData;

  constructor() { }
}
