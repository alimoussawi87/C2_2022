import { Component, OnInit } from '@angular/core';
 import { AppRoutingModule }  from '../app-routing.module';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Citoyen } from '../citoyen';
import { CitoyenService } from '../citoyen.service';
import { Router,  ActivatedRoute, RouterModule } from '@angular/router';
import { CitoyenListComponent } from '../citoyen-list/citoyen-list.component';

@Component({
  selector: 'app-signin-citoyen',
  templateUrl: './signin-citoyen.component.html',
  styleUrls: ['./signin-citoyen.component.css']
})

export class SigninCitoyenComponent implements OnInit {

citoyens: Citoyen[]=[];

citoyen: Citoyen=new Citoyen();
public citoyensg?: Citoyen=new Citoyen();
@LocalStorage() citoyenssg?: Citoyen=new Citoyen();
 @LocalStorage()  signcit?: boolean= false;
public  makeRandom(lengthOfCode: number, possible: string) {

   let text = "";
   for (let i = 0; i < lengthOfCode; i++) {

     text += possible.charAt(Math.floor(Math.random() * possible.length));
   }
     return text;
 }
public smscode:string="";
 public sxx: string=this.makeRandom (4,"abcdef");
  public submitted: boolean=false;
public xx: boolean=false;
  constructor(private  citoyenService: CitoyenService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }
 onSubmit(){
 this.citoyenService.getCitoyensList().subscribe(data => {
                                                   this.citoyens = data;

this.citoyensg=this.citoyens.find(({ telephonec} ) => telephonec === this.citoyen.telephonec);


                  if(this.citoyensg){


                 if (this.sxx==this.smscode){
this.submitted= true;
                     this.signcit=true;


                             } } else { this.submitted= false; this.xx=true;
                         }  });

 setTimeout(() => {this.router.navigate(['//lirePlaintesr']);

               }, 4000);


}}








