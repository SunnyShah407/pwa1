import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AfoObjectObservable, AfoListObservable, AngularFireOfflineDatabase} from 'angularfire2-offline';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: AfoObjectObservable<any[]>;
  tasks: AfoListObservable<any[]>;

  constructor(public navCtrl: NavController, afoDatabase: AngularFireOfflineDatabase) {
    this.info = afoDatabase.object('/info');
    this.tasks= afoDatabase.list('/tasks');
  }

}
