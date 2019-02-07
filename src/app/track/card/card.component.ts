import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { Track } from '../track';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  comments: string;
  @Input()
  track: Track;
  @Input()
  url: String;
  @Input()
  statusCode: number;
  @Input()
  watchListApi: boolean;
  @Output()
  addToWishList  = new EventEmitter();
  status: boolean;
  deleteFromWishlist: any;
  dialog: any;
  updateComments: any;
  @Output() trackAddEvent = new EventEmitter<Track>();
  @Output() trackUpdateEvent = new EventEmitter<Track>();
  @Output() trackDeleteEvent = new EventEmitter<String>();

  private isHome: boolean;

  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  @ViewChild('TrackComment') trackComment: ElementRef;
  constructor() {
    this.isHome = true;
   }

  ngOnInit() {
    console.log('', this.track);
  }
  onClickMe(track: Track) {
    this.addToWishList.emit(track);
  }
   updateTrack() {
    const dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.track.comments = this.trackComment.nativeElement.value;
        this.trackUpdateEvent.emit(this.track);
      }
    });
  }

  deleteTrack() {
    this.trackDeleteEvent.emit(this.track.trackId);
  }

  playTrack() {
    console.log(this.track);
  }

  // openTrackUrl() {
  //   window.open(this.track.trackUrl);
  // }
  addComments(actionType): void {
    console.log('in add comments');
    const dialogRef = this.dialog.open({
      width: '55vh',
      height: '30vh',
     data: { trackId : this.track.trackId , comments : this.track.comments }
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed' , result);
     // this.comments = result;
     this.track.comments = result;
      this.updateComments.emit(this.track);
  // console.log('In Card comments' , result);
   });
  }
}
