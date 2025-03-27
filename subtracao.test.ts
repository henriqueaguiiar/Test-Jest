import { subtracao } from "./subtracao";

describe("Teste de subtracao",()=>{
    test("Testa a subtracao de 2 numeros", ()=>{
        expect(subtracao(10, 5)).toBeCloseTo(5);
        expect(subtracao(6, 8)).toBeCloseTo(-2);
        expect(subtracao(6, 2.5)).toBeCloseTo(3.5);
    })

    test("Deve verificar uma subtracao incorreta", ()=>{
        expect(subtracao(10, 5)).not.toBeCloseTo(6);
    })
})