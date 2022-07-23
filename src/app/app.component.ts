import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title="Java";
   list:any[]=[];
   arr=[
    [1,2,3],[3,4]
   ];
   ob=[{ 
   },{

   }]
list1=[
    {"fruits":{
             }
   }
  ]
   b:string="";
   c:boolean=true;
   ar=[10,0,2,3];
    arr3=this.ar.filter(data=>data!=0);
    arr4=this.ar.map(data=>data+3);
     s=new Set();
      map = new Map([
        [ "APPLE", 1 ],
        [ "ORANGE", 2 ],
        [ "MANGO", 3 ]
      ]);
      

      

     
}
