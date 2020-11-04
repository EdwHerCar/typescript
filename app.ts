
(function(){

const miFuncion = function( a: string) {
    return a;
}

const miFuncionf ( a: string ) => a.toUpperCase();

const sumarN =function (a:number, b:number) {
    return a+b;
}

const sumarF = (a:number, b:number) => a+b;

console.log (sumarN (5,5));
console.log (sumarN(10,10));

})();

