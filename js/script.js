// memilih form dan hasil div
var bmiForm = document.getElementById('bmiForm');
var result = document.querySelector('.result');

// mencegah pengiriman formulir dan menangani perhitungan BMI
bmiForm.addEventListener('submit', function(event) {
  // mencegah formulir dikirim dan halaman dimuat ulang
  event.preventDefault();

  var height = +document.querySelector('#height').value;
  var weight = +document.querySelector('#weight').value;

  // fungsi untuk mencheck tinggi & berat adalah angka yang valid
  if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
    alert('Please fill all fields with valid numbers');
    return;
  }

  // mengkonversi tinggi ke dalam meter
  height = height / 100;
  var bmi = weight / (height * height);
  showResult(bmi);
});

// fungsi untuk menunjukkan hasil
function showResult(bmi) {
  var bmiStatus;
  if (bmi < 18.5) {
    bmiStatus = 'Kekurangan berat badan';
  } else if (bmi < 25) {
    bmiStatus = 'Normal';
  } else if (bmi < 30) {
    bmiStatus = 'kelebihan berat badan';
  } else {
    bmiStatus = 'Obesitas';
  }
  result.innerHTML = `<div class=${bmiStatus}>BMI kamu adalah ${bmi.toFixed(2)} dan kamu termasuk ${bmiStatus}.</div>`;
}