let currentQuestion = 0;
let score = 0;
let answered = false;

const subject1Questions = [
        {
            text: "1. 기억의 왜곡을 줄이는 데 효과적인 방법으로 가장 거리가 먼 것은?",
            options: [
                { text: "① 반복해서 학습하기", correct: false },
                { text: "② 간섭의 최대화", correct: true },
                { text: "③ 기억술 사용", correct: false },
                { text: "④ 연합을 통한 인출단서의 확대", correct: false }
            ],
            explanation: "기억왜곡은 일시성, 방심, 차폐, 오귀인, 피암시성, 집착 등에 의해 일어난다. 이러한 기억의 왜곡을 줄이는 방법으로는 반복학습, 연합을 통한 인출단서 확대, 기억술 사용 등이 있다."
        },
        {
            text: "2. 조건형성의 원리와 그에 해당하는 예를 잘못 연결시킨 것은?",
            options: [
                { text: "① 강화보다 처벌 강조 - 행동조성", correct: true },
                { text: "② 소거에 대한 저항 – 부분강화 효과", correct: false },
                { text: "③ 조작적 조건형성의 응용 - 행동수정", correct: false },
                { text: "④ 고전적 조건형성의 응용 – 유명연예인 광고모델", correct: false }
            ],
            explanation: "행동조성은 학습하기를 원하는 행동이나 기술을 습득시키기 위해 사용하는 방법이다. 바람직한 행동을 학습할 수 있도록 기대에 부응하는 행동이 나타날 때 이를 ‘강화’함으로써 원하는 행동을 점진적으로 학습한다."
        },
        {
            text: "3. 기억 연구에서 집단이 회상한 수가 집단구성원 각각 회상한 수의 합보다 적은 것을 의미하는 것은?",
            options: [
                { text: "① 책임감 분산", correct: false },
                { text: "② 청크 효과", correct: false },
                { text: "③ 협력 억제", correct: true },
                { text: "④ 스트룹 효과", correct: false }
            ],
            explanation: "협력 억제 : 집단의 협력에 의한 기억 회상이 동일한 수의 개인에 의한 기억 회상에 비해 성능이 저하되는 양상을 보이는 효과이다. 웰던과 벨린저는 다른 구성원의 생각을 듣고 당면한 주제에 대해 토로하는 것이 각 개인의 생각 조직을 방해하고 기억을 손상시킨다는 점을 확인하였다."
        },
        {
            text: "4. 기온에 따라 학습 능률이 어떻게 달라지는가를 알아보기 위해 기온을 13°C, 18°C, 23°C 인 세 조건으로 만들고 학습능률은 단어의 기억력 점수로 측정하였다. 이때 독립변수는 무엇인가?",
            options: [
                { text: "① 기억력 점수", correct: false },
                { text: "② 기온", correct: true },
                { text: "③ 학습능률", correct: false },
                { text: "④ 예언", correct: false }
            ],
            explanation: "독립변수는 원인이 되는 변수이고 종속변수는 결과로 나타나는 변수이다. 기온에 따른 학습능률의 변화를 알아보는 연구에서 독립변수는‘기온’이며 종속변수는‘학습능률’이다."
        },
        {
            text: "5. 다음 설명에 해당하는 것은?",
            options: [
                { text: "① 성 도식이론", correct: true },
                { text: "② 인지발달이론", correct: false },
                { text: "③ 사회학습이론", correct: false },
                { text: "④ 정신분석학이론", correct: false }
            ],
            explanation: "성 도식이론은 사회학습이론과 인지발달이론의 요소들을 결합한 것으로 성역할 개념의 습득 과정을 설명하는 일종의 정보처리이론이다."
        }
    ];
    

