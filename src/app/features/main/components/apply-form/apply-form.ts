import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { TelegramService } from '../../../../shared/services/telegram-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-apply-form',
  imports: [ReactiveFormsModule, InputText, Textarea, ProgressSpinner],
  templateUrl: './apply-form.html',
  styleUrl: './apply-form.scss',
})
export class ApplyForm {
  private readonly fb = inject(FormBuilder);
  private readonly telegramService = inject(TelegramService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly messageService = inject(MessageService);

  protected isLoading = signal<boolean>(false);

  protected messageForm = this.fb.group({
    fullname: this.fb.control<string | null>(null),
    username: this.fb.control<string | null>(null),
    message: this.fb.control<string | null>(null),
  });

  protected submit() {
    this.isLoading.set(true); 

    const form = this.messageForm.getRawValue();
    const message = `FullName: ${form.fullname}\nUserName: ${form.username}\nMessage: ${form.message}`;

    this.telegramService
      .sendMessage(message)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.messageService.add({
            summary: 'Message Sent!',
            severity: 'success',
          });

          this.isLoading.set(false);
        },
        error: (err) => {
          this.messageService.add({
            summary: err,
            severity: 'danger',
          });

          this.isLoading.set(false);
        },
      });
  }
}
