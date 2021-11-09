'use strict';

const isControl = (el) => /^[qweasdzxc]$/gm.test(el);
const exitGame = 's';
const promptText = `"qweadzxc" для управления перемещением, "s" для выхода`;

class Pointer {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}

class Brodilka {
    constructor(sizex, sizey) {
        this.map = '';
        this.point = new Pointer();
        this.sizex = sizex;
        this.sizey = sizey;
        console.log('Инициализация игры выполнена. Выполните theGame.run()');
        console.log(promptText);
    }
    run() {
        this.render();
        this.show();
        let dir;
        while (true) {
            dir = prompt(promptText);
            if (isControl(dir)) {
                if (dir == exitGame)
                    return;
                this.point = this.step(dir);
                this.render();
                this.show();
            }
        }
    }

    render() {
        let newMap = '';
        for (let row = 0; row < this.sizey; row++) {
            for (let col = 0; col < this.sizex; col++) {
                newMap += (row == this.point.y && col == this.point.x) ? 'o ' : 'x ';
            }
            newMap += '\n';
        }
        this.map = newMap;
    }

    show() {
        console.clear();
        console.log(this.map)
    }

    step(direction) {
        let newPoint = this.point;
        //вертикальные перемещения
        switch (direction) {
            case 'q':
            case 'w':
            case 'e':
                if (newPoint.y)
                    newPoint.y -= 1;
                break;
            case 'z':
            case 'x':
            case 'c':
                if (newPoint.y < this.sizey - 1)
                    newPoint.y += 1;
        }
        //горизонтальное перемещение
        switch (direction) {
            case 'q':
            case 'a':
            case 'z':
                if (newPoint.x)
                    newPoint.x -= 1;
                break;
            case 'e':
            case 'd':
            case 'c':
                if (newPoint.x < this.sizex - 1)
                    newPoint.x += 1;
        }
        return newPoint;
    }
}

let theGame = new Brodilka(10, 10);
