import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './dama/dama.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, RouterLink]
})
export class AppComponent {
[x: string]: any;
        constructor(private router: Router) {}
      
        redirectToDama(path: string) {
          this.router.navigate([path]);
        }
}

