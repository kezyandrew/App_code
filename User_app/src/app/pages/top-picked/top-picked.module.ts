/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopPickedPageRoutingModule } from './top-picked-routing.module';

import { TopPickedPage } from './top-picked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopPickedPageRoutingModule
  ],
  declarations: [TopPickedPage]
})
export class TopPickedPageModule { }