const subject2Questions = [
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

const subject3Questions = [
    {
        text: "1. 심리검사에서 가장 중요한 요소는 무엇인가?",
        options: [
            { text: "① 타당도", correct: true },
            { text: "② 신뢰도", correct: false },
            { text: "③ 난이도", correct: false },
            { text: "④ 표준화", correct: false }
        ],
        explanation: "심리검사에서 가장 중요한 요소는 타당도입니다. 타당도는 검사가 실제로 측정하고자 하는 것을 얼마나 정확하게 측정하는지에 관한 신뢰성을 말합니다."
    },
    {
        text: "2. 심리검사에서 동일한 검사를 반복했을 때 동일한 결과를 얻을 수 있는 정도를 무엇이라 하는가?",
        options: [
            { text: "① 타당도", correct: false },
            { text: "② 신뢰도", correct: true },
            { text: "③ 난이도", correct: false },
            { text: "④ 변별도", correct: false }
        ],
        explanation: "심리검사에서 동일한 검사를 여러 번 실시했을 때 동일한 결과를 얻는 것을 신뢰도라고 합니다."
    },
    {
        text: "3. 심리검사 결과가 정규분포를 따르는 이유는 무엇인가?",
        options: [
            { text: "① 대부분의 사람들이 평균 성적을 얻기 때문", correct: true },
            { text: "② 모든 검사 결과는 일정한 범위 내에서만 나올 수 있기 때문", correct: false },
            { text: "③ 검사를 받는 사람의 특성 때문", correct: false },
            { text: "④ 문제의 난이도 때문", correct: false }
        ],
        explanation: "심리검사 결과는 일반적으로 정규분포를 따르는데, 이는 대부분의 사람들이 평균적인 성취를 보이고 극단적인 성취를 보이는 사람은 소수에 불과하기 때문입니다."
    },
    {
        text: "4. 심리검사의 표준화에서 가장 중요한 것은 무엇인가?",
        options: [
            { text: "① 모든 응시자가 동일한 조건에서 검사를 치르는 것", correct: true },
            { text: "② 검사 문제의 난이도를 일정하게 유지하는 것", correct: false },
            { text: "③ 검사를 여러 번 반복할 수 있는 것", correct: false },
            { text: "④ 응시자의 답안을 분석하는 것", correct: false }
        ],
        explanation: "심리검사의 표준화에서 가장 중요한 요소는 모든 응시자가 동일한 조건에서 검사를 치르는 것입니다. 이것은 검사의 공정성을 보장하기 위함입니다."
    },
    {
        text: "5. 심리검사에서 검사의 타당도와 신뢰도의 관계는 무엇인가?",
        options: [
            { text: "① 신뢰도가 높으면 타당도도 반드시 높다", correct: false },
            { text: "② 타당도가 높으면 신뢰도도 반드시 높다", correct: false },
            { text: "③ 신뢰도는 타당도의 필요조건이다", correct: true },
            { text: "④ 타당도와 신뢰도는 서로 관련이 없다", correct: false }
        ],
        explanation: "신뢰도는 타당도의 필요조건입니다. 즉, 검사의 신뢰도가 낮으면 타당도도 낮을 수밖에 없습니다."
    }
];


const subject4Questions = [
    {
        text: "1. 임상심리학에서 다루는 주요 대상은 무엇인가?",
        options: [
            { text: "① 신체적 장애", correct: false },
            { text: "② 심리적 장애", correct: true },
            { text: "③ 유전적 장애", correct: false },
            { text: "④ 사회적 장애", correct: false }
        ],
        explanation: "임상심리학은 주로 심리적 장애를 다루며, 불안, 우울증, 조현병 등의 정신적 문제를 평가하고 치료하는 학문입니다."
    },
    {
        text: "2. 임상심리학에서 가장 많이 사용되는 치료법은 무엇인가?",
        options: [
            { text: "① 약물치료", correct: false },
            { text: "② 인지행동치료(CBT)", correct: true },
            { text: "③ 물리치료", correct: false },
            { text: "④ 최면치료", correct: false }
        ],
        explanation: "임상심리학에서 가장 많이 사용되는 치료법은 인지행동치료(CBT)로, 이를 통해 환자의 인지 왜곡을 수정하고 행동을 변화시킵니다."
    },
    {
        text: "3. 임상심리학자들이 사용하는 진단 도구 중 가장 일반적인 것은?",
        options: [
            { text: "① 혈액검사", correct: false },
            { text: "② 심리검사", correct: true },
            { text: "③ 유전자 검사", correct: false },
            { text: "④ MRI", correct: false }
        ],
        explanation: "임상심리학자들은 주로 심리검사를 통해 환자의 성격, 인지 능력, 정서 상태를 평가하여 진단을 내립니다."
    },
    {
        text: "4. 임상심리학의 목표는 무엇인가?",
        options: [
            { text: "① 심리적 문제를 진단하고 치료하는 것", correct: true },
            { text: "② 신체적 문제를 분석하는 것", correct: false },
            { text: "③ 약물 복용을 지도하는 것", correct: false },
            { text: "④ 신경계의 구조를 연구하는 것", correct: false }
        ],
        explanation: "임상심리학의 주요 목표는 심리적 문제를 평가, 진단하고 적절한 치료 방법을 통해 환자를 돕는 것입니다."
    },
    {
        text: "5. 임상심리학에서 다루는 문제 중 하나인 '정신분열증'의 주요 증상은 무엇인가?",
        options: [
            { text: "① 우울한 기분", correct: false },
            { text: "② 환각 및 망상", correct: true },
            { text: "③ 기억 상실", correct: false },
            { text: "④ 과잉 활동", correct: false }
        ],
        explanation: "정신분열증(조현병)의 주요 증상은 환각, 망상, 그리고 현실 감각의 상실입니다. 이는 임상심리학에서 중요한 치료 대상입니다."
    }
];


const subject5Questions = [
    {
        text: "1. 상담 과정에서 가장 중요한 상담자의 기술은 무엇인가?",
        options: [
            { text: "① 경청", correct: true },
            { text: "② 조언", correct: false },
            { text: "③ 분석", correct: false },
            { text: "④ 비판", correct: false }
        ],
        explanation: "심리상담에서 가장 중요한 기술 중 하나는 경청입니다. 상담자는 내담자의 이야기를 적극적으로 경청하여 문제의 본질을 파악하고 도움을 줄 수 있습니다."
    },
    {
        text: "2. 심리상담에서 '라포 형성'이란 무엇을 의미하는가?",
        options: [
            { text: "① 상담자가 내담자를 평가하는 과정", correct: false },
            { text: "② 상담자와 내담자 간에 신뢰와 친밀감을 형성하는 과정", correct: true },
            { text: "③ 상담자가 내담자에게 해결책을 제시하는 과정", correct: false },
            { text: "④ 내담자의 문제를 분석하는 과정", correct: false }
        ],
        explanation: "라포 형성은 상담자와 내담자 간의 신뢰와 친밀감을 형성하는 것을 의미하며, 이는 효과적인 상담을 위한 필수 요소입니다."
    },
    {
        text: "3. 상담심리에서 내담자의 감정이나 생각을 상담자가 반영해주는 기법은 무엇인가?",
        options: [
            { text: "① 직면", correct: false },
            { text: "② 반영", correct: true },
            { text: "③ 재진술", correct: false },
            { text: "④ 평가", correct: false }
        ],
        explanation: "반영은 내담자의 감정이나 생각을 상담자가 다시 전달해주는 기법으로, 이를 통해 내담자는 자신의 감정을 더 깊이 이해하게 됩니다."
    },
    {
        text: "4. 상담자가 내담자의 문제 해결 능력을 강조하는 상담 이론은 무엇인가?",
        options: [
            { text: "① 해결중심 상담", correct: true },
            { text: "② 정신분석 상담", correct: false },
            { text: "③ 행동주의 상담", correct: false },
            { text: "④ 인지행동 상담", correct: false }
        ],
        explanation: "해결중심 상담은 내담자가 이미 문제를 해결할 수 있는 능력이 있다고 보고, 그 능력을 발휘하도록 돕는 이론입니다."
    },
    {
        text: "5. 심리상담에서 비언어적 의사소통이 중요한 이유는 무엇인가?",
        options: [
            { text: "① 내담자의 신체 언어가 상담의 주제와 일치하기 때문이다", correct: false },
            { text: "② 비언어적 의사소통은 내담자의 감정을 더 정확하게 전달하기 때문이다", correct: true },
            { text: "③ 비언어적 의사소통은 상담 과정에서 무시할 수 있는 부분이다", correct: false },
            { text: "④ 내담자는 자신의 감정을 표현할 필요가 없기 때문이다", correct: false }
        ],
        explanation: "비언어적 의사소통은 내담자의 감정을 더 정확하게 전달하는 중요한 역할을 하며, 이를 통해 상담자는 내담자의 심리 상태를 더 잘 파악할 수 있습니다."
    }
];



function startSubject(subjectNumber) {
    if (subjectNumber === 1) {
        questions = subject1Questions;  // 1과목 문제
        document.getElementById('subject-selection').style.display = 'none';
        document.querySelector('header h1').textContent = "제1과목 : 심리학개론";
        document.querySelector('header').style.backgroundColor = '#1a4888';
        document.getElementById('quiz-content').style.display = 'block';
        loadQuestion();
    } else if (subjectNumber === 2) {
        questions = subject2Questions;  // 2과목 문제
        document.getElementById('subject-selection').style.display = 'none';
        document.querySelector('header h1').textContent = "제2과목 : 이상심리학";
        document.querySelector('header').style.backgroundColor = '#1a4888';
        document.getElementById('quiz-content').style.display = 'block';
        loadQuestion();
    } else if (subjectNumber === 3) {
        questions = subject3Questions;  // 3과목 문제
        document.getElementById('subject-selection').style.display = 'none';
        document.querySelector('header h1').textContent = "제3과목 : 심리검사";
        document.querySelector('header').style.backgroundColor = '#1a4888';
        document.getElementById('quiz-content').style.display = 'block';
        loadQuestion();
    } else if (subjectNumber === 4) {
        questions = subject4Questions;  // 4과목 문제
        document.getElementById('subject-selection').style.display = 'none';
        document.querySelector('header h1').textContent = "제4과목 : 임상심리학";
        document.querySelector('header').style.backgroundColor = '#1a4888';
        document.getElementById('quiz-content').style.display = 'block';
        loadQuestion();
    } else if (subjectNumber === 5) {
        questions = subject5Questions;  // 5과목 문제
        document.getElementById('subject-selection').style.display = 'none';
        document.querySelector('header h1').textContent = "제5과목 : 심리상담";
        document.querySelector('header').style.backgroundColor = '#1a4888';
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

    // 기존의 체크 표시를 모두 제거하고 초기화 (동그라미, 엑스도 제거)
    document.querySelectorAll('.number').forEach(el => {
        el.classList.remove('correct', 'incorrect');
        el.innerHTML = el.innerHTML.replace(/🟢|❌/g, "");  // 기존 동그라미와 엑스 제거
    });

    // 선택된 답의 span
    const numberSpan = label.querySelector('.number');
    
    // 선택된 답변이 정답일 경우
    if (isCorrect) {
        feedback.textContent = "정답입니다! 🎉";
        feedback.style.color = "green";
        score += 20;
        numberSpan.classList.add('correct');  // 동그라미 표시
        numberSpan.innerHTML = "🟢 " + numberSpan.innerHTML;  // 동그라미 추가
    } else {
        feedback.textContent = "다시 생각해보세요. 😞";
        feedback.style.color = "red";
        numberSpan.classList.add('incorrect');  // 엑스 표시
        numberSpan.innerHTML = "❌ " + numberSpan.innerHTML;  // 엑스 추가
    }

    answered = true;  // 답변 완료 표시
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
