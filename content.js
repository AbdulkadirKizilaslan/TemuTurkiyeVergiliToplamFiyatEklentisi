const observeChanges = () => {
  const targetNode = document.body;
  const observerConfig = { childList: true, subtree: true };

  const callback = () => {
    console.log("DOM değişikliği algılandı!");
    updatePrices();
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, observerConfig);

  updatePrices(); // İlk yüklemede de fiyatları güncelle
};
// Logoyu eklemek için gerekli stil ve resim
const logo = document.createElement('img');
logo.src = 'https://i.hizliresim.com/5cmig3s.png'; // Dış URL kullanıyoruz
logo.alt = 'icon';
logo.style.position = 'fixed';  // Sayfada sabit tutmak için fixed kullanıyoruz
logo.style.bottom = '10px';     // Alt kısımdan 10px mesafe
logo.style.left = '10px';       // Sol kısımdan 10px mesafe
logo.style.width = '220px';      // Logonun genişliği
logo.style.height = 'auto';     // Yüksekliği orantılı
logo.style.zIndex = '9999';     // Üstte kalması için yüksek bir z-index değeri

// Logoyu sayfaya ekliyoruz
document.body.appendChild(logo);


const updatePrices = () => {
  const priceElements = document.querySelectorAll("._2de9ERAH, ._1vkz0rqG");
  console.log("Bulunan fiyat elemanları:", priceElements);

  priceElements.forEach((element) => {
    const originalText = element.textContent.trim();
    console.log("Orijinal fiyat metni:", originalText);

    const rawPrice = originalText.replace(".", "").replace(",", ".");
    const price = parseFloat(rawPrice);
    console.log("Dönüştürülen fiyat:", price);
    

    if (!isNaN(price) && !element.dataset.updated) {
      const newPrice = (price * 1.6).toFixed(2).replace(".", ",");
      console.log("Yeni hesaplanan fiyat:", newPrice);
        
        

      if (element.classList.contains('_1vkz0rqG')) {
        element.style.fontWeight = 'bold';
        element.style.fontSize = '26px';
      }

      element.innerHTML = `<span style="color: orange;">(${newPrice} TL)</span> ${originalText}`;
      element.dataset.updated = "true";
      console.log("Güncellendi:", element.textContent);
    }
  });
};

observeChanges();
