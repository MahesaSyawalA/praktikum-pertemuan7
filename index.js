console.log("mahesa");
// soal A1
// perbaikan nama class yang dituju tidak sesuai
const btnDaftar = document.querySelector('.register-btn');

btnDaftar.addEventListener('click', function (e) {
  e.preventDefault();
  alert('Terima kasih! Pendaftaran TechConf 2024 segera dibuka.');
});

// soal A2
// belum ada id yang dimiliki dijudul yang ada di website
const heading = document.getElementById('hero-heading');

heading.innerText = 'TechConf 2024 – Edisi Spesial';


// Tambahkan tombol ini di section .stats sebelum mengerjakan:
// <button id="btn-tambah" style="margin-top:16px">+ Tambah Peserta</button>
// soal A3
const pesertaEl = document.querySelector('.stat-number-participants');
const btnTambah = document.getElementById('btn-tambah');

btnTambah.addEventListener('click', function () {
  let nilai = parseInt(pesertaEl.innerText);
  nilai = nilai + 1;
  pesertaEl.innerText = nilai + '+';
});


// soal B1
const ctaButton = document.querySelector('.cta-button');

function clearText(){
  ctaButton.innerText = "Dapatkan Tiket";
  ctaButton.style.backgroundColor = '#e94560';
}

ctaButton.addEventListener('click', function () {
  ctaButton.innerText = "Memperoses....";
  ctaButton.style.backgroundColor = '#94a3b8'  
  setTimeout(clearText, 2000);
});


// soal B2
const speaker = document.querySelectorAll('.speaker');

function clearActiveSpeaker(){
  speaker.forEach((item)=>{
    item.classList.remove('active')
  })
};

speaker.forEach((item)=>{
  item.addEventListener('click',function(){
    // console.log('test');
    clearActiveSpeaker();
    item.classList.add('active')
  })
});


// soal B3
const inputDaftar = document.getElementById('nama-peserta');
const buttonDaftar = document.getElementById('btn-daftar');
const pesanDaftar = document.getElementById('pesan-daftar');


buttonDaftar.addEventListener('click',function(){
  const value = inputDaftar.value.trim();
  
  if (value.length === 0  ) {
    pesanDaftar.innerText="Nama tidak boleh kosong!!";
    pesanDaftar.style.color = '#ef4444';
  }else if (value.length < 3) {
    pesanDaftar.innerText="Nama minimal 3 karakter!";
    pesanDaftar.style.color = '#f97316';
  }

  if (value.length > 3) {
    pesanDaftar.innerText="'Halo, " +value+ "! Kamu terdaftar di TechConf 2024";
    pesanDaftar.style.color = '#22c55e';
  }
  console.log(value);
});






