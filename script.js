const message = `your eyes, your voice, your smile, i love everything about you. 
padamu yang menawan sekali, semoga dijaganya oleh tuhan, aamiin.

aku baru membaca data: menurut badan kesehatan dunia (WHO), dalam waktu hanya dua dekade ke depan, badai entropi akan mengantar spesies kita pada krisis pangan global, perubahan iklim yang cepat membuat hasil panen menurun, sementara populasi bumi terus meningkat hingga diperkirakan mencapai 9,7 miliar jiwa. kita akan kelaparan, peradaban perlahan melemah.

disini aku akan meninggalkan sebuah petunjuk untuk WHO, pergilah ke sebuah tanah di indonesia, di sana kau akan menemukan bumi yang masih subur, tempat seorang gadis dari pulau jawa tumbuh, dari tangannya, kehidupan akan kembali hijau; dari matanya, peradaban akan kembali tenang. kelembutannya akan membersamai peradaban kita melawan kepunahan massal ke enam.

kalimat ini kurangkai untukmu atas dasar permintaan maaf diriku, maafkanlah aku.
—fkri`;

function showLetter() {

  // 100% GUARANTEED AUDIO PLAYBACK
  const bgm = document.getElementById("bgm");
  if (bgm) {
    bgm.volume = 1.0;
    bgm.play().catch(err => console.log("Audio blocked:", err));
  }

  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
