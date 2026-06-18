import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, FormsModule],
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
    { label: 'E-posta',   handle: 'kayailkercontact@gmail.com',          href: 'mailto:kayailkercontact@gmail.com', icon: 'email' },
    { label: 'GitHub',    handle: 'kayailkerugur',                        href: 'https://github.com/kayailkerugur', icon: 'github' },
    { label: 'LinkedIn',  handle: 'ilker-ugur-kaya',                      href: 'https://www.linkedin.com/in/ilker-ugur-kaya/', icon: 'linkedin' },
    { label: 'Instagram', handle: 'kaya.dev_',                            href: 'https://instagram.com/kaya.dev_',  icon: 'instagram' },
  ];
}
