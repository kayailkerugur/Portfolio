import { Component } from '@angular/core';

export interface Project {
  emoji: string;
  title: string;
  subtitle: string;
  status: 'live' | 'dev';
  description: string;
  features: string[];
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      emoji: '📒',
      title: 'Notiva',
      subtitle: 'iOS · Backend · DevOps',
      status: 'live',
      description:
        'Not alma, görev yönetimi, planlama ve kişisel organizasyon süreçlerini tek uygulama altında toplayan kapsamlı bir mobil uygulamadır. Uçtan uca şifrelenmiş veri saklama ve bulut senkronizasyon altyapısıyla kişisel veriler güvenle korunur.',
      features: [
        'Not oluşturma ve düzenleme',
        'To-Do listeleri ve görev yönetimi',
        'Günlük planlama ve hatırlatıcılar',
        'Kimlik doğrulama sistemi entegrasyonu',
        'Bulut senkronizasyon altyapısı',
        'Uçtan uca şifrelenmiş veri saklama',
      ],
      tags: ['SwiftUI', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'Redis', 'Liquibase'],
    },
    {
      emoji: '✈️',
      title: 'TripMate',
      subtitle: 'iOS · Backend · DevOps',
      status: 'live',
      description:
        'Kullanıcıların seyahat planlarını oluşturabilmesi ve gezilerini organize edebilmesi için geliştirilmiş seyahat planlama uygulamasıdır. Gün bazlı gezi planlama, şehir ve rota oluşturma, gezilecek yer önerileri ve lokasyon tabanlı planlama özellikleriyle seyahat deneyimini kolaylaştırır.',
      features: [
        'Gün bazlı gezi planlama',
        'Şehir ve rota oluşturma',
        'Gezilecek yer önerileri',
        'Seyahat takvimi yönetimi',
        'Lokasyon tabanlı planlama',
      ],
      tags: ['SwiftUI', 'MapKit', 'CoreLocation', 'REST API'],
    },
    {
      emoji: '💊',
      title: 'EczanemNöbetçi',
      subtitle: 'iOS',
      status: 'live',
      description:
        'Kullanıcıların bulundukları konuma göre nöbetçi eczaneleri gerçek zamanlı olarak görüntüleyebilmesini sağlayan mobil uygulamadır. Harita üzerinden görselleştirme, konuma göre filtreleme ve eczane iletişim bilgilerine hızlı erişim sunar.',
      features: [
        'Nöbetçi eczane listeleme',
        'Konuma göre filtreleme',
        'Harita üzerinden görüntüleme',
        'Telefon ve adres bilgilerine erişim',
      ],
      tags: ['SwiftUI', 'MapKit', 'REST API', 'CoreLocation'],
    },
    {
      emoji: '💬',
      title: 'Gerçek Zamanlı Chat Sistemi',
      subtitle: 'Backend · Güvenlik',
      status: 'dev',
      description:
        'Gerçek zamanlı mesajlaşma ve güvenli iletişim altyapısının geliştirilmesi amacıyla tasarlanmış sistemdir. AES-GCM, ECDH ve ECDSA kriptografi protokolleriyle uçtan uca şifreleme (E2EE) sağlar; anlık mesajlaşma, DM sistemi ve çoklu cihaz desteği sunar.',
      features: [
        'Anlık mesajlaşma ve DM sistemi',
        'Online kullanıcı takibi',
        'Mesaj okundu bilgisi ve yazıyor göstergesi',
        'Çoklu cihaz desteği',
        'Uçtan uca şifreleme (E2EE)',
        'AES-GCM, ECDH, ECDSA, HKDF kriptografi zinciri',
      ],
      tags: ['Node.js', 'Express.js', 'Socket.IO', 'PostgreSQL', 'JWT', 'AES-GCM', 'ECDH', 'ECDSA', 'HKDF'],
    },
    {
      emoji: '🌍',
      title: 'RestLocations',
      subtitle: 'iOS · Backend',
      status: 'dev',
      description:
        'Seyahat eden kullanıcıların otel, kamp alanı ve karavan konaklama noktalarını keşfetmesini sağlayan mobil platformdur. Harita entegrasyonu, konum bazlı arama ve seyahat rotası oluşturma özellikleriyle kapsamlı bir konaklama çözümü sunar.',
      features: [
        'Otel, kamp alanı ve karavan noktaları listeleme',
        'Konum bazlı arama ve filtreleme',
        'Harita üzerinde görselleştirme',
        'Seyahat rotası oluşturma',
      ],
      tags: ['SwiftUI', 'Spring Boot', 'PostgreSQL', 'MapKit', 'JWT'],
    },
    {
      emoji: '🔐',
      title: 'Auth Service',
      subtitle: 'Backend · DevOps',
      status: 'dev',
      description:
        'Birden fazla uygulama tarafından kullanılabilecek merkezi kullanıcı yönetimi ve kimlik doğrulama servisidir. E-posta doğrulama, JWT/refresh token yönetimi, Redis tabanlı token blacklist ve Thymeleaf HTML e-posta şablonları içeren üretime hazır bir kimlik doğrulama altyapısı sunar.',
      features: [
        'Kullanıcı kayıt ve e-posta doğrulama',
        'JWT tabanlı yetkilendirme ve refresh token',
        'Şifre sıfırlama akışı',
        'Redis tabanlı token blacklist sistemi',
        'Hesap silme (30 gün bekletme politikası)',
        'Thymeleaf HTML e-posta şablonları',
      ],
      tags: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT', 'Redis', 'Liquibase', 'Docker'],
    },
    {
      emoji: '🗺️',
      title: 'Kroki Tabanlı Sistem',
      subtitle: 'Frontend · FullStack',
      status: 'dev',
      description:
        'Konum ve alan bilgilerinin kroki üzerinde yönetilebilmesini sağlayan web tabanlı sistemdir. Dinamik veri gösterimi, alan ve nokta yönetimi, konum işaretleme ve yönetim paneli entegrasyonu ile kurumsal kullanıma uygun bir platform sunar.',
      features: [
        'Kroki görüntüleme ve yönetimi',
        'Alan ve nokta işaretleme',
        'Dinamik veri gösterimi',
        'Yönetim paneli entegrasyonu',
        'REST API entegrasyonu',
      ],
      tags: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'PostgreSQL'],
    },
  ];
}
