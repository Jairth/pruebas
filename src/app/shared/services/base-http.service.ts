import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "@env/environment.development";

@Injectable({
	providedIn: "root",
})
export class BaseHttpService {
	URL_BACKEND = environment.BACKEND_URL;
	_http = inject(HttpClient);

	headers() {
		const headers = new HttpHeaders({
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		});
		return headers;
	}
}
