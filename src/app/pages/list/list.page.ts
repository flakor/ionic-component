import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuario: Observable<any>;

  constructor(public data: DataService,
              public toastController: ToastController) { }
  

  ngOnInit() {
  
    this.usuario = this.data.getUser();

    
  }

  async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user){
    console.log('favorite',user);
    this.presentToast('Se guardo en favoritos!');
    this.lista.closeSlidingItems();

  }

  share(user){
    console.log('share',user);
    this.presentToast('Compartido!');
    this.lista.closeSlidingItems();


  }
  unread(user){
    console.log('unread',user);
    this.presentToast('Eliminado!!!');
    this.lista.closeSlidingItems();

  }

}
