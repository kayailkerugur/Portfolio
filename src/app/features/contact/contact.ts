import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly socials = [
    { label: 'E-posta',   handle: 'kayailkercontact@gmail.com',          href: 'mailto:kayailkercontact@gmail.com', icon: 'email' },
    { label: 'GitHub',    handle: 'kayailkerugur',                        href: 'https://github.com/kayailkerugur', icon: 'github' },
    { label: 'LinkedIn',  handle: 'ilker-ugur-kaya',                      href: 'https://www.linkedin.com/in/ilker-ugur-kaya/', icon: 'linkedin' },
    { label: 'Instagram', handle: 'kaya.dev_',                            href: 'https://instagram.com/kaya.dev_',  icon: 'instagram' },
  ];
}
