let cina = 21000;
let cina1 = 21000;
let kurs = 1;
let kilk = 1;
let sum = 21000;
let val = '1';

let inpCina = document.querySelector('.inp_cina');
let selectCina = document.querySelector('.select_cina');
let kurs1 = document.querySelector('.kurs');
let cinaUah = document.querySelector('.cina_uah');
let btnMinus = document.querySelector('.btn_minus');
let kilk1 = document.querySelector('.kilk');
let btnPlus = document.querySelector('.btn_plus');
let sum1 = document.querySelector('.sum');


function calc() {
    cina = inpCina.value;
    if (cina == "" || cina < 1) {
        cina = 21000;
        inpCina.value = 21000;
    }   
    val = select.value;
    if (val == 1) {
        kurs = 1;
        kurs1.innerHTML = '';
        cinaUah.style.display = "none"; 
    }
    if (val == 2) {
        kurs = 40.5;
        kurs1.innerHTML = '1$ = 40.50 грн';
        cinaUah.style.display = "block"; 
    }
    if (val == 3) {
        kurs = 43.2;
        kurs1.innerHTML = '1Є = 43.20 грн';
        cinaUah.style.display = "block"; 
    }
    cina1 = cina * kurs;
    sum = kilk * cina1;
 
    cinaUah.innerHTML = String(parseInt(cina1)) + " грн";
    sum1.innerHTML = String(parseInt(sum)) + " грн";

}


function clickMinus() {
    if (kilk > 0) {
        kilk = kilk - 1;
        kilk1.innerHTML = String(kilk);
        calc();
    }
}

function clickPlus() {
    if (kilk < 10) {
        kilk = kilk + 1;
        kilk1.innerHTML = String(kilk);
        calc();
    }
}


calc();

inpCina.addEventListener('change', calc);
selectCina.addEventListener('change', calc);
btnMinus.addEventListener('click', clickMinus);
btnPlus.addEventListener('click', clickPlus);
