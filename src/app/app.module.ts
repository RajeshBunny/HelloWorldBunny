import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AccordionModule } from "primeng/accordion";
import { PanelModule } from "primeng/panel";
import { AppComponent } from "./app.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
//import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { LanguageTranslatorComponent } from "./language-translator/language-translator.component";
import { VoiceTextComponent } from "./voice-text/voice-text.component";
import { ConverseComponent } from "./converse/converse.component";
import { DataServiceService } from "./data-service.service";
import { HttpClientModule } from "@angular/common/http";
import { TextDetectionComponent } from "./text-detection/text-detection.component";
// import {TextEntityComponent} from './text-analytics/text-entity/text-entity.component';
import { TextSentimentComponent } from "./text-sentiment/text-sentiment.component";
// import { TextKeyphrasesComponent } from './text-analytics/tabs/text-keyphrases/text-keyphrases.component';
// import { MainTabComponent } from './text-analytics/tabs/text-keyphrases/tabtext-component';
// import { TabsComponent } from './text-analytics/tabs/tabs-component';
// import { TabComponent } from './text-analytics/tabs/tab-component';

import { ButtonModule } from "primeng/button";
import { loginComponent } from "./login/login.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material";
import { FooterComponent } from './footer/footer.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component';
import { BtnDirective } from './btn.directive';
import { SqrtPipe } from './sqrt.pipe';
import { MathRoundPipe } from './math-round.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    TextSentimentComponent,
    DashboardComponent,
    TextDetectionComponent,
    LanguageTranslatorComponent,
    VoiceTextComponent,
    ConverseComponent,
    FooterComponent,
    RegisterComponent,
    BtnDirective,
    SqrtPipe,
    MathRoundPipe,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AccordionModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PanelModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
