class Bookshelf {
    constructor(){
        this.bookArr = []
    }

    seed(bookArr) {
        for(const book of bookArr){
            const newBook = new Book(book.author, book.language, book.subject, book.title)
            this.addBook(newBook)
        }
    }
    addBook(book){
        this.bookArr.push(book)
    }

    render(){
        const bookWrapper = document.createElement('div')

        for(const book of this.bookArr){
            bookWrapper.append(book.render())
        }

        document.body.append(bookWrapper)
        
    }

}