class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        // Console log name
        console.log(this.name);
    }
    showStats() {
        // Console log stats
        console.log([this.name, this.health, this.speed, this.strength]);
    }
    drinkSake() {
        // Add 10 health
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        // Requires name for Ninja constructor
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10
        this.wisdom = 10; 
    }

    speakWisdom() {
        // Calls drinkSake method from parent class
        super.drinkSake();
        console.log("Hmm... Wisdom.  Yes.")
    }
}

const sensei1 = new Sensei("Ro");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();