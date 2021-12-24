import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  customForm: any[] = [];

  constructor(public navCtrl: NavController) {
    this.customForm = [
      {
        name: 'user',
        type: 'text',
        value: 'nicobytes',
        label: 'Usuario'
      },
      {
        name: 'password',
        type: 'password',
        value: '',
        label: 'Contraseña'
      },
      {
        name: 'city',
        type: 'select',
        label: 'Ciudades',
        options: [
          {
            value: 'BOG',
            label: 'Bogota'
          },
          {
            value: 'MED',
            label: 'Medellin'
          },
          {
            value: 'CAL',
            label: 'Cali'
          }
        ]
      },
      {
        name: 'icecream',
        type: 'radio',
        label: 'Helado Favorito',
        options: [
          {
            value: 'Fresa',
            label: 'Fresa'
          },
          {
            value: 'Limon',
            label: 'Limon'
          },
          {
            value: 'Vainilla',
            label: 'Vainilla'
          }
        ]
      }
    ]
  }

}
