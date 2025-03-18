export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	success: boolean;
	requiresCode: boolean;
	message: string;
}

export interface VerifyCodeRequest {
	email: string;
	code: VerificationCode;
}

export interface VerificationCode {
	first: string;
	second: string;
	third: string;
	fourth: string;
}

export interface ResendCodeRequest {
	email: string;
}

export interface PasswordRecoveryRequest {
	email: string;
}

export interface ResetPasswordRequest {
	email: string;
	newPassword: string;
}

export interface AuthResponse {
	success: boolean;
	token?: string;
	message?: string;
}

export interface MessageResponse {
	success: boolean;
	message: string;
}
