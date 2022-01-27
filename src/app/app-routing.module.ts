import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { GetcartComponent } from './Components/getcart/getcart.component';
import { GetwishlistComponent } from './Components/getwishlist/getwishlist.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { PlaceorderComponent } from './Components/placeorder/placeorder.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
const routes: Routes = [
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: 'login-signup', component: LoginSignupComponent },
  {path: 'homepage',redirectTo:'/homepage/getallbooks',pathMatch: 'full'},
  {
    path: 'homepage', component: HomepageComponent,
    children: [
      {path: 'getallbooks', component: GetallbooksComponent},
      {path: 'quickview/:bookId',component:QuickviewComponent},
      {path:'wishlist',component:GetwishlistComponent},
      {path:'getcart',component:GetcartComponent},
      {path:'profile',component:ProfileComponent},
      {path:'placeorder',component:PlaceorderComponent},
      {path:'admin', component:AdminComponent}
      
    ]
  },
  {path:'footer',component:FooterComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
