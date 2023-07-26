import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  healthNews:News[]=[];
  page:number=1;
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.getHealth();
  }
  getHealth(){
    this.requestService.getNewsByCategory("health").subscribe({
      next:(res)=>{
        let i=1;
        while(true){
          if(res.articles[i].urlToImage!=null){
            this.healthNews.push(res.articles[i]);
          }
          i++;
          if(this.healthNews.length==18)break;
        }
        // console.log(this.healthNews);
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
