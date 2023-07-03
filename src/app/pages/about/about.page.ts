import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular/providers/alert-controller';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  productlist: any;
  constructor(private alertCtrl: AlertController) {
    this.productlist = [
      {
        id: 1,
        productname: "Perfume",
        price: "1055",
        icon: "https://img.icons8.com/color/48/perfume-bottle.png"
      },
      {
        id: 2,
        productname: "Shampoo",
        price: "355",
        icon: "https://img.icons8.com/color/48/shampoo.png"
      },
      {
        id: 3,
        productname: "Nail Polish",
        price: "125",
        icon: "https://img.icons8.com/color/48/nail-polish.png"
      }
    ];

  }

  ngOnInit() {
  }

  async showedit(item: any) {
    let alert = this.alertCtrl.create({
      header: 'Edit',
      subHeader: "Fill the form",
      inputs: [
        {
          name: 'inpname',
          placeholder: 'product name',
          value: item.productname
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {

          }
        }
      ]
    });
    (await alert).present();
  }
}
