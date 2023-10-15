import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from './services/scroll.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit() {
    // Adicione um ouvinte de evento para rolar a página para o topo quando a rota for alterada
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollService.scrollToTop();
      }
    });
  }
}
