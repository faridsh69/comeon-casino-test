export default interface ComeonInterface {
  game: GameInterface;
}

export interface GameInterface {
  launch: (gameName: string) => void;
}
