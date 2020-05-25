describe("Consulta", function(){

    it("Nao deve cobrar nada se for um retorno", function(){
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);
        var consulta = new Consulta(guilherme, [], true, true);

        expect(consulta.preco()).toEqual(0);
    });

    it("Deve cobrar 25 por cada procediento comum", function(){
        var johnny = new Paciente("Johnny", 38, 75, 1.76);
        var consulta = new Consulta(johnny, ["proc1", "proc2"], false, false);

        expect(consulta.preco()).toEqual(50);
    });

    it("deve cobrar preco especifico dependendo do procedimento", function(){
        var joao = new Paciente("João", 1, 15, 0.86);
        var consulta = new Consulta(joao, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);

        expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
    });

    it("Não deve cobrar pela consulta de retorno", function(){
        var johnny = new Paciente("Johnny", 38, 75, 1.76);
        var consulta = new Consulta(johnny, ["proc1"], false, true);

        expect(consulta.preco()).toEqual(0);
    });

    it("Deve cobrar valor especifico por procedimento especifico.", function(){
        var johnny = new Paciente("Johnny", 38, 75, 1.76);
        var consulta = new Consulta(johnny, ["raio-x"], true, false);

        expect(consulta.preco()).toEqual(110);
    });
});