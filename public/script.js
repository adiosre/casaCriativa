function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")

    }
//validação do formulário

function checkFields (event){

    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]
    
    const isEmpty = valuesToCheck.find(function(value){

        const checkIfIsString = typeof event.target[value].value === "String"
        const checkIsIsEmpty = !event.target[value].value.trim()

        if (checkIfIsString && checkIsIsEmpty){
            return true
        }
    })

   //se o formulário tiver campos vazios
    if (isEmpty) {
        event.preventDefault()
        alert("Por gentileza, preencha todos os campos")
    }
}
