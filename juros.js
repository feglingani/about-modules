const jurosSimples = (C, i, t) => C * i / 100 * t;

const montanteSimples = ({ jurosSimples }) => (C, i, t) => C + jurosSimples(C, i, t);

const montanteCompostos = (C, i, t) => C * Math.pow((1 + i / 100), t);

const jurosCompostos = ({ montanteCompostos }) => (C, i, t) => montanteCompostos(C, i, t) - C;

module.exports = {
    jurosSimples,
    montanteSimples: ({ jurosSimples }),
    montanteCompostos,
    jurosCompostos: ({ montanteCompostos }),
    pure: {
        montanteSimples,
        jurosCompostos
    }
}