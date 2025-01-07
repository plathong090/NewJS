class Dog {
    constructor(name) {
        this._name = name;
    }

    // get name() {
    //     return this._name; // สร้าง getter เพื่อเข้าถึง _name
    // }

    introduce() {
        console.log("This is " + this._name + " !");
    }

    static bark() {
        console.log("Woof!")
    }
}

const myDog = new Dog("Buster");
myDog.introduce();
Dog.bark()