import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  x=false;
  navList : path[] =[];
  constructor(){
    this.navList = [
    {
        name:"Home",
        path:'/'
    },
    {
      name:"About",
      path:"/About"
    },
    {
        name:"Login",
        path:"/Login"
    },
    {
      name:"Contact",
      path:"/Contact"
    },

    ];
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    // Get the scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;
    if(scrollPosition>0){
      this.x=true;
    }else{
      this.x=false;
    }
  }
}
interface path {
  name: string;
  path:string
}