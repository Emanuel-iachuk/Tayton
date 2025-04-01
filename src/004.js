let invoice = {
    nome:"Emanuel iachuk",
    anos:20,
    compras: {
        0:["monitor", 899.99],
        1:["Teclado mecanico", 129.99]
    }
}

function generateinvoice(invoice){
    console.log(`O comprador é: ${invoice.nome}`)
    console.log(`Tem ${invoice.anos} de idade`)

    for(let index in invoice.compras){
        let [comprasName, comprasPrime] = invoice.compras[index]
        console.log(`-${comprasName} R$ ${comprasPrime}`)

    }
}

generateinvoice(invoice)
calcularXp1()
calcularXp2()
calcularXp3()