const url = 'https://6352c8eaa9f3f34c3748e117.mockapi.io';

const category = document.getElementById('txt-item')

async function getMockApi(url) {

    const respond = await fetch(url)
    const result = respond.json();

    return result;
    
    
}
getMockApi(`${url}/informasi`)
.then(function (result) {
    category.innerHTML = '';
    result.forEach(function (informasi) {
        category.innerHTML += `<div class="col-sm-3 " >
        <div class="category-item">
            <img src="${informasi.img}" width="100px" alt="">
        </div>
        <div class="category-item">
            <h5>${informasi.title}</h5>
        </div>
        <div class="category-item">
            <p>${informasi.content}</p>
        </div>
    </div>

        `
    })
})