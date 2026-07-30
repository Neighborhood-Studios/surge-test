/** iPhone-style bezel with dynamic-island notch and paper screen. @startingPoint section="Product" subtitle="Phone mockup chrome for app screens" viewport="420x760" */
export interface PhoneFrameProps{
  /** Outer width in px; height derives at 2.06:1 */
  width?:number;
  children:React.ReactNode;
}
