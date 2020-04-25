import { Routes } from "@angular/router"
import { AuthComponent } from "./auth/auth.component"
import { AppComponent } from './app.component'

export const ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'auth', component: AuthComponent }
]