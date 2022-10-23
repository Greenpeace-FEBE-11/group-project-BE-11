const url = 'https://6352c8eaa9f3f34c3748e117.mockapi.io';

const category = document.getElementById('txt-item')
const detailHutan = document.getElementById('detail')
const detailPerairan = document.getElementById('detail-perairan')

async function getMockApi(url) {

    const respond = await fetch(url)
    const result = respond.json();

    return result;
    
    
}
getMockApi(`${url}/informasi`)
.then(function (result) {
    category.innerHTML = '';
    result.slice(0, 4).forEach(function (informasi) {
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


getMockApi(`${url}/informasi`)
.then(function (result) {
    detailHutan.innerHTML ='';
    result.slice(4, 5).forEach(function (informasi) {
        detailHutan.innerHTML += `
                <div class="col-sm-6 ">
                    <div class="detail-item">
                        <h3>${informasi.title}</h3>
                        <p>${informasi.content}</p>
                    </div>
                </div>
                <div class="col-sm-6 ">
                    <div class="detail-item">
                        <img src="${informasi.img}" width="700px" alt="">
                    </div>
                </div>
                <style> .detail-item img{    
                    border-radius: 70px;
                    
                }
                @media only screen and (max-width: 900px) {
                    display: inline;
                }
                </style>

        `
        
    })
}) 


