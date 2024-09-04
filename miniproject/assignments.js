let currentQuestion = 0;
let score = 0;
let answered = false;

const questions = [
    {
        text: "1. 사랑의 삼각형 이론에서 사랑의 3가지 요소에 포함되지 않는 것은? (난이도 *)",
        options: [
            { text: "➀ 관심(Attention)", correct: true },
            { text: "② 친밀감(Intimacy)", correct: false },
            { text: "③ 열정(Passion)", correct: false },
            { text: "④ 헌신(Commitment)", correct: false }
        ],
        explanation: "이 이론은 사랑을 세 가지 주요 요소로 구성된다고 설명합니다. 이 세 가지 요소는 친밀감(Intimacy), 열정(Passion), 그리고 헌신(Commitment)입니다. 이들 요소의 조합에 따라 사랑의 다양한 형태가 나타나며, 예를 들어, 오직 친밀감만 있는 경우 우정, 열정과 친밀감이 있는 경우 낭만적 사랑, 세 가지 모두가 있는 경우 완전한 사랑이 형성됩니다. \"관심\"은 이 이론의 요소에 포함되지 않습니다."
    },
    {
        text: "2. 환각제에 해당되는 약물은? (난이도 **)",
        options: [
            { text: "➀ 펜시클리딘", correct: true },
            { text: "② 대마", correct: false },
            { text: "③ 카페인", correct: false },
            { text: "④ 오피오이드", correct: false }
        ],
        explanation: "환각제는 주로 의식 상태를 변화시키는 약물입니다. 펜시클리딘은 환각제로 분류되며, 대마, 카페인, 오피오이드는 환각제로 분류되지 않습니다."
    },
    {
        text: "3. 조현병의 원인에 관한 설명으로 옳은 것은? (난이도 **)",
        options: [
            { text: "➀ 사회적 낙인 - 조현병 환자는 발병 후 도시에서 빈민거주지역으로 이주한다.", correct: false },
            { text: "② 도파민 가설 - 조현병의 발병이 도파민이라는 신경전달물질의 과다활동에 의해 유발된다.", correct: true },
            { text: "③ 사회선택이론 - 조현병이 냉정하고 지배적이며 갈등을 심어주는 어머니에 의해 유발된다.", correct: false },
            { text: "④ 표출정서 - 조현병이 뇌의 특정 영역의 구조적 손상에 의해 유발된다.", correct: false }
        ],
        explanation: "조현병의 주요 원인 중 하나로 도파민 가설이 있으며, 이는 도파민이라는 신경전달물질의 과다활동이 조현병 발병에 기여한다고 봅니다."
    },
    {
        text: "4. 지적 장애에 관한 설명으로 틀린 것은? (난이도 **)",
        options: [
            { text: "➀ 심각한 두부외상으로 인해 이전에 습득한 인지적 기술을 소실한 경우에는 지적 장애와 신경인지장애로 진단할 수 있다.", correct: false },
            { text: "② 경도의 지적 장애는 여성보다 남성에게 더 많다.", correct: false },
            { text: "③ 지적 장애는 개념적, 사회적, 실행적 영역에 대한 평가로 진단된다.", correct: false },
            { text: "④ 지적 장애 개인의 지능지수는 오차 범위를 포함해서 대략 평균에서 1표준편차 이하로 평가된다.", correct: true }
        ],
        explanation: "지적 장애 진단에서 경도의 지적 장애는 여성보다 남성에게 더 많다는 점은 맞습니다."
    },
    {
        text: "5. 병적 도벽에 관한 설명으로 옳은 것은? (난이도 *)",
        options: [
            { text: "➀ 개인적으로 쓸모가 없거나 금전적으로 가치가 없는 물건을 훔치려는 충동을 저지하는 데 반복적으로 실패한다.", correct: true },
            { text: "② 훔친 후에 고조되는 긴장감을 경험한다.", correct: false },
            { text: "③ 훔치기 전에 기쁨, 충족감, 안도감을 느낀다.", correct: false },
            { text: "④ 훔치는 행동이 품행장애로 더 잘 설명되는 경우에도 추가적으로 진단한다.", correct: false }
        ],
        explanation: "병적 도벽은 금전적 가치가 없는 물건을 훔치는 충동을 저지하지 못하는 특징이 있습니다."
    }
];

