function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_bsc1eii";
    const templateID = "template_mku80sh";

    emailjs
        .send(serviceID, templateID, params)
        .them((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message set successfyly");
        })
        .catch((err) => console.log(err));
    }

