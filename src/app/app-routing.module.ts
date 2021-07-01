import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { loginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
//import { TextAnalyticsComponent } from './text-analytics/text-analytics.component';
import { LanguageTranslatorComponent } from "./language-translator/language-translator.component";
import { VoiceTextComponent } from "./voice-text/voice-text.component";
import { ConverseComponent } from "./converse/converse.component";
//import { AnalyzedTableComponent } from './text-analytics/analyzed-table/analyzed-table.component';
//import { AnalyzedJsonComponent } from './text-analytics/analyzed-json/analyzed-json.component';
import { TextDetectionComponent } from "./text-detection/text-detection.component";
//import {TextEntityComponent} from './text-analytics/text-entity/text-entity.component';
import { TextSentimentComponent } from "./text-sentiment/text-sentiment.component";
import { RegisterComponent } from "./register/register.component";
import { ParentComponent } from "./parent/parent.component";
import { AuthGuard } from "./auth.guard";
//import { TextKeyphrasesComponent } from './text-analytics/tabs/text-keyphrases/text-keyphrases.component';
//import { MainTabComponent } from './text-analytics/tabs/text-keyphrases/tabtext-component';
const routes: Routes = [
  { path: "login", component: loginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "services", component: TextSentimentComponent },
      { path: "dynamictable", component: LanguageTranslatorComponent },
      { path: "letter", component: VoiceTextComponent },
      { path: "video", component: ConverseComponent },
      { path: "scroll", component: TextDetectionComponent },
      { path: "parent", component: ParentComponent }
    ]
  },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
