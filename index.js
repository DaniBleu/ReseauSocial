//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
//MESSAGE
const messagesNotification = document.querySelector('#messages-notification'); 
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#messages-search');

//remove active class  fromm all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
//--------------SIDERBAR------------------------------
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if((item.id) != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none'; 
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none'

        }
    })
})


//-------------- MESSAGES ------------------------------
//search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLocaleLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex'
        }else{
            chat.style.display = 'none';
        }
    })
}

//search chats
messageSearch.addEventListener('keyup', searchMessage)

//hightlight messages card when messages menu item is clicked

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})