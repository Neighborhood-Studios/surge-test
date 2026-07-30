/** Surge glyph set — pale-blue illustrative icons + small UI marks. */
export interface IconProps{
  name:'waveform'|'scan'|'documents'|'check'|'arrowUp'|'pause'|'bolt';
  size?:number;
  /** Defaults to pale illustrative blue; pass '#fff' for marks inside colored chips */
  color?:string;
}
