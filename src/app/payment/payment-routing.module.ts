import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';

const routes: Routes = [
  { path: 'card', component: CardPaymentComponent },
  { path: 'upi', component: UpiPaymentComponent },
  { path: '', component: CardPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
