
let commentContainer = document.getElementById("comment-container");

function createInputBox() {
    let div = document.createElement('div');
    div.setAttribute('class', 'comment-details');

    div.innerHTML += `
    <input type="text" placeholder="add text here" class="input" />
    <button class="btn submit">Submit</button>`;

    return div
};

console.log('create input', createInputBox())

function addReplay(text) {
    let div = document.createElement('div');
    div.setAttribute('class', 'all-comments');

    div.innerHTML += `
     <div class="card">
      <span class="text">${text}</span>
      <span id="reply" class="reply">
        Add Reply
      </span>
    </div>`

    return div
};

console.log('create input', addReplay())

commentContainer.addEventListener('click', function (e) {
    let replyClicked = e.target.classList.contains("reply");
    let submitClicked = e.target.classList.contains("submit");
    let closetCard = e.target.closest('.all-comment')


    if (replyClicked) {
        closetCard.appendChild(createInputBox());
    }


    if (submitClicked) {
        const commentDetails = e.target.closest('.comment-details');
        if (commentDetails.children[0].value) {
            closetCard.appendChild(addReplay(commentDetails.children[0].value))
            commentDetails.remove()
        }
    }
})