"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplicacao_1 = require("./multiplicacao");
describe("Testa a multiplicacao de dois numeros", () => {
    test("Multiplica dois numeros", () => {
        expect((0, multiplicacao_1.multiplicacao)(2, 5)).toBeCloseTo(10);
        expect((0, multiplicacao_1.multiplicacao)(2, 2.5)).toBeCloseTo(5);
    });
    test("Multiplica dois numeros vai falhar", () => {
        expect((0, multiplicacao_1.multiplicacao)(2, 5)).not.toBeCloseTo(11);
    });
});
