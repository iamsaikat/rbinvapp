import { PrefresultPage } from './../prefresult/prefresult';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PreferencePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preference',
  templateUrl: 'preference.html',
})
export class PreferencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencePage');
  }

  goToPrefresultPage(){
    this.navCtrl.push(PrefresultPage);
  }
  
  goBack(){
    this.navCtrl.pop();
  }
}
