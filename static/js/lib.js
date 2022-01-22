console.log(document.getElementsByTagName('body')[0])
    //+"\n"+document.documentElement.scrollHeight+"\n"+document.documentElementhtml.offsetHeight)
function mov(x){
    //largo_seccion = document.getElementById('contenido_uno').height
    dif = parseInt(x)/parseInt(hei)
    console.log(dif)
    if(dif > 0 && dif < 0.7){
        dif2 = dif + 0.2
        dif20 = dif+dif*45
        dif21 = dif20 + (-88)
        dif3 = document.getElementById('planet').style.bottom
        dif31 = parseInt(dif3.replace("%",""))
        hh = hei*dif2
        hh1 = hei*0.4
        hh2 = dif21
        console.log("2222  "+hh)
        console.log("3333  "+hh2)
        document.getElementById('planet').style.height = hh+"px";
        document.getElementById('planet').style.bottom = hh2+"%";
    }
    //largo =  parseInt(largo)
    console.log(x)
    if(dif > 0 && dif < 1.65){
        dif2 = dif * 0.3
        dif3 = dif * 0.3
        dif4 = dif * 0.9
        ww = wi*dif2
        ww2 = wi*dif4
        ww3 = (wi*0.6) - (wi*dif3)

        document.getElementById('mountaina').style.width = ww3+"px";
        document.getElementById('mountainb').style.width = ww3+"px";
        document.getElementById('mountainc').style.width = ww2+"px";
        document.getElementById('mountaind').style.width = ww2+"px";
        document.getElementById('mountaine').style.width = ww+"px";
        document.getElementById('mountainf').style.width = ww+"px";
        //document.getElementById('mountaina').style.height = hh+"px";
    }
    if(dif > 1.17 && dif < 2){
        dif2 = dif * 0.2
        dif4 = dif * 0.3
        ww = wi*dif2
        hh = hei*dif4
        dif5 = dif * 0.25
        hh2 = hei*dif5
        document.getElementById('edificio1').style.width = ww+"px";
        document.getElementById('edificio1').style.backgroundPosition = 'bottom hh'+"px"+' rigth 7px';
        document.getElementById('edificio2').style.width = ww+"px";
        document.getElementById('edificio1').style.height = hh+"px";
        document.getElementById('edificio2').style.height = hh+"px";
        document.getElementById('edificio3').style.height = hh2+"px";
        //document.getElementById('mountaina').style.height = hh+"px";
    }
    if(dif > 2.0 && dif < 2.99){
        dif4 = dif * 0.22
        hh = hei*dif4
        hh2 = hei*dif5
        dif5 = dif - 0.5
        hh4 = 2.7-dif
        hh7 = 3.1-dif
        hh5 = 0
        hh6 = 1
        if(hh4 >= 0){
            hh5 = hh4*20
            hh6 = 1-hh7
        }
        document.getElementById('edificio4').style.height = hh+"px";
        document.getElementById('pantalla').style.transform = "perspective(4cm) rotateX("+hh5+"deg) rotateY(0deg)";
        document.getElementById('pantalla').style.filter = "opacity("+hh6+")";
    }
}