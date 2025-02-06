import { Document } from "mongoose";


export interface User extends Document {
    UserName:string,
    FullName:string,
    Gender:"Male"|"Female"|"Prefer not to say",
    ParentEmail:string,
    ParentMobileNumber?:string,
    Password:string,
    DateOfBirth:string,
    Cart:[]
}