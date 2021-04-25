//form1 variables
const form1 = document.querySelector(".form-1");
const SafemoonCoins = document.getElementById("safemoon-coins-ammount");
const coinsGained24H = document.getElementById("coins-gained-24h");
const submitbtn1 = document.getElementById("btn-1");
const coinsGained1M = document.getElementById("coins-gained-1m");
const percGained1m = document.getElementById('perc-gained-1m');
const coinsGained1Y = document.getElementById("coins-gained-1y");
const percGained1Y  = document.getElementById('perc-gained-1y');
const compCont = document.getElementById('compound-container')
const compContSwitch = document.getElementById('compound-container-switch')
const step1 = document.getElementById('step1');
//form2 variables
const form2 = document.querySelector(".form-2");
const step2 = document.getElementById("step2");
const roi = document.getElementById("invested");
const price = document.getElementById("price");
const value = document.getElementById("current-value");
const year1tc = document.getElementById("year1-total-coins");
const year2tc = document.getElementById("year2-total-coins");
const year3tc = document.getElementById("year3-total-coins");
const year4tc = document.getElementById("year4-total-coins");
const year5tc = document.getElementById("year5-total-coins");
const year1tv = document.getElementById("year1-total-value");
const year2tv = document.getElementById("year2-total-value");
const year3tv = document.getElementById("year3-total-value");
const year4tv = document.getElementById("year4-total-value");
const year5tv = document.getElementById("year5-total-value");
const year1vi = document.getElementById("year1-value-increase");
const year2vi = document.getElementById("year2-value-increase");
const year3vi = document.getElementById("year3-value-increase");
const year4vi = document.getElementById("year4-value-increase");
const year5vi = document.getElementById("year5-value-increase");
const year1Roi = document.getElementById("year1-roi");
const year2Roi = document.getElementById("year2-roi");
const year3Roi = document.getElementById("year3-roi");
const year4Roi = document.getElementById("year4-roi");
const year5Roi = document.getElementById("year5-roi");
//form2 switch variables
const year1tcswitch = document.getElementById("year1-total-coins-switch");
const year2tcswitch = document.getElementById("year2-total-coins-switch");
const year3tcswitch = document.getElementById("year3-total-coins-switch");
const year4tcswitch = document.getElementById("year4-total-coins-switch");
const year5tcswitch = document.getElementById("year5-total-coins-switch");
const year1tvswitch = document.getElementById("year1-total-value-switch");
const year2tvswitch = document.getElementById("year2-total-value-switch");
const year3tvswitch = document.getElementById("year3-total-value-switch");
const year4tvswitch = document.getElementById("year4-total-value-switch");
const year5tvswitch = document.getElementById("year5-total-value-switch");
const year1viswitch = document.getElementById("year1-value-increase-switch");
const year2viswitch = document.getElementById("year2-value-increase-switch");
const year3viswitch = document.getElementById("year3-value-increase-switch");
const year4viswitch = document.getElementById("year4-value-increase-switch");
const year5viswitch = document.getElementById("year5-value-increase-switch");
const year1Roiswitch = document.getElementById("year1-roi-switch");
const year2Roiswitch = document.getElementById("year2-roi-switch");
const year3Roiswitch = document.getElementById("year3-roi-switch");
const year4Roiswitch = document.getElementById("year4-roi-switch");
const year5Roiswitch = document.getElementById("year5-roi-switch");
var media= window.matchMedia("(max-width: 685px)")


//submit form1
form1.addEventListener('submit', calculate1);
//calculate Coins gained in First Month and in First Year
function calculate1(e){
    e.preventDefault();

    tc = SafemoonCoins.value;
    cg = coinsGained24H.value;

    cgm = (cg * 30);
    cgmp =(cgm/tc)*100;
    cgmpv = cgmp.toFixed(2);

    cgy = cgm * 12;
    cgyp = (cgy/tc)*100;
    cgypv = cgyp.toFixed(2);

    coinsGained1M.innerHTML = `<span id="coins-gained-1m"> ${cgm.toLocaleString()}</span>`;
    percGained1m.innerHTML = `<span id="perc-gained-1m"> (${cgmpv}%)</span>`;
    coinsGained1Y.innerHTML = `<span id="coins-gained-1y"> ${cgy.toLocaleString()}</span>`;
    percGained1Y.innerHTML = `<span id="perc-gained-1y"> (${cgypv}%)<span>`;

    form2.classList.remove("display")
    form2.classList.add("clicked");
    step2.classList.remove("display");
    step1.classList.add("display");

    if(media.matches && form2.classList.contains("clicked")){
     } else{
        compCont.classList.remove("display")
     }
}

//submitform2
form2.addEventListener("submit", calculate2);

