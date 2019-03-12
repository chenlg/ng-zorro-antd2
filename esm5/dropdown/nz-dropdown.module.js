/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzNoAnimationModule } from '../core/no-animation/nz-no-animation.module';
import { NzButtonModule } from '../button/nz-button.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzMenuModule } from '../menu/nz-menu.module';
import { NzDropDownADirective } from './nz-dropdown-a.directive';
import { NzDropDownButtonComponent } from './nz-dropdown-button.component';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import { NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
var NzDropDownModule = /** @class */ (function () {
    function NzDropDownModule() {
    }
    NzDropDownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, FormsModule, NzButtonModule, NzMenuModule, NzIconModule, NzNoAnimationModule],
                    entryComponents: [NzDropdownContextComponent],
                    declarations: [NzDropDownComponent, NzDropDownButtonComponent, NzDropDownDirective, NzDropDownADirective, NzDropdownContextComponent],
                    exports: [NzDropDownComponent, NzDropDownButtonComponent, NzDropDownDirective, NzDropDownADirective]
                },] }
    ];
    return NzDropDownModule;
}());
export { NzDropDownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL256LWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDtJQUFBO0lBT0EsQ0FBQzs7Z0JBUEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBVSxDQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixDQUFFO29CQUM5SCxlQUFlLEVBQUUsQ0FBRSwwQkFBMEIsQ0FBRTtvQkFDL0MsWUFBWSxFQUFLLENBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLENBQUU7b0JBQzFJLE9BQU8sRUFBVSxDQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixDQUFFO2lCQUMvRzs7SUFFRCx1QkFBQztDQUFBLEFBUEQsSUFPQztTQURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9uby1hbmltYXRpb24vbnotbm8tYW5pbWF0aW9uLm1vZHVsZSc7XG5cbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL256LWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICcuLi9tZW51L256LW1lbnUubW9kdWxlJztcbmltcG9ydCB7IE56RHJvcERvd25BRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1kcm9wZG93bi1hLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi1jb250ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24uZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0cyAgICAgICAgOiBbIENvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgRm9ybXNNb2R1bGUsIE56QnV0dG9uTW9kdWxlLCBOek1lbnVNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgXSxcbiAgZGVjbGFyYXRpb25zICAgOiBbIE56RHJvcERvd25Db21wb25lbnQsIE56RHJvcERvd25CdXR0b25Db21wb25lbnQsIE56RHJvcERvd25EaXJlY3RpdmUsIE56RHJvcERvd25BRGlyZWN0aXZlLCBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCBdLFxuICBleHBvcnRzICAgICAgICA6IFsgTnpEcm9wRG93bkNvbXBvbmVudCwgTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCwgTnpEcm9wRG93bkRpcmVjdGl2ZSwgTnpEcm9wRG93bkFEaXJlY3RpdmUgXVxufSlcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duTW9kdWxlIHtcbn1cbiJdfQ==