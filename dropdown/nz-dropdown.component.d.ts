import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzNoAnimationDirective } from '../core/no-animation/nz-no-animation.directive';
import { NzMenuDirective } from '../menu/nz-menu.directive';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
export declare type NzPlacement = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
export declare class NzDropDownComponent implements OnDestroy, AfterContentInit, OnChanges {
    protected cdr: ChangeDetectorRef;
    private nzMenuDropdownService;
    noAnimation?: NzNoAnimationDirective;
    triggerWidth: number;
    dropDownPosition: 'top' | 'center' | 'bottom';
    positions: ConnectionPositionPair[];
    visible$: Subject<boolean>;
    private destroy$;
    nzDropDownDirective: NzDropDownDirective;
    nzMenuDirective: NzMenuDirective;
    cdkConnectedOverlay: CdkConnectedOverlay;
    nzTrigger: 'click' | 'hover';
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzPlacement: NzPlacement;
    nzClickHide: boolean;
    nzDisabled: boolean;
    nzVisible: boolean;
    nzTableFilter: boolean;
    readonly nzVisibleChange: EventEmitter<boolean>;
    setVisibleStateWhen(visible: boolean, trigger?: 'click' | 'hover' | 'all'): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    startSubscribe(observable$: Observable<boolean>): void;
    updateDisabledState(): void;
    constructor(cdr: ChangeDetectorRef, nzMenuDropdownService: NzMenuDropdownService, noAnimation?: NzNoAnimationDirective);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
