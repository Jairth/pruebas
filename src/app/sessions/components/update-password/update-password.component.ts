import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { hasFormError } from "@utils/hasFormControlError";

@Component({
	selector: "app-update-password",
	imports: [ReactiveFormsModule],
	templateUrl: "./update-password.component.html",
	styleUrl: "./update-password.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UpdatePasswordComponent {
	formBuilder = inject(FormBuilder);
	router = inject(Router);

	hasFormError = hasFormError;

	updatePasswordForm = this.formBuilder.group({
		password: ["", [Validators.required]],
		newPassword: ["", [Validators.required]],
	});

	onSubmit() {
		if (this.updatePasswordForm.invalid) {
			this.updatePasswordForm.markAllAsTouched();
			return;
		}

		this.router.navigate(["/session/code-email"]);
	}

	redirectToVerificationEmail() {
		this.router.navigate(["/session/verification-email"]);
	}
}
