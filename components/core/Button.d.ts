/** Pill-shaped action button. @startingPoint section="Components" subtitle="Primary blue, brand black, ghost & success pills" viewport="700x260" */
export interface ButtonProps{
  /** 'primary' blue | 'brand' black | 'ghost' outline | 'success' green */
  variant?:'primary'|'brand'|'ghost'|'success';
  size?:'sm'|'md'|'lg';
  /** ALL-CAPS letter-spaced marketing CTA style (e.g. BOOK A DEMO) */
  caps?:boolean;
  children:React.ReactNode;
  onClick?:()=>void;
}
