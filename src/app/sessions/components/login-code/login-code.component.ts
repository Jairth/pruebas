import {
	ChangeDetectionStrategy,
	Component,
	type ElementRef,
	inject,
	viewChildren,
} from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
	selector: "app-email-code-login",
	imports: [ReactiveFormsModule],
	templateUrl: "./login-code.component.html",
	styleUrl: "./login-code.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginCodeComponent {
	otpInputs = viewChildren<ElementRef>("otpInput");

	formBuilder = inject(FormBuilder);
	router = inject(Router);

	otpForm = this.formBuilder.group({
		first: ["", [Validators.required, Validators.maxLength(1)]],
		second: ["", [Validators.required, Validators.maxLength(1)]],
		third: ["", [Validators.required, Validators.maxLength(1)]],
		fourth: ["", [Validators.required, Validators.maxLength(1)]],
	});

	onSubmit() {
		if (this.otpForm.invalid) {
			this.otpForm.markAllAsTouched;
			return;
		}

		this.router.navigate(["/dashboard"]);
	}

	moveFocus(nextInput: number, event: Event) {
		const target = event.target as HTMLInputElement;
		const value = target.value;

		console.log(value);

		if (value.length === 1) {
			const inputs = this.otpInputs();
			console.log(inputs);
			if (inputs && nextInput < inputs.length) {
				inputs[nextInput].nativeElement.focus();
			}
		}
	}

	handleBackspace(prevInput: number, event: KeyboardEvent) {
		const target = event.target as HTMLInputElement;

		if (event.key === "Backspace" && target.value === "") {
			const inputs = this.otpInputs();
			if (inputs && prevInput >= 0) {
				inputs[prevInput].nativeElement.focus();
			}
		}
	}
}
