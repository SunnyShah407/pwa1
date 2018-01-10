import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AfoObjectObservable, AfoListObservable} from 'angularfire2-offline';
import { FirebaseProvider } from '../../providers/firebaseProvider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: AfoObjectObservable<any[]>;
  tasks: AfoListObservable<any[]>;

  constructor(public navCtrl: NavController, firebaseProvider: FirebaseProvider) {
    this.info = firebaseProvider.getInfo();
    this.tasks= firebaseProvider.getTasks();
  }

}
