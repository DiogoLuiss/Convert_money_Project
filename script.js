const Button = document.getElementById("Button-convert")
const selector1 = document.getElementById("Select-value-First").value
const Selector_for = document.getElementById("Select-value-Second")





const  Convert_value = async () => {
   
    const Input_Value = document.getElementById('Input_value').value
    const Value_chosen = document.getElementById('Value_first')
    const Value_convert = document.getElementById("Value_Corrency")

    const API = await fetch ("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response  =>  Response.json())


    const Dolar = API.USDBRL.ask
    const Euro = API.EURBRL.ask
    const Bitcoin = API.BTCBRL.ask

if ( Selector_for.value == "US$ Dólar Americano") {
    Value_chosen.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl'
    }).format(Input_Value)

    Value_convert.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(Input_Value / Dolar)
    
}else if ( Selector_for.value == "€ Euro") {
    Value_chosen.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl'
    }).format(Input_Value)

    Value_convert.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(Input_Value / Euro)
    
}
else if (Selector_for.value == "Bitcoin") {
    Value_chosen.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl'
    }).format(Input_Value)

    Value_convert.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'BTC'
    }).format(Input_Value /Bitcoin )
    
}
else if (Selector_for.value == "R$ Real") {
    Value_chosen.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl'
    }).format(Input_Value)

    Value_convert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl'
    }).format(Input_Value)
    
   
} }

Button.addEventListener('click', Convert_value)


const Update_informations = () => {

    const Paragraph_corrency = document.getElementById("Paragraph_corrency")
    const Img_Thard = document.getElementById ("Img_Corrency")
    if (Selector_for.value == "€ Euro") {

        Paragraph_corrency.innerHTML = Selector_for.value
        Img_Thard.src = "./assets/Euro.svg"


    }
    else if (Selector_for.value == "US$ Dólar Americano") {

        Paragraph_corrency.innerHTML = Selector_for.value
        Img_Thard.src = "./assets/estados-unidos (1) 1.svg"


    }
    else if (Selector_for.value == "Bitcoin") {
        Paragraph_corrency.innerHTML = Selector_for.value
        Img_Thard.src = "./assets/Bitcoin.img"
        
    }

    else if (Selector_for.value == "R$ Real") {
        Paragraph_corrency.innerHTML = Selector_for.value
        Img_Thard.src = "./assets/brasil 2.svg"
    }
    Convert_value ()
}

Selector_for.addEventListener('change', Update_informations)
