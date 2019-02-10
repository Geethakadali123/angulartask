import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardcontainerComponent } from './cardcontainer/cardcontainer.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { MatCardModule, MatIcon, MatIconModule, MatSnackBar, MatSnackBarModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TrackMaterialModule } from './track.material.module';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './search/search.component';
// import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [HeaderComponent,
  FooterComponent,
  CardcontainerComponent,
  CardComponent,
  WishlistComponent,
  SearchComponent
],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    TrackMaterialModule,
    MatMenuModule
  ],
  exports: [HeaderComponent,
    FooterComponent,
    CardcontainerComponent,
    CardComponent,
    WishlistComponent,
    SearchComponent
  ]
})
export class TrackModule { }
