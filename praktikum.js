 // const nama = 'mahesa';

// // nama = "mahesa syawal a"
// console.log(nama + ' kurama');

// let x;
// let y = 10;
// let z = 17.20;
// let nickname = "mahesa";
// let a = true;
// const bigInteger = 1231231231231231231342342n;


// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(typeof(nickname));
// console.log(typeof(a));

// let alas = 5
// let tinggi = 10
// console.log("Hasil perhitungan luas Segitiga dengan alas 5 dan tinggi 10 : " + 0.5*(alas*tinggi));

// let sisi = 0
// console.log("Hasil perhitungan luas Persegi dengan sisi 5 : " , (sisi*sisi));

// if(sisi > 0 ){
//     console.log("nilainya 5");
// }else if(sisi == 0 ){
//      console.log("nol ");
// }else{
//     console.log("gajelas lu");
// }


// switch (sisi){
//     case "0" : console.log("nol");break;
//     case "1" : console.log("satu");break;
//     default : console.log("lima");
// }

// let nilai = 53;
// let hasil;  
// if ( nilai >= 90){
//     hasil = "Selamat! Anda Mendapatkan nilai A"
// }else if ( nilai >= 80 && nilai <= 89 ){
//     hasil = "Anda Mendapatkan nilai B"
// }else if ( nilai >= 70 && nilai <= 79){
//     hasil = "Anda Mendapatkan nilai C"
// }else if ( nilai >= 60 && nilai <= 69){
//     hasil = "Anda Mendapatkan nilai D"
// }else{
//     hasil = "Anda Mendapatkan nilai E"
// }

// console.log(hasil);

// let array =['asdfad',123123,"mahesad", true]

// for(const s of array){
//     console.log(typeof(s));
// }


// gunting 0, batu 1, kertas 2
// let mahesa = 221;
// let cpu = Math.floor(Math.random() * 3);

// if (mahesa === 0 ){
//     if (cpu === 2 ){
//         console.log("mahesa win");
//     }else if (cpu === 1 ){
//         console.log("cpu win");
//     }else{
//         console.log("draw co");
//     }
// }else if (mahesa === 1){
//     if (cpu === 0 ){
//         console.log("mahesa win");
//     }else if (cpu === 2 ){
//         console.log("cpu win");
//     }else{
//         console.log("draw co");
//     }
// }else if(mahesa === 2){
//     if (cpu === 1 ){
//         console.log("mahesa win");
//     }else if (cpu === 0 ){
//         console.log("cpu win");
//     }else{
//         console.log("draw co");
//     }
// }else{
//     console.log("kaga bisa main lu ya jamet")
// }

// console.log("mahesa dapet nya apa : " + mahesa);
// console.log("cpu dapet nya apa : " + cpu);

const SUIT = ['kertas', 'gunting', 'batu'];
const RULES = {
  batu: 'gunting',
  kertas: 'batu',
  gunting: 'kertas',
};
// Messages declare winner after a play
const WINNER = {
  computer: 'Komputer menang! 🤖\uD83E\uDD16',
  user: 'Kamu Menang! \uD83E\uDD73',
  tie: "It's a tie 👔\uD83D\uDC54"
};

// Get user's play
const getUserChoice = userInput => {
  // Convert all user inputs to lowercase
  userInput = userInput.toLowerCase();
  // Check that user inputs a valid parameter
  if (SUIT.includes(userInput)) return userInput;
  return null;
};
// Get computer's play
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return SUIT[randomNumber];
};

const determineWinner = (userChoice, computerChoice) => {
  if (!userChoice) return console.log('Error Ini Pak!')
  console.log(`User plays: ${userChoice}\nComputer plays: ${computerChoice}\n`);
  if (userChoice === computerChoice) return console.log(WINNER.tie);
  if (RULES[userChoice] === computerChoice) return console.log(WINNER.user);
  return console.log(WINNER.computer);
};
kertas = 
RULES["kertas"] = batu 

const userChoice = getUserChoice('kertas');
const computerChoice = getComputerChoice();
determineWinner(userChoice, computerChoice);
