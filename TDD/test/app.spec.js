/*
1- Si número es divisible por 3
2- Si número es divisible por 5
3- Si número es divisible por 3 y 5
4- Si número no es divisible por 3 ni por 5

- Escribir enunciados de cada caso
- En base a cada enunciado (it) desarrollar esa parte en la función
- Probar arcaicamente en chrome
- Correr el test
*/



describe('Función dividir', () => {
  it('Si el número es divisible entre 3, retornar Code', () => {
    assert.equal(window.dividir(21), 'Code');
    assert.equal(window.dividir(18), 'Code');
    assert.equal(window.dividir(9), 'Code');
  });

  it('Si el número es divisible entre 5, retornar Hard', () => {
    assert.equal(window.dividir(25), 'Hard');
  });

  it('Si el número es divisible entre 3 y 5, retornar CodeHard', () => {
    assert.equal(window.dividir(15), 'CodeHard');
  });

  it('Si el número no es divisible entre 3 ni entre 5, retornar "Error, súper pavo"', () => {
    assert.equal(window.dividir(13), "Error, súper pavo");
  })
})