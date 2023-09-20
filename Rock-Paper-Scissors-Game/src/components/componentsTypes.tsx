export interface UserProperties {
  score?: number;
  myChoice?: string;
  setMyChoice?: React.Dispatch<React.SetStateAction<string>>;
  setScore?: React.Dispatch<React.SetStateAction<number>>;
}

// export interface UserChoice {
//   myChoice: string;
// }
