import { WebServiceProvider } from './../../providers/web-service/web-service';
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

  prefreq = { "type" : "", "custID" : "", "tenure" : "", "amount" : "", "minExpRate" : "" };
  responseData : any;
  errData : any;
  preferenceResult : any;
  userData: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:WebServiceProvider) {
    this.userData = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Current User Data:'+this.userData);
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
  prefSearch(){
    console.log(this.prefreq); 
    this.prefreq.type = "N";
    this.prefreq.custID = this.userData.id;
    this.authService.postData(this.prefreq,'pref/search').then((result) => {
        this.responseData = result;
        console.log("API Response: "+ JSON.stringify(this.responseData));
        if (this.responseData.code == 0){
          this.preferenceResult = this.responseData.data;
          this.navCtrl.push(PrefresultPage,{result: this.preferenceResult});
          console.log("API Response (Result): "+ JSON.stringify(this.preferenceResult));
        }else{
          console.log("No result found");
        }
      
    }, (err) => {
      this.errData = err;
      // Error log
      console.log("API Error : "+this.responseData);
    });
  }
}
