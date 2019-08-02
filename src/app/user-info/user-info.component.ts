import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  isDropdownVisible=true;

  @Input() public parentData;
  @Output() headerContent= new EventEmitter();
  searchanyone='find someone';

  constructor() { }

  ngOnInit() {
    this.headerContent.emit('skype for business');
  }
  

  records=[
    {
      name : 'User 1'
    },
    {
      name : 'User 2'
    },
    {
      name : 'User 3'
    }
  ]

}
