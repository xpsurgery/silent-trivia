import {Game} from './game';
import Rand from 'rand-seed';

export class GameRunner {
    public static main(rand: Rand): void {
        const game = new Game();
        game.add("Chet");
        game.add("Pat");
        game.add("Sue");

        let notAWinner: boolean;
        do {
          game.roll(Math.floor(rand.next() * 6) + 1);
          if (Math.floor(rand.next() * 10) == 7) {
            notAWinner = game.wrongAnswer();
          } else {
            notAWinner = game.wasCorrectlyAnswered();
          }
        } while (notAWinner);
    }
}

const rand = new Rand();
GameRunner.main(rand);