function startSubject(subjectNumber) {
    if (subjectNumber === 2) {
        document.getElementById('subject-selection').style.display = 'none';
        document.querySelector('header h1').textContent = "제2과목 : 이상심리학";
        document.querySelector('header').style.backgroundColor = '#1a4888'; // 2과목 색상으로 변경
        document.getElementById('quiz-content').style.display = 'block';
        loadQuestion();
    } else {
        alert('이 과목은 아직 준비되지 않았습니다.');
    }
}

function resetQuiz() {
    document.getElementById('subject-selection').style.display = 'flex';
    document.getElementById('quiz-content').style.display = 'none';
    document.querySelector('header h1').textContent = "임상심리사 2급 기출문제(2023년 1회)";
    document.querySelector('header').style.backgroundColor = '#3f51b5'; // 원래 색상으로 되돌림
    currentQuestion = 0;
    score = 0;
    answered = false;
}

const loadQuestion = () => {
    const question = questions[currentQuestion];
    document.getElementById("question-text").innerHTML = question.text;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
        const label = document.createElement("label");
        label.setAttribute("onclick", `checkAnswer(this, ${option.correct})`);
        label.innerHTML = `<span class="number">${option.text}</span>`;
        optionsContainer.appendChild(label);
    });

    document.getElementById("explanation").innerHTML = question.explanation;

    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const completeButton = document.getElementById("complete-button");

    if (currentQuestion === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentQuestion === questions.length - 1) {
        nextButton.style.display = "none";
        completeButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        completeButton.style.display = "none";
    }

    answered = false;
};

const checkAnswer = (label, isCorrect) => {
    const feedback = document.getElementById("feedback");
    const emojis = isCorrect ? "🎉" : "❌";

    document.querySelectorAll('.number').forEach(el => {
        el.classList.remove('checked');
    });

    const numberSpan = label.querySelector('.number');
    numberSpan.classList.add('checked');

    if (isCorrect) {
        feedback.textContent = `정답입니다! ${emojis}`;
        feedback.style.color = "green";
        score += 20;
    } else {
        feedback.textContent = `다시 생각해보세요. ${emojis}`;
        feedback.style.color = "red";
    }

    answered = true;  // 이 부분이 중요합니다.
};

const toggleExplanation = () => {
    const explanation = document.getElementById("explanation");
    explanation.style.display = explanation.style.display === "none" ? "block" : "none";
};

const resetQuestion = () => {
    document.querySelectorAll('.number').forEach(el => {
        el.classList.remove('checked');
        el.style.color = "black";
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("explanation").style.display = "none";
};

const nextQuestion = () => {
    if (!answered) {
        alert("답을 선택해 주세요!");
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        resetQuestion();
        loadQuestion();
    } else {
        alert("모든 문제를 풀었습니다!");
    }
};

const prevQuestion = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        resetQuestion();
        loadQuestion();
    }
};

const goToQuestion = (index) => {
    currentQuestion = index;
    resetQuestion();
    loadQuestion();
};

const showResults = () => {
    let message;
    if (score >= 80) {
        message = `훌륭합니다! 🎉 총점: ${score}점 (${questions.length}문제 중 ${score / 20}문제 맞춤)`;
    } else if (score >= 50) {
        message = `조금 더 노력하면 될 거예요! 💪 총점: ${score}점 (${questions.length}문제 중 ${score / 20}문제 맞춤)`;
    } else {
        message = `다시 도전해보세요! 😊 총점: ${score}점 (${questions.length}문제 중 ${score / 20}문제 맞춤)`;
    }
    alert(message);
    resetQuiz();
};
