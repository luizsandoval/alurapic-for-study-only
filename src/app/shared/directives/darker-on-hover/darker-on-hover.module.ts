import { NgModule } from "@angular/core";
import { DarkerOnHoverDirective } from "./darker-on-hover.directive";

@NgModule({
    declarations: [DarkerOnHoverDirective],
    exports: [DarkerOnHoverDirective]
})

export class DarkerOnHoverModule{}