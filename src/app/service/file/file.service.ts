import { Injectable } from '@angular/core';

// External Library
import json2csv from 'json2csv';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  fileContents:File;

  public jsontocsv(json: JSON, columns:String[]) {
    this.fileContents = json2csv.parse(json,{fields:columns}) as File;
    return this;
  }

  public download(fileName: string) {

    if(!this.fileContents) return;

    const fileNamePrefix = this.createFileName();
    const bomChar = new Uint8Array([0xEF,0xBB,0xBF]);
    const blob = new Blob([bomChar,this.fileContents],{type: 'text/csv'})

    // Create anchor and click.(Download file)
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileNamePrefix + '_' + fileName;
    downloadLink.click();
  }

  private createFileName(): string{
    const now = new Date();
    const formatedDate = 
    // Add blank to convert digit into String for performance.
    '' + now.getFullYear() + now.getMonth()+1 + now.getDate() + now.getHours()+ now.getMinutes() + now.getSeconds()
    return formatedDate;
  }

  constructor() { }
}
