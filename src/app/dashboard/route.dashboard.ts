import type { Routes } from "@angular/router";

export default [
	{
		path: "",
		loadComponent: () => import("./ui/dashboard/dashboard.component"),
		children: [
			{
				path: "users",
				loadComponent: () => import("../users/ui/users/users.component"),
			},
		],
	},
] as Routes;
