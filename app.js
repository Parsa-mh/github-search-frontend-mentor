const searchInput = document.querySelector("#search")
const informations = document.querySelector(".box")
const image = document.querySelector("#profile-photo")
const userName = document.querySelector("#userName")
const ID = document.querySelector("#ID")
const joinTime = document.querySelector("#joined-time")
const bio = document.querySelector("#biography")
const follow = document.querySelectorAll(".acc-info")
const location = document.querySelector("#location")
const link = document.querySelector("#link")
const twitter = document.querySelector("#twitter")
const company = document.querySelector("#company")
let array = []
function findUser(){
    const url = `https://api.github.com/users/parsa-mh`
    axios.get(url).then((res)=>{
        res.data.forEach((item) => {
            array.push(item)
        });
    }).catch((err)=>{
        swal.fire({
            title : "user not found",
            icon : "error",
            text : `error code ${err.data.response.status}`
        })
    })
}
function Userinfo(){
    
}
















axios.get(url)
.then((res)=>{
    console.log(res);
})
.catch((res)=>{
    console.log(res.response.status);
})