import { WebServiceProvider } from './../../providers/web-service/web-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  homePage = HomePage;
  user = { "fname" : "", "lname" : "", "passwd" : "", "email" : "", "mobile" : "", "street" : "", "city" : "", "state" : "" , "zip" : "", "country" : "" };
  responseData : any;
  errData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:WebServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToHomePage(){
    this.navCtrl.popTo(HomePage);
  }
  register(){
    console.log(this.user); 
    
    this.authService.postData(this.user,'signup').then((result) => {
      this.responseData = result;
      console.log("API Response: "+ JSON.stringify(this.responseData));
      if (this.responseData.code == 0){
        this.navCtrl.popTo(HomePage);
      }else{
        console.log("Pelase check and correct the Errors");
      }
      
    }, (err) => {
      this.errData = err;
      // Error log
      console.log("API Error : "+this.responseData);
    });
  }

}
