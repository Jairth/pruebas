import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "metronic-tailwind-angular";
	// @HostBinding("class") hostClass = "flex grow";

	// ngAfterViewInit(): void {
	// 	KTComponents.init();
	// 	KTLayout.init();
	// }

	// ngOnInit(): void {}
}
