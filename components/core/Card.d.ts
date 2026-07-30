/** White surface card on the paper background. */
export interface CardProps{
  /** Bigger diffuse shadow for floating artifacts */
  float?:boolean;
  /** Degrees of playful rotation for floating doc cards */
  tilt?:number;
  children:React.ReactNode;
}
