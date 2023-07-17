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
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private cd: ChangeDetectorRef) {
    this.dataService.loadAllData().subscribe(res => {
      this.datalist = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() { }

  async addedit() {
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
          handler: (data) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: (data) => {
            const CustomerData: CustomerData = {
              fullname: data.inpname,
              price: data.inprice,
              telno: data.intelno,
              ispostpaid: data.inispostpaid

            }
            this.dataService.createData(CustomerData)
            // console.log('Entered Data:', data.data);
          }

        }//hadler
      ]
    });
    (await alert).present();
  }

  async delete(id: string) {
    let alert = this.alertCtrl.create({
      header: "Delete",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.firestoreService.deleteData(id).then(() => {
              this.router.navigateByUrl('');
            });
          }
        }
      ]

    });
  }

}
