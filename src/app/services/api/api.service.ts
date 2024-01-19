import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { GameDetail } from '../../models/game-detail.model';
import { Game, GameList } from '../../models/game-list.model';
import { StoreDetail } from '../../models/store-detail.model';
import { Store, StoreList } from '../../models/store-list.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key = 'c13d9de91ed24b13abd23ec72a84ddbe';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    'x-rapidapi-key': '45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0'
  });

  constructor(private http: HttpClient) {}

  private buildUrl(endpoint: string): string {
    return `https://rawg-video-gamesdatabase.p.rapidapi.com/${endpoint}?key=${this.key}`;
  }

  getStores(): Observable<Store[]> {
    return this.http.get<StoreList>(this.buildUrl('stores'), { headers: this.headers }).pipe(
      shareReplay(1),
      map(storeList => storeList.results),
      map(stores => stores.sort((a, b) => a.name.localeCompare(b.name))),
      catchError(error => throwError(error))
    );
  }

  getGamesByStore(storeId: number): Observable<Game[]> {
    return this.http.get<GameList>(`https://rawg-video-gamesdatabase.p.rapidapi.com/games?stores=${storeId}&key=${this.key}`, { headers: this.headers }).pipe(
      shareReplay(1),
      map(gameList => gameList.results),
      catchError(error => throwError(error))
    );
  }

  getStoreDetails(storeId: number): Observable<StoreDetail> {
    return this.http.get<StoreDetail>(this.buildUrl(`stores/${storeId}`), { headers: this.headers }).pipe(
      shareReplay(1),
      catchError(error => throwError(error))
    );
  }

  getGameDetails(gameId: number): Observable<GameDetail> {
    return this.http.get<GameDetail>(this.buildUrl(`games/${gameId}`), { headers: this.headers }).pipe(
      shareReplay(1),
      catchError(error => throwError(error))
    );
  }
}

