import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


  categoryData = [{ name: "Clocks", image: "../assets/Picture3.jpg", description: "Contemporary and stylish antique finish clocks at amazing prices ! Hurry up !" },
  { name: "Paintings", image: "../assets/Picture5.jpg", description: "An alluring collection of different varities of paintings from all across the world." },
  { name: "Furniture", image: "../assets/Picture4.jpg", description: "Exotic furniture pieces made of Teak, Rosewood etc. that gels well with your taste." },
  { name: "Pottery", image: "../assets/Picture2.jpg", description: "Elegant meets function in our best handcrafted pottery products with excellent finish." }
  ]



}
