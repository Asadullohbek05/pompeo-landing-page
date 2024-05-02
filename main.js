const inputEl = document.querySelector('.email')
const buttonEl = document.querySelector('.subscribe')

buttonEl.addEventListener('click', (e) => {
    if (!inputEl.value.endsWith('@') && inputEl.value.includes('@')) {
        alert("You Subscribed ✅")
    }
    else {
        alert('Please enter valid Email ❗❗❗')
        e.preventDefault()
    }
})