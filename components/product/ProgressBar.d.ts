/** Estimate-generation progress: fat blue pill bar in a dim tray + status label. */
export interface ProgressBarProps{
  label?:string;
  /** 0–1, used when animate=false */
  progress?:number;
  /** Loops width 8%→78% when true */
  animate?:boolean;
}
