//Promise uzak vir veri kayanğında çekilecek olan verilerin sarılıp hata durumunda reject hata olmadığı durumda resolve eden bir asenkron iletişim şeklidir

//resolve çözme işlemi
//reject ise sunucudaki bir sorun sebebi ile veriyi döndüremeyip hata döndürme fonk.

//senkron programlama ve asenkron programlama
//js yarı asenkron bir dildir

const a = 5;
console.log("a", a);

//belirli bir zaman dilimi sonrası ilgili kod bloüunu çalıştıran BOM işlemi. Browser Object Model
setTimeout(function () {
  const b = 10;
  console.log("b", b);
}, 1000);

const c = 15;
console.log("c", c);

const promise = new Promise((resolve, reject) => {
  const k = 10;
  let l;

  setTimeout(function () {
    const d = 20;
  }, 1000);
  const j = 30;

  if (k + l + j > 100) {
    reject("hata");
  } else {
    resolve({k, l, j});
  }
});
//promise sözünü tuttuğu durumda
promise
  .then((response) => {
    console.log("promiseResponse", response);
  })
  //sözünü tutamadığı yeri ise catch yakalar
  .catch((err) => {
    console.log("err", err);
  });
