import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Season, Song } from './season';
import { NgFor, NgIf } from '@angular/common';
import { getSeasons } from './service/song.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public OnClickSong(season: Season, song: Song) {
    const link = `/season/${season.label}/song/${song.id}`;
    this._router.navigate([link]);
    this.toggleSidebar();
  }
  title = 'HippinessShow';
  seasons: Season[] = [];
  sidebarOpen = false;
  constructor(private _router: Router) { }

  async ngOnInit() {
    this.seasons = await getSeasons();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
