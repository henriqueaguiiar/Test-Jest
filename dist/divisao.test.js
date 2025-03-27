"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const divisao_1 = require("./divisao");
describe("Testa a divisao de dois numeros", () => {
    test("Divisao de dois numeros", () => {
        expect((0, divisao_1.divisao)(10, 2)).toBeCloseTo(5);
        expect((0, divisao_1.divisao)(7, 2)).toBeCloseTo(3.5);
    });
    test("Divisao de dois numeros for incorreta", () => {
        expect((0, divisao_1.divisao)(10, 2)).not.toBeCloseTo(6);
    });
});
