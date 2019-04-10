import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuario: Observable<any>;

  constructor(public data: DataService) { }
  

  ngOnInit() {
  
    this.usuario = this.data.getUser();

    
  }

  favorite(user){
    console.log('favorite',user);
    this.lista.closeSlidingItems();

  }

  share(user){
    console.log('share',user);
    this.lista.closeSlidingItems();


  }
  unread(user){
    console.log('unread',user);
    this.lista.closeSlidingItems();

  }

}
