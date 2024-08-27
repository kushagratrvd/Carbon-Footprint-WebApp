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
    const websiteURL = '../ecommerce/index.html'; 

    const resultMessage = score > 0
        ? `You answered ${score} out of ${totalQuestions} questions correctly!`
        : `Sorry, you didn't get any correct answers. Try again next time!`;

    const celebrationDiv = document.getElementById('celebration');
    const resultDiv = document.getElementById('result');

    if (score > 0) {
        document.getElementById('discount-info').innerHTML = `You've earned a ${discount}% discount!<br> Use coupon code: <strong>${couponCode}</strong> at <a href="${websiteURL}" target="_blank">EMISSIO</a>.`;
        celebrationDiv.classList.remove('celebration-hidden');
        startBalloonAnimation();
        resultDiv.innerHTML = resultMessage;
    } else {
        celebrationDiv.classList.add('celebration-hidden');
        resultDiv.innerHTML = resultMessage;
    }
}

function startBalloonAnimation() {
    const balloonsContainer = document.getElementById('balloons');
    balloonsContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.bottom = `-${Math.random() * 100}px`;
        balloonsContainer.appendChild(balloon);

        animateBalloon(balloon);
    }
}

function animateBalloon(balloon) {
    const animationDuration = Math.random() * 5 + 5; 
    const disappearDelay = 2; 
    balloon.style.transition = `transform ${animationDuration}s linear, opacity ${animationDuration - disappearDelay}s linear ${disappearDelay}s`;

    setTimeout(() => {
        balloon.style.transform = `translateY(-${window.innerHeight + 100}px)`;
        balloon.style.opacity = 0;
    }, 10);

    setTimeout(() => {
        balloon.remove();
    }, animationDuration * 1000); 
}
