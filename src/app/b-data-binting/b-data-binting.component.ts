import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-data-binting',
  templateUrl: './b-data-binting.component.html',
  styleUrls: ['./b-data-binting.component.css']
})
export class BDataBintingComponent implements OnInit {
  name:string='ts file in hardcode';
  constructor() { }

  ngOnInit(): void {
  }

}
