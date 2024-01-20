import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { FrutasDataService } from './services/frutas-data.service';
import { FrutasListComponent } from './ui-frutas/frutas-list/frutas-list.component';
import { ProductoListComponent } from './ui-productos/producto-list/producto-list.component';
import { ProductoFormComponent } from './ui-productos/producto-form/producto-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, ProductoFormComponent, FrutasListComponent, ProductoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }
}
