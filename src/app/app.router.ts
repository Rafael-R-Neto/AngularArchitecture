import { Routes } from "@angular/router"
import { AuthComponent } from "./auth/auth.component"
import { HomeComponent } from './home/home.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', component: AuthComponent }
]