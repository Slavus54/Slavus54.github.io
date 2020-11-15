
class ToDoList {
    constructor () {
        this.list = []
    }

    getList() {
        return this.list
    }

    clearList() {
        this.list = []
    }

    add(item) {
        this.list.push(item)
    }

    remove(id) {
        let newList = this.list.filter(el => el.id !== id)

        this.list = newList
    }
}

class Item {
    constructor () {
        this.id = null
        this.item = null
    }

    getId() {
        return this.id
    }

    setId(id) {
        this.id = id
    }

    getItem() {
        return this.item
    }

    setItem(item) {
        this.item = item
    }
}

const List = new ToDoList()

document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 'complete') {
        init()
    }
})

const init = () => {
    refresh()
}

const refresh = () => {
    //renderList()
    // let listen = document.querySelector('.listItems')

    // let ch = listen.lastElementChild

    // while (ch) {
    //     listen.removeChild(ch)
    //     ch = listen.lastElementChild
    // }
    let arren = []
    let items = JSON.parse(localStorage.getItem('todos-van'))
    
    for (let i = 0; i < items.length; i++) {
        console.log(items[i])
        recreateFromSt(items[i])
    }
}

const renderList = () => {
    const list = List.getList()
    list.forEach((el) => buildList(el))
}

const recreateFromSt = (item) => {
    const div = document.createElement('div')
    div.className = 'item'
    div.live = true
    div.item = item

    const check = document.createElement('input')
    check.type = 'checkbox'
    check.id = item.id
    check.onchange = function () {
        if (div.live === true) {
            div.live = false
        } else {
            div.live = true
        }
       
    }

    const label = document.createElement('label')

    label.htmlFor = item.id
    label.textContent = item.item

    div.appendChild(check)
    div.appendChild(label)

    const container = document.querySelector('.listItems')

    container.appendChild(div)
}

const buildList = (item) => {
    const div = document.createElement('div')
    div.className = 'item'
    div.live = true
    div.item = item

    const check = document.createElement('input')
    check.type = 'checkbox'
    check.id = item.getId()
    check.onchange = function () {
        if (div.live === true) {
            div.live = false
        } else {
            div.live = true
        }
       
    }

    const label = document.createElement('label')

    label.htmlFor = item.getId()
    label.textContent = item.getItem()

    div.appendChild(check)
    div.appendChild(label)

    const container = document.querySelector('.listItems')

    container.appendChild(div)
}

const addTodo = () => {
    const val = document.querySelector('#newItem').value.trim()
    const item = new Item()
    item.setId(Math.floor(Math.random() * 10))
    item.setItem(val)
    console.log(item)
    List.add(item)
    buildList(item)
    let storage = JSON.parse(localStorage.getItem('todos-van'))
    localStorage.setItem('todos-van', JSON.stringify([...storage, item]))
}

const removeTodos = () => {
    let items = document.querySelectorAll('.item')
    const container = document.querySelector('.listItems')
    let storage = JSON.parse(localStorage.getItem('todos-van'))
    

    for (let i = 0; i < items.length; i++) {
        let cur = items[i]
        console.log(cur)
        if (cur.live === false) {
            container.removeChild(cur)
            console.log(cur.item)
            localStorage.setItem('todos-van', JSON.stringify(storage.filter(el => el.item !== cur.item.item)))
        }
    }
}