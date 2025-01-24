import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home-page/pages/home/home.component';

export const routes: Routes = [
    //Landing routes
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home',
        loadComponent: () =>
            import('./core/layout/layout.component').then(
                (mod) => mod.LayoutComponent,
            ),
        children: [
            {
                path: '',
                component: HomeComponent,
            },
        ],
    },
];
