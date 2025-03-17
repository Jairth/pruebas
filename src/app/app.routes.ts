import type { Routes } from "@angular/router";

export const routes: Routes = [
	// {
	// 	path: '',
	// 	component: IndexComponent,
	// 	pathMatch: 'full'
	// },
	{
		path: "session",
		loadChildren: () => import("./sessions/route.sessions"),
	},
	{
		path: "dashboard",
		loadChildren: () => import("./dashboard/route.dashboard"),
	},
	{
		path: "**",
		redirectTo: "session",
	},
];
