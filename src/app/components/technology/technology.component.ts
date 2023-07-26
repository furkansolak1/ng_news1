import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologyNews:News[]=[];
  page:number=1;
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.getTechnology();
  }
  getTechnology(){
    this.requestService.getNewsByCategory("technology").subscribe({
      next:(res)=>{
        let i=2;
        while(true){
          if(res.articles[i].urlToImage!=null){
            this.technologyNews.push(res.articles[i]);
          }
          i++;
          if(this.technologyNews.length==18)break;
        }
        // console.log(this.technologyNews);
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
