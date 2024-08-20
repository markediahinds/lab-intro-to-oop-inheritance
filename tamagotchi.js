class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name
        this.energy = energy
        this.full = full
        this.mood = mood
        this.sick = sick
        this.rehomed = rehomed
    }

    greet () {
        console.log(`Hello, I'm ${this.name}`)
    }

    status () {
        console.log(`My mood is: ${this.mood} \n I am this full: ${this.full} \n My nrg is: ${this.energy} \n I am well` )
    }

    eat () {
        this.full+=2
        this.energy--
        if ( this.full > 10 ) {
            this.sick = true
        }
    }
}


const love = new Tamagotchi('Love')
// console.log(love)
// love.greet()
// love.status()
// console.log(love)
// love.eat()
// console.log(love)
// love.eat()
console.log(love)


module.exports = Tamagotchi;