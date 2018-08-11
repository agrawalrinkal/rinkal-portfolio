export class State {
    backgroundColor:    string;
    fontColor:          string;
    question:           string;
    answer:             string;

    constructor(bgColor: string, fontColor: string, question: string, answer: string) {
        this.backgroundColor = bgColor;
        this.fontColor = fontColor;
        this.question = question;
        this.answer = answer;
    }
}

export class States {
    public states:  State[] = [];

    constructor() {
        this.setStates();
    }

    private setStates(): void {
        this.states.push(new State('bg-danger', 'text-light', 'Who am I?', 'Rinkal Agrawal'));
        this.states.push(new State('bg-success', 'text-dark', 'What do I do?', 'I am a Software Engineer'));
        this.states.push(new State('bg-info', 'text-dark', 'What I like to do?',
                                    'Coding, Working out, travelling, listening to music, concerts'));
        this.states.push(new State('bg-warning', 'text-dark',
                                    'Technical Interests?', 'Design, Machine Learning, Deep Learning, iOS'));
        this.states.push(new State('bg-primary', 'text-white', 'Lorem Ipsum?', 'Lorem pisum sulenlorem imlus sorep'));
        this.states.push(new State('bg-dark', 'text-white', 'Reach me out?', 'rinkal [dot] agrawal [dot] us [at] gmail'));
    }

    public getStates(): State[] {
        return this.states;
    }
}

