import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

const routes: Routes = [
    {
        path: 'characters', component: TabsComponent, children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: ':chosenSide', component: ListComponent }
        ]
    },
    { path: 'new-character', component: CreateCharacterComponent },
    { path: '**', redirectTo: '/characters' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }