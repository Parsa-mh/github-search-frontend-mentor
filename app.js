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
    const joinedAt = new Date(array.created_at)
    joinTime .textContent = "joined " + joinedAt.toUTCString().substring(5,17)
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
const body = document.querySelector("body")
const lightBTN = document.querySelector("#light-btn")
function lightDark(){
    body.classList.toggle("light-mode")
    if (body.className.includes("light-mode")){
        lightBTN.innerHTML = `Dark<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-fill ms-1" viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
      </svg>` 
    }
    else{
        lightBTN.innerHTML = `light <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-brightness-high-fill ms-1" viewBox="0 0 16 16">
        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
      </svg>`
    }
}