import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Season } from './season';
import { NgFor, NgIf } from '@angular/common';
import { getSeasons } from './service/song.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HippinessShow';
  seasons: Season[] = [];
  sidebarOpen = false;

  async ngOnInit() {
    this.seasons = await getSeasons();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
