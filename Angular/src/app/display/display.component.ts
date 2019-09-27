import { Component, OnInit } from '@angular/core';
import { CentralizedServiceService } from '../centralized-service.service';
import { SingleUserData } from '../types';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private service: CentralizedServiceService) { }

  user: SingleUserData;

  ngOnInit() {
    this.user = this.service.singleUser;
  }

}
