import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
  politicsNews:News[]=[];
  page:number=1;
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.getPoltics();
  }
  getPoltics(){
    this.requestService.getNewsByCategory("politics").subscribe({
      next:(res)=>{
        let i=1;
        while(true){
          if(res.articles[i].urlToImage!=null){
            this.politicsNews.push(res.articles[i]);
          }
          i++;
          if(this.politicsNews.length==18)break;
        }
        // console.log(this.politicsNews);
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
