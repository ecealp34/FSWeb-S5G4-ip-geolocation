//axios import buraya gelecek

import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek
const cardYapıcı = document.querySelector(".cards");

ipAdresimiAl = () => {
	let api = null;
	axios.get("https://apis.ergineer.com/ipgeoapi/46.196.64.180") 
.then(function(response) {
	api = response.data
	return api;
})
.catch(function(error)  {
	
	console.log(error);
})
.finally(() => {
	console.log(api);
});

}


console.log(ipAdresimiAl());

const IPbul = (card) => {
	const container = document.createElement("div");
	container.setAttribute("class", "card");

	const imgbayrak = document.createElement("img");
	imgbayrak.setAttribute("src", card?.bayrakUrl);
    container.append(imgbayrak);

	const containerSection = document.createElement("div");
	containerSection.setAttribute("class", "card-info");
	container.append(containerSection)
	
	const yazi = document.createElement("h3");
	yazi.setAttribute("class", "ip");
	yazi.textContent = `IP: ${card?.sorgu}`;
    containerSection.append(yazi);
   
	const p = document.createElement("p");
	p.setAttribute("class","ulke")
	p.textContent = `${card?.ulke}  (${card?.ulkeKodu})`
	containerSection.append(p);
	
	const param2 = document.createElement("p");
	param2.textContent = `Enlem: ${card?.enlem} Boylam: ${card?.boylam}`;
	containerSection.append(param2);

	const param3 = document.createElement("p");
	param3.textContent = `Şehir: ${card?.sehir}`;
	containerSection.append(param3);

	const param4 = document.createElement("p");
	param4.textContent = `Saat Dilimi: ${card?.saatdilimi}`;
	containerSection.append(param4);

	const param5 = document.createElement("p");
	param5.textContent = `Para birimi: ${card?.parabirimi}`;
	containerSection.append(param5);

	const param6 = document.createElement("p");
	param6.textContent = `ISP: ${card?.isp}`;
	containerSection.append(param6);

	return container;

}






// benimIP.forEach((card) => {
// 	const kart = IPbul(card); 	
// 	const cards = document.querySelectorAll(".cards")[0];
//  	cards.append("kart");
//    });


  
//    const IPbul = (card) => {
// 	const container = document.createElement("div");
// 	container.setAttribute("class", "card");

// 	const imgbayrak = document.createElement("img");
// 	img.setAttribute("src", card.image);
//     container.append(imgbayrak);

// 	const containerSection = document.createElement("div");
// 	containerSection.setAttribute("class", "card-info");
// 	container.append(containerSection)
	
// 	const h3 = document.createElement("h3");
// 	h3.setAttribute("class", "ip");
// 	h3.textContent = card.sorgu
//     containerSection.append(h3);
   
// 	const p = document.createElement("p");
// 	p.setAttribute("class","ulke")
// 	p.textContent = card.ulkeKodu;
// 	containerSection.append(p);
	
// 	const param2 = document.createElement("p");
// 	param2.textContent = `Enlem: ${card.enlem} Boylam: ${card?.boylam}`;
// 	containerSection.append(param2);

// 	const param3 = document.createElement("p");
// 	param3.textContent = `Şehir: ${card.sehir}`;
// 	containerSection.append(param3);

// 	const param4 = document.createElement("p");
// 	param4.textContent = `Saat Dilimi: ${card.saatdilimi}`;
// 	containerSection.append(param4);

// 	const param5 = document.createElement("p");
// 	param5.textContent = `Para birimi: ${card.parabirimi}`;
// 	containerSection.append(param5);

// 	const param6 = document.createElement("p");
// 	param6.textContent = `ISP: ${card.isp}`;
// 	containerSection.append(param6);

// 	return container;

// }