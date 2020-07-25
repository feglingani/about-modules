const juros = require('./juros');

test('jurosSimples', ()=> {
    const C = 100;
    const i = 10;
    const t = 1;
    const jurosEsperados = 10;
    const jurosCalc = juros.jurosSimples(C,i,t);

    expect(jurosCalc).toBe(jurosEsperados); 
});

test('montanteSimples', ()=> {
    const C = 100;
    const i = 10;
    const t = 1;
    const montanteEsperado = 110;
    //little prank
    const jurosSimples = jest.fn();
    //mocking before apply function
    jurosSimples.mockImplementation(() => 10);

    const montanteSimples = juros.pure.montanteSimples({ jurosSimples });
    const montante = montanteSimples(C, i, t);
    expect(jurosSimples.mock.calls[0]).toEqual([C, i, t]);
    expect(montante).toBe(montanteEsperado);
});

test('montanteCompostos', ()=> {
    const C = 1000;
    const i = 10;
    const t = 1;
    const montanteEsperado = 1100;
    const montante = juros.montanteCompostos(C, i, t);
    expect(montante).toBe(montanteEsperado);
});

test('jurosCompostos', ()=> {
    const C = 1000;
    const i = 10;
    const t = 1;
    const jurosEsperado = 100;
    //little prank
    const montanteCompostos = jest.fn();
    //mocking before apply function
    montanteCompostos.mockImplementation(() => 1100);

    const jurosCompostos = juros.pure.jurosCompostos({ montanteCompostos });
    const jurosCalc = jurosCompostos(C, i, t);
    
    expect(montanteCompostos.mock.calls[0]).toEqual([C, i, t]);
    expect(jurosCalc).toBe(jurosEsperado);
});