class Child extends Parents{
    constructor(name,age,gen){
        super(name,age,gen)
        this.high = 185
    }

    walk(){
        super.walk();
        console.log("Es im uzacov kqelem");
    }
jump(){
    console.log("Jump" + this.high);
}

}