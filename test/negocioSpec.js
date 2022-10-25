describe('Testes unitários', function () {

    beforeEach(function(){
        spyOn(filme_neg, "inserir").and.callFake(function(fn){
            fn();
        });
    });

    describe('filme_neg', function () {
        it('Teste se o callback foi chamado', function () {
            filme_neg.inserir(null,logReturn);
            expect(logReturn).toHaveBeenCalled();
        });
        it('Teste se ocorreu uma exceção ao inserir filme nulo', function () {
            filme_neg.inserir(null,logReturn);
            expect(logReturn).toBe(erro.numero == 400);
        });
    });

    function logReturn(message) {
        console.log(message);
        return message;
      }
})