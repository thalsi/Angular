import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-data-binting',
  templateUrl: './b-data-binting.component.html',
  styleUrls: ['./b-data-binting.component.css']
})
export class BDataBintingComponent implements OnInit {
  name:string='ts file in hardcode';
  buttonDisabled:boolean=false;;
  eventData:string='please click';
  twoWayData:string='two data bainting';

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.buttonDisabled=true;
    }, 1000);

  }
  eventClick(){
    this.eventData='click are working..';
  }

}
