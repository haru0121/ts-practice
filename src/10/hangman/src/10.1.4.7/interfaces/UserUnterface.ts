type Color = "red" | "green" | "yellow" | "white";

interface UserInterface {
  input(): Promise<string>;
  clear(): void;
  destroy(): void;
  output(message: string, color?: Color): void;
  outputAnswer(message: string): void;
}

export type { UserInterface, Color };
