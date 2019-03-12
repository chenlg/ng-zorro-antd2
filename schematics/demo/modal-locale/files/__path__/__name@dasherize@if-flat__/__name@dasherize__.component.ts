import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <button nz-button nzType="primary" (click)="showModal()">Modal</button>
      <nz-modal
        [(nzVisible)]="isVisible"
        nzTitle="Modal"
        nzOkText="Ok"
        nzCancelText="Cancel"
        (nzOnOk)="handleOk()"
        (nzOnCancel)="handleCancel()"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </nz-modal>
    </div>
    <br/>
    <button nz-button nzType="info" (click)="showConfirm()">Confirm</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles: []
})
export class <%= classify(name) %>Component {
  isVisible = false;

  constructor(private modalService: NzModalService) { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Bla bla ...',
      nzOkText: 'OK',
      nzCancelText: 'Cancel'
    });
  }
}
