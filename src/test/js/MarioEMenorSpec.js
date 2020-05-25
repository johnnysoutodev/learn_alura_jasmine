describe("MaiorEMenor", function(){
    it("Deve entender numeros em ordem nao sequencial", function(){

        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("Deve entender numeros crescente", function(){

        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,6,7,8]);

        expect(algoritmo.pegaMenor()).toEqual(5);
        expect(algoritmo.pegaMaior()).toEqual(8);
    });

    it("Deve entender numeros decrescente", function(){

        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,4,3,2,1]);

        expect(algoritmo.pegaMaior()).toEqual(5);
        expect(algoritmo.pegaMenor()).toEqual(1);
    });
});