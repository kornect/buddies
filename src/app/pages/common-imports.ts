import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthLayoutModule } from '@/app/components/layouts/auth-layout';
import { UiInputEmailModule } from '@/app/components/ui/ui-input-email';
import { UiInputErrorModule } from '@/app/components/ui/ui-input-error';
import { UiInputPasswordModule } from '@/app/components/ui/ui-input-password';
import { UiInputTextModule } from '@/app/components/ui/ui-input-text';
import { UiInputValidationModule } from '@/app/components/ui/ui-input-validation';
import { UiInputTextAreaModule } from '@/app/components/ui/ui-input-text-area';

export const NgImports = [CommonModule];

export const NgFormsImports = [FormsModule, ReactiveFormsModule];

export const AuthImports = [
  ...NgImports,
  ...NgFormsImports,
  UiInputPasswordModule,
  UiInputErrorModule,
  UiInputEmailModule,
  UiInputTextModule,
  UiInputValidationModule,
  AuthLayoutModule
];

export const CommonImports = [
  ...NgImports,
  ...NgFormsImports,
  UiInputPasswordModule,
  UiInputErrorModule,
  UiInputEmailModule,
  UiInputTextModule,
  UiInputTextAreaModule,
  UiInputValidationModule
];
