

import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate/translate.pipe';
import { CurrencyPipe } from './currency/currency.pipe';
@NgModule({
  declarations: [TranslatePipe, CurrencyPipe],
  imports: [],
  exports: [TranslatePipe, CurrencyPipe]
})
export class PipeModule { }
