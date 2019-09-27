import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { User, Query } from '../types';
import { GraphQlService } from './graph-ql.service';
import { CentralizedServiceService } from '../centralized-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private users: Observable<User[]>;
  public allUsers: User[];
  constructor(private apollo: Apollo, private graphQlService: GraphQlService, private service: CentralizedServiceService) { }

  ngOnInit() {
    this.graphQlService.getAllUsersFromGrapQl().subscribe(res => {
      this.allUsers = res;
      this.service.allUsers = this.allUsers;
    });
  }

}
