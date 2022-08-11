import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BillingHistoryItemDetailsComponent } from './billing-history/billing-history-item-details/billing-history-item-details.component';
import { BillingHistoryItemListComponent } from './billing-history/billing-history-item-list/billing-history-item-list.component';
import { BillingHistoryItemComponent } from './billing-history/billing-history-item/billing-history-item.component';
import { BillingHistoryListComponent } from './billing-history/billing-history-list/billing-history-list.component';
import { BillingHistoryComponent } from './billing-history/billing-history.component';
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { PaymentCardItemDetailsComponent } from './payment-cards/payment-card-item-details/payment-card-item-details.component';
import { PaymentCardItemFormComponent } from './payment-cards/payment-card-item-form/payment-card-item-form.component';
import { PaymentCardItemListComponent } from './payment-cards/payment-card-item-list/payment-card-item-list.component';
import { PaymentCardItemComponent } from './payment-cards/payment-card-item/payment-card-item.component';
import { PaymentCardsComponent } from './payment-cards/payment-cards.component';
import { SubscriptionChangeFormComponent } from './subscription/subscription-change-form/subscription-change-form.component';
import { SubscriptionDetailsComponent } from './subscription/subscription-details/subscription-details.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    SubscriptionComponent,
    SubscriptionDetailsComponent,
    SubscriptionChangeFormComponent,
    BillingComponent,
    BillingHistoryComponent,
    BillingHistoryListComponent,
    BillingHistoryItemListComponent,
    BillingHistoryItemComponent,
    BillingHistoryItemDetailsComponent,
    PaymentCardsComponent,
    PaymentCardItemListComponent,
    PaymentCardItemComponent,
    PaymentCardItemDetailsComponent,
    PaymentCardItemFormComponent,
  ],
  imports: [CommonModule, BillingRoutingModule],
})
export class BillingModule {}
