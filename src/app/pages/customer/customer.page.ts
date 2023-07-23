import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CrudService, CustomerData } from './customer.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  datalist: CustomerData[] = [];

  constructor(private dataService: CrudService,
    private modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private cd: ChangeDetectorRef) {
    this.dataService.loadAllData().subscribe(res => {
      this.datalist = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() { }

  async addData() {
    let alert = this.alertCtrl.create({
      header: 'Create',
      subHeader: 'Fill the form',
      inputs: [
        {
          name: 'inpname',
          placeholder: 'fullname',
          type: "text",
        },
        {
          name: 'inprice',
          placeholder: 'price',
          type: "number"
        },
        {
          name: 'intelno',
          placeholder: 'telno',
          type: "number"
        },
        {
          name: 'inispostpaid',
          placeholder: 'ispostpaid',
          type: 'radio'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: (data) => {
            const isPostPaid = data.inpispostpaid === 'on';
            const CustomerData: CustomerData = {
              fullname: data.inpname,
              price: data.inprice,
              telno: data.intelno,
              ispostpaid: isPostPaid

            }
            this.dataService.createData(CustomerData)
          }

        }
      ]
    });
    (await alert).present();
  }

  async deleteData(id: CustomerData) {
    let alert = this.alertCtrl.create({
      header: 'Delete',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.dataService.deleteData(id);
          }
        }
      ]
    });
    (await alert).present();
  }
  
  async addedit(id: CustomerData) {
    let alert = this.alertCtrl.create({
      header: 'Edit',
      subHeader: 'Fill the form',
      inputs: [
        {
          name: 'inpname',
          placeholder: 'fullname',
          type: "text",
        },
        {
          name: 'inprice',
          placeholder: 'price',
          type: "number"
        },
        {
          name: 'intelno',
          placeholder: 'telno',
          type: "number"
        },
        {
          name: 'inispostpaid',
          placeholder: 'ispostpaid',
          type: 'radio'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Edit',
          handler: (data) => {
            const isPostPaid = data.inpispostpaid === 'on';
            const CustomerData: CustomerData = {
              id: id.id,
              fullname: data.inpname,
              price: data.inprice,
              telno: data.intelno,
              ispostpaid: isPostPaid

            }
            this.dataService.editData(CustomerData)
          }
        }
      ]
    });
    (await alert).present();
  }

}
