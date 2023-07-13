import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


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
        productname: "Grilled Chicken",
        price: "300",
        icon: "https://img.icons8.com/external-icongeek26-flat-icongeek26/48/external-chicken-meat-icongeek26-flat-icongeek26-1.png"
      },
      {
        id: 2,
        productname: "Grilled Pork",
        price: "125",
        icon: "https://img.icons8.com/fluency/48/steak-rare.png"
      },
      {
        id: 3,
        productname: "Cake",
        price: "80",
        icon: "https://img.icons8.com/plasticine/52/minecraft-grass-cube--v2.png"
      }
    ];

  }

  ngOnInit() {
  }

  async showedit(item: any) {
    let alert = this.alertCtrl.create({
      header: 'Edit',
      subHeader: 'Fill the form',
      inputs: [
        {
          name: 'inpname',
          placeholder: 'product name',
          value: item.productname
        },
        {
          name: 'inprice',
          placeholder: 'price',
          value: item.price
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
          text: 'Update',
          handler: data => {
            //code here when user click update
            console.log("update", this.productlist.length);
            console.log(item);
            for (let i = 0; i < this.productlist.length; i++) {
              console.log(this.productlist[i]);
              if (this.productlist[i] == item) {//found
                console.log("data.inpname", data.inpname, data.inprice);

                this.productlist[i].productname = data.inpname;
                this.productlist[i].price = data.inprice;
              }
            }

          }//hadler
        }
      ]
    });
    (await alert).present();
  }

}
