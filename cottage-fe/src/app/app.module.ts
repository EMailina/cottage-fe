import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { ContactComponent } from './contact/contact.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HttpsConstantsService } from './services/https-constants.service';
import { TableComponent } from './table/table.component';
import { SeasonService } from './services/season.service';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from 'primeng/sidebar';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    HistoryComponent,
    FacilitiesComponent,
    AttractionsComponent,
    ContactComponent,
    MenubarComponent,
    TableComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    ProgressBarModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    CheckboxModule,
    InputNumberModule,
    TagModule,
    CarouselModule,
    ChartModule,
    SidebarModule,
    TranslateModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    SeasonService,
    HttpsConstantsService,
    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
