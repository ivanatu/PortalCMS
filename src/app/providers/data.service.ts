import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdditionalAppsSectionService } from './additional-app/additional-apps-section/additional-apps-section.service';
import { DownloadsSectionService } from './downloads/downloads-section/downloads-section.service';
import { ManualCategoriesService } from './manuals/manual-categories/manual-categories.service';
import { ManualSectionService } from './manuals/manual-section/manual-section.service';
import { VideosCategoriesService } from './videos/videos-categories/videos-categories.service';
import { VideosDisplayService } from './videos/videos-display/videos-display.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataVideoCategoryList: BehaviorSubject<[]> = new BehaviorSubject([]);
  VideoCategoryList: Observable<[]> = this.dataVideoCategoryList.asObservable();

  private dataAppsSectionList: BehaviorSubject<[]> = new BehaviorSubject([]);
  AppsSectionList: Observable<[]> = this.dataAppsSectionList.asObservable();

  private dataManualsSectionList: BehaviorSubject<[]> = new BehaviorSubject([]);
  ManualsSectionList: Observable<[]> = this.dataManualsSectionList.asObservable();

  private dataDownloadSectionList: BehaviorSubject<[]> = new BehaviorSubject([]);
  DownloadSectionList: Observable<[]> = this.dataDownloadSectionList.asObservable();

  private dataVideoList: BehaviorSubject<[]> = new BehaviorSubject([]);
  VideoList: Observable<[]> = this.dataVideoList.asObservable();

  constructor(private videoCategoryService: VideosCategoriesService,
              private manualsectionservice: ManualSectionService,
              private videoDisplayService: VideosDisplayService,
              private downloadsectionservice: DownloadsSectionService,
              private addAppsSectionService: AdditionalAppsSectionService ) {}

  getVideoCategoryData(): Observable<any> {
    return this.videoCategoryService.viewVideoCategories()
      .pipe(map(
        (data: any) => { return this.dataVideoCategoryList.next(data); }
      ))
  }

  getAppsSectionData(): Observable<any> {
    return this.addAppsSectionService.viewAdditionalAppsSections()
      .pipe(map(
        (data: any) => { return this.dataAppsSectionList.next(data); }
      ))
  }

  getManualsSectionData(): Observable<any> {
    return this.manualsectionservice.viewManualSection()
      .pipe(map(
        (data: any) => { return this.dataManualsSectionList.next(data); }
      ))
  }

  getDownloadSectionData(): Observable<any> {
    return this.downloadsectionservice.viewDownloadSection()
      .pipe(map(
        (data: any) => { return this.dataDownloadSectionList.next(data); }
      ))
  }

  getVideoData(): Observable<any> {
    return this.videoDisplayService.viewVideos()
      .pipe(map(
        (data: any) => { return this.dataVideoList.next(data); }
      ))
  }
}
