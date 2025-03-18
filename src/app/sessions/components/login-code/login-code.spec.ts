import LoginCodeComponent from "@/sessions/components/login-code/login-code.component";
import { type ComponentFixture, TestBed } from "@angular/core/testing";

describe("EmailCodeLoginComponent", () => {
	let component: LoginCodeComponent;
	let fixture: ComponentFixture<LoginCodeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginCodeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LoginCodeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
