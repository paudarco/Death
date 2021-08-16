document.addEventListener('DOMContentLoaded', () => {
    let dateOfBirth = {};

    const interviewBlock = document.querySelector('.interview__block');


    function show() {
        setTimeout(() => {
            interviewBlock.classList.add('show');
        }, 100);
    }

    function hide() {
        interviewBlock.classList.remove('show');
    }

    function innerBlock(block) {
        hide();

        setTimeout(() => {
            interviewBlock.innerHTML = block;
            show();
        }, 1000);
    }

    let question2 = `<div class="interview__subtitle">
        <p class="subtitle">
            Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.
        </p>
        </div>
        <div class="divider"></div>

        <div class="question">
        <h1 class="question__title">Когда Вы чувствуете себя наиболее комфортно?</h1>
        <button class="btn question__answer input_size" value="morning">Утро</button>
        <button class="btn question__answer input_size" value="day">День</button>
        <button class="btn question__answer input_size" value="evening">Вечер</button>
        <button class="btn question__answer input_size" value="night">Ночь</button>


        </div>

        <p class="question__num">Вопрос 2-5</p>

        <img src="./img/eye.svg" alt="eye1" class="interview__eye1">
        <img src="./img/eye-1.svg" alt="eye2" class="interview__eye2">`;



    function loadQuestion3() {
        let days = '',
            years = '';

        for (let i = 1; i <= 31; i++) {
            days += `<li value="${i}">${i}</li>`;
        }

        for (let i = 2020; i >= 1930; i--) {
            years += `<li value="${i}">${i}</li>`;
        }

        let question3 = `<div class="interview__subtitle">
                <p class="subtitle">
                    Уже совсем скоро Вы узнаете много интересного о своем будущем!
                </p>
            </div>
            <div class="divider"></div>
            
            <div class="question">
                <h1 class="question__title">Укажите свою дату <br>рождения:</h1>
                <div class="select day">
                    <div class="select_styled input_size">День</div>
                    <ul class="select_options">
                        ${days}
                    </ul>
                </div>
            
                <div class="select month">
                    <div class="select_styled input_size">Месяц</div>
                    <ul class="select_options">
                        <li value="1">Январь</li>
                        <li value="2">Февраль</li>
                        <li value="3">Март</li>
                        <li value="4">Апрель</li>
                        <li value="5">Май</li>
                        <li value="6">Июнь</li>
                        <li value="7">Июль</li>
                        <li value="8">Август</li>
                        <li value="9">Сентябрь</li>
                        <li value="10">Октябрь</li>
                        <li value="11">Ноябрь</li>
                        <li value="12">Декабрь</li>
                    </ul>
                </div>
            
                <div class="select year">
                    <div class="select_styled input_size">Год</div>
                    <ul class="select_options">
                        ${years}
                    </ul>
                </div>
                
                <button class="btn input_size question__answer">Далее</button>
            </div>
            
            <p class="question__num">Вопрос 3-5</p>
            <img src="./img/eye.svg" alt="eye1" class="interview__eye1">
            <img src="./img/eye-1.svg" alt="eye2" class="interview__eye2">`;

        innerBlock(question3);

        
        setTimeout(() => {
            const questionBlock = interviewBlock.querySelector('.question'),
            selects = questionBlock.querySelectorAll('.select'),
            button = questionBlock.querySelector('button');

            selects.forEach((selectBlock, i, arr) => {

                function hideSelect(select) {
                    select.querySelector('.select_styled').classList.remove('active');
                    select.querySelector('.select_options').classList.remove('active');
                }

                function showSelect(select) {
                    select.querySelector('.select_styled').classList.add('active');
                    select.querySelector('.select_options').classList.add('active');
                }

                selectBlock.querySelector('.select_styled').addEventListener('click', (event) => {
                    // console.log(+document.querySelector('.select_styled').textContent);
                    if (!event.target.classList.contains('active')) {    
                        showSelect(selectBlock);
                        event.target.classList.remove('required');
                    } else {
                        hideSelect(selectBlock);
                    }

                    arr.forEach(selectItem => {
                        if (selectItem.querySelector('.select_styled') !== event.target) {
                            hideSelect(selectItem);
                        }
                    });
                });

                const selectList = selectBlock.querySelectorAll('li');

                selectList.forEach(selectItem => {
                    selectItem.addEventListener('click', (event) => {
                        selectBlock.querySelector('.select_styled').textContent = selectItem.textContent;
                        hideSelect(selectBlock);
                    });
                });
            });

            button.addEventListener('click', () => {
                let error = 0;
                selects.forEach(select => {
                    const selectStyled = select.querySelector('.select_styled');
                    if (selectStyled.textContent == 'День' || selectStyled.textContent == 'Месяц' || selectStyled.textContent == 'Год') {
                        selectStyled.classList.add('required');
                        error = 1;
                    }
                });

                if (error == 0) {
                    loadLoadSpinner();
                }
            });
        }, 1100);
    }

    function loadLoadSpinner() {
        const spinner = `<div class="loading__wrapper">

                <div class="loading__block">
                    <div id="floatingBarsG">
                        <div class="blockG" id="rotateG_01"></div>
                        <div class="blockG" id="rotateG_02"></div>
                        <div class="blockG" id="rotateG_03"></div>
                        <div class="blockG" id="rotateG_04"></div>
                        <div class="blockG" id="rotateG_05"></div>
                        <div class="blockG" id="rotateG_06"></div>
                        <div class="blockG" id="rotateG_07"></div>
                        <div class="blockG" id="rotateG_08"></div>
                        <div class="blockG" id="rotateG_09"></div>
                        <div class="blockG" id="rotateG_10"></div>
                        <div class="blockG" id="rotateG_11"></div>
                        <div class="blockG" id="rotateG_12"></div>
                    </div>

                    <h3 class="loading__title">Loading</h3>
                </div>
            </div>`;
        
        innerBlock(spinner);

        setTimeout(loadQuestion4, 3000);
    }


    function loadQuestion4() {
        const question4 = `<div class="interview__subtitle">
                <p class="subtitle">
                    Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!
                </p>
            </div>
            <div class="divider"></div>
            
            <div class="question">
                <h1 class="question__title">Снятся ли Вам умершие люди?</h1>
                <button class="btn question__answer input_size" value="yes">Да</button>
                <button class="btn question__answer input_size" value="no">Нет</button>
                <button class="btn question__answer input_size" value="sometimes">Иногда</button>
            
                
            </div>
            
            <p class="question__num">Вопрос 4-5</p>
            
            <img src="./img/eye.svg" alt="eye1" class="interview__eye1">
            <img src="./img/eye-1.svg" alt="eye2" class="interview__eye2">`;
        
        innerBlock(question4);
        setTimeout(() => {
            interviewBlock.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', () => {
                    loadQuestion5();
                });
            });
        }, 1100);
    }

    function loadQuestion5() {
        let question5 = `<div class="interview__subtitle">
                <p class="subtitle">
                    Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!
                </p>
            </div>
            <div class="divider"></div>
            
            <div class="question">
                <h1 class="question__title">Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?</h1>
                <button class="btn question__answer input_size" value="yes">Да</button>
                <button class="btn question__answer input_size" value="no">Затрудняюсь ответить</button>
            
            
                
            </div>
            
            <p class="question__num">Вопрос 5-5</p>
            
            <img src="./img/eye.svg" alt="eye1" class="interview__eye1">
            <img src="./img/eye-1.svg" alt="eye2" class="interview__eye2">`;

        innerBlock(question5);

        setTimeout(() => {
            interviewBlock.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', () => {
                    loadFinal();
                });
            });
        }, 1100);
    }

    function loadFinal() {
        const date = new Date(Date.parse(new Date()) + 1000 * 60 * 60 * 24),
              day = date.getDate(),
              month = date.getMonth() + 1,
              year = date.getFullYear();

        interviewBlock.classList.add('final_block');
        
        const finalQuestion = `<div class="interview__message">
                Спасибо за Ваши ответы! <br><span>Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.</span>
            </div>
            
            <div class="interview__final_subtitle">
                Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем. 
            </div>
            
            <div class="interview__final_block">
                <h1 class="question__title final_title">
                    <span> Первое значимое событие может произойти уже ${day + 1}.${month}.${year}</span>, Вам надо быть готовым, чтобы последствия не оказались необратимыми.
            
                </h1>
            </div>
            
            <div class="interview__final_subtitle last_final_subtitle">
                Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!
            </div>
            
            <button class="input_size final_btn">Позвонить и прослушать</button>
            
            <p class="footer__text">
                TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, 
            </p>`;

        innerBlock(finalQuestion);
    }



    interviewBlock.innerHTML = question2;

    

    show();


    interviewBlock.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', loadQuestion3);
    });









    




});