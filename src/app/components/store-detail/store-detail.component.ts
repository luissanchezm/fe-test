import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GameDetail } from '../../models/game-detail.model';
import { Game } from '../../models/game-list.model';
import { StoreDetail } from '../../models/store-detail.model';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {
  storeDetail$: Observable<StoreDetail>;
  gameList$: Observable<Game[]>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const storeId$ = this.route.paramMap.pipe(
      map(params => +params.get('storeId'))
    );

    this.storeDetail$ = storeId$.pipe(
      switchMap(storeId => this.apiService.getStoreDetails(storeId))
    );

    this.gameList$ = storeId$.pipe(
      switchMap(storeId => this.apiService.getGamesByStore(storeId))
    );
  }

  getRatingClass(rating: number): string {
    if (rating >= 4) {
      return 'badge-success';
    } else if (rating >= 2.5) {
      return 'badge-warning';
    } else {
      return 'badge-danger';
    }
  }
}
