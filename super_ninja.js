class Ninja {
    constructor(name, health = 3, speed = 3, strength = 3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }
    sayName(){
    console.log(`My name is ${this.name}`);
    }

    showStats(){
    console.log(this);
    }

    drinkSake(){
    console.log("Drinking sake!", this.health)
    this.health += 10;
    console.log("New health: ", this.health);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
    super(name, 200, 10, 10, wisdom);
    }

    speakWisdom() {
    super.drinkSake();
    console.log(
        "What one programmer can do in one month, two programmers can do in two months.");
    }

    showStats() {
    super.showStats();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();