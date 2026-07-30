/** Capture-method tile (Voice Note / 3D Scan / Documents): pale-blue glyph + bold label on white. */
export interface InputTileProps{
  icon?:'waveform'|'scan'|'documents';
  label?:string;
  onClick?:()=>void;
}
