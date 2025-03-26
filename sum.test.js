const sum = require("./sum")

test("deve somar dois numeros", ()=>{
    expect(sum(5, 3)).toBe(8);
})

