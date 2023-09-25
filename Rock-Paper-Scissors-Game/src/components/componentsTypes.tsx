export interface UserProperties {
  score?: number;
  myChoice?: string;
  setMyChoice?: React.Dispatch<React.SetStateAction<string>>;
  setScore?: React.Dispatch<React.SetStateAction<number>>;
}

export type ResultMapping = {
  [key: string]: string;
};

export interface ChoiceProps {
  choice: string | undefined;
  style?: React.CSSProperties;
}
