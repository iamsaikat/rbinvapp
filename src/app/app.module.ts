import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { StarRatingModule } from 'angular-star-rating';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { InvestmentPage } from '../pages/investment/investment';
import { ConfirmPage } from '../pages/confirm/confirm';
import { HistoryPage } from '../pages/history/history';
import { PreferencePage } from '../pages/preference/preference';
import { ForgotPage } from '../pages/forgot/forgot';
import { WebServiceProvider } from '../providers/web-service/web-service';
import { PrefresultPage } from '../pages/prefresult/prefresult';
import { DetailsPage } from '../pages/details/details';
import { LinkbankPage } from '../pages/linkbank/linkbank';
import { VerificationPage } from '../pages/verification/verification';
import { PendingpaymentPage } from '../pages/pendingpayment/pendingpayment';
import { ActivePage } from '../pages/active/active';
import { ReinvestmentPage } from '../pages/reinvestment/reinvestment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    SettingsPage,
    InvestmentPage,
    ConfirmPage,
    HistoryPage,
    PreferencePage,
    ForgotPage,
    PrefresultPage,
    DetailsPage,
    LinkbankPage,
    VerificationPage,
    PendingpaymentPage,
    ActivePage,
    ReinvestmentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StarRatingModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    SettingsPage,
    InvestmentPage,
    ConfirmPage,
    HistoryPage,
    PreferencePage,
    ForgotPage,
    PrefresultPage,
    DetailsPage,
    LinkbankPage,
    VerificationPage,
    PendingpaymentPage,
    ActivePage,
    ReinvestmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebServiceProvider
  ]
})
export class AppModule {}
