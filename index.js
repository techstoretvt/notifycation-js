
let btn = document.getElementById('btn-thong-bao')

btn.onclick = () => {
    if(!("Notification" in window))
        throw new Error("Brower doesn't support Notification")
        
    Notification.requestPermission().then((permission)=> {

        let notificationOptions = {
            body: "Welcome to Javascript Notification",
            icon: "anh1.jpg"
        }

        new Notification("Hello World!",notificationOptions)
    })    
}