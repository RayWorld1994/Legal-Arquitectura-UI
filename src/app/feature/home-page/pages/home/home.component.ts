import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatIconModule, MatRippleModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
