import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TermsAndConditionsComponent } from './Terms&Conditions/terms-and-conditions/terms-and-conditions.component';
import { FaqComponent } from './FAQ-Folder/faq/faq.component';
import { DestinationComponent } from './destination/destination.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckoutConfirmComponent } from './checkout-confirm/checkout-confirm.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'blogs', component: BlogComponent},
    {path: 'destination', component: DestinationComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'FAQ', component: FaqComponent},
    {path: 'checkout-conf', component: CheckoutConfirmComponent}
];
