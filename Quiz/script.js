function checkAnswers() {
    const correctAnswers = {
        q1: 'bike',
        q2: 'vegetables',
        q3: 'decrease',
        q4: 'donation',
        q5: 'plane'
    };

    let score = 0;
    let totalQuestions = 5;

    for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    const discount = score * 5;
    const couponCode = `Eco${discount}`;
    const resultMessage = `You answered ${score} out of ${totalQuestions} questions correctly!<br> You get a ${discount}% discount coupon (${couponCode}) on eco-friendly products.`;

    document.getElementById('result').innerHTML = resultMessage;
}

