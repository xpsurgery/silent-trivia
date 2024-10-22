import Rand from 'rand-seed';
import {GameRunner} from './game-runner';

const createGolden = () => {
  const seed = process.env.GAME_SEED || '1234'
  const rand = new Rand(seed);
  for (let i = 0; i < 1000; i++) {
    GameRunner.main(rand);
  }
}

createGolden()

