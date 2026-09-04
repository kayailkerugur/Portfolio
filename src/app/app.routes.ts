import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: { seoKey: 'home' },
    loadComponent: () => import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'about',
    data: { seoKey: 'about' },
    loadComponent: () => import('./features/about/about').then(m => m.About),
  },
  {
    path: 'projects',
    data: { seoKey: 'projects' },
    loadComponent: () => import('./features/projects/projects').then(m => m.Projects),
  },
  {
    path: 'projects/aichat',
    data: { seoKey: 'aichat' },
    loadComponent: () => import('./features/project-detail/project-detail').then(m => m.ProjectDetail),
  },
  {
    path: 'skills',
    data: { seoKey: 'skills' },
    loadComponent: () => import('./features/skills/skills').then(m => m.Skills),
  },
  {
    path: 'contact',
    data: { seoKey: 'contact' },
    loadComponent: () => import('./features/contact/contact').then(m => m.Contact),
  },
  {
    path: '**',
    data: { seoKey: 'not_found' },
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound),
  },
];
