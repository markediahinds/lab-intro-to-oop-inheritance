// Create class below
class Food {
    constructor (name, daysToSpoil, fresh) {
        this.name = name
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh
    }

    prepare() {
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        if ( this.daysToSpoil >= 1 ) {
            console.log(`There are ${this.daysToSpoil} days left before the ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`)
            this.fresh = false 
        }
    }

    aDayPasses() {
            this.daysToSpoil--
            this.isFresh()
        
    }
}

const mango = new Food('mango', '2', true)
const pear = new Food('pear', '0', false)

// mango.prepare()
// // mango.isFresh()
// console.log(mango)
// mango.aDayPasses()
// console.log(mango)
// mango.aDayPasses()
console.log(mango)


module.exports = Food;
