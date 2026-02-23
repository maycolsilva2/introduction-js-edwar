const button = document.querySelector(".button");
button.addEventListener('click', async() =>{

    try {
        await navigator.mediaDevices.getUserMedia({video: true, audio: true})
    
    
    const permission = await Notification.requestPermission();

    console.log(`Estado del permiso ${permission}`)
    
    if (permission === 'granted'){
        new Notification ("Permisos concedidos",{
            body: "¡camara y microfonos activados",
            icon: "/assets/icon/img1.jpg"
        })
    }else{
        console.log(`permisos denegados`)
    }
    }catch(error){
        console.log(`error al solicitar los permisos`, error);
        alert(`no se consedieron los permisos solicitados`)
    }

})
