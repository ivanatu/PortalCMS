import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AdditionalAppsCategoriesComponent } from './modules/additional-app/additional-apps-categories/additional-apps-categories.component';
import { AdditionalAppsDisplayComponent } from './modules/additional-app/additional-apps-display/additional-apps-display.component';
import { AdditionalAppsSectionComponent } from './modules/additional-app/additional-apps-section/additional-apps-section.component';
import { CelMembersComponent } from './modules/cel-members/cel-members.component';
import { DownloadsCategoriesComponent } from './modules/downloads/downloads-categories/downloads-categories.component';
import { DownloadsDisplayComponent } from './modules/downloads/downloads-display/downloads-display.component';
import { DownloadsComponent } from './modules/downloads/downloads-section/downloads.component';
import { LanguagesComponent } from './modules/languages/languages.component';
import { CategoriesComponent } from './modules/manuals/manual-categories/categories.component';
import { FilesComponent } from './modules/manuals/manual-files/files.component';
import { ManualsComponent } from './modules/manuals/manuals-section/manuals.component';
import { SubtitlesComponent } from './modules/videos/subtitles/subtitles.component';
import { VideosCategoriesComponent } from './modules/videos/videos-categories/videos-categories.component';
import { VideosComponent } from './modules/videos/videos-display/videos.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
    path: '',
    component: VideosComponent
  }, 
  {
    path: 'video-categories',
    component: VideosCategoriesComponent
  }, 
  {
    path: 'subtitles',
    component: SubtitlesComponent
  },
  {
    path: 'manuals',
    component: ManualsComponent
  },
  {
    path: 'files/:id',
    component: FilesComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'downloads-section',
    component: DownloadsComponent
  },
  {
    path: 'downloads-category',
    component: DownloadsCategoriesComponent
  },
  {
    path: 'display-downloads',
    component: DownloadsDisplayComponent
  },
  {
    path: 'additional-app-categories',
    component: AdditionalAppsCategoriesComponent
  },
  {
    path: 'additional-app-sections',
    component: AdditionalAppsSectionComponent
  },
  {
    path: 'additional-app-display',
    component: AdditionalAppsDisplayComponent
  },
  {
    path: 'cel-members',
    component: CelMembersComponent
  },
  {
    path: 'languages',
    component: LanguagesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
