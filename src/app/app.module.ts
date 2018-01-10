import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FirebaseProvider } from '../providers/firebaseProvider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBd6dAbh-X-1GPV56yp5DqI7XKOIhAXWLc",
  authDomain: "pwa1-41f53.firebaseapp.com",
  databaseURL: "https://pwa1-41f53.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "1"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireOfflineModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //{provide: FirebaseProvider, useFactory: (storage: Storage, db: ) => {return new FirebaseProvider(storage);}, deps: [Storage] },
  ]
})
export class AppModule {}
