import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppsSectionModalComponent } from './modals/additional-apps/apps-section-modal/apps-section-modal.component';
import { AppsCategoryModalComponent } from './modals/additional-apps/apps-category-modal/apps-category-modal.component';
import { AppsDisplayModalComponent } from './modals/additional-apps/apps-display-modal/apps-display-modal.component';
import { DownloadsDisplayModalComponent } from './modals/downloads/downloads-display-modal/downloads-display-modal.component';
import { DownloadsSectionModalComponent } from './modals/downloads/downloads-section-modal/downloads-section-modal.component';
import { DownloadsCategoryModalComponent } from './modals/downloads/downloads-category-modal/downloads-category-modal.component';
import { ManualsCategoryModalComponent } from './modals/manuals/manuals-category-modal/manuals-category-modal.component';
import { ManualsSectionModalComponent } from './modals/manuals/manuals-section-modal/manuals-section-modal.component';
import { ManualsDisplayModalComponent } from './modals/manuals/manuals-display-modal/manuals-display-modal.component';
import { VideosCategoryModalComponent } from './modals/videos/videos-category-modal/videos-category-modal.component';
import { VideosModalComponent } from './modals/videos/videos-modal/videos-modal.component';
import { PdfPreviewComponent } from './modals/manuals/pdf-preview/pdf-preview.component';
import { CelMembersComponent } from './modules/cel-members/cel-members.component';
import { CelMembersModalComponent } from './modals/cel-members-modal/cel-members-modal.component';
import { LanguagesComponent } from './modules/languages/languages.component';
import { LanguagesModalComponent } from './modals/languages-modal/languages-modal.component';
import { SubtitlesComponent } from './modules/videos/subtitles/subtitles.component';
import { SubtitlesModalComponent } from './modals/videos/subtitles-modal/subtitles-modal.component';
import { HttpClientModule } from '@angular/common/http';
// import { FilesComponent } from './modules/manuals/manual-files/files.component';
// import { DownloadsComponent } from './modules/downloads/downloads-section/downloads.component';

@NgModule({
  declarations: [
    AppComponent,
    // DownloadsComponent,
    VideosModalComponent,
    AppsSectionModalComponent,
    AppsCategoryModalComponent,
    AppsDisplayModalComponent,
    DownloadsDisplayModalComponent,
    DownloadsSectionModalComponent,
    DownloadsCategoryModalComponent,
    ManualsCategoryModalComponent,
    ManualsSectionModalComponent,
    ManualsDisplayModalComponent,
    VideosCategoryModalComponent,
    VideosModalComponent,
    PdfPreviewComponent,
    CelMembersComponent,
    CelMembersModalComponent,
    LanguagesComponent,
    LanguagesModalComponent,
    SubtitlesComponent,
    SubtitlesModalComponent,
    // DownloadsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    FlexLayoutModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
