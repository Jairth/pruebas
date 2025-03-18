import { ChangeDetectionStrategy, Component, HostBinding } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import KTLayout from "../../../../metronic/app/layouts/demo1";
import KTComponents from "../../../../metronic/core";
import { FooterComponent } from "../../../layouts/footer/footer.component";
import { HeaderComponent } from "../../../layouts/header/header.component";
import { SidebarComponent } from "../../../layouts/sidebar/sidebar.component";
import { SearchModalComponent } from "../../../partials/search-modal/search-modal.component";

@Component({
	selector: "app-dashboard-page",
	imports: [
		RouterOutlet,
		SidebarComponent,
		HeaderComponent,
		FooterComponent,
		SearchModalComponent,
	],
	templateUrl: "./dashboard-page.component.html",
	styleUrl: "./dashboard-page.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent {
	@HostBinding("class") hostClass = "flex grow";

	ngAfterViewInit(): void {
		KTComponents.init();
		KTLayout.init();
	}
}
