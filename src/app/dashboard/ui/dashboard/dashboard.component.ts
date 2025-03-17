import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../../../layouts/footer/footer.component";
import { HeaderComponent } from "../../../layouts/header/header.component";
import { SidebarComponent } from "../../../layouts/sidebar/sidebar.component";
import { SearchModalComponent } from "../../../partials/search-modal/search-modal.component";

@Component({
	selector: "app-layout",
	imports: [
		RouterOutlet,
		SidebarComponent,
		HeaderComponent,
		FooterComponent,
		SearchModalComponent,
	],
	templateUrl: "./dashboard.component.html",
	styleUrl: "./dashboard.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {}
