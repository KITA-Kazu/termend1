// === データ部分 ===
const quizData = {
    "text1": {
        title: "Lesson 1: The Anchoring Effect (Restaurant)",
        original: "This is the menu of a steak restaurant. The most expensive meal in the restaurant is at the top. The prices are lower toward the bottom. The B and C meals may seem very reasonable to you. Actually, they are not. However, you end up ordering one of them. Why? It is because you see the highest price first. This is an example of the anchoring effect. When you make decisions, you rely on the first piece of information too heavily. An anchor is used to stop a ship from moving. The first piece of information works as an anchor, and you cannot get away from it.",
        mistakeFinder: {
            textWithMistakes: "This is the menu of a steak restaurant. The most expensiver meal in the restaurant is at the top. The prices are lower toward the bottom. The B and C meals may seem very reason to you. Actually, they are not. However, you end up order one of them. Why? It is because you see the highest price first. This is an example of the anchoring effect. When you make decisions, you depend on the first piece of information too heavily. An anchor is used to stopping a ship from moving. The first piece of information works as an anchor, and you cannot get away from it.",
            mistakes: ["expensiver", "reason", "order", "depend", "stopping"],
            answers: ["expensive", "reasonable", "ordering", "rely", "stop"]
        },
        fillInTheBlank: {
            text: "This is the menu of a steak restaurant. The most [BLANK] meal in the restaurant is at the top. The prices are lower toward the bottom. The B and C meals may seem very [BLANK] to you. Actually, they are not. However, you end up [BLANK] one of them. Why? It is because you see the highest price first. This is an example of the anchoring effect. When you make decisions, you [BLANK] on the first piece of information too heavily. An anchor is used to stop a ship from moving. The first piece of information works as an anchor, and you cannot get [BLANK] from it.",
            wordBank: ["expensive", "reasonable", "ordering", "rely", "away", "cheap", "example", "heavily"],
            answers: ["expensive", "reasonable", "ordering", "rely", "away"]
        },
        multipleChoice: {
            text: "The prices are (1)___ toward the bottom. The B and C meals may (2)___ very reasonable to you. However, you end up (3)___ one of them. When you make decisions, you rely on the first piece of information too (4)___. The first piece of information works as an anchor, and you cannot get away (5)___ it.",
            questions: [
                { q: "(1)に入るのは？", options: ["lower", "low", "lowest", "below"], answer: "lower" },
                { q: "(2)に入るのは？", options: ["seem", "look", "see", "feel"], answer: "seem" },
                { q: "(3)に入るのは？", options: ["ordering", "order", "to order", "ordered"], answer: "ordering" },
                { q: "(4)に入るのは？", options: ["heavily", "heavy", "lightly", "hard"], answer: "heavily" },
                { q: "(5)に入るのは？", options: ["from", "of", "to", "out"], answer: "from" }
            ]
        }
    },
    "text2": {
        title: "Lesson 2: The Anchoring Effect (Hair Dryer)",
        original: "Suppose that you're thinking about buying a new hair dryer. You visit an appliance store and see the products A and B below. Both are on sale for 10,000 yen. You probably think B is more appealing than A. I'll take B. It’s a better deal. However, is that right? There's a big difference between the two price tags. The tag of B includes the original price of 20,000 yen. It works as an anchor. In this case, you can see the original price, so the discounted price looks like a real bargain.",
        mistakeFinder: {
            textWithMistakes: "Suppose that you're thinking about buy a new hair dryer. You visit an appliance store and see the products A and B below. Both are on sale for 10,000 yen. You probably think B is more appealed than A. I'll take B. It’s a better meal. However, is that right? There's a big different between the two price tags. The tag of B includes the original price of 20,000 yen. It works as an anchor. In this case, you can see the original price, so the discounted price looks like a real problem.",
            mistakes: ["buy", "appealed", "meal", "different", "problem"],
            answers: ["buying", "appealing", "deal", "difference", "bargain"]
        },
        fillInTheBlank: {
            text: "[BLANK] that you're thinking about buying a new hair dryer. You visit an appliance store and see the products A and B below. Both are on [BLANK] for 10,000 yen. You probably think B is more [BLANK] than A. I'll take B. It’s a better deal. However, is that right? There's a big difference between the two price tags. The tag of B [BLANK] the original price of 20,000 yen. It works as an anchor. In this case, you can see the original price, so the discounted price looks like a real [BLANK].",
            wordBank: ["Suppose", "sale", "appealing", "includes", "bargain", "product", "deal", "original"],
            answers: ["Suppose", "sale", "appealing", "includes", "bargain"]
        },
        multipleChoice: {
            text: "Suppose that you're thinking about (1)___ a new hair dryer. You visit an appliance store and see the products A and B below. You probably think B is more (2)___ than A. It’s a better (3)___. The tag of B includes the (4)___ price of 20,000 yen. In this case, you can see the original price, so the discounted price looks like a real (5)___.",
            questions: [
                { q: "(1)に入るのは？", options: ["buying", "buy", "bought", "to buy"], answer: "buying" },
                { q: "(2)に入るのは？", options: ["appealing", "appealed", "appeal", "appeals"], answer: "appealing" },
                { q: "(3)に入るのは？", options: ["deal", "meal", "bargain", "price"], answer: "deal" },
                { q: "(4)に入るのは？", options: ["original", "origin", "originally", "originate"], answer: "original" },
                { q: "(5)に入るのは？", options: ["bargain", "promise", "product", "reason"], answer: "bargain" }
            ]
        }
    },
    "text3": {
        title: "Lesson 3: The Anchoring Effect (Cafe)",
        original: "Do you like spending time with your friends in cafes? When the interior is stylish and the servers treat you well, you are likely to think, “Oh, this place is classy!” This impression can be an anchor too. You probably will not care about the price of the food or drinks, even if they do not taste very good. As you can see, the anchoring effect can have a big impact on your choice or judgment. You should be aware of it. Take a little more time to think before making a decision.",
        mistakeFinder: {
            textWithMistakes: "Do you like spend time with your friends in cafes? When the interior is style and the servers treat you good, you are likely to think, “Oh, this place is classy!” This impression can be an anchor too. You probably will not care about the price of the food or drinks, even if they do not taste very well. As you can see, the anchoring effect can have a big impact on your choice or judgment. You should be award of it. Take a little more time to think before making a decision.",
            mistakes: ["spend", "style", "good", "well", "award"],
            answers: ["spending", "stylish", "well", "good", "aware"]
        },
        fillInTheBlank: {
            text: "Do you like spending time with your friends in cafes? When the interior is [BLANK] and the servers treat you well, you are [BLANK] to think, “Oh, this place is classy!” This impression can be an anchor too. You probably will not [BLANK] about the price of the food or drinks, even if they do not taste very good. As you can see, the anchoring effect can have a big [BLANK] on your choice or judgment. You should be [BLANK] of it. Take a little more time to think before making a decision.",
            wordBank: ["stylish", "likely", "care", "impact", "aware", "classy", "judgment", "treat"],
            answers: ["stylish", "likely", "care", "impact", "aware"]
        },
        multipleChoice: {
            text: "Do you like (1)___ time with your friends in cafes? When the interior is stylish and the servers (2)___ you well, you are likely to think, “Oh, this place is classy!” The anchoring effect can have a big (3)___ on your choice or judgment. You should be (4)___ of it. Take a little more time to think before (5)___ a decision.",
            questions: [
                { q: "(1)に入るのは？", options: ["spending", "spend", "spent", "to spend"], answer: "spending" },
                { q: "(2)に入るのは？", options: ["treat", "treatment", "cater", "serve"], answer: "treat" },
                { q: "(3)に入るのは？", options: ["impact", "affect", "effect", "importance"], answer: "impact" },
                { q: "(4)に入るのは？", options: ["aware", "awful", "known", "conscious"], answer: "aware" },
                { q: "(5)に入るのは？", options: ["making", "make", "to make", "made"], answer: "making" }
            ]
        }
    },
    "text4": {
        title: "Lesson 4: Animal Welfare (General)",
        original: "Have you ever heard of animal welfare? This means ensuring the health, comfort and happiness of animals. Animal Welfare is not a new topic in the livestock industry. When farm animals are raised in a comfortable environment, they feel less stressed and become healthier. The result benefits farmers. They can increase productivity and improve the quality of their livestock. Recently, the idea of animal welfare has spread beyond farms. Some zoos and pet shops are beginning to show interest in it. More and more people believe that they should adopt it for all animals under human control.",
        mistakeFinder: {
            textWithMistakes: "Have you ever hear of animal welfare? This means ensure the health, comfort and happiness of animals. Animal Welfare is not a new topic in the livestock industry. When farm animals are raised in a comfortable environment, they feel more stressed and become healthier. The result benefit customers. They can increase productivity and improve the quality of their livestock. Recently, the idea of animal welfare has spread beyond farms. Some zoos and pet shops are beginning to show interest in it. More and more people believe that they should adapt it for all animals under human control.",
            mistakes: ["hear", "ensure", "more", "benefit", "adapt"],
            answers: ["heard", "ensuring", "less", "benefits", "adopt"]
        },
        fillInTheBlank: {
            text: "Have you ever heard of animal [BLANK]? This means [BLANK] the health, comfort and happiness of animals. Animal Welfare is not a new topic in the livestock industry. When farm animals are raised in a [BLANK] environment, they feel less stressed and become healthier. The result [BLANK] farmers. They can increase productivity and improve the quality of their livestock. Recently, the idea of animal welfare has spread beyond farms. Some zoos and pet shops are beginning to show interest in it. More and more people believe that they should [BLANK] it for all animals under human control.",
            wordBank: ["welfare", "ensuring", "comfortable", "benefits", "adopt", "health", "result", "spread"],
            answers: ["welfare", "ensuring", "comfortable", "benefits", "adopt"]
        },
        multipleChoice: {
            text: "Have you ever (1)___ of animal welfare? This means (2)___ the health, comfort and happiness of animals. When farm animals are (3)___ in a comfortable environment, they feel less stressed. They can increase productivity and (4)___ the quality of their livestock. More and more people believe that they should (5)___ it for all animals under human control.",
            questions: [
                { q: "(1)に入るのは？", options: ["heard", "hear", "listened", "knew"], answer: "heard" },
                { q: "(2)に入るのは？", options: ["ensuring", "ensure", "to ensure", "ensured"], answer: "ensuring" },
                { q: "(3)に入るのは？", options: ["raised", "raising", "rose", "risen"], answer: "raised" },
                { q: "(4)に入るのは？", options: ["improve", "improving", "improvement", "improved"], answer: "improve" },
                { q: "(5)に入るのは？", options: ["adopt", "adapt", "add", "admit"], answer: "adopt" }
            ]
        }
    },
    "text5": {
        title: "Lesson 5: Animal Welfare (Hokkaido High School)",
        original: "At one high school in Hokkaido, students raise dairy cows. They have learned about animal welfare and introduced it to their farm. For example, they feed the cows chemical-free grass. They make sure that the cows always have clean air and water in the barn. They use safe electric fences, not barbed wire, so the cows can relax outdoors. One student says, “We succeeded in reducing the stress of our cows. As a result, they got sick less often and their medical costs decreased. Furthermore, their milk got better, both in quality and quantity! Now the cows look healthy and happy.”",
        mistakeFinder: {
            textWithMistakes: "At one high school in Hokkaido, students rise dairy cows. They have learned about animal welfare and introduce it to their farm. For example, they feed the cows chemical-full grass. They make sure that the cows always have clean air and water in the barn. They use safe electric fences, not barbed wire, so the cows can relax indoor. One student says, “We succeeded in reducing the stress of our cows. As a result, they got sick less often and their medical costs increased. Furthermore, their milk got better, both in quality and quantity! Now the cows look healthy and happy.”",
            mistakes: ["rise", "introduce", "chemical-full", "indoor", "increased"],
            answers: ["raise", "introduced", "chemical-free", "outdoors", "decreased"]
        },
        fillInTheBlank: {
            text: "At one high school in Hokkaido, students [BLANK] dairy cows. They have learned about animal welfare and [BLANK] it to their farm. For example, they feed the cows chemical-free grass. They make sure that the cows always have clean air and water in the barn. They use safe electric fences, not barbed wire, so the cows can relax outdoors. One student says, “We succeeded in [BLANK] the stress of our cows. As a result, they got sick less often and their medical costs [BLANK]. Furthermore, their milk got better, both in quality and [BLANK]! Now the cows look healthy and happy.”",
            wordBank: ["raise", "introduced", "reducing", "decreased", "quantity", "succeeded", "chemical-free", "quality"],
            answers: ["raise", "introduced", "reducing", "decreased", "quantity"]
        },
        multipleChoice: {
            text: "At one high school in Hokkaido, students (1)___ dairy cows. They have learned about animal welfare and (2)___ it to their farm. They use safe electric fences, not barbed wire, so the cows can (3)___ outdoors. One student says, “We succeeded (4)___ reducing the stress of our cows. As a result, their medical costs (5)___.",
            questions: [
                { q: "(1)に入るのは？", options: ["raise", "rise", "arise", "grow"], answer: "raise" },
                { q: "(2)に入るのは？", options: ["introduced", "introduce", "introducing", "to introduce"], answer: "introduced" },
                { q: "(3)に入るのは？", options: ["relax", "relaxing", "relaxed", "relaxation"], answer: "relax" },
                { q: "(4)に入るのは？", options: ["in", "to", "at", "for"], answer: "in" },
                { q: "(5)に入るのは？", options: ["decreased", "increased", "reduced", "lowered"], answer: "decreased" }
            ]
        }
    }
};

