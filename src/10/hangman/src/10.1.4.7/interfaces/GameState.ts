import { type Stage } from "../models/Stage";

export interface GameState {
  stage: Stage;
  done: boolean;
}
