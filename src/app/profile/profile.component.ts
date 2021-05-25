import { Component, OnInit } from '@angular/core';

import { employee } from '../employees';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  employee = employee;

  // flag to toggle profile collapse
  isCollapsed = false;

  constructor() {}

  ngOnInit() {}
}
