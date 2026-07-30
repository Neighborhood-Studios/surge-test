/** Voice-note player pill: pause button, animated waveform, timer, send/success chip. */
export interface VoiceBarProps{
  time?:string;
  /** 'recording' = live waveform + blue send arrow; 'done' = flat dots + green check */
  state?:'recording'|'done';
}
