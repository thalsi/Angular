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
  name;

  //day-2
  strings:string='hi this datas';
  userId:string='user name';
  bindings:string='';

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

  inputTextfun(event:any){
    console.log(event);  
  }

  login(){
    console.log('login');
    
  }
    a;
  changefun(e){
    this.a=e.target.value;
  }
  b;
  modelchangefun(e){
    this.b=e;
  }


}
