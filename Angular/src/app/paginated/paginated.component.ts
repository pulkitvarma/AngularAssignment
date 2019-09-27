import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RealApiData, User, ConcatenatedData, SingleUserData } from '../types';
import { forEach } from '@angular/router/src/utils/collection';
import { CentralizedServiceService } from '../centralized-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number;
  email: string;
  name: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-paginated',
  templateUrl: './paginated.component.html',
  styleUrls: ['./paginated.component.scss']
})

export class PaginatedComponent implements OnInit {

  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;

  constructor(private service: CentralizedServiceService, private router: Router, private http: HttpClient) { }

  public data: ConcatenatedData[] = [];

  displayedColumns: string[] = ['no', 'id', 'name', 'email', 'title', 'completed'];

  dataSource: any;

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      const dummy = {
        no: i,
        id: this.service.allUsers[i].id + 1,
        name: this.service.allUsers[i].name,
        email: this.service.allUsers[i].email,
        title: this.service.users[i].title,
        completed: this.service.users[i].completed,
      };
      this.data.push(dummy);
    }
    this.dataSource = new MatTableDataSource<ConcatenatedData>(this.data);
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  getTitle(index: number) {
    this.http.get('https://jsonplaceholder.typicode.com/todos/' + index).subscribe((res: SingleUserData) => {
      this.service.singleUser = res;
      this.router.navigate(['/display']);
    });

  }
}
