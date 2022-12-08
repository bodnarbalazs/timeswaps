window.onload=()=>{
    loadTitleH2();
    changeUSPText();
};
let i=0;
let t=0;
let uspTexts=[
    "Egy gitártanár tanítványai könnyen el tudják cserélni időpontjaikat, a tanár beavatkozása nélkül.",
    "Egy vezetés oktató tanítványai könnyen el tudják cserélni időpontjaikat, az oktató beavatkozása nélkül.",
    "Egy énektanár tanítványai könnyen el tudják cserélni időpontjaikat, a tanár beavatkozása nélkül.",
    "Egy fogorvos páciensei könnyen el tudják cserélni időpontjaikat, az orvos beavatkozása nélkül.",
    "Egy matek tanár tanítványai könnyen el tudják cserélni időpontjaikat, a tanár beavatkozása nélkül.",
    "Egy belsőépítész kliensei könnyen el tudják cserélni konzultációs időpontjaikat, a belsőépítész beavatkozása nélkül.",
    "Egy üzleti tanácsadó kliensei könnyen el tudják cserélni konzultációs időpontjaikat, a tanácsadó beavatkozása nélkül."
];
function loadTitleH2(){
    let text="...a megoldás, hogy arra legyen időd, ami fontos";
    let h2=$("#title-div h2")[0];
    if (h2.innerText.length<text.length) {
        h2.innerText=text.substring(0,i);
            i++;
        setTimeout(() => {
            loadTitleH2();
        }, text.charAt(i-2)==','?500:25);
    }
    else{
        $("#app")[0].style.opacity=1;
    }
}
function changeUSPText(){
    $("#USP-advantage-div p")[0].style.opacity=0;
    $("#USP-advantage-div p")[0].innerHTML="&emsp;"+uspTexts[t];

    t++;
    if (t>=uspTexts.length) {
        t=0;
    }
    animateOpacity($("#USP-advantage-div p")[0]);
    setTimeout(() => {
        changeUSPText();
    }, 10000);
}
let o=0;
function animateOpacity(item) {
    item.style.opacity=0.1*o;
    o++;
    if (item.style.opacity<=1) {
        setTimeout(() => {
            animateOpacity(item);
        }, 50); 
    }
    else{
        o=0;
    }
}
