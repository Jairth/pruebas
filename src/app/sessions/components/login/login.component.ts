import type { LoginRequest } from "@/sessions/interfaces/session.interface";
import { SessionService } from "@/sessions/services/session.service";
import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { hasFormError } from "@utils/hasFormControlError";

@Component({
	selector: "app-login",
	imports: [ReactiveFormsModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
	_formBuilder = inject(FormBuilder);
	_router = inject(Router);
	_sessionService = inject(SessionService);

	hasFormError = hasFormError;

	loginForm = signal(
		this._formBuilder.group({
			email: ["", [Validators.required]],
			password: ["", [Validators.required]],
		}),
	);

	onSubmit() {
		if (this.loginForm().invalid) {
			this.loginForm().markAllAsTouched();
			return;
		}

		const body = this.loginForm().value as LoginRequest;

		this._sessionService.signIn(body).subscribe({
			next: (response) => {
				this._router.navigate(["/session/code-email"]);
			},
			error: (error) => {},
		});
	}

	redirectToVerificationEmail() {
		this._router.navigate(["/session/verification-email"]);
	}
}
