import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  scienceNews:News[]=[];
  page:number=1;
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.getScience();
  }
  getScience(){
    this.requestService.getNewsByCategory("science").subscribe({
      next:(res)=>{
        let i=1;
        while(true){
          if(res.articles[i].urlToImage!=null){
            this.scienceNews.push(res.articles[i]);
          }
          i++;
          if(this.scienceNews.length==18)break;
        }
        // console.log(this.scienceNews);
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
