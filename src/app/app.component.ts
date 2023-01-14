import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;

  showMessage = false;
  
  CandidateList:any = [ 
  {
    name:"Mr. ASH",
    age:21,
    phone:111,
    status: 'Available'
  },

  {
    name:"Mr. HONEY",
    age:22,
    phone:222,
    status: 'Available'
  },

  {
    name:"Mr. DOM",
    age:23,
    phone:333,
    status: 'Available'
  },

  {
    name:"Mr. PAUL",
    age:24,
    phone:444,
    status: 'Available'
  },

  {
    name:"Mr. JACK",
    age:25,
    phone:555,
    status: 'Not-Available'
  },

  {
    name:"Mr. AURA",
    age:26,
    phone:666,
    status: 'Available'
  },

  {
    name:"Mr. MONK",
    age:27,
    phone:777,
    status: 'Not-Available'
  },

  {
    name:"Mr. OLIVER",
    age:28,
    phone:888,
    status: 'Available'
  }
]


  // ASHData = {
  //   name:"Mr. ASH",
  //   age:21,
  //   phone:111
  // }

  // HONEYData = {
  //   name:"Mr. HONEY",
  //   age:22,
  //   phone:222
  // }


  D1Candidates:any = []
  D2Candidates:any = []
  BCandidates:any = []

  CandidateName = "";
  CandidateAge = "";
  CandidatePhone = "";
  selectedindex = '';

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 

  D1Done(i:any) {
    this.D1Candidates.push(this.CandidateList[i]);
    this.CandidateList.splice(i,1);
    // console.log("You Clicked on D1 Done");
    console.log("this.CandidateList",this.CandidateList);
  }

  D2Done(i:any) {
    this.D2Candidates.push(this.D1Candidates[i]);
    this.D1Candidates.splice(i,1);
    console.log("You Clicked on D2 Done")
  }

  BDone(i:any) {
    this.BCandidates.push(this.D2Candidates[i]);
    this.D2Candidates.splice(i,1);
    console.log("You Clicked on B Done")
  }

  cBack(i:any){
    this.CandidateList.push(this.D1Candidates[i]);
    this.D1Candidates.splice(i,1);
  }

  D1Back(i:any){
    this.D1Candidates.push(this.D2Candidates[i]);
    this.D2Candidates.splice(i,1);
  }

  D2Back(i:any){
    this.D2Candidates.push(this.BCandidates[i]);
    this.BCandidates.splice(i,1);
  }

  Trash(i:any){
    this.CandidateList.splice(i,1);
  }

  openModal(template: TemplateRef<any>,index:any,) {
    console.log('index', this.CandidateList[index])

    if(index != 'null'){
      this.CandidateName =  this.CandidateList[index].name;
      this.CandidateAge =  this.CandidateList[index].age;
      this.CandidatePhone =  this.CandidateList[index].phone;
      this.selectedindex = index;
      // console.log('this.selectedindex', this.selectedindex)
    }
    this.modalRef = this.modalService.show(template);
  }

  Submit(){
    let user = {
      name : this.CandidateName,
      age : this.CandidateAge,
      phone : this.CandidatePhone
    }

    
    this.CandidateList.push(user);
    this.showMessage = true;
    console.log("this.CandidateList",this.CandidateList);
    this.CandidateName = "";
    this.CandidateAge = "";
    this.CandidatePhone = "";
    this.modalRef?.hide();
  }

  Update(){
    // let user = {
    //   name : this.CandidateName,
    //   age : this.CandidateAge,
    //   phone : this.CandidatePhone
    // }
    // console.log("this.selectedindex", this.selectedindex);
    // this.modalRef?.hide();

    // this.CandidateList[this.selectedindex] = user;


      this.CandidateList[this.selectedindex].name = this.CandidateName;
      this.CandidateList[this.selectedindex].age = this.CandidateAge;
      this.CandidateList[this.selectedindex].phone = this.CandidatePhone;

      this.CandidateName = "";
      this.CandidateAge = "";
      this.CandidatePhone = "";
      this.modalRef?.hide();
  }

  close(){
      this.CandidateName = "";
      this.CandidateAge = "";
      this.CandidatePhone = "";
      this.modalRef?.hide();
  }
}