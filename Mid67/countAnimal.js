function count_animals(str) {
    const animals = ["dog","cat","bat","cock","cow","pig","fox","ant","bird","lion","wolf","deer","bear","frog","hen","mole","duck","goat"];

    const checkAnimal = [];
    let text = str;

    for (let i = 0; i < animals.length; i++) {
        let count = 0;
        const animalName = animals[i];

        for (let char of animalName) {
            if (text.includes(char)) {
                text = text.replace(char, '-');
                count++;
            }
        }
        
        if (count === animalName.length) {
            checkAnimal.push(animalName);
            i++;
        } 
    }

    return checkAnimal;
}

console.log(count_animals("cockdogwdufrbir")); // ["cow", "duck", "frog", "bird"]