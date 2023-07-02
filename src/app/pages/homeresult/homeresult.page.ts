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
  constructor(public ar: ActivatedRoute) { }

  ngOnInit() {
    this.x  = this.ar.snapshot.paramMap.get('name');
    this.y  = this.ar.snapshot.paramMap.get('head');
    this.z  = this.ar.snapshot.paramMap.get('content');
    this.a  = this.ar.snapshot.paramMap.get('dt');
  }

}
