/*Değişkenlere veri kapsayıcılar diyebiliriz. Unutmayınız ki değişkenler, verileri belleklerde(Ram) saklar.
 Bir değişken atandığında belleklerde kendisi için yer ayrılır. 
 Bir değişkene bir değer(veri) atandığında, bellek alanı bu verilerle doldurulur. 
 Değişken tanımlamak için, var, let, veya const Anahtar kelimelerini(keywords) kullanırız.

Değişken değerinin kodumuzun farklı yerlerinde değiştirilmesi gerekiyorsa, let kullanırız. 
Eğer değişken verisi hiçbir yerde değişmeyecek ise bu durumda const kullanırız. 
Örneğin, Pi sayısı, ülke adları veya yerçekimi ivmesi gibi değişmeyen, sabit değerler için const kullanırız. 

Çok fazla sızıntısı olduğundan dolayı var değişken tanımlayıcısını kullanmanız hatalara sebep olacaktır.

*/

//Değişken Adlandırma
/*
-->  JavaScript değişken adı bir sayı ile başlamamalıdır.
-->  JavaScript değişken adı, dolar işareti ve alt çizgi dışında özel karakterlere izin vermez.(Türkçe karakterlere özellike dikkat ediniz.)
-->  JavaScript değişken adı, camelCase kuralına uymalı.
-->  JavaScript değişken adı sözcükler arasında boşluk olmamalıdır.
*/

let ad = "Berfin"; // bir kişinin adı
let soyAd = "Baki"; // bir kişinni soyadı
let ulke = "Türkiye"; // ülke
let sehir = "Ankara"; // başkent
let yas = 27; // yaş
let instagram = "@KevokSofware"; // instagram adresi
let evliMi = false;

console.log(ad, soyAd, ulke, sehir, yas, instagram, evliMi);

let benimYasım = 25;
let seninYasın = 30;
