
let btn = document.getElementById('btn-thong-bao')

btn.onclick = () => {
    if(!("Notifycation" in window))
        throw new Error("Brower doesn't support Notifycation")
        
    Notification.requestPermission().then((permission)=> {
        new Notification("Hello World!")
    })    
}