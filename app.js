//tabs
$('#calc-tabs a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })



//Coins gained in timeframe button
const dayBtn = document.getElementById("24-hours-btn");
const monthBtn = document.getElementById("one-month-btn");

dayBtn.addEventListener("click",function(){
    if(!dayBtn.classList.contains("active")){
        dayBtn.classList.add("active")
    }

    if(monthBtn.classList.contains("active")){
        monthBtn.classList.remove("active");
    }
})

monthBtn.addEventListener("click",function(){
    if(!monthBtn.classList.contains("active")){
        monthBtn.classList.add("active")
    }

    if(dayBtn.classList.contains("active")){
        dayBtn.classList.remove("active");
    }
})

//tab 1
const totalSafeMoon = document.getElementById("sfm");
const gain = document.getElementById("gain");
const invested = document.getElementById("invested");
const price = document.getElementById("price");
const gainedM = document.getElementById("gained-m");
const percM = document.getElementById("perc-m");
const gainedY = document.getElementById("gained-y");
const percY = document.getElementById("perc-y");
const value = document.getElementById("value");
const form1 = document.getElementById("form1")
const form1Btn = document.getElementById("form1-btn")


//calculate 1
form1.addEventListener('submit', calculate1);

function calculate1(e){
    e.preventDefault();

    //coins gained in first month
    tc = totalSafeMoon.value;
    cg = gain.value;

    if(dayBtn.classList.contains("active")){
        cgm = (cg*30);
    } else{
        cgm = (cg*1);
    }
    cgmp = ((cgm/tc)*100).toFixed(2);

    gainedM.innerHTML = `<span id="gained-m"> ${cgm.toLocaleString()}</span>`;
    percM.innerHTML = `<span id="perc-m"> (${cgmp}%)</span>`

    //coins gained in first year
    cgy = cgm*12
    cgyp = ((cgy/tc)*100).toFixed(2);

    gainedY.innerHTML = `<span id="gained-y"> ${cgy.toLocaleString()}</span>`;
    percY.innerHTML = `<span id="perc-m"> (${cgyp}%)</span>`

    //current value
    tcnum = parseInt(tc,10);
    p = price.value

    v= tcnum * p;


    value.innerHTML = `<span id="value"> $${v.toLocaleString()}</span>`

    // table1

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
    const year1Roi = document.getElementById("year1-roi");
    const year2Roi = document.getElementById("year2-roi");
    const year3Roi = document.getElementById("year3-roi");
    const year4Roi = document.getElementById("year4-roi");
    const year5Roi = document.getElementById("year5-roi");

    int=(cgy/tc)
    intnum = parseFloat(int,10);

    //Compounding Interest A=p(1+(interest/n)^nt)
    y1tc = parseInt((tcnum * Math.pow(1 + intnum,1)).toFixed(0),10);
    y2tc = parseInt((tcnum * Math.pow(1 + intnum,2)).toFixed(0),10);
    y3tc = parseInt((tcnum * Math.pow(1 + intnum,3)).toFixed(0),10);
    y4tc = parseInt((tcnum * Math.pow(1 + intnum,4)).toFixed(0),10);
    y5tc = parseInt((tcnum * Math.pow(1 + intnum,5)).toFixed(0),10);

    y1tv = parseFloat((y1tc * p).toFixed(2),10);
    y2tv = parseFloat((y2tc * p).toFixed(2),10);
    y3tv = parseFloat((y3tc * p).toFixed(2),10);
    y4tv = parseFloat((y4tc * p).toFixed(2),10);
    y5tv = parseFloat((y5tc * p).toFixed(2),10);

    //Return on Investment

    y1roi = Math.round(((y1tv-invested.value)/invested.value)*100);
    y2roi = Math.round(((y2tv-invested.value)/invested.value)*100);
    y3roi = Math.round(((y3tv-invested.value)/invested.value)*100);
    y4roi = Math.round(((y4tv-invested.value)/invested.value)*100);
    y5roi = Math.round(((y5tv-invested.value)/invested.value)*100);

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

    year1Roi.innerHTML = `<span id="year1-roi">${y1roi.toLocaleString()}%</span>`
    year2Roi.innerHTML = `<span id="year1-roi">${y2roi.toLocaleString()}%</span>`
    year3Roi.innerHTML = `<span id="year1-roi">${y3roi.toLocaleString()}%</span>`
    year4Roi.innerHTML = `<span id="year1-roi">${y4roi.toLocaleString()}%</span>`
    year5Roi.innerHTML = `<span id="year1-roi">${y5roi.toLocaleString()}%</span>`
}

//calculate 1
form2.addEventListener('submit', calculate2);

function calculate2(e){
    e.preventDefault();


    const invested = document.getElementById("money");
    const price = document.getElementById("price2");
    const futurePrice = document.getElementById("fp2");
    const cgp = document.getElementById("cgp");
    const purchased = document.getElementById("purchased");
    const gainedM = document.getElementById("gained-m2");
    const percM = document.getElementById("perc-m2");
    const gainedY = document.getElementById("gained-y2");
    const percY = document.getElementById("perc-y2");

    tc = (money.value)/(price.value)
    tax = tc/10;
    taxv = tc-tax;

    cgpi=(cgp.value/100)

    cgm= (cgpi*taxv)*30;
    cgmp = ((cgm/taxv)*100).toFixed(2);

    cgy = cgm * 12;
    cgyp = ((cgy/taxv)*100).toFixed(2);

    console.log(cgm)

    purchased.innerHTML = `<span id="purchased"> ${taxv.toLocaleString()}</span>`;
    gainedM.innerHTML = `<span id="gained-m2"> ${cgm.toLocaleString()}</span>`;
    percM.innerHTML = `<span id="perc-m2"> (${cgmp}%)</span>`;
    gainedY.innerHTML = `<span id="gained-y2"> ${cgy.toLocaleString()}</span>`;
    percY.innerHTML = `<span id="perc-y2"> (${cgyp}%)</span>`;

    // table2

    const year1tc2 = document.getElementById("year1-total-coins2");
    const year2tc2 = document.getElementById("year2-total-coins2");
    const year3tc2 = document.getElementById("year3-total-coins2");
    const year4tc2 = document.getElementById("year4-total-coins2");
    const year5tc2 = document.getElementById("year5-total-coins2");
    const year1tv2 = document.getElementById("year1-total-value2");
    const year2tv2 = document.getElementById("year2-total-value2");
    const year3tv2 = document.getElementById("year3-total-value2");
    const year4tv2 = document.getElementById("year4-total-value2");
    const year5tv2 = document.getElementById("year5-total-value2");
    const year1Roi2 = document.getElementById("year1-roi2");
    const year2Roi2 = document.getElementById("year2-roi2");
    const year3Roi2 = document.getElementById("year3-roi2");
    const year4Roi2 = document.getElementById("year4-roi2");
    const year5Roi2 = document.getElementById("year5-roi2");

    int=(cgy/tc)
    tcnum = parseInt(taxv,10);
    intnum = parseFloat(int,10);

    //Compounding Interest A=p(1+(interest/n)^nt)
    y1tc2 = parseInt((tcnum * Math.pow(1 + intnum,1)).toFixed(0),10);
    y2tc2 = parseInt((tcnum * Math.pow(1 + intnum,2)).toFixed(0),10);
    y3tc2 = parseInt((tcnum * Math.pow(1 + intnum,3)).toFixed(0),10);
    y4tc2 = parseInt((tcnum * Math.pow(1 + intnum,4)).toFixed(0),10);
    y5tc2 = parseInt((tcnum * Math.pow(1 + intnum,5)).toFixed(0),10);

    y1tv2 = parseFloat((y1tc2 * futurePrice.value).toFixed(2),10);
    y2tv2 = parseFloat((y2tc2 * futurePrice.value).toFixed(2),10);
    y3tv2 = parseFloat((y3tc2 * futurePrice.value).toFixed(2),10);
    y4tv2 = parseFloat((y4tc2 * futurePrice.value).toFixed(2),10);
    y5tv2 = parseFloat((y5tc2 * futurePrice.value).toFixed(2),10);

    //Return on Investment

    y1roi2 = Math.round(((y1tv2-invested.value)/invested.value)*100);
    y2roi2 = Math.round(((y2tv2-invested.value)/invested.value)*100);
    y3roi2 = Math.round(((y3tv2-invested.value)/invested.value)*100);
    y4roi2 = Math.round(((y4tv2-invested.value)/invested.value)*100);
    y5roi2 = Math.round(((y5tv2-invested.value)/invested.value)*100);

    year1tc2.innerHTML = `<span id="year1-total-coins2">${y1tc2.toLocaleString()}<span>`;
    year2tc2.innerHTML = `<span id="year1-total-coins2">${y2tc2.toLocaleString()}<span>`;
    year3tc2.innerHTML = `<span id="year1-total-coins2">${y3tc2.toLocaleString()}<span>`;
    year4tc2.innerHTML = `<span id="year1-total-coins2">${y4tc2.toLocaleString()}<span>`;
    year5tc2.innerHTML = `<span id="year1-total-coins2">${y5tc2.toLocaleString()}<span>`;
    
    year1tv2.innerHTML = `<span id="year1-total-value2">$${y1tv2.toLocaleString()}</span>`;
    year2tv2.innerHTML = `<span id="year1-total-value2">$${y2tv2.toLocaleString()}</span>`;
    year3tv2.innerHTML = `<span id="year1-total-value2">$${y3tv2.toLocaleString()}</span>`;
    year4tv2.innerHTML = `<span id="year1-total-value2">$${y4tv2.toLocaleString()}</span>`;
    year5tv2.innerHTML = `<span id="year1-total-value2">$${y5tv2.toLocaleString()}</span>`;

    year1Roi2.innerHTML = `<span id="year1-roi2">${y1roi2.toLocaleString()}%</span>`;
    year2Roi2.innerHTML = `<span id="year1-roi2">${y2roi2.toLocaleString()}%</span>`;
    year3Roi2.innerHTML = `<span id="year1-roi2">${y3roi2.toLocaleString()}%</span>`;
    year4Roi2.innerHTML = `<span id="year1-roi2">${y4roi2.toLocaleString()}%</span>`;
    year5Roi2.innerHTML = `<span id="year1-roi">${y5roi2.toLocaleString()}%</span>`;
    
    console.log(tcnum)
}