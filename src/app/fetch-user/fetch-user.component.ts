import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';

import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Member } from '../model/member/member';
import { FileService } from '../service/file/file.service';
import { MemberService } from '../service/member/member.service';


@Component({
  selector: 'app-fetch-user',
  templateUrl: './fetch-user.component.html',
  styleUrls: ['./fetch-user.component.scss']
})

export class FetchUserComponent implements OnInit {

  readonly statuses = ['有効','無効'];
  isDownload: boolean;
  data: Member[];
  displayedColumns: string[] = ['merchantCode','tenantCode','memberId','status','cardCompanyCode','cardNumber','cardExpireDate'];
  dataSource = new MatTableDataSource<Member>(this.data);

  @ViewChild(MatPaginator)
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }

  fuserForm: FormGroup;

  //checkedList:String[];
 
  /**
   * changeStatus
   * 
   * @param status 
   * @param isChecked 
   */
  changeStatus(status, isChecked) {
    let formArray = <FormArray>this.fuserForm.controls.checkedList
    if (isChecked){
    }else{  
    } 
  }
  
  onSubmit() {
    const values = this.fuserForm.value;
    const merchantId = values['merchantId'];
    const memberId = values['memberId'];
    this.memberService.getMember(merchantId, memberId, END_POINT)
    .subscribe(json =>{

      // Download Case
      if(this.isDownload) {
        this.fileService
          .jsontocsv(json,this.displayedColumns)
          .download(`${merchantId}_${EXPORT_CSV_NAME}`);
        return;
      }
      // Search Case
      this.data = json;
      // Not Array Case
      if(!(json instanceof Array)){
        this.data = [json]
      }
      this.dataSource = new MatTableDataSource<Member>(this.data);
      this.dataSource.paginator = this.paginator;
    })
  }

  onSearch() {
    this.isDownload = false;
  }
  onDownload() {
    this.isDownload = true;
  }

  constructor(private fb: FormBuilder,
              private fileService: FileService,
              private memberService: MemberService) { }

  ngOnInit() {
    this.fuserForm = this.fb.group({
      merchantId:['',Validators.required,],
      memberId:[''],
      checkedList:this.fb.array([])
    });
    this.dataSource.paginator = this.paginator;
  }

}
//const END_POINT = 'https://s3-ap-northeast-1.amazonaws.com/s3.kos.sample.bk.a/sample.json';
const END_POINT = 'http://13.114.86.228:8080/members/';
const EXPORT_CSV_NAME = 'member';
