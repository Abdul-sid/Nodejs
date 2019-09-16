class a  {
    constructor (name,location){
    this.name = name,
    this.location = location
}

greeting(){
    console.log(`hello ${this.name} , from ${this.location}`)
}

}

module.exports = a ;

