import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CrudService, CustomerData } from './customer.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  datalist: CustomerData[]=[];

  constructor(private dataService: CrudService,
    private modalCtrl: ModalController,
    private cd: ChangeDetectorRef) {
    this.dataService.loadAllData().subscribe(res => {
      this.datalist = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

}
