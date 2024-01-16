//alert("Calculator");
localStorage.setItem("flag", false);

document.addEventListener("DOMContentLoaded", () => {

    localStorage.setItem("first", 0);
    localStorage.setItem("second", 0);
    localStorage.setItem("sign", null);

document.body.addEventListener('click', function(e){
    var b = e.target;
    if(b.tagName == 'BUTTON')
    {

        //document.querySelector('.calculator-display h1').innerText += b.innerHTML;
        //let display_Text = document.querySelector('.calculator-display h1').innerText;

        if (localStorage.getItem("flag") == true)
        {
            document.querySelector('.calculator-display h1').innerText = 0;
            localStorage.setItem("flag", false);
        }

        switch(b.innerHTML)
        {
            case 'C':
                document.querySelector('.calculator-display h1').innerText = '0';
                break;
            case '=':
                let first = localStorage.getItem("first");
                let sign = localStorage.getItem("sign");

                switch (sign)
                {
                    case '+':
                        res = Number(first) + Number(document.querySelector('.calculator-display h1').innerText);
                        break;
                    case '-':
                        res = Number(first) - Number(document.querySelector('.calculator-display h1').innerText);
                        break;
                    case '*':
                        res = Number(first) * Number(document.querySelector('.calculator-display h1').innerText);
                        break;
                    case '/':
                        res = Number(first) / Number(document.querySelector('.calculator-display h1').innerText);
                        break;
                }
                //console.log(res);
                document.querySelector('.calculator-display h1').innerText = res;

                localStorage.setItem("flag", true);

                break;
        }

        if (b.innerHTML >= 0 && b.innerHTML <= 9)
        {
            if (document.querySelector('.calculator-display h1').innerText == 0)
            {
                document.querySelector('.calculator-display h1').innerText = b.innerHTML;
            }
            else if (document.querySelector('.calculator-display h1').innerText == '+' ||
            document.querySelector('.calculator-display h1').innerText == '-' ||
            document.querySelector('.calculator-display h1').innerText == '×' ||
            document.querySelector('.calculator-display h1').innerText == '÷')
            {
                document.querySelector('.calculator-display h1').innerText = b.innerHTML;
            }
            else
            {
                document.querySelector('.calculator-display h1').innerText += b.innerHTML;
            }
        }
        else
        {
            switch(b.innerHTML)
            {
                case '+':
                    localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "+");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
                case '-':
                    localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "-");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
                case '×':
                    localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "*");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
                case '÷':
                    localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "/");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
            }
        }
    }
}, false);

});