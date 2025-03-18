import type { FormGroup } from "@angular/forms";

export function hasFormError(form: FormGroup, controlName: string): boolean {
	const control = form.get(controlName);
	return !!(control && control.errors && (control.touched || control.dirty));
}
