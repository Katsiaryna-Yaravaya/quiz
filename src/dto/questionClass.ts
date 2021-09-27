export class QuestionClass {
  flag: string;
  capital: string;
  correctAnswer: string;
  allAnswers: string[];

  constructor(options: {
    flag: string,
    capital: string,
    name: string,
    allAnswers?: string[]
  }) {
        this.flag = options.flag;
        this.capital = options.capital;
        this.correctAnswer = options.name;
        this.allAnswers = options.allAnswers || [];
    }
}
