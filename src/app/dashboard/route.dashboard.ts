import type { Routes } from "@angular/router";

export default [
	{
		path: "",
		loadComponent: () => import("./ui/dashboard-page/dashboard-page.component"),
		children: [
			{
				path: "users",
				loadComponent: () => import("../users/ui/users/users.component"),
			},
		],
	},
] as Routes;
