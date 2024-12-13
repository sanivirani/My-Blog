
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client()
    account

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)    
            
    }

    async createAccount({email, password, name}){
        try {
          const userAccount = await this.account.create(ID.unique(), email, password, name)
          if(userAccount){
            
            // return userAccount -- call another method
             return this.login({email, password})
          } else{
             return userAccount
          }
        } catch (error) {
            console.log("Appright service :: createAccount :: error", error);
            
        }
    }

    async login({email, password}){
           
        try {
           return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("Appright service :: login :: error", error);
            
        }
    }
    
    async getCurrentUser(){
        try {
           return await this.account.get()
        } catch (error) {
            console.log("Appright service :: getCurrentUser :: error", error);
            
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions('current')
        } catch (error) {
            console.log("Appright service :: logout :: error", error);
            
        }
    }
}

const authService = new AuthService()

export default authService




// import conf from '../conf/conf.js'
// import {Client, Account, ID} from 'appwrite'

// export class AuthService {
//     client = new Client()
//     account;

//     constructor(){
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId)
//         this.account = new Account(this.client)    

//     }

//     //--- create account another way--- //

//     async createAccount({email, password, name}){
//         const userAccount = await this.account.create(ID.unique(), email, password, name);
//         if(userAccount){
//             return this.login({email, password})
//         }
//         return userAccount 
//     }

//     // --- create login another way --- //

//     async login({email, password}){
//         return await this.account.createEmailPasswordSession(email, password)
//     }


//     async getCurrentUser(){
//         try {
//             return await this.account.get()
//         } catch (error) {
//             console.log("Appwrite service :: getCurrentUser :: error", error);     
//         }
//         return null
//     }

//     async logOut(){
//         try {
//             await this.account.deleteSessions()
//         } catch (error) {
//             console.log("Appwrite service :: logOut :: error", error);
            
//         }
//     }
// }

// const authService = new AuthService()

// export default authService


