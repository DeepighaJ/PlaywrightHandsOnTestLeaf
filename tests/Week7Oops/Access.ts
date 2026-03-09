class Data{         //Access Modifiers: private,public,protected

    public add(a:number,b:number)//most realtime scenarios use public, access anywhere
    {
        console.log("Addition",a+b);
    }

    private sub(a:number,b:number){ //access inside same class
        console.log("Subtracting:",a-b);
    }

    protected mul(a:number,b:number){ //access inside the same class or subclasses
        console.log("Multiply",a*b);
    }

    //create public method for using private or protected method since those are not accessible outside this class
    public sub1()
    {
        this.sub(10,5)
        this.mul(3,6)
    }

}
let access= new Data();
access.add(7,8); //only public accessible outside the class
access.sub1(); 