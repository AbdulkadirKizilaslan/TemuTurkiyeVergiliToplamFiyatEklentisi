# Temu Türkiye Vergili Toplam Fiyat Eklentisi

Bu proje, [Temu](https://www.temu.com/) platformundaki fiyatlara %60 vergi ekleyerek güncellenmiş toplam fiyatları görüntülemenizi sağlayan bir Google Chrome uzantısıdır. Kullanıcılar, listedeki fiyatların yanında toplam fiyatı doğrudan görebilir, böylece gerçek maliyeti kolayca hesaplayabilir.

---

## Özellikler
- **Fiyat Güncelleme:** 
  Temu sayfasında DOM değişikliklerini izleyerek fiyatları anında günceller.
- **Logo:** 
  Sayfanın sol alt köşesine sabit bir logo ekler.
- **Dinamik Hesaplama:** 
  Fiyatlara %60 vergi ekleyerek TL formatında görüntüler.
- **Kullanışli Tasarım:** 
  Görsel ögeler ve okunabilirlik ön planda tutulmuştur.

---

## Kurulum

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/AbdulkadirKizilaslan/TemuTurkiyeVergiliToplamFiyatEklentisi.git
```

### 2. Chrome Uzantısı Olarak Yükleyin
1. Google Chrome tarayıcınızda **chrome://extensions/** adresine gidin.
2. **Geliştirici Modu**nu etkinleştirin.
3. **Paketlenmemiş uzantı yükle** butonuna tıklayın ve proje klasörünü seçin.

### 3. Temu’yu Ziyaret Edin
Uzantıyı etkinleştirdikten sonra [Temu](https://www.temu.com/) sitesine giderek fiyatların güncellendiğini gözlemleyebilirsiniz.

---

## Kullanım
1. Uzantıyı etkinleştirin.
2. Temu’daki ürün fiyatları, %60 vergi eklenmiş şekilde yanında görünecektir.

> **Not:** Yalnızca "https://www.temu.com/*" adresindeki sayfalarda çalışır.

---

## Dosya Yapısı

### 1. `content.js`
DOM manipülasyonu ve fiyat güncelleme işlemleri burada gerçekleştirilir. Fiyat elemanlarını tespit eder, yeni fiyatları hesaplar ve DOM'a yazar.

### 2. `manifest.json`
Chrome uzantısının temel ayarlarını barındıran dosya. Bu dosyada izinler, eklenti adı, sürüm bilgisi ve çalışma alanı tanımlanır.

### 3. `popup.css`
Uzantının tasarım stilini belirler. Turuncu arka plan, beyaz yazı ve okunabilirlik odaklı bir tasarım sunar.

---

## Geliştirme

### Kodları Klonlama ve Düzenleme
Projeyi geliştirmek için aşağıdaki adımları takip edebilirsiniz:

1. Depoyu klonla:
   ```bash
   git clone https://github.com/AbdulkadirKizilaslan/TemuTurkiyeVergiliToplamFiyatEklentisi.git
   ```
2. Bir çalışma dalı oluştur:
   ```bash
   git checkout -b yeni-ozellik
   ```
3. Kodları düzenle ve güncelle:
   ```bash
   git add .
   git commit -m "Yeni özellik: ..."
   ```
4. Değişiklikleri uzak depoya gönder:
   ```bash
   git push origin yeni-ozellik
   ```

---

## Katkıda Bulunma
Projeye katkı sağlamak için:  
1. Depoyu forklayın.  
2. Bir özellik dalı oluşturun.  
3. Değişikliklerinizi yapın ve commit edin.  
4. Pull request oluşturun.

---

## Ekran Görüntüleri

### Uzantı Kullanımı
https://i.hizliresim.com/g36pocz.png

### Güncellenmiş Fiyatlar
https://i.hizliresim.com/39gumcy.png

### Logo ve Tasarım
https://i.hizliresim.com/d7afrmw.png

---

## Lisans
Bu proje [MIT Lisansı](LICENSE) altında sunulmaktadır.
