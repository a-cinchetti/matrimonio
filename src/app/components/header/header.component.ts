import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  scroll(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: "start" });
  }
}
