import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( public popoverController: PopoverController) { }

  ngOnInit() {
  }

 async mostrarPop(event){
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event: event,
      mode: 'ios',
      backdropDismiss: false

    });  

    await popover.present();

    // const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();

    console.log('Padre: ', data);
    

  }

}
