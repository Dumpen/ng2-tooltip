import {NgModule} from "@angular/core";
import {Tooltip} from "./Tooltip";
import {TooltipContent} from "./TooltipContent";

@NgModule({
    declarations: [
        Tooltip,
        TooltipContent,
    ],
    exports: [
        Tooltip,
        TooltipContent,
    ]
})
export class ToolTipModule {
}