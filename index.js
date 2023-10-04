//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
//MESSAGE
const messagesNotification = document.querySelector('#messages-notification'); 
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

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
            style.display = 'none';
            document.querySelector('#notifications .notification-count').
            style.display = 'block'

        }
    })
})


//-------------- MESSAGES ------------------------------
//search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = "flex";
        } else {
            user.style.display = "none";
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