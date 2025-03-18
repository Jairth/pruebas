import type { Routes } from "@angular/router";

export default [
	{
		path: "",
		loadComponent: () => import("./ui/layout/layout.component"),
		children: [
			{
				path: "login",
				loadComponent: () => import("./components/login/login.component"),
			},
			{
				path: "code-email",
				loadComponent: () =>
					import("./components/login-code/login-code.component"),
			},
			{
				path: "verification-email",
				loadComponent: () =>
					import(
						"./components/email-verification/email-verification.component"
					),
			},
			{
				path: "recovery-code",
				loadComponent: () =>
					import("./components/recovery-code/recovery-code.component"),
			},
			{
				path: "update-password",
				loadComponent: () =>
					import("./components/update-password/update-password.component"),
			},
			{
				path: "**",
				redirectTo: "login",
			},
		],
	},
] as Routes;
