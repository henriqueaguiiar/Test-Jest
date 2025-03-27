import { divisao } from "./divisao";

describe("Testa a divisao de dois numeros", ()=>{
    test("Divisao de dois numeros", ()=>{
        expect(divisao(10, 2)).toBeCloseTo(5)
        expect(divisao(7, 2)).toBeCloseTo(3.5)
    })

    test("Divisao de dois numeros for incorreta", ()=>{
        expect(divisao(10, 2)).not.toBeCloseTo(6)
    })
})