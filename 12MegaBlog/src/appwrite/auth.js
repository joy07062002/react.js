import conf from '../conf.js';
import{Client,Account,ID} from "appwrite";

export class Authservice{
    client=new Client();
    account;

    constructor(){
        this.client
              .setEndpoint(conf.appwriteurl)
              .setProject(conf.appwriteProjectId);

         this.account=new Account (this.client);
    }
    async createAccount({email,password,name}){
        try{
           const userAccount= await this.account.create(ID.unique(),email,password,name);
           if(userAccount){
            //call another method 
            return this.login({email,password});

           }
           else return userAccount;

        }
        catch(error){
            throw error;

        }
    }
    async login({email,password}){
        try{
            return await this.createEmailSession(email,password);

        }
        catch{
            throw error;

        }

    }
    async getCurrentUser(){
        try{
           return  await this.account.get();

        }
        catch{
            throw error;

        }
        return null;
    } 
    async logout(){
        try{
            await this.account.deletesessions();

        }
        catch{
            throw error;
        }
    }
                    
}

const authservice=new Authservice();


export default authservice