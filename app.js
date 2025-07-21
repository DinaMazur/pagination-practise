// Отримати список постів з JSONPlaceholder API Опис: Використайте публічне API JSONPlaceholder для отримання списку постів. 
// Зробіть GET-запит за адресою https://jsonplaceholder.typicode.com/posts та перегляньте отримані дані.
function getSiteAPI() {
    return fetch ("https://jsonplaceholder.typicode.com/posts")
}

getSiteAPI().then((result) => result.json()).then((resultdata) => console.log(resultdata))

const listElement = document.querySelector(".user-list")
function turnOurPage (data){
const userList = document.querySelector(".user-list");
let number = 0
const dynamicElement = data.map(user => {
   
    const elementOfLi = `
      <li class="user-item">
            <h2 class="user-mainid">${user.user.Id}</h2>
            <h3 class="user-id">${user.id}</h3>
            <p class="user-title">${user.title}</p>
        </li>`
        listElement.insertAdjacentHTML(`beforeend`, elementOfLi)
        return elementOfLi
         
})

}
turnOurPage()