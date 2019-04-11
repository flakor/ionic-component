import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;
  constructor(public modalController: ModalController) { }
  

  ngOnInit() {
  }

  SalirSinArgumentos(){
    this.modalController.dismiss();
  }

  SalirConArgumentos(){
    this.modalController.dismiss({
      nombre: 'Felipe',
      pais: 'España'
    });
  }

}
