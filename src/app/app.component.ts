import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon"; //pour les svg
import { DomSanitizer } from "@angular/platform-browser"; //idem

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-akka';

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer)
  {
    this.matIconRegistry.addSvgIcon(
      "akka-logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/akka-logo.svg")
    );
  }
}
