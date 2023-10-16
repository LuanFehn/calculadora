
const soma = (req,res) => {
const {num1, num2} = req.query;
const numero1 = Number(num1);
const numero2 = Number(num2);
if (Number(num1)&& Number(num2)){
    const resultado = numero1 + numero2
    return res.json(`O resultado da soma é ${resultado}`);
}
 return res.json({mensagem: "deve haver 2 numeros!!!"})

};

const subtacao = (req,res) => {
    const {num1, num2} = req.query;
    const numero1 = Number(num1);
    const numero2 = Number(num2);
    if (Number(num1)&& Number(num2)){
        const resultado = numero1 - numero2
        return res.json(`O resultado da subtração é ${resultado}`);
    }
     return res.json({mensagem: "deve haver 2 numeros!!!"})
    
    };
    
    

    const divisao = (req,res) => {
        const {num1, num2} = req.query;
        const numero1 = Number(num1);
        const numero2 = Number(num2);
        if (Number(num1)&& Number(num2)){
            const resultado = numero1 / numero2
            return res.json(`O resultado da divisão é ${resultado}`);
        }
         return res.json({mensagem: "deve haver 2 numeros!!!"})
        
        };

        const multiplicacao = (req,res) => {
            const {num1, num2} = req.query;
            const numero1 = Number(num1);
            const numero2 = Number(num2);
            if (Number(num1)&& Number(num2)){
                const resultado = numero1 * numero2
                return res.json(`O resultado da multiplicação é ${resultado}`);
            }
             return res.json({mensagem: "deve haver 2 numeros!!!"})
            
            };









module.exports = {
    soma,
    subtacao,
    divisao,
    multiplicacao
};