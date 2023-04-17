class Book {
    constructor(author, language, subject, title, /*imgUrl*/){
        this.author = author
        this.language = language
        this.subject = subject
        this.title = title
    }

    render(){
        //Book Container
        const bookWrapper = document.createElement('div')
        bookWrapper.className = 'books'

        //Author
        const h2 = document.createElement('h2')
        h2.textContent = `${this.author}`
        h2.className = 'text'

        //Language
        const h4 = document.createElement('h4')
        h4.textContent = `${this.language}`
        h4.className = 'text language'

        //Subject
        const h3 = document.createElement('h3')
        h3.textContent = `${this.subject}`
        h3.className = 'text'

        //Title
        const h1 = document.createElement('h1')
        h1.textContent = `${this.title}`
        h1.className = 'text'

        //Add comment button
        const comment = document.createElement('button')
        comment.className = 'addCommentButton'
        comment.textContent = 'View Comments'
        comment.style.color = 'white'

        //Comment section
        const commentSection = document.createElement('div')
        commentSection.className = 'commentSection'

        comment.addEventListener('click', ()=> {

            //Comment box
            const commentBox = document.createElement('input')
            commentBox.className = 'commentBox'
            commentBox.placeholder = 'Type your comment here.'

            //Send comment button
            const addComment = document.createElement('button')
            addComment.className = 'commentButton'
            addComment.textContent = 'Submit'

            addComment.addEventListener('click', ()=>{
                const commentLine = document.createElement('p')
                commentLine.className = 'commentLine'

                const newComment = commentBox.value
                if(newComment.length <= 0){
                    return
                } else if(newComment.length > 280){
                    return window.alert('Please keep comments under 280 characters')
                }

                commentSection.append(commentLine)
                commentLine.append(newComment)
                commentBox.value = ''

            })
            
            commentSection.append(commentBox, addComment)

            comment.disabled = true

            if(comment.disabled = true){
                comment.remove(bookWrapper)
            }
        
         })


        //I changed the order of which the information is displayed in a way I think makes more sense
        bookWrapper.append(h1, h2, h3, h4, comment, commentSection)
 

        return bookWrapper
    }
}

