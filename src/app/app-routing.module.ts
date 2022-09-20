import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ChildComponent } from './child/child.component';
import { ClientComponent } from './client/client.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DshboardComponent } from './dshboard/dshboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GpayComponent } from './gpay/gpay.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NavComponent } from './nav/nav.component';
import { NotifyGuard } from './notify.guard';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DshboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'rectangle', component: RectangleComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'square', component: SquareComponent },
      { path: 'databinding', component: DataBindingComponent },
      { path: 'eventbinding', component: EventBindingComponent },
      { path: 'twowaybinding', component: TwowaybindingComponent },
      { path: 'event-registration', component: EventRegistrationComponent },
      { path: 'student-registration', component: StudentRegistrationComponent },
      { path: 'cart', component: CartComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'gpay', component: GpayComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'account', component: AccountComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'mail', component: MailComponent },
      { path: 'client', component: ClientComponent },
      { path: 'child', component: ChildComponent },
      { path: 'star', component: StarComponent },
      { path: 'product', component: ProductComponent },
      { path: 'nav', component: NavComponent },
      { path: 'cartlist', component: CartlistComponent },
      { path: 'vehicle-details/:id', component: VehicleDetailsComponent },
      { path: 'edit-vehicle/:id', component: CreatevehicleComponent },

      {path:'payment',
          loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
      },
      
      {
        path: 'createvehicle',
        component: CreatevehicleComponent,
        canDeactivate: [NotifyGuard],
      },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'parent', component: ParentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
