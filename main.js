let text = document.getElementById("text")
let shadow = ""
for(let i = 0; i <500; i++)
{
    shadow += (shadow? ",":"")+ i*1+"px "+ i*1+"px 0 #01ded3"
}
text.style.textShadow = shadow