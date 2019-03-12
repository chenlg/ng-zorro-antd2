/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationCurves } from './animation';
/** @type {?} */
export const collapseMotion = trigger('collapseMotion', [
    state('expanded', style({ height: '*' })),
    state('collapsed', style({ height: 0, overflow: 'hidden' })),
    state('hidden', style({ height: 0, display: 'none' })),
    transition('expanded => collapsed', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    transition('expanded => hidden', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    transition('collapsed => expanded', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    transition('hidden => expanded', animate(`150ms ${AnimationCurves.EASE_IN_OUT}`))
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9hbmltYXRpb24vY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFOUMsTUFBTSxPQUFPLGNBQWMsR0FBNkIsT0FBTyxDQUFDLGdCQUFnQixFQUFFO0lBQ2hGLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzVELEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0RCxVQUFVLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLFNBQVMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDcEYsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxTQUFTLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsU0FBUyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNwRixVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLFNBQVMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Q0FDbEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlcixcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmVzIH0gZnJvbSAnLi9hbmltYXRpb24nO1xuXG5leHBvcnQgY29uc3QgY29sbGFwc2VNb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2NvbGxhcHNlTW90aW9uJywgW1xuICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHsgaGVpZ2h0OiAwLCBvdmVyZmxvdzogJ2hpZGRlbicgfSkpLFxuICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoeyBoZWlnaHQ6IDAsIGRpc3BsYXk6ICdub25lJyB9KSksXG4gIHRyYW5zaXRpb24oJ2V4cGFuZGVkID0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoYDE1MG1zICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUfWApKSxcbiAgdHJhbnNpdGlvbignZXhwYW5kZWQgPT4gaGlkZGVuJywgYW5pbWF0ZShgMTUwbXMgJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9PVVR9YCkpLFxuICB0cmFuc2l0aW9uKCdjb2xsYXBzZWQgPT4gZXhwYW5kZWQnLCBhbmltYXRlKGAxNTBtcyAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVH1gKSksXG4gIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBleHBhbmRlZCcsIGFuaW1hdGUoYDE1MG1zICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUfWApKVxuXSk7XG4iXX0=