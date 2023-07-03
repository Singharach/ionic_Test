import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  name: any;
  head: any;
  content: any;
  dt: any;
  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }

  gotonext(){
    // this.router.navigate(['homeresult', 
    //    this.name , this.head , this.content , this.dt]);
    let dataobj={
      getname:this.name,
      gethead:this.head,
      getcontent:this.content,
      getdt:this.dt
    };
    let datastr = JSON.stringify(dataobj);
    this.router.navigate(['homeresult',datastr])
  }

}
