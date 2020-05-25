describe("Paciente", function(){

    it("Deve calcular o IMC", function(){
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

        expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
    });

    it("Deve informar quantos batimentos o paciente já teve na vida", function(){
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

        expect(guilherme.batimentos()).toEqual(1177344000);
    });

    it("Deve informar o nome e idade do paciente.", function(){
        var johnny = new Paciente("Johnny", 38, 76, 1.76);

        // expect(johnny.imprime()).toEqual("Johnny tem 38 anos.");
    });

});