import { Component, OnInit } from '@angular/core';
import { Usager } from '../usager';
import { UsagerService } from '../usager.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-usager-list',
  templateUrl: './usager-list.component.html',
  styleUrls: ['./usager-list.component.css']
})
export class UsagerListComponent implements OnInit {
 @LocalStorage()  usagera?: Usager=new Usager();

  usagerd?: Usager=new Usager;

  usagers: Usager[]=[];
  idx: number=0;
public submitted: boolean= false;
public submittedd: boolean= false;


    constructor(private  usagerService: UsagerService, private router: Router) { }

    ngOnInit(): void {

this.getUsagers();
      }

      private getUsagers(){
        this.usagerService.getUsagersList().subscribe(data => {
          this.usagers = data;});

          }

            updateUsager(idu: number){

this.idx=idu;
             this.usagera=this.usagers.find(({ id }) => id === idu);

this.submitted=true;
                 setTimeout(() => {this.router.navigate(['//updateUsagerr']);

    }, 1000);

}
            deleteUsager(idu: number){


this.idx=idu;

            this.usagerd=this.usagers.find(({ id }) => id === idu);


             setTimeout(() => { window.location.reload();

               }, 3000);

 this.usagerService.deleteUsager(this.idx).subscribe((data)=>{
                                                        console.log(data);

   }
     , error => console.log(error));

this.submittedd=true;


}

  }
