import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DshboardComponent } from './dshboard/dshboard.component';
import { LoginComponent } from './login/login.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CartComponent } from './cart/cart.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { AgePipe } from './age.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { ItemsComponent } from './items/items.component';
import { MailComponent } from './mail/mail.component';
import { ClientComponent } from './client/client.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DshboardComponent,
    LoginComponent,
    EventBindingComponent,
    TwowaybindingComponent,
    CalculatorComponent,
    SquareComponent,
    RectangleComponent,
    EventRegistrationComponent,
    StudentRegistrationComponent,
    CartComponent,
    EmployeesComponent,
    PipesComponent,
    PricePipe,
    AgePipe,
    CarsComponent,
    GpayComponent,
    VehicleComponent,
    AccountComponent,
    ItemsComponent,
    MailComponent,
    ClientComponent,
    CreatevehicleComponent,
    CreateUserComponent,
    ParentComponent,
    ChildComponent,
    StarComponent,
    ProductComponent,
    NavComponent,
    CartlistComponent,
    VehicleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
