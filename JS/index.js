const loadPhone = async (searchText, isShowAll) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await response.json();
    let phones = data.data;
    console.log(phones)

    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ""

    const ShowAllButton = document.getElementById('show-all-button')
    if (phones.length > 12 && !isShowAll) {
        ShowAllButton.classList.remove('hidden')
    }
    else {
        ShowAllButton.classList.add('hidden')
    }
    console.log('is show all', isShowAll)
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card m-10 bg-base-100 shadow-xl">
            <figure><img src=${phone.image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <div class="card-actions justify-center">
                    <button onclick="handleshowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
        `
        phoneContainer.appendChild(div);
    })
    toggleLoadspiner(false)
}

// Details button
const handleshowDetail = (id) => {
    console.log("Id is : ",id)
    
}

//handle Search button
const handleSearch = (isShowAll) => {
    toggleLoadspiner(true)
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText, isShowAll);
}

const toggleLoadspiner = (isloading) => {
    const loadingSpiner = document.getElementById('loading-spiner')
    if (isloading) {
        loadingSpiner.classList.remove('hidden')
    }
    else {
        loadingSpiner.classList.add('hidden')
    }
}

const handleShowAll = () => {
    handleSearch(true)
}
// loadPhone();