/** White dropdown menu (e.g. New project → job types). */
export interface MenuListProps{
  items:string[];
  onSelect?:(item:string)=>void;
}
