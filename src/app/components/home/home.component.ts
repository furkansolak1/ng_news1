import { Component, HostListener, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularNews:News[]=[];
  politicsNews:News[]=[];
  healthNews:News[]=[];
  sportsNews:News[]=[];
  entertainmentNews:News[]=[];
  scienceNews:News[]=[];
  technologyNews:News[]=[];
  
  public getScreenWidth: any;
  public getScreenHeight: any;
  
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.getPopular();
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.getPoltics();
    this.getHealth();
    this.getSports();
    this.getEntertainment();
    this.getScience();
    this.getTechnology()
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  getPopular(){
    this.requestService.getPopularNews().subscribe({
      next:(res)=>{
        let i =1;
        while(true){
          if(res.articles[i].urlToImage!= null){
            this.popularNews.push(res.articles[i])
          }
          
          i++;
          if(this.popularNews.length==10) break;
        }  
        // console.log(this.popularNews);
        
        
      },
      
      error:(err)=>console.log(err)
    })
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
          if(this.politicsNews.length==6)break;
        }
        // console.log(this.politicsNews);
      },
      error:(err)=>console.log(err)
      
    })
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
          if(this.healthNews.length==6)break;
        }
        // console.log(this.healthNews);
      },
      error:(err)=>console.log(err)
      
    })
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
          if(this.sportsNews.length==6)break;
        }
        // console.log(this.sportsNews);
      },
      error:(err)=>console.log(err)
      
    })
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
          if(this.entertainmentNews.length==6)break;
        }
        // console.log(this.entertainmentNews);
      },
      error:(err)=>console.log(err)
      
    })
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
          if(this.scienceNews.length==6)break;
        }
        // console.log(this.scienceNews);
      },
      error:(err)=>console.log(err)
      
    })
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
          if(this.technologyNews.length==6)break;
        }
        // console.log(this.technologyNews);
      },
      error:(err)=>console.log(err)
      
    })
  }
  
 
  

}
