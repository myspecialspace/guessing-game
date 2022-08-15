class GuessingGame {
    //use binary search algorithm for task
    //граф кот.не имеет цикла(узлы и связи кот.не образуют цикла) = бинарный - у кажд.узла не более 2 потомков
    constructor() {}

    //accepts min & max value of range of number to guess
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    //returns solution of candidate (you make an assumption based on range and previous assumptions)
    guess() {
        //Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
        this.maybe = Math.round((this.max + this.min)/2);
        return this.maybe;
    }

    //method is called if prev call of guess() returned number > than answer
    lower() {
        this.max = this.maybe;
    }

    //method is called if prev call of guess() returned number < than answer
    greater() {
        this.min = this.maybe;
    }
}

module.exports = GuessingGame;
