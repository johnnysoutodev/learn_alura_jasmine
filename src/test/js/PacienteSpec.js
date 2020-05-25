describe("Paciente", function(){

    it("Deve calcular o IMC", function(){
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

        expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
    });

    it("Deve informar quantos batimentos o paciente já teve na vida", function(){
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

        expect(guilherme.batimentos()).toEqual(1177344000);
    });

});