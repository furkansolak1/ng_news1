import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportsNews:News[]=[];
  page:number=1;
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.getSports();
  }
  getSports(){
    this.requestService.getNewsByCategory("sports").subscribe({
      next:(res)=>{
        let i=1;
        while(true){
          if(res.articles[i].urlToImage!=null){
            this.sportsNews.push(res.articles[i]);
          }
          i++;
          if(this.sportsNews.length==18)break;
        }
        console.log(this.sportsNews);
      },
      error:(err)=>console.log(err)
      
    })
  }
  previousPage(){
    if(this.page!=1)
    this.page--;
    else
    this.page=3;
    console.log(this.page);
    
  }
  nextPage(){
    if(this.page!=3)
    this.page++;
    else
    this.page=1;
  }
  firstPage(){
    this.page=1;
  }
  secondPage(){
    this.page=2;
  }
  thirdPage(){
    this.page=3;
  }
 

}
