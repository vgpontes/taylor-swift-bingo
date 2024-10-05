export class BingoNumberGenerator {
    drawnNumbers : number[];

    private availableNumbers : number[];
    private availableNumbersSize : number;

    constructor() {
        this.drawnNumbers = [];
        this.availableNumbers = [];
        this.initializeAvailableNumbers();
        this.availableNumbersSize = this.availableNumbers.length
    }

    drawNumber() : number {
        if (this.availableNumbersSize <= 0)
            return -1;

        const index = this.getRandomIndex();
        const randomNumber = this.availableNumbers[index];
        this.drawnNumbers.push(randomNumber);

        const lastIndex = this.availableNumbersSize - 1;
        const temp = this.availableNumbers[lastIndex];
        this.availableNumbers[lastIndex] = randomNumber;
        this.availableNumbers[index] = temp;
        this.availableNumbersSize--;
        return randomNumber;
    }

    clear() {
        this.drawnNumbers = [];
        this.initializeAvailableNumbers()
        this.availableNumbersSize = this.availableNumbers.length;
    }

    private initializeAvailableNumbers() {
        this.availableNumbers = []
        for (let i = 1; i <= 30; i++) {
            this.availableNumbers.push(i);
        }
        this.availableNumbersSize = this.availableNumbers.length;
    }

    private getRandomIndex() {
        return Math.floor(Math.random() * this.availableNumbersSize);
    }
}