import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-users",
	imports: [],
	templateUrl: "./users.component.html",
	styleUrl: "./users.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {}
