import { Component, OnInit } from '@angular/core';
import { RealApiData } from '../types';
import { HttpClient } from '@angular/common/http';
import { urls } from '../url';
import { environment } from '../../environments/environment';
import { CentralizedServiceService } from '../centralized-service.service';

@Component({
  selector: 'app-middleware',
  templateUrl: './middleware.component.html',
  styleUrls: ['./middleware.component.scss']
})
export class MiddlewareComponent implements OnInit {

  users: RealApiData[];

  constructor(private http: HttpClient, private service: CentralizedServiceService) { }

  ngOnInit() {
    this.http.get(environment.apiUrl + urls.apiUrl).subscribe((res: RealApiData[]) => {
      this.users = res;
      this.service.users = this.users;
    });
  }

}
