class Hello {
  firstName : string;
  lastName : string;
  constructor(fiestName : string,  lastName : string) {
      this.firstName = fiestName;
      this.lastName = lastName;
  }
  greeter() {
      return "欢迎来到typescript的世界，hello" + this.firstName + " " + this.lastName;
  }
}
export default Hello;