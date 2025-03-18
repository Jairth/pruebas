import type { ApplicationConfig } from "@angular/core";
import { provideRouter, withViewTransitions } from "@angular/router";

import { provideHttpClient, withFetch } from "@angular/common/http";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes, withViewTransitions()),
		provideHttpClient(withFetch()),
	],
};
