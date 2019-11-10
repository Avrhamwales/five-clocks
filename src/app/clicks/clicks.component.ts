import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})
export class ClicksComponent  {
  time : String;
  @Input() city:string;
  @Input() diff_H:number=0;

  constructor() { 
    this.clock;
    setInterval(()=>this.clock(),1000);
  }
  clock(){
    let d = new Date();
    let t = (d.getHours()+this.diff_H*1)+":"+d.getHours()+":"+d.getSeconds();
    this.time=t;
  }
  

}