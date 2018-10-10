import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VMessageComponent } from "./vmessage.component";

@NgModule({
    declarations:[VMessageComponent],
    exports:[VMessageComponent],
    imports:[CommonModule]
})
export class VMessageModule {}