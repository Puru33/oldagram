const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainImg = document.querySelector(".post-vangogh")
const likes = document.querySelector('.like-count')
const heart = document.querySelector('.heart')
const comment = document.querySelector('.comment')
const postComment = document.querySelector('.post-comment')

let isLiked = false
let isComment = false
let likeCount = 0



mainImg.addEventListener('dblclick', function() {
    if(isLiked == false){
        likeCount = 1
        isLiked = true
        likes.textContent = likeCount + " " + "likes"
        heart.innerHTML = `<img src="images/heart.png" alt="heart icon" class="heart-icon">`
    }
    
})

heart.addEventListener('click', function() {
    if(isLiked == true){
        likeCount = 0
        isLiked = false
        likes.textContent = likeCount + " " + "likes"
        heart.innerHTML = `<img src="images/icon-heart.png" alt="heart icon" class="heart-icon">`
    }else if(isLiked == false){
        likeCount = 1
        isLiked = true
        likes.textContent = likeCount + " " + "likes"
        heart.innerHTML = `<img src="images/heart.png" alt="heart icon" class="heart-icon">`
    }
    
})

comment.addEventListener('click', function(){
    if(isComment == false){
        isComment = true
        postComment.innerHTML = `<p class="post-comment"><span class="commenter-name">vincey1853</span> just took a few mushrooms lol</p>`
    }else if(isComment == true){
        isComment = false
        postComment.innerHTML = `<p class="post-comment"><span class="commenter-name"></p>`
    }
})


