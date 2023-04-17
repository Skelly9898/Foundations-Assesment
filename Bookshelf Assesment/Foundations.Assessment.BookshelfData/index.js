const title = document.getElementById('title')
const author = document.getElementById('author')
const subject = document.getElementById('subject')
const language = document.getElementById('language')
const newBookButton = document.getElementById('newBookButton')


const bookInstance = new Bookshelf()

bookInstance.seed(bookData)

bookInstance.render()

//New book button
//New book will be added to the bottom of the page
newBookButton.addEventListener('click', ()=>{
    const addNewBook = {
        author: [author.value],
        language: language.value,
        subject: [subject.value],
        title: title.value
    }

    bookData.push(addNewBook)
    bookInstance.seed(bookData)
    bookInstance.render()
    console.log(bookData)
    author.value = ''
    language.value = ''
    subject.value = ''
    title.value = ''
})

//Sort by area
//sort function will sort the array in the console but not on the page

const titleaz = document.getElementById('titleaz')
const titleza = document.getElementById('titleza')
const authoraz = document.getElementById('authoraz')
const authorza = document.getElementById('authorza')

titleaz.addEventListener("click", () => {
        bookData.sort((book1, book2)=>{
            if(book1.title < book2.title) {
                return - 1
            } else if(book1.title > book2.title) {
                return 1
            } else {
                return 0
            }
        })
    })

    titleza.addEventListener("click", () => {
        bookData.sort().reverse((book1, book2)=>{
            if(book1.title < book2.title) {
                return - 1
            } else if(book1.title > book2.title) {
                return 1
            } else {
                return 0
            }
        })
    })

    authoraz.addEventListener("click", () => {
        bookData.sort((book1, book2)=>{
            if(book1.author < book2.author) {
                return - 1
            } else if(book1.author > book2.author) {
                return 1
            } else {
                return 0
            }
        })
    })

    authorza.addEventListener("click", () => {
        bookData.sort().reverse((book1, book2)=>{
            if(book1.author < book2.author) {
                return - 1
            } else if(book1.author > book2.author) {
                return 1
            } else {
                return 0
            }
        })
    })

