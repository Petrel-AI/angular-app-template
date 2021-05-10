import { Component, Input } from '@angular/core';
import { ConfirmMsg } from '@shared/components/dialogs/models/confirm-msg';
import { DialogMessage } from '@shared/components/dialogs/models/dialog-message';
import Assertion from '@shared/validation/assertion';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  get showModal(): boolean {
    return this.message != null;
  }

  get text(): string | null {
    return this.message != null ? this.message.message.text : null;
  }

  get messageSubject(): string {
    return this.message?.subject ?? '';
  }

  @Input()
  message: DialogMessage<ConfirmMsg> | null = null;

  confirm(): void {
    Assertion.notNull(this.message, 'message');
    this.message!.message.confirm();
    this.message = null;
  }

  close(): void {
    Assertion.notNull(this.message, 'message');
    this.message!.close();
    this.message = null;
  }
}
