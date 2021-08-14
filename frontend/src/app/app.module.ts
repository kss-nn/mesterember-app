import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './page/nav/nav.component';
import { LoginComponent } from './page/login/login.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UserNewComponent } from './page/user-new/user-new.component';
import { MapComponent } from './page/map/map.component';
import { WorkingHoursComponent } from './page/working-hours/working-hours.component';
import { CountiesComponent } from './page/counties/counties.component';
import { CitiesComponent } from './page/cities/cities.component';
import { SkillsComponent } from './page/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    UsersComponent,
    UserEditComponent,
    ForbiddenComponent,
    DashboardComponent,
    FilterPipe,
    UserNewComponent,
    MapComponent,
    WorkingHoursComponent,
    CountiesComponent,
    CitiesComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
