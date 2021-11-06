import { Photo } from './photo';
export class City{
   id:number;
   description:string;
   name:string;
   dateAdded:Date;
   userId:number;
   photos:Photo[];
   photoUrl:string;
}