// === アプリケーションのロジック部分 ===
document.addEventListener('DOMContentLoaded', () => {
    const screens = { modeSelection: document.getElementById('mode-selection-screen'), textSelection: document.getElementById('text-selection-screen'), quiz: document.getElementById('quiz-screen'), };
    const modeButtons = document.querySelectorAll('.mode-btn');
    const textList = document.getElementById('text-list');
    const quizTitle = document.getElementById('quiz-title');
    const quizArea = document.getElementById('quiz-area');
    const resultArea = document.getElementById('result-area');
    const checkAnswerBtn = document.getElementById('check-answer-btn');
    const backToModeBtn = document.getElementById('back-to-mode-selection');
    const backToTextBtn = document.getElementById('back-to-text-selection');
    let currentMode = '';
    let currentTextId = '';
    let selectedWordBtn = null;
    function showScreen(screenName) { Object.values(screens).forEach(screen => screen.classList.remove('active')); if (screens[screenName]) screens[screenName].classList.add('active'); }
    modeButtons.forEach(button => { button.addEventListener('click', () => { currentMode = button.dataset.mode; populateTextList(); showScreen('textSelection'); }); });
    textList.addEventListener('click', (e) => { if (e.target.tagName === 'BUTTON') { currentTextId = e.target.dataset.textId; generateQuiz(); showScreen('quiz'); } });
    checkAnswerBtn.addEventListener('click', checkAnswer);
    backToModeBtn.addEventListener('click', () => showScreen('modeSelection'));
    backToTextBtn.addEventListener('click', () => { resultArea.innerHTML = ''; showScreen('textSelection'); });
    function populateTextList() { textList.innerHTML = ''; for (const textId in quizData) { const button = document.createElement('button'); button.dataset.textId = textId; button.textContent = quizData[textId].title; textList.appendChild(button); } }

    function generateQuiz() {
        quizArea.innerHTML = '';
        resultArea.innerHTML = '';
        selectedWordBtn = null;
        const quizSet = quizData[currentTextId];
        quizTitle.textContent = quizSet.title;
        
        // ▼▼▼【根本修正】▼▼▼
        // 各関数に、その関数が必要とするデータだけを正確に渡すように修正
        switch (currentMode) {
            case 'mistake-finder': generateMistakeFinderQuiz(quizSet.mistakeFinder); break;
            case 'fill-in-the-blank': generateFillInTheBlankQuiz(quizSet.fillInTheBlank); break;
            case 'multiple-choice': generateMultipleChoiceQuiz(quizSet.multipleChoice); break;
        }
    }

    function generateMistakeFinderQuiz(data) {
        const quizText = document.createElement('div');
        // `data.textWithMistakes` を確実に使用
        const words = data.textWithMistakes.split(/(\s+)/);
        words.forEach(word => {
            if (word.trim() !== '') {
                const wordSpan = document.createElement('span');
                wordSpan.textContent = word;
                wordSpan.className = 'word';
                wordSpan.dataset.word = word.replace(/[,.!?“”]/g, '');
                wordSpan.addEventListener('click', () => { wordSpan.classList.toggle('selected'); });
                quizText.appendChild(wordSpan);
            } else {
                quizText.appendChild(document.createTextNode(word));
            }
        });
        quizArea.appendChild(quizText);
    }
    
    function generateFillInTheBlankQuiz(data) {
        const wordBankArea = document.createElement('div');
        wordBankArea.id = 'word-bank-area';
        const sentenceArea = document.createElement('div');
        sentenceArea.id = 'sentence-area';
        const shuffledBank = [...data.wordBank].sort(() => Math.random() - 0.5);
        shuffledBank.forEach(word => {
            const btn = document.createElement('button');
            btn.textContent = word;
            btn.className = 'word-bank-btn';
            btn.dataset.word = word;
            btn.addEventListener('click', () => { if (selectedWordBtn) { selectedWordBtn.classList.remove('selected'); } btn.classList.add('selected'); selectedWordBtn = btn; });
            wordBankArea.appendChild(btn);
        });
        const textParts = data.text.split('[BLANK]');
        let answerIndex = 0;
        textParts.forEach((part, index) => {
            sentenceArea.appendChild(document.createTextNode(part));
            if (index < textParts.length - 1) {
                const blank = document.createElement('span');
                blank.className = 'blank-space';
                blank.dataset.answer = data.answers[answerIndex++];
                blank.addEventListener('click', () => {
                    if (selectedWordBtn && !blank.textContent) {
                        blank.textContent = selectedWordBtn.dataset.word;
                        blank.dataset.userAnswer = selectedWordBtn.dataset.word;
                        selectedWordBtn.classList.add('used'); selectedWordBtn.classList.remove('selected'); selectedWordBtn = null;
                    } else if (blank.textContent) {
                        const wordToReturn = blank.textContent;
                        const btnToReturn = wordBankArea.querySelector(`.word-bank-btn[data-word="${wordToReturn}"]`);
                        if (btnToReturn) { btnToReturn.classList.remove('used'); }
                        blank.textContent = ''; delete blank.dataset.userAnswer;
                    }
                });
                sentenceArea.appendChild(blank);
            }
        });
        quizArea.appendChild(wordBankArea);
        quizArea.appendChild(sentenceArea);
    }

    function generateMultipleChoiceQuiz(data) {
        const quizText = document.createElement('p');
        quizText.style.textAlign = 'left';
        quizText.style.lineHeight = '1.8';
        quizText.textContent = data.text;
        quizArea.appendChild(quizText);

        data.questions.forEach((qData, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'choice-question';
            const questionP = document.createElement('p');
            questionP.textContent = qData.q;
            questionDiv.appendChild(questionP);
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'choice-options';
            optionsDiv.dataset.answer = qData.answer;

            // ▼▼▼【シャッフルロジック改良】▼▼▼
            let shuffledOptions = [...qData.options].sort(() => Math.random() - 0.5);
            if (shuffledOptions.length > 1 && shuffledOptions[0] === qData.answer) {
                const first = shuffledOptions.shift(); // 先頭（正解）を一旦取り出す
                shuffledOptions.push(first); // 末尾に追加する
            }

            shuffledOptions.forEach(option => {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                radio.type = 'radio'; radio.name = `q${index}`; radio.value = option;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(` ${option}`));
                optionsDiv.appendChild(label);
            });
            
            questionDiv.appendChild(optionsDiv);
            quizArea.appendChild(questionDiv);
        });
    }
    
    // (checkAnswer以降の関数は変更ありません)
    function checkAnswer() {
        switch (currentMode) {
            case 'mistake-finder': checkMistakeFinder(); break;
            case 'fill-in-the-blank': checkFillInTheBlank(); break;
            case 'multiple-choice': checkMultipleChoice(); break;
        }
    }
    function checkMistakeFinder() {
        const correctMistakes = quizData[currentTextId].mistakeFinder.mistakes;
        let correctCount = 0;
        const allWords = quizArea.querySelectorAll('.word');
        allWords.forEach(span => {
            const word = span.dataset.word;
            const isMistake = correctMistakes.includes(word);
            const isSelected = span.classList.contains('selected');
            if (isSelected && isMistake) {
                span.classList.add('correct'); correctCount++;
            } else if (isSelected && !isMistake) {
                span.classList.add('incorrect');
            }
        });
        resultArea.textContent = `正解した間違い: ${correctCount} / ${correctMistakes.length}`;
    }
    function checkFillInTheBlank() {
        const blanks = quizArea.querySelectorAll('.blank-space');
        let correctCount = 0;
        blanks.forEach(blank => {
            blank.classList.remove('correct', 'incorrect');
            if (blank.dataset.userAnswer === blank.dataset.answer) {
                blank.classList.add('correct'); correctCount++;
            } else {
                blank.classList.add('incorrect');
            }
        });
        resultArea.textContent = `正解: ${correctCount} / ${blanks.length}`;
    }
    function checkMultipleChoice() {
        const questionGroups = quizArea.querySelectorAll('.choice-options');
        let correctCount = 0;
        questionGroups.forEach(group => {
            const correctAnswer = group.dataset.answer;
            const selectedRadio = group.querySelector('input[type="radio"]:checked');
            group.querySelectorAll('label').forEach(label => {
                const radio = label.querySelector('input');
                if (radio.value === correctAnswer) {
                    label.classList.add('correct');
                } else if (radio.checked) {
                    label.classList.add('incorrect');
                }
            });
            if (selectedRadio && selectedRadio.value === correctAnswer) {
                correctCount++;
            }
        });
        resultArea.textContent = `正解: ${correctCount} / ${questionGroups.length}`;
    }
});
