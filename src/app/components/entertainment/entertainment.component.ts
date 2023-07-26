import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainmentNews:News[]=[];
  page:number=1;
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.getEntertainment();
  }
  getEntertainment(){
    this.requestService.getNewsByCategory("entertainment").subscribe({
      next:(res)=>{
        let i=1;
        while(true){
          if(res.articles[i].urlToImage!=null){
            this.entertainmentNews.push(res.articles[i]);
          }
          i++;
          if(this.entertainmentNews.length==18)break;
        }
        // console.log(this.entertainmentNews);
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
