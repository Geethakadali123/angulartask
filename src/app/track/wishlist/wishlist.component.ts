import { TrackService } from './../track.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../track';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  private tracks: Array<Track>;
  private statusCode: number;
  private errorStatus: string;
  watchListApi  = true;

  constructor(private trackService: TrackService, private snackBar: MatSnackBar) {
    this.tracks = [];
  }

  ngOnInit() {
    this.trackService.getAllWishListTrack1().subscribe((res: any) => {
      this.tracks = res;
      console.log(this.tracks);
      });

  }
  deleteFromWishlist(track: Track) {
    this.trackService.deleteTrackFromWishList(track).subscribe(
      response => {
        // this.statusCode = response.status;
        if (this.statusCode === 200) {
          console.log('Success', this.statusCode);
          this.snackBar.open('Track Successfully Deleted !!!', '', {
            duration: 1500
          });
        }
      });
  }

  updateComments(track: Track) {
    this.trackService.updateComments(track).subscribe(
      response => {
        this.statusCode = response.status;
        if (this.statusCode === 200) {
          console.log('Success', this.statusCode);
          this.snackBar.open('Track Successfully Updated !!!', '', {
            duration: 1500
          });
        }
      },
      err => {
        const errorStatus = err;
        this.statusCode = parseInt(errorStatus, 10);
        if (this.statusCode === 404) {
          this.snackBar.open('Track Doesn\'t Exist', '', {
            duration: 1500
          });
          this.statusCode = 0;
        }
    });
  }
}

