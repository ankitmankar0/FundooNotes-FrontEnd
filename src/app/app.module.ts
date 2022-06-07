/* JavaScript imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { IconsComponent } from './components/icons/icons.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import {MatCardModule} from '@angular/material/card';
import { UpdateComponent } from './components/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthguardService } from './services/authService/authguard.service';
import {MatMenuModule} from '@angular/material/menu';
import { FilterPipe } from './pipes/filter.pipe';



//entry for all the modules, component and services,
/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    GetAllNotesComponent,
    DisplaynoteComponent,
    IconsComponent,
    TrashComponent,
    ArchiveComponent,
    UpdateComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule, 
    FlexLayoutModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
