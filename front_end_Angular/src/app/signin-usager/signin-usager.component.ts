import { Component, OnInit } from '@angular/core';
import { Usager } from '../usager';
import { UsagerService } from '../usager.service';
import { Router,  ActivatedRoute, RouterModule } from '@angular/router';
import { UsagerListComponent } from '../usager-list/usager-list.component';
 import { AppRoutingModule }  from '../app-routing.module';
 import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
@Component({
  selector: 'app-signin-usager',
  templateUrl: './signin-usager.component.html',
  styleUrls: ['./signin-usager.component.css']
})
export class SigninUsagerComponent implements OnInit {
usager: Usager = new Usager();
 @LocalStorage()  usagersg?: Usager=new Usager();
 @LocalStorage()  signusg?: boolean= false;
  usagers: Usager[]=[];

  public submitted: boolean=false;
  constructor(private usagerService: UsagerService,
                                private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }


onSubmit(){

 this.usagerService.getUsagersList().subscribe(data => {
          this.usagers = data;
                   this.usagersg=this.usagers.find(({ usagernom }) => usagernom === this.usager.usagernom);
                                 if(this.usagersg!==null){
          if (this.usagersg!.usagerpass==this.usager.usagerpass){
                  this.submitted= true;
          this.signusg=true;


                  }} else { this.submitted= false;}

          });

 setTimeout(() => {this.router.navigate(['//lirePlaintesr']);

    }, 2000);





}}
