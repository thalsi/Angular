import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-template-syntax',
  templateUrl: './b-template-syntax.component.html',
  styleUrls: ['./b-template-syntax.component.css']
})
export class BTemplateSyntaxComponent implements OnInit {
  propartyBaintingButton:boolean=true;
  propartyBanitingId:string='inputID';
  propartyTitle:string='user name';
  binding:string;
  classNameb='b';
  propartyColorStyple="green";


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.propartyBaintingButton=false;
    }, 1000);
  }

  getStringInterpulation(){
    return 'retun string';
  }

  clicks(){
    console.log("hii click event");
  }

  ClickEvents(event){
    console.log(event);
    
  }
  OnClicks(){
    console.log('onClick event');
    
  }

  passData(value){
    console.log(value);
    
  }
}
