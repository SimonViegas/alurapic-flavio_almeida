import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  photos = [
    {
      url: "https://lastfm.freetls.fastly.net/i/u/770x0/6669b1216a3c48fb879211fa0a2fa8c3.jpg#6669b1216a3c48fb879211fa0a2fa8c3",
      description: "Logo do Metallica",
      alt: "Metallica",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg",
      description: "Leoa na selva",
      alt: "Leoa",
    },
  ];
}
