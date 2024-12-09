let danger = document.createElement('div');
danger.style.position = "fixed";
danger.style.top = "0px";
danger.style.zIndex = "100";
danger.style.height= '100%';
danger.style.width= '90%';
danger.style.margin= "auto";
danger.style.background = "red"

let body = document.body;
try{
    
function $(selector){
    let self = document.querySelector(selector);
    let doubleself = document.querySelectorAll(selector);

    self.text = function(text){
        if(text){
            self.innerText = text;
            return self;
        }
        return self.innerText;
    }

    self.html = function(){
        return self.innerHTML;
    }
    self.css = function(styles){
        for(let key in styles){
            self.style[key] = styles[key];
        }
        return self;
    }
    self.on = function(eventname, callback){
        self.addEventListener(eventname, callback);
        return self;
    }
    self.show = function(){
        self.style.display = "block";
    }
    self.hide = function(){
        self.style.display = "none";
    }
    self.toggle = function(){
        if(self.style.display == "none"){
            self.style.display = "block";
        }
        else{
            self.style.display = "none";
        }   
    }
    self.slide = function(h){
        let i =0;
        if(h == undefined){
            body.appendChild(danger);
            danger.innerHTML = "<h1 style='text-align:center;color:white;'>Your Slide Function In Your JavaScript Cannot Be Executed Becouse Your Height is null ... Modify Your JS Code</h1>";
        }
        else if(typeof h == "number"){
            alert(new Error("Please Enter A string As THe Height's Value"))
        }
        else{
            if(self.style.height == 0 || self.style.display == "none"){
                self.style.display = "block";
                setTimeout(()=>{
                self.style.transition = "1s";
                self.style.height = h;
                },10)
            }
            else{
                self.style.transition = "1s linear";
                self.style.height = "0";
                setTimeout(()=>{
                    self.style.display = "none";
                },1000)
            }    
        }
        return self;
    }
    self.slideDown = function(h){
        if(h == undefined){
            body.appendChild(danger);
            danger.innerHTML = "<h1 style='text-align:center;color:white;'>Your Slide Function In Your JavaScript Cannot Be Executed Becouse Your Height is null ... Modify Your JS Code</h1>";
        }
        else if(typeof h == "number"){
            alert(new Error("Please Enter A string As THe Height's Value"))
        }
        else{
        if(self.style.display == "none"){
            self.style.height = 0;
            self.style.display = "block";
            self.style.transition = "1s";
            setTimeout(()=>{
                self.style.height = h;
            },10);
        }
        else{
            self.style.display = "block";
            self.style.transition = "1s linear";
            self.style.height = h;
            return self;
        }   
    } 
    }
    self.slideUp = function(){
            self.style.transition = "1s linear";
            self.style.height = 0;
            setTimeout(()=>{
            self.style.display = "none";
            },1000)
            return self;
    }
    self.openNav = function(width){
        self.style.width = 0;
        self.style.transition = '1s';
        setTimeout(()=>{
            self.style.width = width;
        },100)

        return self;
    };
    self.closeNav = function(){
        self.style.transition = "1s";
        self.style.width = 0;
        return self;
    };
    self.handle = function(user,pass,datauser,datapass,locate){
        let username = document.querySelector(user).value;
        let password = document.querySelector(pass).value;
        if(datauser === undefined || datapass === undefined){
            if(username === "" || password === ""){
                alert("Please enter");
            }
            
            else{
                alert("valid Form")
            }
        }
        else{
            if(username === "" || password === ""){
                alert("Please enter valid data");
            }
            else if(username === datauser && password === datapass){
                if(location === undefined){
                    alert("valid Entry");
                }
                else{
                    window.location.replace(locate);
                }
            }
            else if(username === datauser2 && password === datapass2){
                if(location === undefined){
                    alert("valid Entry");
                }
                else{
                    window.location.replace(locate);
                }
            }
            else if(username === datauser3 && password === datapass3){
                if(location === undefined){
                    alert("valid Entry");
                }
                else{
                    window.location.replace(locate);
                }
            }
            else{
                alert("inValid Form")
            }
        }
    }
    self.datahandle = function(user,pass,datauser,datapass,locate){
        let username = document.querySelector(user).value;
        let password = document.querySelector(pass).value;
        if(datauser === undefined || datapass === undefined){
            if(username === "" || password === ""){
                alert("Please enter");
            }
            else{
                alert("valid Form")
            }
        }
        else{
            if(username === "" || password === ""){
                alert("Please enter valid data");
            }
            else if(username === datauser && password === datapass){
                if(location === undefined){
                    alert("valid Entry");
                }
                else{
                    window.location.replace(locate);
                }
            }
            else{
                alert("inValid Form")
            }
        }
    }
    self.slideshow = function(time){
        let slides = doubleself;
        let counter = 0;
        slides.forEach(
            (slide, index) => {
                slide.style.left = `${index * 100}%`
            }
        )
        const slideImage = () =>{
            slides.forEach(
                (slide) => {
                    slide.style.transform = `translateX(-${counter*100}%)`
                }
            )
        }
        if(counter< slides.length){
            setInterval(()=>{
                while (counter >slides.length -2) {
                    counter = -1;
                }
                counter++;
                slideImage()
            },time)
            // 10s 
        }
    }

    self.contact = function(firstname, email, subject, message,erormg,mysend,location){
        let myfirstName = document.querySelector(firstname).value;

        let myEmail = document.querySelector(email).value;
        let mySubject = document.querySelector(subject).value;
        let myMessage = document.querySelector(message).value;
        let errmsg = document.querySelector(erormg);
        let btn = document.querySelector(mysend);
        errmsg.style.color ="red";
        if(myfirstName === "" || myEmail === "" || mySubject === "" || myMessage === ""){
            errmsg.innerText = "** Please Fill The Empty Fields **";
            console.error("Fill In The Empty Fields")
            
        }
        else{
            setTimeout(()=>{
                btn.innerText = "sending";

            },1000)
            btn.innerText = "send";
            alert("Message Sent");
            document.location.replace(location);
        }
    }
    self.preload = function(){
        self.on("load",function(){
            self.style.zIndex = "-9999";
        })
    };
    return self;
}
}
catch(error){
  throw new error("err");
    
}