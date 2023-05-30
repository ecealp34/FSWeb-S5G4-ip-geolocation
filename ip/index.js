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


const myIPBilgisi = (card) => {
	const container = document.createElement("div");
	container.setAttribute("class", "card");

	const bayrak = document.createElement("img");
	bayrak.setAttribute("src", card?.["ülkebayrağı"]);
    container.append(bayrak);

	const containerSection = document.createElement("div");
	containerSection.setAttribute("class", "card-info");
	container.append(containerSection)
	
	const yazi = document.createElement("h3");
	yazi.setAttribute("class", "ip");
	yazi.textContent = `${card?.sorgu}`;
    containerSection.append(yazi);
   
	const ulkeBilgisi = document.createElement("p");
	ulkeBilgisi.setAttribute("class", "ülke")
	ulkeBilgisi.textContent = `${card?.["ülke"]}  (${card?.["ülkeKodu"]})`
	containerSection.append(ulkeBilgisi);
	
	const enlemBoylam = document.createElement("p");
	enlemBoylam.textContent = `Enlem: ${card?.enlem} Boylam: ${card?.boylam}`;
	containerSection.append(enlemBoylam);

	const sehirBilgisi = document.createElement("p");
	sehirBilgisi.textContent = `Şehir: ${card?.["şehir"]}`;
	containerSection.append(sehirBilgisi);

	const saatDilimi = document.createElement("p");
	saatDilimi.textContent = `Saat dilimi: ${card?.saatdilimi}`;
	containerSection.append(saatDilimi);

	const paraBirimi = document.createElement("p");
	paraBirimi.textContent = `Para birimi: ${card?.parabirimi}`;
	containerSection.append(paraBirimi);

	const ispBilgisi = document.createElement("p");
	ispBilgisi.textContent = `ISP: ${card?.isp}`;
	containerSection.append(ispBilgisi);

	return container;

}

const cardContainer = document.querySelector(".cards"); 

let myIP = null;

async function myIpAdresimiAl()  {
	await axios
		.get("https://apis.ergineer.com/ipadresim") 
		.then(function(response) {
		myIP = response.data
		return myIP;
	})
		.catch(function(error)  {
		
		console.log(error);
	})
		.finally(function() {
		console.log("myIP", myIP);
	});

}


async function myIpAdresimDetayı() {
	await myIpAdresimiAl()
	axios
		.get(`https://apis.ergineer.com/ipgeoapi/${myIP}`) 
		.then(function(response) {
			
			cardContainer.append(myIPBilgisi(response.data))
			
		})
		.catch(function(error)  {
			
			console.log(error);
		})
		.finally(() => {
			console.log(myIP);
		});

}

myIpAdresimDetayı();
