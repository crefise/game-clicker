export default class Field {
    private color: string;
    private inGame: boolean;

    public border: string;

    constructor(color: string) {
        this.color = color;
        this.inGame = true;
        this.border = '';
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }
}