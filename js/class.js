class Parent {
    constructor() {
        this.addHello()
    }
    addHello() {
        return alert('Hello')
    }
    // render() {
    //     return `<div>hello task</div>`
    // }
}
const child = new Parent("new information")



console.log(child.addHello);