class StateMgt{
    constructor(){
        this.count = 0
    }

    setCount(counter, operator){
    if(operator === "*"){
        return this.count *= counter
    }else if(operator === "+"){
        return this.count += counter
    }else if(operator === "-"){
        return this.count -= counter
    }
    }

    handleIncrement(){
      return  this.count += 1
    }

    handleDecrement(){
      return  this.count -=1
    }

    handleReset(){
      return  this.count = 0
    }
}

const stateMgt = new StateMgt();

console.log(stateMgter.setCount(4, "+"));