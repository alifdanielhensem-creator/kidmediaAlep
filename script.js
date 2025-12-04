// Data Kuiz ASK Tingkatan 3
const quizData = [
    {
        question: "Apakah kaedah sifer yang menggantikan setiap huruf dengan huruf lain pada jarak tetap?",
        options: ["Reverse Cipher", "Transposition Cipher", "Caesar Cipher", "Pigpen Cipher"],
        answer: "Caesar Cipher"
    },
    {
        question: "Apakah fasa pertama dalam Pembangunan Atur Cara?",
        options: ["Pengekodan", "Analisis Masalah", "Pengujian", "Dokumentasi"],
        answer: "Analisis Masalah"
    }
    // Tambah lebih banyak soalan di sini...
];

const quizArea = document.getElementById('quiz-area');
const resultDiv = document.getElementById('result');

function startQuiz() {
    quizArea.innerHTML = ''; // Kosongkan butang "Mula Kuiz"
    let output = '';

    quizData.forEach((item, index) => {
        output += `<div class="question-container">
            <h3>Soalan ${index + 1}: ${item.question}</h3>
            <ul class="options-list">`;
        
        item.options.forEach(option => {
            output += `<li>
                <input type="radio" id="q${index}o${option}" name="question${index}" value="${option}">
                <label for="q${index}o${option}">${option}</label>
            </li>`;
        });
        
        output += </ul></div>;
    });

    output += <button onclick="submitQuiz()" class="submit-btn">Semak Jawapan</button>;
    quizArea.innerHTML = output;
}

function submitQuiz() {
    let score = 0;
    
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        
        if (selectedOption) {
            if (selectedOption.value === item.answer) {
                score++;
                // Beri maklum balas visual (ini memerlukan penambahan gaya CSS)
                selectedOption.parentElement.style.backgroundColor = 'lightgreen';
            } else {
                // Beri maklum balas visual
                selectedOption.parentElement.style.backgroundColor = 'lightcoral';
                // Highlight jawapan yang betul
                const correctAnswerLabel = document.querySelector(`input[value="${item.answer}"][name="question${index}"]`).parentElement;
                correctAnswerLabel.style.backgroundColor = 'yellow';
            }
        }
    });

    resultDiv.innerHTML = <h2>Keputusan Anda: ${score} daripada ${quizData.length}</h2>;
    // Tambah butang untuk cuba lagi
    resultDiv.innerHTML += <button onclick="startQuiz()">Cuba Lagi</button>;
}

// Untuk memastikan kuiz tidak bermula secara automatik, 
// fungsi 'startQuiz()' akan dipanggil melalui butang dalam index.html
