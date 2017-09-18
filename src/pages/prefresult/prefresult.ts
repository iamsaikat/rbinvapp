import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PreferencePage} from '../preference/preference';
import {DetailsPage} from '../details/details';
/**
 * Generated class for the PrefresultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prefresult',
  templateUrl: 'prefresult.html',
})
export class PrefresultPage {
  prefResult: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.prefResult = this.navParams.get('result');
    console.log("Getting data from search:"+ this.prefResult);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrefresultPage');
  }

  goToPreferencePage(){
    this.navCtrl.popTo(PreferencePage);
  }

  goToDetailsPage(){
    this.navCtrl.push(DetailsPage);
  }
  goBack(){
    this.navCtrl.pop();
  }
}
