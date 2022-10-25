describe('Testes unitários', function () {
    var filme_neg = require('../../negocio/filme_neg');
    var user_neg = require('../../negocio/user_neg');

    describe('filme_neg', function () {
        it('Teste se ocorreu uma exceção ao inserir filme nulo', function () {
            filme_neg.inserir(null,logReturn);
            expect(logReturn).toBeNaN;
        });

        it('Teste se ocorreu uma exceção ao buscar um filme com id nulo', function () {
            filme_neg.buscarPorId(null,logReturn);
            expect(logReturn).toBeNaN;
        });

        it('Teste se ocorreu uma exceção ao atualizar um id e filme nulos', function () {
            filme_neg.atualizar(null,null,logReturn);
            expect(logReturn).toBeNaN;
        });

        it('Teste se ocorreu uma exceção ao atualizar um filme nulo', function () {
            filme_neg.atualizar(15,null,logReturn);
            expect(logReturn).toBeNaN;
        });
    });

    describe('user_neg', function () {
        it('Teste se ocorreu uma exceção ao inserir usuario nulo', function () {
            user_neg.inserir(null,logReturn);
            expect(logReturn).toBeNaN;
        });

        it('Teste se ocorreu uma exceção ao buscar um usuario com id nulo', function () {
            user_neg.buscarPorId(null,logReturn);
            expect(logReturn).toBeNaN;
        });

    });

    

    function logReturn(message) {
        console.log(message);
        return message;
      }
})