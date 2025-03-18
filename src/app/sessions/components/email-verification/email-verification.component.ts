import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { hasFormError } from "@utils/hasFormControlError";

@Component({
	selector: "app-email-verification",
	imports: [ReactiveFormsModule],
	templateUrl: "./email-verification.component.html",
	styleUrl: "./email-verification.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmailVerificationComponent {
	formBuilder = inject(FormBuilder);
	router = inject(Router);

	hasFormError = hasFormError;

	verificationEmailForm = this.formBuilder.group({
		email: ["", [Validators.required]],
	});

	onSubmit() {
		if (this.verificationEmailForm.invalid) {
			this.verificationEmailForm.markAllAsTouched();
			return;
		}

		this.router.navigate(["/session/recovery-code"]);
	}
}
