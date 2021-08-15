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
import { ServicesComponent } from './page/services/services.component';
import { ServiceEditComponent } from './page/service-edit/service-edit.component';
import { CountyEditComponent } from './page/county-edit/county-edit.component';
import { CityEditComponent } from './page/city-edit/city-edit.component';
import { SkillEditComponent } from './page/skill-edit/skill-edit.component';
import { ServiceNewComponent } from './page/service-new/service-new.component';
import { CountyNewComponent } from './page/county-new/county-new.component';
import { CityNewComponent } from './page/city-new/city-new.component';
import { SkillNewComponent } from './page/skill-new/skill-new.component';

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
    SkillsComponent,
    ServicesComponent,
    ServiceEditComponent,
    CountyEditComponent,
    CityEditComponent,
    SkillEditComponent,
    ServiceNewComponent,
    CountyNewComponent,
    CityNewComponent,
    SkillNewComponent
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
