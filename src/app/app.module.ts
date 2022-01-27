import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './Components/header/header.component';
import {MatCardModule} from '@angular/material/card';
import { AdminComponent } from './Components/admin/admin.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { GetcartComponent } from './Components/getcart/getcart.component';
import { GetwishlistComponent } from './Components/getwishlist/getwishlist.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { PlaceorderComponent } from './Components/placeorder/placeorder.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { UpdatebookadminComponent } from './Components/updatebookadmin/updatebookadmin.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    AdminComponent,
    FooterComponent,
    GetallbooksComponent,
    GetcartComponent,
    GetwishlistComponent,
    LoginSignupComponent,
    PlaceorderComponent,
    ProfileComponent,
    QuickviewComponent,
    UpdatebookadminComponent,
    HomepageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    MatBadgeModule,
    MatDialogModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