function calculate2(e){
    e.preventDefault();

    tc = SafemoonCoins.value;
    cg = coinsGained24H.value;
    
    cgm = cg * 30;
    cgmp =(cgm/tc)*100;
    cgmpv = cgmp.toFixed(2);

    cgy = cgm * 12;
    cgyp = (cgy/tc)*100;
    cgypv = cgyp.toFixed(2);

    p = price.value;

    tcnum = parseInt(tc,10);
    cgynum = parseInt(cgy,10);
    int=(cgy/tc);
    intnum = parseFloat(int,10);

    step2.classList.add("display");

    //Compounding Interest: A=p(1 + (interest/n)^nt)
    y1tc = parseInt((tcnum * Math.pow(1 + intnum,1)).toFixed(0),10);
    y2tc = parseInt((tcnum * Math.pow(1 + intnum,2)).toFixed(0),10);
    y3tc = parseInt((tcnum * Math.pow(1 + intnum,3)).toFixed(0),10);
    y4tc = parseInt((tcnum * Math.pow(1 + intnum,4)).toFixed(0),10);
    y5tc = parseInt((tcnum * Math.pow(1 + intnum,5)).toFixed(0),10);

    console.log(typeof(y1tc));
    //Total Value
    y1tv = parseFloat((y1tc * p).toFixed(2),10);
    y2tv = parseFloat((y2tc * p).toFixed(2),10);
    y3tv = parseFloat((y3tc * p).toFixed(2),10);
    y4tv = parseFloat((y4tc * p).toFixed(2),10);
    y5tv = parseFloat((y5tc * p).toFixed(2),10);
    
    //current Value
    currentValue = tcnum * p

    value.innerHTML = `<span id="current-value"> ${currentValue.toLocaleString()}$</span>`;
    year1tc.innerHTML = `<span id="year1-total-coins">${y1tc.toLocaleString()}<span>`;
    year2tc.innerHTML = `<span id="year1-total-coins">${y2tc.toLocaleString()}<span>`;
    year3tc.innerHTML = `<span id="year1-total-coins">${y3tc.toLocaleString()}<span>`;
    year4tc.innerHTML = `<span id="year1-total-coins">${y4tc.toLocaleString()}<span>`;
    year5tc.innerHTML = `<span id="year1-total-coins">${y5tc.toLocaleString()}<span>`;
    
    year1tv.innerHTML = `<span id="year1-total-value">$${y1tv.toLocaleString()}</span>`;
    year2tv.innerHTML = `<span id="year1-total-value">$${y2tv.toLocaleString()}</span>`;
    year3tv.innerHTML = `<span id="year1-total-value">$${y3tv.toLocaleString()}</span>`;
    year4tv.innerHTML = `<span id="year1-total-value">$${y4tv.toLocaleString()}</span>`;
    year5tv.innerHTML = `<span id="year1-total-value">$${y5tv.toLocaleString()}</span>`;

    //Return on Investment

    y1roi = Math.round(((y1tv-roi.value)/roi.value)*100);
    y2roi = Math.round(((y2tv-roi.value)/roi.value)*100);
    y3roi = Math.round(((y3tv-roi.value)/roi.value)*100);
    y4roi = Math.round(((y4tv-roi.value)/roi.value)*100);
    y5roi = Math.round(((y5tv-roi.value)/roi.value)*100);

    year1Roi.innerHTML = `<span id="year1-roi">${y1roi.toLocaleString()}%</span>`
    year2Roi.innerHTML = `<span id="year1-roi">${y2roi.toLocaleString()}%</span>`
    year3Roi.innerHTML = `<span id="year1-roi">${y3roi.toLocaleString()}%</span>`
    year4Roi.innerHTML = `<span id="year1-roi">${y4roi.toLocaleString()}%</span>`
    year5Roi.innerHTML = `<span id="year1-roi">${y5roi.toLocaleString()}%</span>`

    //switch
    if(media.matches && form2.classList.contains("clicked")){
        compContSwitch.classList.remove("display");
        year1tcswitch.innerHTML = `<span id="year1-total-coins-switch">${y1tc.toLocaleString()}<span>`;
        year2tcswitch.innerHTML = `<span id="year1-total-coins-switch">${y2tc.toLocaleString()}<span>`;
        year3tcswitch.innerHTML = `<span id="year1-total-coins-switch">${y3tc.toLocaleString()}<span>`;
        year4tcswitch.innerHTML = `<span id="year1-total-coins-switch">${y4tc.toLocaleString()}<span>`;
        year5tcswitch.innerHTML = `<span id="year1-total-coins-switch">${y5tc.toLocaleString()}<span>`;
        
        year1tvswitch.innerHTML = `<span id="year1-total-value-switch">$${y1tv.toLocaleString()}</span>`;
        year2tvswitch.innerHTML = `<span id="year1-total-value-switch">$${y2tv.toLocaleString()}</span>`;
        year3tvswitch.innerHTML = `<span id="year1-total-value-switch">$${y3tv.toLocaleString()}</span>`;
        year4tvswitch.innerHTML = `<span id="year1-total-value-switch">$${y4tv.toLocaleString()}</span>`;
        year5tvswitch.innerHTML = `<span id="year1-total-value-switch">$${y5tv.toLocaleString()}</span>`;

        year1Roiswitch.innerHTML = `<span id="year1-roi-switch">${y1roi.toLocaleString()}%</span>`
        year2Roiswitch.innerHTML = `<span id="year1-roi-switch">${y2roi.toLocaleString()}%</span>`
        year3Roiswitch.innerHTML = `<span id="year1-roi-switch">${y3roi.toLocaleString()}%</span>`
        year4Roiswitch.innerHTML = `<span id="year1-roi-switch">${y4roi.toLocaleString()}%</span>`
        year5Roiswitch.innerHTML = `<span id="year1-roi-switch">${y5roi.toLocaleString()}%</span>`
    }
}