import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  imagenURL: string;

  ngOnInit(): void {
    this.imagenURL = (document.getElementById('selectImagen') as HTMLInputElement).value;
  }
}
