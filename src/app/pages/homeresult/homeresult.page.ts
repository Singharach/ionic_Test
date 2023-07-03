import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homeresult',
  templateUrl: './homeresult.page.html',
  styleUrls: ['./homeresult.page.scss'],
})
export class HomeresultPage implements OnInit {
  x: any;
  y: any;
  z: any;
  a: any;
  tmpparam: any;
  constructor(public ar: ActivatedRoute) { }

  ngOnInit() {
    // this.x  = this.ar.snapshot.paramMap.get('name');
    // this.y  = this.ar.snapshot.paramMap.get('head');
    // this.z  = this.ar.snapshot.paramMap.get('content');
    // this.a  = this.ar.snapshot.paramMap.get('dt');
    this.tmpparam = this.ar.snapshot.paramMap.get('dataobj');
    let getobj = JSON.parse(this.tmpparam);
    this.x = getobj["getname"];
    this.y = getobj["gethead"];
    this.z = getobj["getcontent"];
    this.a = getobj["getdt"];

    // console.log("X=",this.x)
    // console.log("X=",this.y)
    // console.log("X=",this.z)
    // console.log("X=",this.a)
  }

}
