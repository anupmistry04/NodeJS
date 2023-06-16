class HolyBook {
    
  
    constructor() {
     
    }
  
 
  }


class Greeter extends HolyBook {
    greeting: string;
  
    constructor(message: string) {
        super();
      this.greeting = message;
    }
  
    greet() {
      return "Hello, " + this.greeting;
    }
  }
  
  let greeter = new Greeter("world");