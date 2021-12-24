import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormComponent } from '../components/form/form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormComponent
  ],
  providers: []
})
export class AppModule {}
