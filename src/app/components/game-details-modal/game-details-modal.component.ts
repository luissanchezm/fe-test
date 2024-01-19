import { Component, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { GameDetail } from '../../models/game-detail.model';
import { ApiService } from './../../services/api/api.service';

@Component({
  selector: 'game-details-modal',
  templateUrl: './game-details-modal.component.html',
})
export class GameDetailsModalComponent {
  @Input() game: GameDetail;
  @ViewChild('gameModal') gameModal: ModalDirective;
  gameDetail$: Observable<GameDetail>;

  constructor(private apiService: ApiService) {}

  showModal(gameId: number): void {
    this.gameDetail$ = this.apiService.getGameDetails(gameId);
    this.gameModal.show();
  }
}
