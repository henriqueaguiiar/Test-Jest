const sum = require("./sum")


describe("Testes de soma", ()=>{
    test("deve somar dois numeros", ()=>{
        expect(sum(5, 3)).toBe(8);
    })

    test("deve verificar o resultado incorreto de uma soma", ()=>{
        expect(sum(5, 3)).not.toBe(7);
    })
})



// podemos subistituir a palavra test por it, tem o mesmo funcionamento.
describe("Testes de soma2", ()=>{
    it("deve somar dois numeros", ()=>{
        expect(sum(5, 3)).toBe(8);
    })

    it("deve verificar o resultado incorreto de uma soma", ()=>{
        expect(sum(5, 3)).not.toBe(7);
    })
})

