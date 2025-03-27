"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subtracao_1 = require("./subtracao");
describe("Teste de subtracao", () => {
    test("Testa a subtracao de 2 numeros", () => {
        expect((0, subtracao_1.subtracao)(10, 5)).toBeCloseTo(5);
        expect((0, subtracao_1.subtracao)(6, 8)).toBeCloseTo(-2);
        expect((0, subtracao_1.subtracao)(6, 2.5)).toBeCloseTo(3.5);
    });
    test("Deve verificar uma subtracao incorreta", () => {
        expect((0, subtracao_1.subtracao)(10, 5)).not.toBeCloseTo(6);
    });
});
