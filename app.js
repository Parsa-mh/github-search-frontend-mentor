const searchInput = document.querySelector("#search")
const informations = document.querySelector(".box")
const image = document.querySelector("#profile-photo")
const userName = document.querySelector("#userName")
const ID = document.querySelector("#ID")
const joinTime = document.querySelector("#joined-time")
const bio = document.querySelector("#biography")
const follow = document.querySelectorAll(".acc-info")
const locations = document.querySelector("#location")
const link = document.querySelector("#link")
const twitter = document.querySelector("#twitter")
const company = document.querySelector("#company")
let array 
async function findUser(event){
    event.preventDefault()
    const url = `https://api.github.com/users/${searchInput.value}`
    await axios.get(url).then((res)=>{
        array = res.data
        informations.classList.remove("d-none")
    }).catch((err)=>{
        console.log(err);
        swal.fire({
            title : "user not found",
            icon : "error",
            text : `error code ${err.response.status}`
        })
    })
    searchInput.value = ""
    image.setAttribute("src",array.avatar_url)
    if (array.name == "" || array.name === null){
        userName.textContent = "Not Available"
        userName.classList.add("text-secondary")
    }else{
        userName.textContent = array.name
        userName.classList.remove("text-secondary")
    }
    ID.textContent = "@"+array.login
    ID.setAttribute("href",array.html_url)
    joinTime .textContent = "joined " + array.created_at
    if (array.bio == "" || array.bio === null){
        bio.textContent = "this profile has no bio"
        bio.classList.add("text-secondary")
    }else{
        bio.textContent = array.bio
        bio.classList.remove("text-secondary")
    }
    follow[0].textContent = array.public_repos
    follow[1].textContent = array.followers
    follow[2].textContent = array.following
    if(array.location == "" || array.location === null){
        locations.textContent = "Not Available"
        locations.classList.add("text-secondary")
    }else{
        locations.textContent = array.location
        locations.classList.remove("text-secondary")
    }
    if(array.blog == "" || array.blog === null){
        link.textContent = "Not Available"
        link.classList.add("text-secondary")
    }else{
        link.textContent = array.blog
        link.classList.remove("text-secondary")
    }
    if(array.twitter_username == "" || array.twitter_username === null){
        twitter.textContent = "Not Available"
        twitter.classList.add("text-secondary")
    }else{
        twitter.textContent = array.twitter_username
        twitter.classList.remove("text-secondary")
    }
    if(array.company == "" || array.company === null){
        company.textContent = "Not Available"
        company.classList.add("text-secondary")
    }else{
        company.textContent = array.company
        company.classList.remove("text-secondary")
    }
}