var web = document.getElementById("web")
var javapro = document.getElementById("javapro")
var python = document.getElementById("python")
var cplus = document.getElementById("cplus")
var skills = document.getElementById("skills")


function webclick() {
     web.classList.toggle("webtext")

     if(web.classList.contains("webtext")) {
        web.classList.remove("remove")
     } else {
        web.classList.add("remove")
     }
}


function javaclick() {
    javapro.classList.toggle("javatext")

    if(javapro.classList.contains("javatext")) {
        javapro.classList.remove("remove")
    } else {
        javapro.classList.add("remove")
    }
}


function pythonclick() {
    python.classList.toggle("javatext")

    if(python.classList.contains("javatext")) {
        python.classList.remove("remove")
    } else {
        python.classList.add("remove")
    }
}

function cplusnclick() {
    cplus.classList.toggle("javatext")

    if(cplus.classList.contains("javatext")) {
        cplus.classList.remove("remove")
    } else {
        cplus.classList.add("remove")
    }
}


function skillsclick() {
    skills.classList.toggle("skillstext")

    if(skills.classList.contains("skillstext")) {
        skills.classList.remove("remove")
    } else {
        skills.classList.add("remove")
    }
}