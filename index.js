
let btn = document.getElementById('btn-thong-bao')

btn.onclick = () => {
    if(!("Notification" in window))
        throw new Error("Brower doesn't support Notification")
        
    Notification.requestPermission().then((permission)=> {
        new Notification("Hello World!")
    })    
}