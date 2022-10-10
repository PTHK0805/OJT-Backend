import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BadgeComponent } from './components/badge/badge.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet } from './components/bottom-sheet/bottom-sheet-overview-example';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ButtonComponent } from './components/button/button.component';
import { ButtonTogglesComponent } from './components/button-toggles/button-toggles.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AutoCompleteComponent,
    BadgeComponent,
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
    ButtonComponent,
    ButtonTogglesComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
