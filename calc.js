//alert("Calculator");
localStorage.setItem("flag_new", false);

document.addEventListener("DOMContentLoaded", () => {

    localStorage.setItem("first", 0);
    localStorage.setItem("flag_exists", false);
    localStorage.setItem("sign", null);

document.body.addEventListener('click', function(e){
    var b = e.target;
    if(b.tagName == 'BUTTON')
    {
        let first = localStorage.getItem("first");
        let sign = localStorage.getItem("sign");
        //document.querySelector('.calculator-display h1').innerText += b.innerHTML;
        //let display_Text = document.querySelector('.calculator-display h1').innerText;
        //console.log(localStorage.getItem("flag"));
        let flag = localStorage.getItem("flag_new");
        console.log(localStorage.getItem("first"));

        if (flag == "true")
        {
            document.querySelector('.calculator-display h1').innerText = 0;
            localStorage.setItem("flag_new", false);
        }

        if (first == "0" && (b.innerHTML == "+" ||
            b.innerHTML == "-" || b.innerHTML == "×" || b.innerHTML == "÷" ))
        {
            switch(b.innerHTML)
            {
                case '+':
                    //localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "+");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
                case '-':
                    //localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "-");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
                case '×':
                    //localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "*");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
                case '÷':
                    //localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "/");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
            }
        }

        switch(b.innerHTML)
        {
            case 'C':
                document.querySelector('.calculator-display h1').innerText = '0';
                localStorage.setItem("first", 0);
                return;
            case '=':
                //let first = localStorage.getItem("first");
                //let sign = localStorage.getItem("sign");

                if (document.querySelector('.calculator-display h1').innerText == sign ||
                    document.querySelector('.calculator-display h1').innerText == "×" ||
                    document.querySelector('.calculator-display h1').innerText == "÷")
                {
                    return ;
                }

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
                document.querySelector('.calculator-display h1').innerText = res.toFixed(2);
                localStorage.setItem("first", 0);
                localStorage.setItem("sign", "null");

                localStorage.setItem("flag_new", true);
                return ;
        }

        if ((b.innerHTML >= 0 && b.innerHTML <= 9) || b.innerHTML == '.')
        {
            if (document.querySelector('.calculator-display h1').innerText == '0')
            {
                if (b.innerHTML == '.')
                {
                    document.querySelector('.calculator-display h1').innerText = '0' + b.innerHTML;
                    localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                }
                else
                {
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    localStorage.setItem("first", b.innerHTML);
                }
            }
            else if (document.querySelector('.calculator-display h1').innerText == '+' ||
            document.querySelector('.calculator-display h1').innerText == '-' ||
            document.querySelector('.calculator-display h1').innerText == '×' ||
            document.querySelector('.calculator-display h1').innerText == '÷')
            {
                if (b.innerHTML == 0 && localStorage.getItem("sign") == "/")
                {
                    alert("Can't divide by 0!");
                    return;
                }

                document.querySelector('.calculator-display h1').innerText = b.innerHTML;
            }
            else if (localStorage.getItem("sign") == "null")
            {
                // let tempfirst = localStorage.getItem("first");
                // tempfirst += b.innerHTML;
                // localStorage.setItem("first", tempfirst);
                // localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);

                if (b.innerHTML == '.')
                {
                    let temp = document.querySelector('.calculator-display h1').innerText;

                    for (let i = 0; i < temp.length; i++)
                    {
                        if (temp[i] == b.innerHTML)
                        {
                            return ;
                        }
                    }
                }

                document.querySelector('.calculator-display h1').innerText += b.innerHTML;
                localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
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
                    //localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "+");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
                case '-':
                    //localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "-");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
                case '×':
                    //localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "*");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
                case '÷':
                    //localStorage.setItem("first", document.querySelector('.calculator-display h1').innerText);
                    localStorage.setItem("sign", "/");
                    document.querySelector('.calculator-display h1').innerText = b.innerHTML;
                    break;
            }
        }
    }
}, false);

});