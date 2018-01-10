import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AngularFireOfflineDatabase} from 'angularfire2-offline';

@Injectable()
export class FirebaseProvider {
  
  private user_key: string = 'user_key';

  constructor(public storage: Storage, public db: AngularFireOfflineDatabase) {
  }

  getUserId(){
    var result = this.storage.get(this.user_key);
    return result;
  }
  
  setUserId(user_id:string){
    return this.storage.set(this.user_key, user_id);
  }

  logout(){
    this.storage.remove(this.user_key);
  }

  getInfo() {
    return this.db.object('/info');
  }

  getTasks() {
    return this.db.list('/tasks');
  }

}
