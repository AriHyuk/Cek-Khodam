function fetchData() {
  const inputText = document.getElementById('inputText').value.trim();
  const resultElement = document.getElementById('result');

  if (inputText === '') {
      resultElement.innerHTML = '<p>Silakan masukkan nama Anda.</p>';
      resultElement.style.display = 'block'; // Tampilkan card hasil
      return;
  }

  // Menentukan hasil berdasarkan kata kunci dalam input nama
  let resultMessage = '';

  if (inputText.toLowerCase().includes('kdha')) {
      resultMessage = `${inputText} khodam kamu adalah mio mberrr.`;
  } else {
      const randomResults = [
          `${inputText} khodam kamu kosong`,
          `${inputText} khodam kamu tutup botol`,
          `${inputText} khodam kamu knalpot aerox.`,
          `${inputText} khodam kamu vario gredeg.`,
          `${inputText} khodam kamu toples sosis.`,
          `${inputText} khodam kamu genteng bocor.`,
          `${inputText} khodam kamu kulkas 2 pintu.`,
          `${inputText} khodam kamu kabur.`
      ];
      const randomIndex = Math.floor(Math.random() * randomResults.length);
      resultMessage = randomResults[randomIndex];
  }

  // Menampilkan hasil ke dalam elemen result
  resultElement.innerHTML = `<h3>Khodam:</h3><p>${resultMessage}</p>`;
  resultElement.style.display = 'block'; // Tampilkan card hasil
}