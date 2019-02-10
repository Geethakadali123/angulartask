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
  status: boolean;
  dialog: any;
  @Output()
  addToWishList  = new EventEmitter();
  @Output()
  deleteFromWishlist = new EventEmitter<String>();
  @Output()
  updateComments = new EventEmitter();

  constructor() { }
  ngOnInit() {
    console.log('', this.track);
  }
  onClickMe(track: Track) {
    this.addToWishList.emit(track);
  }
  deleteTrack(track: Track) {
    console.log('track is 1234', track);
    this.deleteFromWishlist.emit(track.trackId);
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
