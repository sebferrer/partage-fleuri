import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/home';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,
			{
				useHash: true,
				scrollPositionRestoration: 'enabled',
			}
		)
	],
	exports: [RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
