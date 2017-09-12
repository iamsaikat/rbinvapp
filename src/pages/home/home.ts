import { WebServiceProvider } from './../../providers/web-service/web-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {InvestmentPage} from '../investment/investment';
import {ForgotPage} from '../forgot/forgot';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
   //registerPage = RegisterPage;
   user = { "password" : "", "loginID" : "" };
   responseData : any;
   errData : any;
   
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:WebServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToInvestmentPage(){
    this.navCtrl.push(InvestmentPage);
  }

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

  goToForgotPasswordPage(){
    this.navCtrl.push(ForgotPage);
  }

  login(){
    console.log(this.user); 
    
    this.authService.postData(this.user,'signin').then((result) => {
      this.responseData = result;
      console.log("API Response: "+ JSON.stringify(this.responseData));
      if (this.responseData.code == 0){
        this.navCtrl.push(InvestmentPage);
      }else{
        console.log("Pelase check your credentials");
      }
      
    }, (err) => {
      this.errData = err;
      // Error log
      console.log("API Error : "+this.responseData);
    });
  }
}
