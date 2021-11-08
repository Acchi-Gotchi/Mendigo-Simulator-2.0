// vale lembrar que se tiver uma funcao e tu digitar let com o mesmo nome de uma let ou var que tiver por fora, ele sera uma nova let completamente diferente.

//dentro do objeto n precisa digitar function antes da function

// resources section
const multiplicadoresPerma = {
  dormir: 2.27,
  leptospirose: 0.23,
  pneumonia: 0.68,
  doente: 0.68,
  ferimento: 0.82,
  sujeira: 0.45,
  casa: 5.5,
  streamer: 2.27,
  politico: 5.5,
  trafico: 7.5
}
const multiplicadoresPermaAleatoriedades = []
const itens = [
  {
    nome: 'Placa',
    custo: 19.9,
    multiplicador: 2.27,
    comentario: 'Vende-se',
    id: 0
  },
  {
    nome: 'Madeira',
    custo: 49.99,
    multiplicador: 1.36,
    comentario: 'Um grande pedaço de pau',
    id: 1
  },
  {
    nome: 'Sucata',
    custo: 79.9,
    multiplicador: 1.36,
    comentario: 'Um grande pedaço de lixo',
    id: 2
  },
  {
    nome: 'Saco de lixo',
    custo: 85.5,
    multiplicador: 1.82,
    comentario: 'Pra reciclar, né',
    id: 3
  },
  {
    nome: 'Curso de vender curso',
    custo: 89.99,
    multiplicador: 2.27,
    comentario: 'Sério que tem isso pra vender?',
    id: 4
  },
  {
    nome: 'Internet Wi-fi',
    custo: 200,
    multiplicador: 2.73,
    comentario: 'Cadê a segurança?',
    id: 5
  },
  {
    nome: 'Carrinho de pipoca',
    custo: 400,
    multiplicador: 2.73,
    comentario: 'Aproveita já faz crepe, algodão doce...',
    id: 6
  },
  {
    nome: 'Terno-Gravata',
    custo: 850,
    multiplicador: 3.18,
    comentario: 'Chique.',
    id: 7
  },
  {
    nome: 'PC',
    custo: 1200,
    multiplicador: 5.45,
    comentario: 'Piratear, piratear, pra quê mais seria?',
    id: 8
  },
  {
    nome: 'Moto',
    custo: 11000,
    multiplicador: 6.8,
    comentario: 'Cuidado com o grau',
    id: 9
  },
  {
    nome: 'Garagem',
    custo: 13500,
    multiplicador: 9.09,
    comentario: 'Flanela 2.0',
    id: 10
  },
  { nome: 'Panfletos', multiplicador: 1.82, custo: 0, id: 11 },
  {
    nome: 'Estoque de água mineral gelada',
    custo: 0,
    multiplicador: 2.73,
    id: 12
  },
  {
    nome: 'Ingressos para partidas de futebol',
    custo: 419.99,
    multiplicador: 9.09,
    id: 13
  },
  { nome: 'Arma de Brinquedo', custo: 0, id: 14 },
  { nome: 'Passagem', custo: 8000, id: 15 },
  {
    nome: 'Hospital',
    custo: 9500,
    id: 16,
    comentario: `Você não tem plano de saúde, cuidado!`
  },
  { nome: 'Violão', multiplicador: 2.27, id: 17 },
  { nome: 'Impressora', multiplicador: 5.45, id: 18 },
  {
    nome: 'Casa',
    custo: 20000,
    comentario: `Conquistar a sua dignidade`,
    id: 19
  },
  {
    nome: 'Carro Focus',
    custo: 25000,
    comentario: `melhor que o Celta`,
    id: 20
  }
]
const seusItens = []
const seusMultiplicadores = []
let dinheiro = 0
const dias = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
]

let cliquesTotais = 0
let cliquesDiarios = 6
let diaSelecionado = 1
let diasTotais = 0
let dormirLimite = 0
let horasSemDormir = 0
let lojaItens = []

