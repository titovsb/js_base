'use strict';

const enumAnswer = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    // isVariant: function (ch) { return /^[abcd]&/gm.test(ch) },
    isValidKey: function (ch) { return /^[abcdq]$/gm.test(ch) },
    isQuit: function (ch) { return ch == 'q' }
}

class A {
    constructor(answer, flag) {
        this.answer = answer;               // текст ответа
        this.flag = flag;                   // признак правильного ответа true
    }
    get getAnswer() {
        return this.answer;
    }
}

/**
 * Непосредственно база вопросов, ответов, цены правильного ответа
 */
const qaBase = {
    1: {
        q: 'Сколько углов у треугольника?',
        a: [
            new A('один', false),
            new A('два', false),
            new A('три', true),
            new A('нет верного ответа', false)
        ],
        p: 100
    },
    2: {
        q: 'Цвет солнца ночью',
        a: [
            new A('бесцветный', false),
            new A('желтый', true),
            new A('солнце превращается в луну', false),
            new A('солнце ночью не светит', false)
        ],
        p: 200
    },
    3: {
        q: 'Дистилированная вода, характеризуется',
        a: [
            new A('нейтральным pH', false),
            new A('отсутствием примесей солей', true),
            new A('не замерзает при -3 град', false),
            new A('при замерзании синеет', false)
        ],
        p: 400
    }
}

class Pole {
    constructor(base) {
        this.result = 0;
        this.base = base;
        console.log('ПОЛЕ ЧУДЕС НА НОВЫЙ ЛАД!!');
        console.log(`Ответьте на ${this.getBaseLength} вопросов или идите отсюдова`);
    }

    // Возвращаем количество вопросов переданных в объект this.base
    get getBaseLength() {
        return Object.values(this.base).length;
    }

    // возвращаем el вопрос
    getQuestion(el) {
        return this.base[el].q;
    }

    // возвращаем цену вопроса
    getPrice(el) {
        return this.base[el].p;
    }

    // возвращаем количество ответов
    getAnswersLength(el) {
        return this.base[el].a.length;
    }

    // возвращаем id ответ в el вопросе
    getAnswer(el, id) {
        return this.base[el].a[id].getAnswer;
    }

    // показываем вопрос и цену вопроса.
    showQ(el) {
        console.log(`${this.getQuestion(el)}. (Цена: ${this.getPrice(el)})`);
    }

    // показываем id ответ el вопроса и нумеруем его
    showA(el, id) {
        console.log(`${enumAnswer[id]}. ${this.getAnswer(el, id)}`);
    }

    // true если answer соответствует верному ответу на el вопрос
    isrightAnswer(el, answer) {
        // в выражении костыли [el - 1] ((((((((((((
        return Object.values(theGame.base)[el - 1].a.findIndex((el) => el.flag) ==
            Object.values(enumAnswer).indexOf(answer);
    }

    // увеличить результат теста на цену текущего (el) вопроса
    increaseResult(el) {
        this.result += this.base[el].p;
    }

    // показываем текущий результат, и если надо выводим текст
    showResult(text) {
        if (text)
            console.log(`${text}. Общий счет ${this.result}`);
        else
            console.log(`Ваш результат: ${this.result}`);
    }

    // ну собственно конец игры
    zeroResult(text) {
        this.result = 0;
        if (text)
            console.log(text);
    }

    // основной метод класса.
    run() {
        let ans;     // сюда запишем ответ на текущий вопрос
        let summa = 0   // сюда запишем накопленную сумму за игру
        for (let el in this.base) {
            this.showQ(el);
            for (let id = 0; id < this.getAnswersLength(el); id++)
                this.showA(el, id);
            do {
                ans = prompt('выберите a b c d или q для выхода')
            } while (!enumAnswer.isValidKey(ans));
            if (enumAnswer.isQuit(ans)) {
                this.zeroResult('Вы прервали игру, и денег не получите');
                return;
            }
            if (this.isrightAnswer(el, ans)) {
                this.increaseResult(el);
                this.showResult('Правильный ответ');
            } else
                this.showResult('А вот и нет, переходим к следующему вопросу..');
        }
        this.showResult('Вы молодец, вы единственный дошли до конца');
    }

}

let theGame = new Pole(qaBase);
theGame.run();