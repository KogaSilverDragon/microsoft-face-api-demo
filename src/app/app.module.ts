import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FaceDetectComponent } from './face-detect/face-detect.component';
import {FormsModule} from "@angular/forms";
import {MscsFaceApiService} from "./mscs-face-api.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FaceDetectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MscsFaceApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
