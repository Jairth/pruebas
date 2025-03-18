import type {
	AuthResponse,
	LoginRequest,
	LoginResponse,
	MessageResponse,
	PasswordRecoveryRequest,
	ResendCodeRequest,
	ResetPasswordRequest,
	VerifyCodeRequest,
} from "@/sessions/interfaces/session.interface";
import { Injectable } from "@angular/core";
import { BaseHttpService } from "@service-global/base-http.service";
import type { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class SessionService extends BaseHttpService {
	signIn(body: LoginRequest): Observable<LoginResponse> {
		return this._http.post<LoginResponse>(
			`${this.URL_BACKEND}/api/auth/login`,
			body,
		);
	}

	verifySignInCode(body: VerifyCodeRequest): Observable<AuthResponse> {
		return this._http.post<AuthResponse>(
			`${this.URL_BACKEND}/api/auth/verify-code`,
			body,
		);
	}

	resendSignInCode(body: ResendCodeRequest): Observable<MessageResponse> {
		return this._http.post<MessageResponse>(
			`${this.URL_BACKEND}/api/auth/resend-code`,
			body,
		);
	}

	requestPasswordRecovery(
		body: PasswordRecoveryRequest,
	): Observable<MessageResponse> {
		return this._http.post<MessageResponse>(
			`${this.URL_BACKEND}/api/auth/recover-password`,
			body,
		);
	}

	verifyRecoveryCode(body: VerifyCodeRequest): Observable<AuthResponse> {
		return this._http.post<AuthResponse>(
			`${this.URL_BACKEND}/api/auth/verify-recovery-code`,
			body,
		);
	}

	resetPassword(body: ResetPasswordRequest): Observable<MessageResponse> {
		return this._http.post<MessageResponse>(
			`${this.URL_BACKEND}/api/auth/reset-password`,
			body,
		);
	}

	resendRecoveryCode(body: ResendCodeRequest): Observable<MessageResponse> {
		return this._http.post<MessageResponse>(
			`${this.URL_BACKEND}/api/auth/resend-recovery-code`,
			body,
		);
	}
}
