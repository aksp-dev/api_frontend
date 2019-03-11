import { Component, OnInit } from '@angular/core';

import { MatPaginator, MatTableDataSource} from '@angular/material';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Merchant } from '../model/merchant/merchant';
import { Member } from '../model/member/member';

import { FileService } from '../service/file/file.service';
import { MemberService } from '../service/member/member.service';

@Component({
  selector: 'app-fetch-merchant',
  templateUrl: './fetch-merchant.component.html',
  styleUrls: ['./fetch-merchant.component.scss']
})
export class FetchMerchantComponent implements OnInit {

  data: Member[]
  fmerchantForm: FormGroup;
  isDownload: boolean;
  
  // Search Container Params
  isShowSearchContainer: boolean;
  displayedColumns: string[] = ['merchantCode','tenantCode','memberId','status','cardCompanyCode','cardNumber','cardExpireDate'];
  dataSource = new MatTableDataSource<Member>(this.data);

  onSubmit() {
    const values = this.fmerchantForm.value;
    const merchantId = values['merchantId'];
    this.memberService.getMember(merchantId, '', END_POINT)
    .subscribe(json =>{

      // Download Case
      if(this.isDownload) {
        console.log('download')
        this.fileService
          .jsontocsv(json,this.displayedColumns)
          .download(`${merchantId}_${EXPORT_CSV_NAME}`);
        return;
      }
      // Search Case
      console.log('search')
      this.data = json;
      // Not Array Case
      if(!(json instanceof Array)){
        this.data = [json]
      }
      this.dataSource = new MatTableDataSource<Member>(this.data);
      this.isShowSearchContainer = true;
    })
  }

  onSearch() {
    this.isShowSearchContainer = true;
    this.isDownload = false;
  }

  onDownload() {
    this.isDownload = true;
  }

  constructor(private fb: FormBuilder,
              private fileService: FileService,
              private memberService: MemberService) { }

  ngOnInit() {
    this.fmerchantForm = this.fb.group({
      merchantId:[''],
    });
  }

}
const END_POINT = 'http://13.114.86.228:8080/members/';
const EXPORT_CSV_NAME = 'merchant';