import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, FormsModule, FadeInDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name = '';
  email = '';
  message = '';
  submitted = false;

  sendMail(): void {
    const subject = encodeURIComponent(`İletişim — ${this.name}`);
    const body = encodeURIComponent(
      `${this.message}\n\n---\nGönderen: ${this.name}\nE-posta: ${this.email}`
    );
    window.location.href = `mailto:kayailkercontact@gmail.com?subject=${subject}&body=${body}`;
    this.submitted = true;
  }

  readonly socials = [
    { labelKey: 'contact.channels.email', handle: 'kayailkercontact@gmail.com', href: 'mailto:kayailkercontact@gmail.com', icon: 'email', secondary: false },
    { labelKey: 'contact.channels.github', handle: 'kayailkerugur', href: 'https://github.com/kayailkerugur', icon: 'github', secondary: false },
    { labelKey: 'contact.channels.linkedin', handle: 'ilker-ugur-kaya', href: 'https://www.linkedin.com/in/ilker-ugur-kaya/', icon: 'linkedin', secondary: false },
    { labelKey: 'contact.channels.instagram', handle: 'kaya.dev_', href: 'https://instagram.com/kaya.dev_', icon: 'instagram', secondary: true },
  ];
}