const mecanicas = {
  dayNightCycle: function () {
    if (cliquesDiarios >= 19 || cliquesDiarios < 6) {
      document.body.classList.add('noite')
    } else if (cliquesDiarios >= 6 || cliquesDiarios < 19) {
      document.body.classList.remove('noite')
    }
    if (cliquesDiarios >= 16 && cliquesDiarios < 19) {
      document.body.classList.add('tarde')
    } else if (cliquesDiarios < 16 || cliquesDiarios >= 19) {
      document.body.classList.remove('tarde')
    }
  },
  vinteQuatro: function () {
    if (cliquesDiarios >= 23) {
      cliquesDiarios -= 24
    }
    if (cliquesDiarios > -1 && cliquesDiarios < 10) {
      diaSelecionado += 1
      diasTotais += 1
      dormirLimite = 0
    }
    if (diaSelecionado > 6) {
      diaSelecionado = 0
    } else if (cliquesDiarios < 0) {
      cliquesDiarios = 0
    }
    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
    diasTela.innerHTML = `${dias[diaSelecionado]}`
  },
  vinteQuatroMendigar: function () {
    if (cliquesDiarios > 23) {
      cliquesDiarios -= 24
    }
    if (cliquesDiarios <= 0) {
      diaSelecionado += 1
      diasTotais += 1
      dormirLimite = 0
    }
    if (diaSelecionado > 6) {
      diaSelecionado = 0
    } else if (cliquesDiarios < 0) {
      cliquesDiarios = 0
    }
    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
    diasTela.innerHTML = `${dias[diaSelecionado]}`
  },
  dormirMultiplicadorHoras: function () {
    dormirMultiplicadorHoras += 1
    if (dormirIsTrue == true && dormirMultiplicadorHoras >= 5) {
      seusMultiplicadores.splice(
        seusMultiplicadores.indexOf(multiplicadoresPerma.dormir),
        2
      )
      multiplicadoresPermaAleatoriedades.splice(
        seusMultiplicadores.indexOf(multiplicadoresPerma.dormir),
        2
      )
      dormirIsTrue = false
    }
  },
  // assaltadoAcordadoIndicador: function () {
  //   if (
  //     seusItens.includes(itens[15]) == true ||
  //     seusItens.includes(itens[16]) == true ||
  //     seusItens.includes(itens[19]) == true ||
  //     dormirIsTrue == true
  //   ) {
  //   } else {
  //     if (horasSemDormir == 14 && dormirIsTrue == false) {
  //       quantoEuTenho.classList.add('perigo')
  //       quantoCliquei.classList.add('perigo')
  //       multiplicadoresPermaAleatoriedades.push(0.3)
  //     } else if (horasSemDormir == 0 || dormirIsTrue == true) {
  //       quantoEuTenho.classList.remove('perigo')
  //       quantoCliquei.classList.remove('perigo')
  //       multiplicadoresPermaAleatoriedades.splice(
  //         multiplicadoresPermaAleatoriedades.indexOf(0.3),
  //         1
  //       )
  //       console.log(multiplicadoresPermaAleatoriedades)
  //     }
  //   }
  // },
  //\\arrumar a partir daqui
  horaPerigosa: function () {
    //Segunda
    function segunda() {
      if (
        (cliquesDiarios == 22 &&
          dormirIsTrue == false &&
          diaSelecionado == 1) ||
        (cliquesDiarios == 22 && dormirIsTrue == false && diaSelecionado == 0)
      ) {
        alert(
          `Aviso: A partir desse horário, maloqueiros andam pela rua, cuidado com os chinelões`
        )
      }
      if (
        (cliquesDiarios > 22 && dormirIsTrue == false && diaSelecionado == 0) ||
        (cliquesDiarios < 6 && dormirIsTrue == false && diaSelecionado == 1) ||
        (cliquesDiarios > 22 && dormirIsTrue == false && diaSelecionado == 1) ||
        (cliquesDiarios < 6 && dormirIsTrue == false && diaSelecionado == 2)
      ) {
        quantoEuTenho.classList.add('perigo')
        quantoCliquei.classList.add('perigo')
      } else if (cliquesDiarios > 5 && diaSelecionado == 2) {
        quantoEuTenho.classList.remove('perigo')
        quantoCliquei.classList.remove('perigo')
      }
      // testar ser roubado
      if (
        (cliquesDiarios > 21 && diaSelecionado == 1) ||
        (cliquesDiarios < 6 && diaSelecionado == 2) ||
        (cliquesDiarios < 6 && diaSelecionado == 1)
      ) {
        let valor = Math.floor(Math.random() * 100.1 * 1.4)
        let valorComparado = Math.ceil(Math.random() * 100.1)
        let dinheiroRoubado = parseFloat(
          (dinheiro * (Math.random() * (0.4 - 0.1) + 0.1)).toFixed(2)
        )
        if (dormirIsTrue == false && valor <= valorComparado) {
          if (confirm(`Você está sendo assaltado, deseja reagir?`)) {
            valor = Math.floor(Math.random() * 100.1 * 2.2)
            valorComparado = Math.ceil(Math.random() * 100.1)
            if (valor > 69) {
              alert(
                `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
              )
              console.log(valor, valorComparado)
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.3 - 0.15) + 0.15)).toFixed(2)
              )

              dinheiro -= dinheiroRoubado
              dinheiro = parseFloat(dinheiro.toFixed(2))
              quantoEuTenho.innerHTML = `${dinheiro} R$`
              quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
              quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            } else if (valor < 25) {
              alert(
                `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
              )
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.25 - 0.1) + 0.1)).toFixed(2)
              )
              dinheiro += dinheiroRoubado * 1.1
              dinheiro = parseFloat(dinheiro.toFixed(2))
            } else if (valor < 70 && valor > 24) {
              if (confirm(`Lascou! Puxaram uma arma, ainda quer reagir?`)) {
                valor = Math.ceil(Math.random() * 100.1 * 0.9)
                valorComparado = Math.ceil(Math.random() * 100.1)
                console.log(valor, valorComparado)
                if (valor > 70 && valor < 79) {
                  alert(
                    `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.25 - 0.1) + 0.1)).toFixed(2)
                  )
                  dinheiro += dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 39 && valor < 69) {
                  alert(
                    `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.4 - 0.15) + 0.15)).toFixed(
                      2
                    )
                  )
                  dinheiro -= dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 80) {
                  alert(
                    `Ufa.. Era só uma ${itens[14].nome}. Ela não possui multiplicador, mas pode ser útil. O bandido bundão deixou cair quando tu ameaçou ele com suas habilidades de combate da favela.`
                  )
                  alert(
                    `Você recuperou seu dinheiro com juros, impostos e correção monetária`
                  )
                  console.log(valor, valorComparado)
                  dinheiro += dinheiroRoubado * 1.3
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                  console.log(valor, valorComparado)
                  if (seusItens.includes(itens[14]) == false) {
                    seusItens.push(itens[14])
                  } else {
                    alert(
                      `Você já tem uma ${itens[14].nome}. Você a dá para um amigo mendigo`
                    )
                  }
                } else if (valor < 40) {
                  valor = Math.ceil(Math.random() * 100.1)
                  valorComparado = Math.ceil(Math.random() * 100.1)
                  if (
                    valor > valorComparado ||
                    seusItens.includes[itens[16]] == true
                  ) {
                    alert(
                      `Infelizmente nosso herói foi ferido, você precisa de um ${itens[16].nome}, se você não o tiver em seus itens, significa que não tem plano de saúde, e morrerá dependendo do SUS!`
                    )
                    alert(
                      `Ou você pode tentar que alguém te salve. Você ainda pode tomar mais um assalto desses.`
                    )
                    dinheiroRoubado = parseFloat(
                      (dinheiro * (Math.random() * (0.6 - 0.2) + 0.2)).toFixed(
                        2
                      )
                    )
                    dinheiro -= dinheiroRoubado
                    dinheiro = parseFloat(dinheiro.toFixed(2))
                    quantoEuTenho.innerHTML = `${dinheiro} R$`
                    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                    alert(`Lhe roubaram R$ ${dinheiroRoubado}`)
                    //
                    alert(
                      `Agora você tem um multiplicador negativo de Ferimento, você precisa tomar alguma medicação, comprar ${itens[16].nome}, ou pegar curativos`
                    )
                    if (seusMultiplicadores.includes(0.82) == false) {
                      seusMultiplicadores.push(multiplicadoresPerma.ferimento)
                    } else {
                      alert(
                        `Você já possui um multiplicador de Ferimento ativo, então não será adicionado mais nenhum`
                      )
                    }
                  } else {
                    GameOverAssalto()
                  }
                }
              } else {
                dinheiro -= dinheiroRoubado
                dinheiro = parseFloat(dinheiro.toFixed(2))
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                alert(
                  `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
                )
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                console.log(valor, valorComparado)
              }
            }
          } else {
            dinheiro -= dinheiroRoubado
            dinheiro = parseFloat(dinheiro.toFixed(2))
            alert(
              `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
            )
            quantoEuTenho.innerHTML = `${dinheiro} R$`
            quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
            quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            console.log(valor, valorComparado)
          }
        }
      }
    }
    function terca() {
      {
        if (
          cliquesDiarios == 23 &&
          dormirIsTrue == false &&
          diaSelecionado == 2
        ) {
          alert(
            `Aviso: A partir desse horário, maloqueiros andam pela rua, cuidado com os chinelões`
          )
        }
        if (
          (cliquesDiarios > 22 &&
            dormirIsTrue == false &&
            diaSelecionado == 2) ||
          (cliquesDiarios < 5 && dormirIsTrue == false && diaSelecionado == 3)
        ) {
          quantoEuTenho.classList.add('perigo')
          quantoCliquei.classList.add('perigo')
        } else if (cliquesDiarios > 4 && diaSelecionado == 3) {
          quantoEuTenho.classList.remove('perigo')
          quantoCliquei.classList.remove('perigo')
        }
        // testar ser roubado
        if (
          (cliquesDiarios > 23 && diaSelecionado == 2) ||
          (cliquesDiarios < 5 && diaSelecionado == 3)
        ) {
          let valor = Math.floor(Math.random() * 100.1 * 2.2)
          let valorComparado = Math.ceil(Math.random() * 100.1)
          let dinheiroRoubado = parseFloat(
            (dinheiro * (Math.random() * (0.3 - 0.1) + 0.1)).toFixed(2)
          )
          if (dormirIsTrue == false && valor <= valorComparado) {
            if (confirm(`Você está sendo assaltado, deseja reagir?`)) {
              valor = Math.floor(Math.random() * 100.1 * 2.2)
              valorComparado = Math.ceil(Math.random() * 100.1)
              if (valor > 69) {
                alert(
                  `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
                )
                console.log(valor, valorComparado)
                dinheiroRoubado = parseFloat(
                  (dinheiro * (Math.random() * (0.25 - 0.9) + 0.9)).toFixed(2)
                )

                dinheiro -= dinheiroRoubado
                dinheiro = parseFloat(dinheiro.toFixed(2))
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
              } else if (valor < 25) {
                alert(
                  `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
                )
                dinheiroRoubado = parseFloat(
                  (dinheiro * (Math.random() * (0.25 - 0.1) + 0.1)).toFixed(2)
                )
                dinheiro += dinheiroRoubado * 1.3
                dinheiro = parseFloat(dinheiro.toFixed(2))
              } else if (valor < 70 && valor > 24) {
                if (confirm(`Lascou! Puxaram uma arma, ainda quer reagir?`)) {
                  valor = Math.floor(Math.random() * 100.1 * 0.8)
                  valorComparado = Math.ceil(Math.random() * 100.1)
                  console.log(valor, valorComparado)
                  if (valor > 70 && valor < 79) {
                    alert(
                      `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
                    )
                    dinheiroRoubado = parseFloat(
                      (dinheiro * (Math.random() * (0.25 - 0.4) + 0.1)).toFixed(
                        2
                      )
                    )
                    dinheiro += dinheiroRoubado
                    dinheiro = parseFloat(dinheiro.toFixed(2))
                    quantoEuTenho.innerHTML = `${dinheiro} R$`
                    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                  } else if (valor > 39 && valor < 69) {
                    alert(
                      `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
                    )
                    dinheiroRoubado = parseFloat(
                      (
                        dinheiro *
                        (Math.random() * (0.4 - 0.15) + 0.15)
                      ).toFixed(2)
                    )
                    dinheiro -= dinheiroRoubado
                    dinheiro = parseFloat(dinheiro.toFixed(2))
                    quantoEuTenho.innerHTML = `${dinheiro} R$`
                    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                  } else if (valor > 80) {
                    alert(
                      `Ufa.. Era só uma ${itens[14].nome}. Ela não possui multiplicador, mas pode ser útil. O bandido bundão deixou cair quando tu ameaçou ele com suas habilidades de combate da favela.`
                    )
                    alert(
                      `Você recuperou seu dinheiro com juros, impostos e correção monetária`
                    )
                    console.log(valor, valorComparado)
                    dinheiro += dinheiroRoubado * 1.3
                    dinheiro = parseFloat(dinheiro.toFixed(2))
                    quantoEuTenho.innerHTML = `${dinheiro} R$`
                    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                    console.log(valor, valorComparado)
                    if (seusItens.includes(itens[14]) == false) {
                      seusItens.push(itens[14])
                    } else {
                      alert(
                        `Você já tem uma ${itens[14].nome}. Você a dá para um amigo mendigo`
                      )
                    }
                  } else if (valor < 40) {
                    valor = Math.ceil(Math.random() * 100.1 * 1.6 + 1)
                    valorComparado = Math.ceil(Math.random() * 100.1)
                    if (
                      valor > valorComparado ||
                      seusItens.includes[itens[16]] == true
                    ) {
                      alert(
                        `Infelizmente nosso herói foi ferido, você precisa de um ${itens[16].nome}, se você não o tiver em seus itens, significa que não tem plano de saúde, e morrerá dependendo do SUS!`
                      )
                      alert(
                        `Ou você pode tentar que alguém te salve. Você ainda pode tomar mais um assalto desses.`
                      )
                      dinheiroRoubado = parseFloat(
                        (
                          dinheiro *
                          (Math.random() * (0.6 - 0.2) + 0.2)
                        ).toFixed(2)
                      )
                      dinheiro -= dinheiroRoubado
                      dinheiro = parseFloat(dinheiro.toFixed(2))
                      quantoEuTenho.innerHTML = `${dinheiro} R$`
                      quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                      quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                      alert(`Lhe roubaram R$ ${dinheiroRoubado}`)
                      //
                      alert(
                        `Agora você tem um multiplicador negativo de Ferimento, você precisa tomar alguma medicação, comprar ${itens[16].nome}, ou pegar curativos`
                      )
                      if (seusMultiplicadores.includes(0.82) == false) {
                        seusMultiplicadores.push(multiplicadoresPerma.ferimento)
                      } else {
                        alert(
                          `Você já possui um multiplicador de Ferimento ativo, então não será adicionado mais nenhum`
                        )
                      }
                    } else {
                      GameOverAssalto()
                    }
                  }
                } else {
                  dinheiro -= dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  alert(
                    `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
                  )
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                  console.log(valor, valorComparado)
                }
              }
            } else {
              dinheiro -= dinheiroRoubado
              dinheiro = parseFloat(dinheiro.toFixed(2))
              alert(
                `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
              )
              quantoEuTenho.innerHTML = `${dinheiro} R$`
              quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
              quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
              console.log(valor, valorComparado)
            }
          }
        }
      }
    }
    function quarta() {
      if (
        cliquesDiarios == 23 &&
        dormirIsTrue == false &&
        diaSelecionado == 3
      ) {
        alert(
          `Aviso: A partir desse horário, maloqueiros andam pela rua, cuidado com os chinelões`
        )
      }
      if (
        (cliquesDiarios > 22 && dormirIsTrue == false && diaSelecionado == 3) ||
        (cliquesDiarios < 4 && dormirIsTrue == false && diaSelecionado == 4)
      ) {
        quantoEuTenho.classList.add('perigo')
        quantoCliquei.classList.add('perigo')
      } else if (cliquesDiarios > 3 && diaSelecionado == 4) {
        quantoEuTenho.classList.remove('perigo')
        quantoCliquei.classList.remove('perigo')
      }
      // testar ser roubado
      if (
        (cliquesDiarios > 22 && diaSelecionado == 3) ||
        (cliquesDiarios < 6 && diaSelecionado == 4)
      ) {
        let valor = Math.floor(Math.random() * 100.1 * 1.8)
        let valorComparado = Math.ceil(Math.random() * 100.1)
        let dinheiroRoubado = parseFloat(
          (dinheiro * (Math.random() * (0.35 - 0.11) + 0.11)).toFixed(2)
        )
        if (dormirIsTrue == false && valor <= valorComparado) {
          if (confirm(`Você está sendo assaltado, deseja reagir?`)) {
            valor = Math.floor(Math.random() * 100.1 * 2)
            valorComparado = Math.ceil(Math.random() * 100.1)
            if (valor > 69) {
              alert(
                `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
              )
              console.log(valor, valorComparado)
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.25 - 0.15) + 0.15)).toFixed(2)
              )

              dinheiro -= dinheiroRoubado
              dinheiro = parseFloat(dinheiro.toFixed(2))
              quantoEuTenho.innerHTML = `${dinheiro} R$`
              quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
              quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            } else if (valor < 25) {
              alert(
                `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
              )
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.45 - 0.7) + 0.7)).toFixed(2)
              )
              dinheiro += dinheiroRoubado * 1.4
              dinheiro = parseFloat(dinheiro.toFixed(2))
            } else if (valor < 70 && valor > 24) {
              if (confirm(`Lascou! Puxaram uma arma, ainda quer reagir?`)) {
                valor = Math.ceil(Math.random() * 100.1)
                valorComparado = Math.ceil(Math.random() * 100.1)
                console.log(valor, valorComparado)
                if (valor > 70 && valor < 79) {
                  alert(
                    `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.3 - 0.08) + 0.08)).toFixed(
                      2
                    )
                  )
                  dinheiro += dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 39 && valor < 69) {
                  alert(
                    `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.4 - 0.2) + 0.2)).toFixed(2)
                  )
                  dinheiro -= dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 80) {
                  alert(
                    `Ufa.. Era só uma ${itens[14].nome}. Ela não possui multiplicador, mas pode ser útil. O bandido bundão deixou cair quando tu ameaçou ele com suas habilidades de combate da favela.`
                  )
                  alert(
                    `Você recuperou seu dinheiro com juros, impostos e correção monetária`
                  )
                  console.log(valor, valorComparado)
                  dinheiro += dinheiroRoubado * 2
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                  console.log(valor, valorComparado)
                  if (seusItens.includes(itens[14]) == false) {
                    seusItens.push(itens[14])
                  } else {
                    alert(
                      `Você já tem uma ${itens[14].nome}. Você a dá para um amigo mendigo`
                    )
                  }
                } else if (valor < 40) {
                  valor = Math.ceil(Math.random() * 100.1)
                  valorComparado = Math.ceil(Math.random() * 100.1)
                  if (
                    valor > valorComparado ||
                    seusItens.includes[itens[16]] == true
                  ) {
                    alert(
                      `Infelizmente nosso herói foi ferido, você precisa de um ${itens[16].nome}, se você não o tiver em seus itens, significa que não tem plano de saúde, e morrerá dependendo do SUS!`
                    )
                    alert(
                      `Ou você pode tentar que alguém te salve. Você ainda pode tomar mais um assalto desses.`
                    )
                    dinheiroRoubado = parseFloat(
                      (dinheiro * (Math.random() * (0.6 - 0.4) + 0.4)).toFixed(
                        2
                      )
                    )
                    dinheiro -= dinheiroRoubado
                    dinheiro = parseFloat(dinheiro.toFixed(2))
                    quantoEuTenho.innerHTML = `${dinheiro} R$`
                    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                    alert(`Lhe roubaram R$ ${dinheiroRoubado}`)
                    //
                    alert(
                      `Agora você tem um multiplicador negativo de Ferimento, você precisa tomar alguma medicação, comprar ${itens[16].nome}, ou pegar curativos`
                    )
                    if (seusMultiplicadores.includes(0.82) == false) {
                      seusMultiplicadores.push(multiplicadoresPerma.ferimento)
                    } else {
                      alert(
                        `Você já possui um multiplicador de Ferimento ativo, então não será adicionado mais nenhum`
                      )
                    }
                  } else {
                    GameOverAssalto()
                  }
                }
              } else {
                dinheiro -= dinheiroRoubado
                dinheiro = parseFloat(dinheiro.toFixed(2))
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                alert(
                  `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
                )
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                console.log(valor, valorComparado)
              }
            }
          } else {
            dinheiro -= dinheiroRoubado
            dinheiro = parseFloat(dinheiro.toFixed(2))
            alert(
              `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
            )
            quantoEuTenho.innerHTML = `${dinheiro} R$`
            quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
            quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            console.log(valor, valorComparado)
          }
        }
      }
    }
    function quinta() {
      if (
        cliquesDiarios == 21 &&
        dormirIsTrue == false &&
        diaSelecionado == 4
      ) {
        alert(
          `Aviso: A partir desse horário, maloqueiros andam pela rua, cuidado com os chinelões`
        )
      }
      if (
        (cliquesDiarios > 21 && dormirIsTrue == false && diaSelecionado == 4) ||
        (cliquesDiarios < 2 && dormirIsTrue == false && diaSelecionado == 5)
      ) {
        quantoEuTenho.classList.add('perigo')
        quantoCliquei.classList.add('perigo')
      } else if (cliquesDiarios > 1 && diaSelecionado == 5) {
        quantoEuTenho.classList.remove('perigo')
        quantoCliquei.classList.remove('perigo')
      }
      // testar ser roubado
      if (
        (cliquesDiarios > 20 && diaSelecionado == 4) ||
        (cliquesDiarios < 1 && diaSelecionado == 5)
      ) {
        let valor = Math.floor(Math.random() * 100.1 * 0.8)
        let valorComparado = Math.ceil(Math.random() * 100.1)
        let dinheiroRoubado = parseFloat(
          (dinheiro * (Math.random() * (0.6 - 0.1) + 0.1)).toFixed(2)
        )
        if (dormirIsTrue == false && valor <= valorComparado) {
          if (confirm(`Você está sendo assaltado, deseja reagir?`)) {
            valor = Math.floor(Math.random() * 100.1 * 2.1)
            valorComparado = Math.ceil(Math.random() * 100.1)
            if (valor > 69) {
              alert(
                `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
              )
              console.log(valor, valorComparado)
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.55 - 0.2) + 0.2)).toFixed(2)
              )

              dinheiro -= dinheiroRoubado
              dinheiro = parseFloat(dinheiro.toFixed(2))
              quantoEuTenho.innerHTML = `${dinheiro} R$`
              quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
              quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            } else if (valor < 25) {
              alert(
                `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
              )
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.15 - 0.1) + 0.1)).toFixed(2)
              )
              dinheiro += dinheiroRoubado
              dinheiro = parseFloat(dinheiro.toFixed(2))
            } else if (valor < 70 && valor > 24) {
              if (confirm(`Lascou! Puxaram uma arma, ainda quer reagir?`)) {
                valor = Math.ceil(Math.random() * 100.1 * 0.9)
                valorComparado = Math.ceil(Math.random() * 100.1)
                console.log(valor, valorComparado)
                if (valor > 70 && valor < 79) {
                  alert(
                    `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.2 - 0.1) + 0.1)).toFixed(2)
                  )
                  dinheiro += dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 39 && valor < 69) {
                  alert(
                    `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.4 - 0.25) + 0.25)).toFixed(
                      2
                    )
                  )
                  dinheiro -= dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 80) {
                  alert(
                    `Ufa.. Era só uma ${itens[14].nome}. Ela não possui multiplicador, mas pode ser útil. O bandido bundão deixou cair quando tu ameaçou ele com suas habilidades de combate da favela.`
                  )
                  alert(
                    `Você recuperou seu dinheiro com juros, impostos e correção monetária`
                  )
                  console.log(valor, valorComparado)
                  dinheiro += dinheiroRoubado * 4
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                  console.log(valor, valorComparado)
                  if (seusItens.includes(itens[14]) == false) {
                    seusItens.push(itens[14])
                  } else {
                    alert(
                      `Você já tem uma ${itens[14].nome}. Você a dá para um amigo mendigo`
                    )
                  }
                } else if (valor < 40) {
                  valor = Math.ceil(Math.random() * 100.1)
                  valorComparado = Math.ceil(Math.random() * 100.1)

                  if (
                    valor > valorComparado ||
                    seusItens.includes[itens[16]] == true
                  ) {
                    alert(
                      `Infelizmente nosso herói foi ferido, você precisa de um ${itens[16].nome}, se você não o tiver em seus itens, significa que não tem plano de saúde, e morrerá dependendo do SUS!`
                    )
                    alert(
                      `Ou você pode tentar que alguém te salve. Você ainda pode tomar mais um assalto desses.`
                    )
                    dinheiroRoubado = parseFloat(
                      (dinheiro * (Math.random() * (0.6 - 0.2) + 0.2)).toFixed(
                        2
                      )
                    )
                    dinheiro -= dinheiroRoubado
                    dinheiro = parseFloat(dinheiro.toFixed(2))
                    quantoEuTenho.innerHTML = `${dinheiro} R$`
                    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                    alert(`Lhe roubaram R$ ${dinheiroRoubado}`)
                    //
                    alert(
                      `Agora você tem um multiplicador negativo de Ferimento, você precisa tomar alguma medicação, comprar ${itens[16].nome}, ou pegar curativos`
                    )
                    if (seusMultiplicadores.includes(0.82) == false) {
                      seusMultiplicadores.push(multiplicadoresPerma.ferimento)
                    } else {
                      alert(
                        `Você já possui um multiplicador de Ferimento ativo, então não será adicionado mais nenhum`
                      )
                    }
                  } else {
                    GameOverAssalto()
                  }
                }
              } else {
                dinheiro -= dinheiroRoubado
                dinheiro = parseFloat(dinheiro.toFixed(2))
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                alert(
                  `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
                )
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                console.log(valor, valorComparado)
              }
            }
          } else {
            dinheiro -= dinheiroRoubado
            dinheiro = parseFloat(dinheiro.toFixed(2))
            alert(
              `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
            )
            quantoEuTenho.innerHTML = `${dinheiro} R$`
            quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
            quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            console.log(valor, valorComparado)
          }
        }
      }
    }
    function sexta() {
      if (cliquesDiarios == 4 && dormirIsTrue == false && diaSelecionado == 5) {
        alert(
          `Aviso: A partir desse horário, maloqueiros andam pela rua, cuidado com os chinelões`
        )
      }
      if (
        cliquesDiarios > 3 &&
        dormirIsTrue == false &&
        diaSelecionado == 5 &&
        cliquesDiarios < 8 &&
        dormirIsTrue == false &&
        diaSelecionado == 5
      ) {
        quantoEuTenho.classList.add('perigo')
        quantoCliquei.classList.add('perigo')
      } else if (cliquesDiarios > 6 && diaSelecionado == 5) {
        quantoEuTenho.classList.remove('perigo')
        quantoCliquei.classList.remove('perigo')
      }
      // testar ser roubado
      if (
        cliquesDiarios > 3 &&
        diaSelecionado == 5 &&
        cliquesDiarios < 8 &&
        diaSelecionado == 5
      ) {
        let valor = Math.floor(Math.random() * 100.1 * 0.5)
        let valorComparado = Math.ceil(Math.random() * 100.1)
        let dinheiroRoubado = parseFloat(
          (dinheiro * (Math.random() * (0.15 - 0.01) + 0.01)).toFixed(2)
        )
        if (dormirIsTrue == false && valor <= valorComparado) {
          if (confirm(`Você está sendo assaltado, deseja reagir?`)) {
            valor = Math.floor(Math.random() * 100.1 * 0.5)
            valorComparado = Math.ceil(Math.random() * 100.1)
            if (valor > 69) {
              alert(
                `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
              )
              console.log(valor, valorComparado)
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.65 - 0.2) + 0.2)).toFixed(2)
              )

              dinheiro -= dinheiroRoubado
              dinheiro = parseFloat(dinheiro.toFixed(2))
              quantoEuTenho.innerHTML = `${dinheiro} R$`
              quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
              quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            } else if (valor < 25) {
              alert(
                `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
              )
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.65 - 0.2) + 0.2)).toFixed(2)
              )
              dinheiro += dinheiroRoubado * 1.4
              dinheiro = parseFloat(dinheiro.toFixed(2))
            } else if (valor < 70 && valor > 24) {
              if (confirm(`Lascou! Puxaram uma arma, ainda quer reagir?`)) {
                valor = Math.ceil(Math.random() * 100.1 * 1.6 + 1.32)
                valorComparado = Math.ceil(Math.random() * 100.1)
                console.log(valor, valorComparado)
                if (valor > 70 && valor < 79) {
                  alert(
                    `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.35 - 0.15) + 0.15)).toFixed(
                      2
                    )
                  )
                  dinheiro += dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 39 && valor < 69) {
                  alert(
                    `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.6 - 0.35) + 0.15)).toFixed(
                      2
                    )
                  )
                  dinheiro -= dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 80) {
                  alert(
                    `Ufa.. Era só uma ${itens[14].nome}. Ela não possui multiplicador, mas pode ser útil. O bandido bundão deixou cair quando tu ameaçou ele com suas habilidades de combate da favela.`
                  )
                  alert(
                    `Você recuperou seu dinheiro com juros, impostos e correção monetária`
                  )
                  console.log(valor, valorComparado)
                  dinheiro += dinheiroRoubado * 1.3
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                  console.log(valor, valorComparado)
                  if (seusItens.includes(itens[14]) == false) {
                    seusItens.push(itens[14])
                  } else {
                    alert(
                      `Você já tem uma ${itens[14].nome}. Você a dá para um amigo mendigo`
                    )
                  }
                } else if (valor < 40) {
                  valor = Math.ceil(Math.random() * 100.1)
                  valorComparado = Math.ceil(Math.random() * 100.1)
                  if (
                    valor > valorComparado ||
                    seusItens.includes[itens[16]] == true
                  ) {
                    alert(
                      `Infelizmente nosso herói foi ferido, você precisa de um ${itens[16].nome}, se você não o tiver em seus itens, significa que não tem plano de saúde, e morrerá dependendo do SUS!`
                    )
                    alert(
                      `Ou você pode tentar que alguém te salve. Você ainda pode tomar mais um assalto desses.`
                    )
                    dinheiroRoubado = parseFloat(
                      (dinheiro * (Math.random() * (0.6 - 0.2) + 0.2)).toFixed(
                        2
                      )
                    )
                    dinheiro -= dinheiroRoubado
                    dinheiro = parseFloat(dinheiro.toFixed(2))
                    quantoEuTenho.innerHTML = `${dinheiro} R$`
                    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                    alert(`Lhe roubaram R$ ${dinheiroRoubado}`)
                    //
                    alert(
                      `Agora você tem um multiplicador negativo de Ferimento, você precisa tomar alguma medicação, comprar ${itens[16].nome}, ou pegar curativos`
                    )
                    if (seusMultiplicadores.includes(0.82) == false) {
                      seusMultiplicadores.push(multiplicadoresPerma.ferimento)
                    } else {
                      alert(
                        `Você já possui um multiplicador de Ferimento ativo, então não será adicionado mais nenhum`
                      )
                    }
                  } else {
                    GameOverAssalto()
                  }
                }
              } else {
                dinheiro -= dinheiroRoubado
                dinheiro = parseFloat(dinheiro.toFixed(2))
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                alert(
                  `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
                )
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                console.log(valor, valorComparado)
              }
            }
          } else {
            dinheiro -= dinheiroRoubado
            dinheiro = parseFloat(dinheiro.toFixed(2))
            alert(
              `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
            )
            quantoEuTenho.innerHTML = `${dinheiro} R$`
            quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
            quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            console.log(valor, valorComparado)
          }
        }
      }
    }
    function sabado() {
      if (cliquesDiarios == 4 && dormirIsTrue == false && diaSelecionado == 6) {
        alert(
          `Aviso: A partir desse horário, maloqueiros andam pela rua, cuidado com os chinelões`
        )
      }
      if (
        cliquesDiarios > 4 &&
        dormirIsTrue == false &&
        diaSelecionado == 6 &&
        cliquesDiarios < 8 &&
        dormirIsTrue == false &&
        diaSelecionado == 6
      ) {
        quantoEuTenho.classList.add('perigo')
        quantoCliquei.classList.add('perigo')
      } else if (cliquesDiarios > 6 && diaSelecionado == 6) {
        quantoEuTenho.classList.remove('perigo')
        quantoCliquei.classList.remove('perigo')
      }
      // testar ser roubado
      if (
        cliquesDiarios > 4 &&
        diaSelecionado == 6 &&
        cliquesDiarios < 8 &&
        diaSelecionado == 6
      ) {
        let valor = Math.floor(Math.random() * 100.1 * 0.5)
        let valorComparado = Math.ceil(Math.random() * 100.1)
        let dinheiroRoubado = parseFloat(
          (dinheiro * (Math.random() * (0.15 - 0.06) + 0.06)).toFixed(2)
        )
        if (dormirIsTrue == false && valor <= valorComparado) {
          if (confirm(`Você está sendo assaltado, deseja reagir?`)) {
            valor = Math.floor(Math.random() * 100.1 * 0.5)
            valorComparado = Math.ceil(Math.random() * 100.1)
            if (valor > 69) {
              alert(
                `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
              )
              console.log(valor, valorComparado)
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.35 - 0.1) + 0.1)).toFixed(2)
              )

              dinheiro -= dinheiroRoubado
              dinheiro = parseFloat(dinheiro.toFixed(2))
              quantoEuTenho.innerHTML = `${dinheiro} R$`
              quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
              quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            } else if (valor < 25) {
              alert(
                `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
              )
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.3 - 0.2) + 0.2)).toFixed(2)
              )
              dinheiro += dinheiroRoubado * 1.4
              dinheiro = parseFloat(dinheiro.toFixed(2))
            } else if (valor < 70 && valor > 24) {
              if (confirm(`Lascou! Puxaram uma arma, ainda quer reagir?`)) {
                valor = Math.ceil(Math.random() * 100.1 * 0.8)
                valorComparado = Math.ceil(Math.random() * 100.1)
                console.log(valor, valorComparado)
                if (valor > 70 && valor < 79) {
                  alert(
                    `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.25 - 0.15) + 0.15)).toFixed(
                      2
                    )
                  )
                  dinheiro += dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 39 && valor < 69) {
                  alert(
                    `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.4 - 0.25) + 0.25)).toFixed(
                      2
                    )
                  )
                  dinheiro -= dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 80) {
                  alert(
                    `Ufa.. Era só uma ${itens[14].nome}. Ela não possui multiplicador, mas pode ser útil. O bandido bundão deixou cair quando tu ameaçou ele com suas habilidades de combate da favela.`
                  )
                  alert(
                    `Você recuperou seu dinheiro com juros, impostos e correção monetária`
                  )
                  console.log(valor, valorComparado)
                  dinheiro += dinheiroRoubado * 1.3
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                  console.log(valor, valorComparado)
                  if (seusItens.includes(itens[14]) == false) {
                    seusItens.push(itens[14])
                  } else {
                    alert(
                      `Você já tem uma ${itens[14].nome}. Você a dá para um amigo mendigo`
                    )
                  }
                } else if (valor < 40) {
                  valor = Math.ceil(Math.random() * 100.1)
                  valorComparado = Math.ceil(Math.random() * 100.1)
                  if (
                    valor > valorComparado ||
                    seusItens.includes[itens[16]] == true
                  ) {
                    alert(
                      `Infelizmente nosso herói foi ferido, você precisa de um ${itens[16].nome}, se você não o tiver em seus itens, significa que não tem plano de saúde, e morrerá dependendo do SUS!`
                    )
                    alert(
                      `Ou você pode tentar que alguém te salve. Você ainda pode tomar mais um assalto desses.`
                    )
                    dinheiroRoubado = parseFloat(
                      (dinheiro * (Math.random() * (0.6 - 0.2) + 0.2)).toFixed(
                        2
                      )
                    )
                    dinheiro -= dinheiroRoubado
                    dinheiro = parseFloat(dinheiro.toFixed(2))
                    quantoEuTenho.innerHTML = `${dinheiro} R$`
                    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                    alert(`Lhe roubaram R$ ${dinheiroRoubado}`)
                    //
                    alert(
                      `Agora você tem um multiplicador negativo de Ferimento, você precisa tomar alguma medicação, comprar ${itens[16].nome}, ou pegar curativos`
                    )
                    if (seusMultiplicadores.includes(0.82) == false) {
                      seusMultiplicadores.push(multiplicadoresPerma.ferimento)
                    } else {
                      alert(
                        `Você já possui um multiplicador de Ferimento ativo, então não será adicionado mais nenhum`
                      )
                    }
                  } else {
                    GameOverAssalto()
                  }
                }
              } else {
                dinheiro -= dinheiroRoubado
                dinheiro = parseFloat(dinheiro.toFixed(2))
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                alert(
                  `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
                )
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                console.log(valor, valorComparado)
              }
            }
          } else {
            dinheiro -= dinheiroRoubado
            dinheiro = parseFloat(dinheiro.toFixed(2))
            alert(
              `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
            )
            quantoEuTenho.innerHTML = `${dinheiro} R$`
            quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
            quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            console.log(valor, valorComparado)
          }
        }
      }
    }
    function domingo() {
      if (
        (cliquesDiarios == 5 && dormirIsTrue == false && diaSelecionado == 0) ||
        (cliquesDiarios == 2 && dormirIsTrue && diaSelecionado == 1)
      ) {
        alert(
          `Aviso: A partir desse horário, maloqueiros andam pela rua, cuidado com os chinelões`
        )
      }
      if (
        cliquesDiarios > 5 &&
        dormirIsTrue == false &&
        diaSelecionado == 0 &&
        cliquesDiarios < 7 &&
        dormirIsTrue == false &&
        diaSelecionado == 0
      ) {
        quantoEuTenho.classList.add('perigo')
        quantoCliquei.classList.add('perigo')
      } else if (cliquesDiarios > 6 && diaSelecionado == 0) {
        quantoEuTenho.classList.remove('perigo')
        quantoCliquei.classList.remove('perigo')
      }
      // testar ser roubado
      if (
        cliquesDiarios > 5 &&
        diaSelecionado == 0 &&
        cliquesDiarios < 7 &&
        diaSelecionado == 0
      ) {
        let valor = Math.floor(Math.random() * 100.1 * 0.5)
        let valorComparado = Math.ceil(Math.random() * 100.1)
        let dinheiroRoubado = parseFloat(
          (dinheiro * (Math.random() * (0.15 - 0.01) + 0.01)).toFixed(2)
        )
        if (dormirIsTrue == false && valor <= valorComparado) {
          if (confirm(`Você está sendo assaltado, deseja reagir?`)) {
            valor = Math.floor(Math.random() * 100.1 * 0.5)
            valorComparado = Math.ceil(Math.random() * 100.1)
            if (valor > 69) {
              alert(
                `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
              )
              console.log(valor, valorComparado)
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.35 - 0.1) + 0.1)).toFixed(2)
              )

              dinheiro -= dinheiroRoubado
              dinheiro = parseFloat(dinheiro.toFixed(2))
              quantoEuTenho.innerHTML = `${dinheiro} R$`
              quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
              quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            } else if (valor < 25) {
              alert(
                `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
              )
              dinheiroRoubado = parseFloat(
                (dinheiro * (Math.random() * (0.3 - 0.2) + 0.2)).toFixed(2)
              )
              dinheiro += dinheiroRoubado * 1.4
              dinheiro = parseFloat(dinheiro.toFixed(2))
            } else if (valor < 70 && valor > 24) {
              if (confirm(`Lascou! Puxaram uma arma, ainda quer reagir?`)) {
                valor = Math.ceil(Math.random() * 100.1 * 1.6 + 1.32)
                valorComparado = Math.ceil(Math.random() * 100.1)
                console.log(valor, valorComparado)
                if (valor > 70 && valor < 79) {
                  alert(
                    `Você conseguiu reagir ao assalto e mostrou o poder da briga de rua e ainda roubou dinheiro deles.`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.25 - 0.15) + 0.15)).toFixed(
                      2
                    )
                  )
                  dinheiro += dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 39 && valor < 69) {
                  alert(
                    `Você foi roubado do mesmo jeito, levaram R$ ${dinheiroRoubado}`
                  )
                  dinheiroRoubado = parseFloat(
                    (dinheiro * (Math.random() * (0.4 - 0.25) + 0.25)).toFixed(
                      2
                    )
                  )
                  dinheiro -= dinheiroRoubado
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                } else if (valor > 80) {
                  alert(
                    `Ufa.. Era só uma ${itens[14].nome}. Ela não possui multiplicador, mas pode ser útil. O bandido bundão deixou cair quando tu ameaçou ele com suas habilidades de combate da favela.`
                  )
                  alert(
                    `Você recuperou seu dinheiro com juros, impostos e correção monetária`
                  )
                  console.log(valor, valorComparado)
                  dinheiro += dinheiroRoubado * 1.3
                  dinheiro = parseFloat(dinheiro.toFixed(2))
                  quantoEuTenho.innerHTML = `${dinheiro} R$`
                  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                  console.log(valor, valorComparado)
                  if (seusItens.includes(itens[14]) == false) {
                    seusItens.push(itens[14])
                  } else {
                    alert(
                      `Você já tem uma ${itens[14].nome}. Você a dá para um amigo mendigo`
                    )
                  }
                } else if (valor < 40) {
                  valor = Math.ceil(Math.random() * 100.1)
                  valorComparado = Math.ceil(Math.random() * 100.1)
                  if (
                    valor > valorComparado ||
                    seusItens.includes[itens[16]] == true
                  ) {
                    alert(
                      `Infelizmente nosso herói foi ferido, você precisa de um ${itens[16].nome}, se você não o tiver em seus itens, significa que não tem plano de saúde, e morrerá dependendo do SUS!`
                    )
                    alert(
                      `Ou você pode tentar que alguém te salve. Você ainda pode tomar mais um assalto desses.`
                    )
                    dinheiroRoubado = parseFloat(
                      (dinheiro * (Math.random() * (0.6 - 0.2) + 0.2)).toFixed(
                        2
                      )
                    )
                    dinheiro -= dinheiroRoubado
                    dinheiro = parseFloat(dinheiro.toFixed(2))
                    quantoEuTenho.innerHTML = `${dinheiro} R$`
                    quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                    quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                    alert(`Lhe roubaram R$ ${dinheiroRoubado}`)
                    //
                    alert(
                      `Agora você tem um multiplicador negativo de Ferimento, você precisa tomar alguma medicação, comprar ${itens[16].nome}, ou pegar curativos`
                    )
                    if (seusMultiplicadores.includes(0.82) == false) {
                      seusMultiplicadores.push(multiplicadoresPerma.ferimento)
                    } else {
                      alert(
                        `Você já possui um multiplicador de Ferimento ativo, então não será adicionado mais nenhum`
                      )
                    }
                  } else {
                    GameOverAssalto()
                  }
                }
              } else {
                dinheiro -= dinheiroRoubado
                dinheiro = parseFloat(dinheiro.toFixed(2))
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                alert(
                  `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
                )
                quantoEuTenho.innerHTML = `${dinheiro} R$`
                quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
                quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
                console.log(valor, valorComparado)
              }
            }
          } else {
            dinheiro -= dinheiroRoubado
            dinheiro = parseFloat(dinheiro.toFixed(2))
            alert(
              `Recusou reagir ao assalto, mas levaram R$ ${dinheiroRoubado}`
            )
            quantoEuTenho.innerHTML = `${dinheiro} R$`
            quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
            quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
            console.log(valor, valorComparado)
          }
        }
      }
    }
    segunda()
    terca()
    quarta()
    quinta()
    sexta()
    sabado()
    domingo()
  }
}
const eventosArmados = {
  RoubadoDormindo: function (multiplicadores) {
    if (
      seusItens.includes(itens[15]) == true ||
      seusItens.includes(itens[16]) == true ||
      seusItens.includes(itens[19]) == true
    ) {
    } else {
      if (multiplicadores == 0) {
        multiplicadores = 1
      }
      let valor = Math.ceil(Math.random() * 100.1 * 2.9)
      let valorComparado = Math.ceil(Math.random() * 100.1)
      let dinheiroRoubado = parseFloat(
        (dinheiro * (Math.random() * (0.3 - 0.175) + 0.175)).toFixed(2)
      )
      console.log(valor, valorComparado)
      if (dormirIsTrue == true && valor < valorComparado) {
        alert(
          `Enquanto você dormia, acabou passando uns truta aí mal intencionado chutando mendigo. Por sorte você não foi agredido, apenas tomaram R$ ${dinheiroRoubado}.`
        )
        dinheiro -= dinheiroRoubado
        dinheiro = parseFloat(dinheiro.toFixed(2))
        quantoEuTenho.innerHTML = `${dinheiro} R$`
        quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
        quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
      }
    }
  },
  // assaltadoAcordado: function (multiplicadores) {
  //   if (
  //     seusItens.includes(itens[15]) == true ||
  //     seusItens.includes(itens[16]) == true ||
  //     seusItens.includes(itens[19]) == true
  //   ) {
  //   } else {
  //     mecanicas.assaltadoAcordadoIndicador()

  //     // dinheiro -= parseFloat(
  //     //   (dinheiro * (Math.random() * (0.25 - 0.05) + 0.05)).toFixed(2)
  //     // )
  //     // dinheiro = parseFloat(dinheiro.toFixed(2))
  //     // quantoEuTenho.innerHTML = `${dinheiro} R$`
  //     // quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`

  //     let valor = Math.ceil(Math.random() * 100.1 * (4 * multiplicadores))
  //     let valorComparado = Math.ceil(Math.random() * 100.1)
  //     if (horasSemDormir >= 15 && valor <= valorComparado) {
  //       alert(
  //         `Você está tanto tempo sem dormir que os malandros da rua, tão achando que você está chapado. Eles decidem lhe roubar, Você quer reagir?`
  //       )
  //     }
  //   }
  // },
  // Sujeira: function () {
  //   for (semanas; dias[diaSelecionado] == 'Domingo'; semanas++) {
  //     return semanas
  //   }
  //   let umaVez = 0
  //   if (semanas >= 1 && dormirIsTrue == true && umaVez == 0) {
  //     let valor = Math.ceil(Math.random() * 100.1 * 1.65)
  //     let valorComparado = Math.ceil(Math.random() * 100.1)
  //     if (valor <= valorComparado) {
  //       umaVez += 1
  //       alert(
  //         `Você está com um fedor de asa considerável, é melhor procurar uma ONG que cuida de sem-tetos para tomar um banho. Deseja procurar uma ONG?`
  //       )
  //     }
  //   } else {
  //     umaVez == 0
  //   }
  // },
  ferimento: function () {
    if (
      seusMultiplicadores.includes(multiplicadoresPerma.ferimento) == true &&
      diasTotais > 7
    ) {
      let valor = Math.floor(Math.random() * 100.1)
      let valorComparado = Math.ceil(Math.random() * 100.1 * 2)
      let dinheiroAdicional = parseFloat(
        (Math.random() * 35 * (5.5 - 2) + 2).toFixed(2)
      )
      let dinheiroRoubado = parseFloat(
        (Math.random() * (0.3 - 0.1) + 0.1).toFixed(2)
      )
      if (valor < valorComparado) {
        alert(
          `Agentes de saúde passaram pela região e trataram os mendigos, porém um deles era meio corrupto e usurpou de seu dinheiro quando lhe meteu o olho. Perdeste como custo dos curativos R$ ${dinheiroRoubado}`
        )
        dinheiro -= dinheiroRoubado
        dinheiro = parseFloat(dinheiro.toFixed(2))
        quantoEuTenho.innerHTML = `${dinheiro} R$`
        quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
        quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
      } else if (valorComparado >= 185) {
        alert(
          `Streamers IRL viram sua situação deplorável e juntaram fundos para você, além que você ficou famoso, sua mendigagem vale 3 vezes mais. Você ganhou R$ ${dinheiroRoubado} `
        )
        seusMultiplicadores.push(2.73)
        seusMultiplicadores.splice(indexOf(0.82), 2)
      } else {
      }
    }
  },
  impressora: function () {
    if (cliquesTotais == 384 && seusItens.includes(itens[8])) {
      alert(
        `Seus companheiros mendigos, descobriram que podiam imprimir dinheiro e alegar que não sabiam que eram falsos para poder comprar o que quiserem, mas você pensou em imprimir cartinhas de jogos para criançada jogar bafo. Você adquirou ${itens[18].nome}`
      )
      alert(
        `Ela possui multiplicador de ${parseFloat(
          (itens[18].multiplicador * 1.1).toFixed(2)
        )}`
      )
      seusItens.push(itens[18])
    } else if (
      (seusItens.includes(itens[18]) && cliquesTotais == 2160) ||
      (cliquesTotais == 2880 && seusItens.includes(itens[18]))
    ) {
      alert(
        `Você já tem uma ${itens[18].nome}, você a doa para os outros mendigos, eles te dão dinheiro como agradecimento`
      )
    }
  },
  ingressos: function () {
    if (cliquesTotais == 288 && seusItens.includes(itens[18])) {
      alert(
        `O seu amigo flamenguista lhe mostrou como eram os ingressos para os jogos da primeira divisão, Você foi com ele em uma partida. Ele acabou explicando como funcionava as tecnologias. Você aprende a piratear os ingressos, agora você aumentou seu multiplicador`
      )
      seusItens.push(itens[13])
      comprarItem()
    }
  },
  politica: function () {
    if (seusItens.includes(itens[7]) == true && cliquesTotais == 606) {
      if (
        confirm(
          `Você foi convidado para entrar na vida política, suas feições parecem ter muito carisma para tal`
        )
      ) {
        alert(
          `Você ganhou multiplicador de Político, ele vale ${Math.floor(
            multiplicadoresPerma.politico * 1.1
          )}`
        )
        seusMultiplicadores.push(multiplicadoresPerma.politico)
      } else {
        alert(
          `É uma pena, pois renderia muito dinheiro e ajudaria nessa sua mendigada mendigar no congresso!`
        )
      }
    }
  },
  saqueFGTS: function () {
    if (cliquesTotais == 370 || cliquesTotais == 729) {
      alert(
        `Você descobre um saque inacreditável do FGTS pra fazer, no meio do imbróglio todo de ser escurraçado de onde morava, você esqueceu desse detalhe de desempregado.`
      )
      let FGTS = parseFloat(
        (20202 * (Math.random() * (0.6 - 0.3) + 0.3) * 1.25).toFixed(2)
      )
      dinheiro += FGTS
      cliquesDiarios += 4
      alert(`Você recebeu R$ ${FGTS}`)
      quantoEuTenho.innerHTML = `${dinheiro} R$`
      quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
      quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
    }
  },
  casa: function () {
    if (dinheiro > 20000 && lojaItens.includes(itens[19]) == false) {
      alert(
        `Você agora possui dinheiro para comprar Casa, este item estará disponível na loja a partir de agora`
      )
      lojaItens.push(itens[19])
    }
  },
  carro: function () {
    if (dinheiro > 25000 && lojaItens.includes(itens[20]) == false) {
      alert(
        `Uma revenda de carros está anunciando um novíssimo Focus pela metade do preço`
      )
      lojaItens.push(itens[20])
    }
  },
  agua: function () {
    if (seusItens.includes(itens[2]) == true && cliquesTotais == 168) {
      alert(
        `Você genialmente percebe que seu ponto de mendigagem possui demanda de guloseimas e tudo mais...`
      )
      alert(`Você revira sua ${itens[2].nome} e percebe um isopor.`)
      alert(
        `Você conversa com seus contatos como todo vendedor ambulante e... consegue um ${itens[12].nome} quase infinito.`
      )
      seusItens.push(itens[12])
      seusMultiplicadores.push(itens[12].multiplicador)
    }
  },
  violao: function () {
    let valor = Math.random() * 11 * 8
    let valorComparado = Math.random() * 11
    if (
      cliquesTotais > 168 &&
      diaSelecionado == 1 &&
      valor < valorComparado &&
      cliquesDiarios > 6 &&
      cliquesDiarios < 21
    ) {
      let dinheiroGanho = parseFloat(
        (1001.1 * (Math.random() * (0.7 - 0.3) + 0.3)).toFixed(2)
      )
      alert(
        `Um músico de rua se apresenta com a mendigada, você demonstra seus dotes artísticos e ganha algum dinheiro`
      )
      alert(`Você ganhou R$ ${dinheiroGanho}`)
      dinheiro += dinheiroGanho
      seusMultiplicadores.push(1.75)
    }
  }
}
function comecar() {
  alert(
    'Seu Nome é Vanderlei Brito da Silva, aconteceram umas coisas na quebrada e você entregou seu Celtinha ao dono do morro, além que os chinelão tomaram sua propriedade. Agora você busca vingança ou pelo menos manter sua dignidade.'
  )
  mainGame()
}

function loja() {
  let correcaoMultiplicador = i =>
    parseFloat((itens[i].multiplicador * 1.1).toFixed(2))
  let textoNaTela = ''
  function atualizarLoja() {
    if (seusItens.includes(itens[1]) == true) {
      textoNaTela += `<li><h3 class='fadeNosItem'>Custo: ${
        itens[0].custo
      } R$ <br> multiplicador: ${correcaoMultiplicador(0)} <br> Comentário: ${
        itens[0].comentario
      }</h3>`
      textoNaTela += `<button id="${itens[0].nome}" onclick="comprarItem()" onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()">${itens[0].nome}</button>`
    }
    if (seusItens.includes(itens[2]) == true) {
      textoNaTela += `<li><h3 class='fadeNosItem'>Custo: ${
        itens[8].custo
      } R$ <br> multiplicador: ${correcaoMultiplicador(8)} <br> Comentário: ${
        itens[8].comentario
      }</h3>`
      textoNaTela += `<button id="${itens[8].nome}" onclick="comprarItem()" onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()">${itens[8].nome}</button>`
    }
    if (lojaItens.includes(itens[19]) == true) {
      textoNaTela += `<li><h3 class='fadeNosItem'>Custo: ${itens[19].custo} R$ <br> multiplicador: - <br> Comentário: ${itens[19].comentario}</h3>`
      textoNaTela += `<button id="${itens[19].nome}" onclick="comprarItem()" onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()">${itens[19].nome}</button>`
    }
    if (lojaItens.includes(itens[20]) == true) {
      textoNaTela += `<li><h3 class='fadeNosItem'>Custo: ${itens[20].custo} R$ <br> multiplicador: - <br> Comentário: ${itens[20].comentario}</h3>`
      textoNaTela += `<button id="${itens[20].nome}" onclick="comprarItem()" onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()">${itens[20].nome}</button>`
    }
  }
  textoNaTela += `<div class="botoesLoja">`
  textoNaTela += `<ul>`
  for (i = 0; i < itens.length; i++) {
    if (i == 0 || i == 8) {
      continue
    } else if (i == 11) {
      break
    }

    textoNaTela += `<li><h3 class='fadeNosItem'>Custo: ${
      itens[i].custo
    } R$ <br> multiplicador: ${correcaoMultiplicador(i)} <br> Comentário: ${
      itens[i].comentario
    }</h3>`
    textoNaTela += `<button id="${itens[i].nome}" onclick="comprarItem()" onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()">${itens[i].nome}</button>`
  }

  atualizarLoja()
  textoNaTela += `</li>`
  textoNaTela += `</ul>`
  textoNaTela += `</div>`
  textoNaTela += '<button onclick="mainGame()">Sair da loja</button>'
  document.body.innerHTML = textoNaTela
  for (i = 0; i < itens.length; i++) {
    if (i > 10 && i < 18) {
      continue
    }
    if (seusItens.includes(itens[i]) == true) {
      document.getElementById(`${itens[i].nome}`).disabled = true
      document
        .getElementById(`${itens[i].nome}`)
        .parentElement.children[0].classList.remove('fadeNosItem')
      document.getElementById(
        `${itens[i].nome}`
      ).parentElement.children[0].textContent = ''
    }
  }
}
function mostrarTexto() {
  let ObjetoSelecionado = event.currentTarget
  ObjetoSelecionado.parentElement.children[0].style.opacity = 1
}
function ocultarTexto() {
  let ObjetoSelecionado = event.currentTarget
  ObjetoSelecionado.parentElement.children[0].style.opacity = 0
}

function mainGame() {
  let textoNaTela = ''
  textoNaTela += `<h3 id="quantoEuTenho">${dinheiro} R$</h3>`
  textoNaTela += '<button onclick="mendigar()">Mendigar</button>'
  textoNaTela += '<button onclick="loja()">Loja</button>'
  textoNaTela += `<h3 id="diasTela">${dias[diaSelecionado]}</h3>`
  textoNaTela += `<p id="quantoCliquei"><b>Horas do dia:</b>${cliquesDiarios}</p>`
  textoNaTela += `<p id="quantosDias"><b>Dias:</b>${diasTotais}</p>`
  textoNaTela += '<div class="botaoRodape">'
  textoNaTela += '<button onclick="dormir()">Dormir</button>'
  textoNaTela += '</div>'
  document.body.innerHTML = textoNaTela
  // mecanicas.assaltadoAcordadoIndicador()
}

let dormirMultiplicadorHoras = 0
let dormirIsTrue = false

function mendigar() {
  //recebe multiplicador array ou item sla e poe no calculo do dinheiro
  cliquesDiarios += 1
  cliquesTotais += 1
  horasSemDormir += 1

  mecanicas.dayNightCycle()
  mecanicas.vinteQuatroMendigar()
  mecanicas.dormirMultiplicadorHoras()
  mecanicas.horaPerigosa()
  eventosArmados.ferimento()
  eventosArmados.impressora()
  eventosArmados.ingressos()
  eventosArmados.politica()
  eventosArmados.saqueFGTS()
  eventosArmados.casa()
  eventosArmados.carro()
  eventosArmados.agua()
  eventosArmados.violao()
  // eventosArmados.assaltadoAcordado(
  //   multiplicadoresPermaAleatoriedades.reduce(
  //     (acumulador, seusMultiplicadores) => acumulador + seusMultiplicadores,
  //     0
  //   )
  // )
  // eventosArmados.Sujeira()

  let multiplicadoresSomados = seusMultiplicadores.reduce(
    (acumulador, seusMultiplicadores) => acumulador + seusMultiplicadores,
    0
  )
  if (multiplicadoresSomados == 0) {
    multiplicadoresSomados = 1
  }
  let valor = Math.random() * 11
  let valorComparado = Math.random() * 11
  if (valor < valorComparado) {
    seusMultiplicadores.push(1.1)
  }
  if (cliquesDiarios > 21 || cliquesDiarios < 7) {
    dinheiro = parseFloat(
      (
        Math.random() * (0.75 * 1.1 * multiplicadoresSomados) +
        dinheiro
      ).toFixed(2)
    )
  } else if (cliquesDiarios > 15 && cliquesDiarios < 19) {
    dinheiro = parseFloat(
      (
        Math.random() * (3.64 * 1.1 * multiplicadoresSomados) +
        dinheiro
      ).toFixed(2)
    )
  } else
    dinheiro = parseFloat(
      (Math.random() * (1.1 * multiplicadoresSomados) + dinheiro).toFixed(2)
    )

  quantoEuTenho.innerHTML = `${dinheiro} R$`
  quantoCliquei.innerHTML = `<b>Horas do dia:</b>${cliquesDiarios}`
  quantosDias.innerHTML = `<b>Dias:</b>${diasTotais}`
  finalA()
  finalB()
  finalC()
  finalD()
  GameOverPobre()
}

function dormir() {
  dormirLimite += 1
  if (dormirLimite == 3) {
    alert(
      'Você não pode mais dormir hoje, devia ter aproveitado melhor o dia...'
    )
  } else if (dormirIsTrue == true) {
    alert('Você acabou de dormir, gastou uma dormida. Vá trabalhar!')
  } else {
    dormirIsTrue = true
    // numa margem de Math.random() = 1, da 2, pq 1 * 1.1 * 1.82
    cliquesTotais += 10
    cliquesDiarios += 10
    horasSemDormir = 0
    dormirMultiplicadorHoras = 0
    mecanicas.vinteQuatro()
    mecanicas.horaPerigosa()
    eventosArmados.RoubadoDormindo(
      multiplicadoresPermaAleatoriedades.reduce(
        (acumulador, seusMultiplicadores) => acumulador + seusMultiplicadores,
        0
      )
    )
    GameOverPobre()
    // eventosArmados.Sujeira()

    if (
      seusMultiplicadores.filter(nome => multiplicadoresPerma.dormir) ==
      multiplicadoresPerma.dormir
    ) {
      seusMultiplicadores.splice(
        seusMultiplicadores.indexOf(multiplicadoresPerma.dormir),
        1
      )
      multiplicadoresPermaAleatoriedades.splice(
        seusMultiplicadores.indexOf(multiplicadoresPerma.dormir),
        1
      )
    }
    seusMultiplicadores.push(multiplicadoresPerma.dormir)
    multiplicadoresPermaAleatoriedades.push(multiplicadoresPerma.dormir)

    mecanicas.dayNightCycle()
  }
}
function comprarItem() {
  let ObjetoSelecionado = event.currentTarget.textContent
  console.log(ObjetoSelecionado)
  const arrayComprarItens = {
    Placa: function () {
      if (ObjetoSelecionado == itens[0].nome && dinheiro >= itens[0].custo) {
        dinheiro -= itens[0].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[0].nome}. Agora você pode demonstrar para todos sua linda ortografia do trabalhador brasileiro.`
        )
        seusItens.push(itens[0])
        seusMultiplicadores.push(itens[0].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[0].nome) {
        alert(
          `Por que não arrumou uns cartazes com papel pardo? Seria mais barato.`
        )
      }
    },
    Madeira: function () {
      if (ObjetoSelecionado == itens[1].nome && dinheiro >= itens[1].custo) {
        dinheiro -= itens[1].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[1].nome}. Agora você pode pensar em comprar uma ${itens[0].nome} para anunciar sua mendigada!`
        )
        seusItens.push(itens[1])
        seusMultiplicadores.push(itens[1].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[1].nome) {
        alert(
          `Você não consegue comprar esse tampo de MDF? Justo, justo, ${itens[1].nome} boa é ${itens[1].nome} cara`
        )
      }
    },
    Sucata: function () {
      if (ObjetoSelecionado == itens[2].nome && dinheiro >= itens[2].custo) {
        dinheiro -= itens[2].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(`Você comprou ${itens[2].nome}. Por que você comprou esse lixo?`)
        seusItens.push(itens[2])
        seusMultiplicadores.push(itens[2].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[2].nome) {
        alert(
          `Como assim você não tem dinheiro para comprar ${itens[2].nome}? Eu encontraria facilmente de graça.`
        )
      }
    },
    SacoDeLixo: function () {
      if (ObjetoSelecionado == itens[3].nome && dinheiro >= itens[3].custo) {
        dinheiro -= itens[3].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[3].nome}. Agora pode reciclar e ganhar trocados.`
        )
        seusItens.push(itens[3])
        seusMultiplicadores.push(itens[3].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[3].nome) {
        alert(
          `Esse é o ${itens[3].nome} mais caro da história, parece a gasolina.`
        )
      }
    },
    CusrsoDeVenderCurso: function () {
      if (ObjetoSelecionado == itens[4].nome && dinheiro >= itens[4].custo) {
        dinheiro -= itens[4].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[4].nome}. Vai dar uma de agiota? Agora você devia se envergonhar`
        )
        seusItens.push(itens[4])
        seusMultiplicadores.push(itens[4].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[4].nome) {
        alert(
          `${itens[4].nome} é brincadeira com o consumidor brasileiro, eles deviam se envergonhar.`
        )
      }
    },
    InternetWiFi: function () {
      if (ObjetoSelecionado == itens[5].nome && dinheiro >= itens[5].custo) {
        dinheiro -= itens[5].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[5].nome}. Realmente duvido da sanidade das pessoas por solicitarem esse Wi-fi público.`
        )
        seusItens.push(itens[5])
        seusMultiplicadores.push(itens[5].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[5].nome) {
        alert(
          `Se ${itens[5].nome} tá ligado direto no poste, por que você teria que pagar?`
        )
      }
    },
    CarrinhoDePipoca: function () {
      if (ObjetoSelecionado == itens[6].nome && dinheiro >= itens[6].custo) {
        dinheiro -= itens[6].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[6].nome}. Você começou a vender pipoca em troca de dinheiro, agora você tem um emprego.`
        )
        seusItens.push(itens[6])
        seusMultiplicadores.push(itens[6].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[6].nome) {
        alert(
          `Quando você conseguir comprá-la, não se esqueça de ser bonzinho com os pombos!`
        )
      }
    },
    TernoGravata: function () {
      if (ObjetoSelecionado == itens[7].nome && dinheiro >= itens[7].custo) {
        dinheiro -= itens[7].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[7].nome}. Você aprendeu a lábia de mendigar, agora você mendiga com estilo.`
        )
        seusItens.push(itens[7])
        seusMultiplicadores.push(itens[7].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[7].nome) {
        alert(
          `Tá pensando que com uma roupa chique sua vida muda radicalmente?`
        )
      }
    },
    PC: function () {
      if (ObjetoSelecionado == itens[8].nome && dinheiro >= itens[8].custo) {
        dinheiro -= itens[8].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(`Você comprou ${itens[8].nome}. Agora podes piratear jogos.`)
        seusItens.push(itens[8])
        seusMultiplicadores.push(itens[8].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[8].nome) {
        alert(`Comé que liga esse troço?`)
      }
    },
    Moto: function () {
      if (ObjetoSelecionado == itens[9].nome && dinheiro >= itens[9].custo) {
        dinheiro -= itens[9].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[9].nome}. Você não apenas vendeu seu dinheiro por uma moto, você comprou um estilo de vida, agora você é garoto de entregas, cuidado com o grau.`
        )
        seusItens.push(itens[9])
        seusMultiplicadores.push(itens[9].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[9].nome) {
        alert(
          `A gasolina está muito cara, não sei se uma porcaria dessas compensa.`
        )
      }
    },
    Garagem: function () {
      if (ObjetoSelecionado == itens[10].nome && dinheiro >= itens[10].custo) {
        dinheiro -= itens[10].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[10].nome}. Você transcendeu a flanelagem, você é o rei deles.`
        )
        seusItens.push(itens[10])
        seusMultiplicadores.push(itens[10].multiplicador)
        loja()
      } else if (ObjetoSelecionado == itens[10].nome) {
        alert(`Tá o preço do estacionamento.`)
      }
    },
    Ingressos: function () {
      //alguma condição que eu não sei, na verdade talvez isso nem deva estar aqui
      if (seusItens.includes(itens[13]) == true) {
        dinheiro -= itens[13].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[13].nome}. Já havia descoberto como imprimir notas falsas, mas, fato é que, não se sabia qual era a tecnologia necessária para beirar a perfeição, você compra estes Ingressos, e descobre a codificação para vendê-los como cambista.`
        )
        seusMultiplicadores.push(itens[13].multiplicador)
      }
    },
    Hospital: function () {
      //alguma condição que eu não sei, na verdade talvez isso nem deva estar aqui
      if (ObjetoSelecionado == itens[16].nome && dinheiro >= itens[16].custo) {
        dinheiro -= itens[16].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[16].nome}. Talvez tenha percebido que ser assaltado é perigoso.`
        )
      } else if (ObjetoSelecionado == itens[16].nome) {
        alert(`Dependa do SUS então.`)
      }
    },
    Casa: function () {
      //alguma condição que eu não sei, na verdade talvez isso nem deva estar aqui
      if (ObjetoSelecionado == itens[19].nome && dinheiro >= itens[19].custo) {
        dinheiro -= itens[19].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[19].nome}. Você comprou um de seus objetivos, falta o carro.`
        )
        seusItens.push(itens[19])
        loja()
      } else if (ObjetoSelecionado == itens[19].nome) {
        alert(`Facilitaria muito ter uma...`)
      }
    },
    Carro: function () {
      //alguma condição que eu não sei, na verdade talvez isso nem deva estar aqui
      if (ObjetoSelecionado == itens[20].nome && dinheiro >= itens[20].custo) {
        dinheiro -= itens[20].custo
        dinheiro = parseFloat(dinheiro.toFixed(2))
        alert(
          `Você comprou ${itens[20].nome}. Não sei como vai andar sem gasolina.`
        )
        seusItens.push(itens[20])
        loja()
      } else if (ObjetoSelecionado == itens[20].nome) {
        alert(`Não é o Celta`)
      }
    }
  }
  arrayComprarItens.Placa()
  arrayComprarItens.Madeira()
  arrayComprarItens.Sucata()
  arrayComprarItens.SacoDeLixo()
  arrayComprarItens.CusrsoDeVenderCurso()
  arrayComprarItens.InternetWiFi()
  arrayComprarItens.CarrinhoDePipoca()
  arrayComprarItens.TernoGravata()
  arrayComprarItens.PC()
  arrayComprarItens.Moto()
  arrayComprarItens.Garagem()
  arrayComprarItens.Ingressos()
  arrayComprarItens.Casa()
  arrayComprarItens.Carro()
}
// Game over if
function GameOverPobre() {
  if (dinheiro < 0) {
    alert(
      `Seu mendigo além de não possuir mais nada, não possui dinheiro e ainda deve. O triste fim de sua vida nas ruas é extremamente melancólico, sem condições de se quer juntar dinheiro para ele comer, ele deita no chão e morre de fome.`
    )
    let textoNaTela = ''
    textoNaTela += '<!DOCTYPE html>'
    textoNaTela += '<html lang="pt_BR">'
    textoNaTela += '<head>'
    textoNaTela += '<meta charset="UTF-8" />'
    textoNaTela += '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
    textoNaTela +=
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
    textoNaTela += '<script src="main.js"></script>'
    textoNaTela += '<link rel="stylesheet" href="style.css" />'
    textoNaTela += '<link rel=" icon" href="Thaciano.jpg" type="image/jpg" />'
    textoNaTela +=
      '<title>Mendigo Simulator 2.0 - Mais Rápido que Celta</title>'
    textoNaTela += '</head>'
    textoNaTela += '<body>'
    textoNaTela += '<style>'
    textoNaTela += 'html,'
    textoNaTela += 'body {'
    textoNaTela += 'background: white;'
    textoNaTela += '}'
    textoNaTela += '</style>'
    textoNaTela += '<form>'
    textoNaTela += '<button>Jogar Novamente </button>'
    textoNaTela += '</form>'
    textoNaTela += '</body>'
    textoNaTela += '</html>'
    document.write(textoNaTela)
  }
}
function GameOverAssalto() {
  alert(
    `Você morreu no assalto, nosso herói não resistiu às repetidas pancadas na cabeça, seguidas de 1 tiro no peito. Não espere que Deus resolva tudo, mas talvez um 38 resolva.`
  )
  let textoNaTela = ''
  textoNaTela += '<!DOCTYPE html>'
  textoNaTela += '<html lang="pt_BR">'
  textoNaTela += '<head>'
  textoNaTela += '<meta charset="UTF-8" />'
  textoNaTela += '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
  textoNaTela +=
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
  textoNaTela += '<script src="main.js"></script>'
  textoNaTela += '<link rel="stylesheet" href="style.css" />'
  textoNaTela += '<link rel=" icon" href="Thaciano.jpg" type="image/jpg" />'
  textoNaTela += '<title>Mendigo Simulator 2.0 - Mais Rápido que Celta</title>'
  textoNaTela += '</head>'
  textoNaTela += '<body>'
  textoNaTela += '<style>'
  textoNaTela += 'html,'
  textoNaTela += 'body {'
  textoNaTela += 'background: white;'
  textoNaTela += '}'
  textoNaTela += '</style>'
  textoNaTela += '<form>'
  textoNaTela += '<button>Jogar Novamente </button>'
  textoNaTela += '</form>'
  textoNaTela += '</body>'
  textoNaTela += '</html>'
  document.write(textoNaTela)
}
function finalA() {
  if (seusItens.includes(itens[19]) && seusItens.includes(itens[20])) {
    alert(`Você conseguiu recuperar sua dignidade.`)
    alert(
      `Seu Vanderlei já deixou as ruas, conseguiu comprar uma casa e um carro 0km.`
    )
    alert(
      `O que seria mais digno do que reconstruir sua vida completamente após perder tudo e morar na rua?`
    )
    alert(
      `Vanderlei é um herói, e sua história merece ficar gravada nos nossos corações`
    )
    alert(`Obrigado por jogar meu primeiro jogo! ^w^ -Acchi_Gotchi`)
    let textoNaTela = ''
    textoNaTela += '<!DOCTYPE html>'
    textoNaTela += '<html lang="pt_BR">'
    textoNaTela += '<head>'
    textoNaTela += '<meta charset="UTF-8" />'
    textoNaTela += '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
    textoNaTela +=
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
    textoNaTela += '<script src="main.js"></script>'
    textoNaTela += '<link rel="stylesheet" href="style.css" />'
    textoNaTela += '<link rel=" icon" href="Thaciano.jpg" type="image/jpg" />'
    textoNaTela +=
      '<title>Mendigo Simulator 2.0 - Mais Rápido que Celta</title>'
    textoNaTela += '</head>'
    textoNaTela += '<body>'
    textoNaTela += '<style>'
    textoNaTela += 'html,'
    textoNaTela += 'body {'
    textoNaTela += 'background: white;'
    textoNaTela += '}'
    textoNaTela += '</style>'
    textoNaTela += '<form>'
    textoNaTela += '<button>Jogar Novamente </button>'
    textoNaTela += '</form>'
    textoNaTela += '</body>'
    textoNaTela += '</html>'
    document.write(textoNaTela)
  }
}
function finalB() {
  if (
    (seusItens.includes(itens[9]) && cliquesTotais == 434) ||
    (seusItens.includes(itens[20]) && cliquesTotais == 436)
  ) {
    if (
      confirm(
        `Você pode optar por subir no morro e tentar enfrentar o chefe do tráfico, Deseja subir?`
      )
    ) {
      alert(
        `As pessoas lhe olham estranho, seus antigos amigos te desejam sorte e cumprimentam de canto de olho, perigo no ar.`
      )
      alert(`Você chega na boca e encontra o vagal que lhe removeu de sua casa`)
      alert(`Vocês brigam`)
      alert(`Ele puxa uma arma e...`)

      let valor = Math.random() * 101.1 * 2
      let valorComparado = Math.random() * 101.1

      if (seusItens.includes(itens[15]) == true) {
        alert(
          `Você também puxa uma arma, mas de brinquedo. Ele se caga de medo, pede pra mãe dele para viver e você sem piedade, da uma coronhada na cabeça dele e joga ele morro a baixo.`
        )

        alert(`Você conseguiu recuperar sua dignidade.`)
        alert(
          `Seu Vanderlei já deixou as ruas, conseguiu sua velha casa de volta.`
        )
        alert(
          `O que seria mais digno do que reconstruir sua vida completamente após perder tudo e morar na rua?`
        )
        alert(
          `Vanderlei é um herói, e sua história merece ficar gravada nos nossos corações`
        )
        alert(`Obrigado por jogar meu primeiro jogo! ^w^ -Acchi_Gotchi`)

        let textoNaTela = ''
        textoNaTela += '<!DOCTYPE html>'
        textoNaTela += '<html lang="pt_BR">'
        textoNaTela += '<head>'
        textoNaTela += '<meta charset="UTF-8" />'
        textoNaTela += '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
        textoNaTela +=
          '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
        textoNaTela += '<script src="main.js"></script>'
        textoNaTela += '<link rel="stylesheet" href="style.css" />'
        textoNaTela +=
          '<link rel=" icon" href="Thaciano.jpg" type="image/jpg" />'
        textoNaTela +=
          '<title>Mendigo Simulator 2.0 - Mais Rápido que Celta</title>'
        textoNaTela += '</head>'
        textoNaTela += '<body>'
        textoNaTela += '<style>'
        textoNaTela += 'html,'
        textoNaTela += 'body {'
        textoNaTela += 'background: white;'
        textoNaTela += '}'
        textoNaTela += '</style>'
        textoNaTela += '<form>'
        textoNaTela += '<button>Jogar Novamente </button>'
        textoNaTela += '</form>'
        textoNaTela += '</body>'
        textoNaTela += '</html>'
        document.write(textoNaTela)
      } else if (
        valor < valorComparado &&
        seusItens.includes(itens[15]) == false
      ) {
        alert(
          `Vanderlei leva um tiro na testa e cai duro, não há tempo para as ambulâncias chegarem.`
        )
        alert(`Ele se encontra estapelado no chão, fim de jogo`)
        alert(`Obrigado por jogar meu primeiro jogo! ^w^ -Acchi_Gotchi`)
        let textoNaTela = ''
        textoNaTela += '<!DOCTYPE html>'
        textoNaTela += '<html lang="pt_BR">'
        textoNaTela += '<head>'
        textoNaTela += '<meta charset="UTF-8" />'
        textoNaTela += '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
        textoNaTela +=
          '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
        textoNaTela += '<script src="main.js"></script>'
        textoNaTela += '<link rel="stylesheet" href="style.css" />'
        textoNaTela +=
          '<link rel=" icon" href="Thaciano.jpg" type="image/jpg" />'
        textoNaTela +=
          '<title>Mendigo Simulator 2.0 - Mais Rápido que Celta</title>'
        textoNaTela += '</head>'
        textoNaTela += '<body>'
        textoNaTela += '<style>'
        textoNaTela += 'html,'
        textoNaTela += 'body {'
        textoNaTela += 'background: white;'
        textoNaTela += '}'
        textoNaTela += '</style>'
        textoNaTela += '<form>'
        textoNaTela += '<button>Jogar Novamente </button>'
        textoNaTela += '</form>'
        textoNaTela += '</body>'
        textoNaTela += '</html>'
        document.write(textoNaTela)
      } else if (
        valor >= valorComparado &&
        seusItens.includes(itens[15]) == false
      ) {
        alert(
          `Você o profere um tapa na mão em que está sua arma, a rouba dá um tiro na perna dele.`
        )
        alert(
          `Indo para sua casa, você expulsa os crackudos que estavam em posse dela com sua arma e finalmente Vanderlei tem sua casa de volta.`
        )
        alert(
          `Seu Vanderlei já deixou as ruas, conseguiu sua velha casa de volta.`
        )
        alert(
          `O que seria mais digno do que reconstruir sua vida completamente após perder tudo e morar na rua?`
        )
        alert(
          `Vanderlei é um herói, e sua história merece ficar gravada nos nossos corações`
        )
        alert(`Obrigado por jogar meu primeiro jogo! ^w^ -Acchi_Gotchi`)

        let textoNaTela = ''
        textoNaTela += '<!DOCTYPE html>'
        textoNaTela += '<html lang="pt_BR">'
        textoNaTela += '<head>'
        textoNaTela += '<meta charset="UTF-8" />'
        textoNaTela += '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
        textoNaTela +=
          '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
        textoNaTela += '<script src="main.js"></script>'
        textoNaTela += '<link rel="stylesheet" href="style.css" />'
        textoNaTela +=
          '<link rel=" icon" href="Thaciano.jpg" type="image/jpg" />'
        textoNaTela +=
          '<title>Mendigo Simulator 2.0 - Mais Rápido que Celta</title>'
        textoNaTela += '</head>'
        textoNaTela += '<body>'
        textoNaTela += '<style>'
        textoNaTela += 'html,'
        textoNaTela += 'body {'
        textoNaTela += 'background: white;'
        textoNaTela += '}'
        textoNaTela += '</style>'
        textoNaTela += '<form>'
        textoNaTela += '<button>Jogar Novamente </button>'
        textoNaTela += '</form>'
        textoNaTela += '</body>'
        textoNaTela += '</html>'
        document.write(textoNaTela)
      }
    } else {
      alert(`Esquece isso aí, é muito perigoso, vou reconstruir minha vida`)
    }
  }
}
function finalC() {
  if (diasTotais >= 31) {
    if (seusItens.includes(itens[19]) == false) {
      alert(
        `Infelizmente você demorou de mais para sair das ruas, e se reestabelecer, seu mendigo acaba ficando doente, e descobre um tumor malígno em estado terminal e falece...`
      )
      alert(`Obrigado por jogar meu primeiro jogo! ^w^ -Acchi_Gotchi`)
    } else {
      alert(
        `Você conseguiu sua casa, mas o pessoal do morro e do tráfico resolve de importunar de novo, e você volta as ruas.`
      )
      alert(`Obrigado por jogar meu primeiro jogo! ^w^ -Acchi_Gotchi`)
    }
    let textoNaTela = ''
    textoNaTela += '<!DOCTYPE html>'
    textoNaTela += '<html lang="pt_BR">'
    textoNaTela += '<head>'
    textoNaTela += '<meta charset="UTF-8" />'
    textoNaTela += '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
    textoNaTela +=
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
    textoNaTela += '<script src="main.js"></script>'
    textoNaTela += '<link rel="stylesheet" href="style.css" />'
    textoNaTela += '<link rel=" icon" href="Thaciano.jpg" type="image/jpg" />'
    textoNaTela +=
      '<title>Mendigo Simulator 2.0 - Mais Rápido que Celta</title>'
    textoNaTela += '</head>'
    textoNaTela += '<body>'
    textoNaTela += '<style>'
    textoNaTela += 'html,'
    textoNaTela += 'body {'
    textoNaTela += 'background: white;'
    textoNaTela += '}'
    textoNaTela += '</style>'
    textoNaTela += '<form>'
    textoNaTela += '<button>Jogar Novamente </button>'
    textoNaTela += '</form>'
    textoNaTela += '</body>'
    textoNaTela += '</html>'
    document.write(textoNaTela)
  }
}
function finalD() {
  if (seusMultiplicadores.includes(5.5) == true && diasTotais >= 27) {
    alert(
      `Seu mendigo acaba sendo preso por corrupção, lavagem de dinheiro e paraísos fiscais, mesmo não sendo comprovado se ele roubou de fato ou não.`
    )
    alert(
      `Vanderlei é um herói patriota, sua história merece ficar gravada nos nos corações do povo brasileiro, apesar destas denuncias referidas a este grande homem.`
    )
    alert(`Obrigado por jogar meu primeiro jogo! ^w^ -Acchi_Gotchi`)
    let textoNaTela = ''
    textoNaTela += '<!DOCTYPE html>'
    textoNaTela += '<html lang="pt_BR">'
    textoNaTela += '<head>'
    textoNaTela += '<meta charset="UTF-8" />'
    textoNaTela += '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
    textoNaTela +=
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
    textoNaTela += '<script src="main.js"></script>'
    textoNaTela += '<link rel="stylesheet" href="style.css" />'
    textoNaTela += '<link rel=" icon" href="Thaciano.jpg" type="image/jpg" />'
    textoNaTela +=
      '<title>Mendigo Simulator 2.0 - Mais Rápido que Celta</title>'
    textoNaTela += '</head>'
    textoNaTela += '<body>'
    textoNaTela += '<style>'
    textoNaTela += 'html,'
    textoNaTela += 'body {'
    textoNaTela += 'background: white;'
    textoNaTela += '}'
    textoNaTela += '</style>'
    textoNaTela += '<form>'
    textoNaTela += '<button>Jogar Novamente </button>'
    textoNaTela += '</form>'
    textoNaTela += '</body>'
    textoNaTela += '</html>'
    document.write(textoNaTela)
  }
}
