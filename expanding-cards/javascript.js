var panels=document.getElementsByClassName("panel")
panels[0].onclick=f
panels[1].onclick=f
panels[2].onclick=f
panels[3].onclick=f
function  f(){
    // panels.style.width="300px"
    // panels.style.width=parseInt(getSytel(div,"width"))+100+"px"
    // window.alert("111")
    // panels.style.flex="5"
    // panels.array.forEach(panel => {
    //     panel.style.flex="5"
    // });
    for (var i = 0; i < panels.length; i++) {
        panels[i].style.flex = "1";
    }
    this.style.flex="5"

}
// panels.array.forEach(panel => {
    
// });