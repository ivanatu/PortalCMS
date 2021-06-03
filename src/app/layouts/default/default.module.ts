import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VideosComponent } from 'src/app/modules/videos/videos-display/videos.component';
import { ManualsComponent } from 'src/app/modules/manuals/manuals-section/manuals.component';
import { CategoriesComponent } from 'src/app/modules/manuals/manual-categories/categories.component';
import { VideosCategoriesComponent } from 'src/app/modules/videos/videos-categories/videos-categories.component';
import { FilesComponent } from 'src/app/modules/manuals/manual-files/files.component';
import { DownloadsComponent } from 'src/app/modules/downloads/downloads-section/downloads.component';
import { DownloadsCategoriesComponent } from 'src/app/modules/downloads/downloads-categories/downloads-categories.component';
import { DownloadsDisplayComponent } from 'src/app/modules/downloads/downloads-display/downloads-display.component';
import { AdditionalAppsCategoriesComponent } from 'src/app/modules/additional-app/additional-apps-categories/additional-apps-categories.component';
import { AdditionalAppsSectionComponent } from 'src/app/modules/additional-app/additional-apps-section/additional-apps-section.component';
import { AdditionalAppsDisplayComponent } from 'src/app/modules/additional-app/additional-apps-display/additional-apps-display.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    DefaultComponent,
    VideosComponent,
    ManualsComponent,
    CategoriesComponent,
    VideosCategoriesComponent,
    FilesComponent,
    DownloadsComponent,
    DownloadsCategoriesComponent,
    DownloadsDisplayComponent,
    AdditionalAppsCategoriesComponent,
    AdditionalAppsSectionComponent,
    AdditionalAppsDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [

  ]
})
export class DefaultModule { }
