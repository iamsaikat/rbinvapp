import { WebServiceProvider } from './../../providers/web-service/web-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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
   
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
    public authService:WebServiceProvider, public toastCtrl: ToastController) {
  }

    showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Login Alert',
      message: 'Are you sure you want to login?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.push(InvestmentPage);
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

 /* goToInvestmentPage(){
    this.navCtrl.push(InvestmentPage);
  }*/

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
        let toast = this.toastCtrl.create({message: `You succesfully Login!`,duration: 2000});
        toast.present();
      }else{
        let toast = this.toastCtrl.create({message: `Please check your credentials!`,duration: 3000});
        toast.present();
        console.log("Please check your credentials");
      }
      
    }, (err) => {
      this.errData = err;
      // Error log
      console.log("API Error : "+this.responseData);
    });
  }
}
