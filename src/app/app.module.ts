import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PurchaseComponent} from './purchase/purchase.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PasswordPatternDirective} from './directives/password-pattern.directive';
import {MatchPasswordDirective} from './directives/match-password.directive';
import {ValidateUserNameDirective} from './directives/validate-user-name.directive';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import { BasketsComponent } from './baskets/baskets.component';
import { BasketComponent } from './basket/basket.component';
import { OrderComponent } from './order/order.component';

import { AgePipe } from './pipes/age.pipe';
import {UsersService} from './services/users.service';
import {AuthGuard} from './guard/auth.guard';
import {ResolveGuard} from './guard/resolve.guard';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'template-form', component: TemplateDrivenFormComponent},
  {path: 'basket/:id', component: BasketComponent, canActivate: [AuthGuard]},
  {path: 'baskets',
    component: BasketsComponent,
    resolve: {
      data: ResolveGuard,
    }
  },
  {path: 'order', component: OrderComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PurchaseComponent,
    AboutComponent,
    LoginComponent,
    NavbarComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    TemplateDrivenFormComponent,
    AgePipe,
    BasketsComponent,
    BasketComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [UsersService, AuthGuard, ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
