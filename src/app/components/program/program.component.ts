import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit{
  mobile = false

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.mobile = event.target.innerWidth <= 990;
  }

  ngOnInit(): void {
    this.mobile = window.innerWidth <= 990;
  }
}
