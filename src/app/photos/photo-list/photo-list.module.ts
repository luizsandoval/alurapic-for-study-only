import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { FilterByDescriptionPipe } from "./filterByDescription.pipe";
import { PhotoModule } from "../photo/photo.module";
import { CardModule } from "../../shared/components/card/card.module";
import { SearchComponent } from "./search/search.component";
import { DarkerOnHoverModule } from "../../shared/directives/darker-on-hover/darker-on-hover.module";

@NgModule({
    declarations: [
        PhotoListComponent, 
        PhotosComponent, 
        LoadButtonComponent, 
        FilterByDescriptionPipe,
        SearchComponent
    ],
    imports: [
          CommonModule,
          RouterModule, 
          PhotoModule,
          CardModule,
          DarkerOnHoverModule
        ]
})

export class PhotoListModule {}