export class LoginPage{
     url:string;
     title:string

     public login(){
        console.log("Public Login method")
     }
     private logout()
     {
        console.log("Private Logout method")
     }
     constructor(url:string,title:string)
     {
        this.url=url;    
        this.title=title;
        console.log(this.url)  
        console.log(this.title)  
     }

     public callMethod()
     {
        this.logout()
     }

}
//Creating object in same class
let obj= new LoginPage("https://facebook.com","Facebook")
obj.login()
obj.callMethod()






/*Class as LoginPage
 properties -> url,title -> value
methods ->  login(), logout()
constructor -> paramterized constructor(url:string)
create object inside same file 


create another file 
call the LoginPage */