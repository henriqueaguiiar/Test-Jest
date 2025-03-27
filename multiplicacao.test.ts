import { multiplicacao } from "./multiplicacao";

describe("Testa a multiplicacao de dois numeros", ()=>{
    test("Multiplica dois numeros", ()=>{
        expect(multiplicacao(2, 5)).toBeCloseTo(10);
        expect(multiplicacao(2, 2.5)).toBeCloseTo(5);
    })

    test("Multiplica dois numeros vai falhar", ()=>{
        expect(multiplicacao(2, 5)).not.toBeCloseTo(11);
    })
})