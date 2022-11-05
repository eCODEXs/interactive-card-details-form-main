
let btnSend = document.getElementById('btnSend')
let nameV, ccV, expM, expY, cvcV;
    nameV = document.getElementById('holder')
    ccV = document.getElementById('cc')
    expM = document.getElementById('expM')
    expY = document.getElementById('expY')
    cvcV = document.getElementById('cvv')

    let num1, num2, num3, num4, cardHolder, expMese, expYeare, cvvInner, success;

    num1 = document.getElementById('num1')
    num2 = document.getElementById('num2')
    num3 = document.getElementById('num3')
    num4 = document.getElementById('num4')
    cardHolder = document.getElementById('cardHolder')
    expMese = document.getElementById('expMese')
    expYeare = document.getElementById('expYeare')
    cvvInner = document.getElementById('cvvInner')


    success = document.getElementById('success')
    payment = document.getElementById('payment')

btnSend.addEventListener("click", addCard)
function addCard() {
    if (nameV.value.length < 1 || nameV.value.length === '') {
        nameV.style.borderColor = 'red'
        
    } else {
        nameV.style.borderColor = '#20c997'
        if (ccV.value.length < 1 || ccV.value.length === '') {
            ccV.style.borderColor = 'red'
        } else {
            ccV.style.borderColor = '#20c997'
                expYeare.style.borderColor = '#20c997'
                expMese.style.borderColor = '#20c997'
                if (cvcV.value.length < 1 || cvcV.value.length === '') {
                    cvcV.style.borderColor = 'red'
                } else {
                    cvcV.style.borderColor = '#20c997'
                    setTimeout(() => {
                        success.style.display = 'flex';
                        payment.style.display = 'none';
                    }, 500);
                }
            }

        }
    }
    



function cardNumbers() {
    var card1 = ccV.value.slice(0,4)
    var card2 = ccV.value.slice(4,8)
    var card3 = ccV.value.slice(8,12)
    var card4 = ccV.value.slice(12,16)

    num1.innerHTML = card1
    num2.innerHTML = card2
    num3.innerHTML = card3
    num4.innerHTML = card4
}

nameV.oninput = cardName
function cardName() {
    cardHolder.innerHTML = nameV.value
}

expM.oninput = expMonth
function expMonth(params) {
    expMese.innerHTML = expM.value
}

expY.oninput = expYeay
function expYeay(params) {
    expYeare.innerHTML = expY.value
}

cvcV.oninput = cvvv
function cvvv(params) {
    cvvInner.innerHTML = cvcV.value
}


