class Demo {
    firstName : string;
    lastName : string;
    constructor(fiestName : string,  lastName : string) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    greeter() {
        return "欢迎来到我的世界" + this.firstName + " " + this.lastName;
    }
}
export default Demo;