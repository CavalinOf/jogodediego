// Banco 4: atualidades, datas comemorativas e cultura geral (sem matemática).
// Linhas: pergunta|resposta certa|errada|errada|errada
(function () {
  const sh = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(p => p[1]);
  const seen = new Set(Q.map(q => q[0] + '|' + q[1][q[2]]));
  let T = '';
  function add(t, w, a) {
    const k = t + '|' + a; if (seen.has(k)) return;
    const o = sh([a, ...w]); if (new Set(o).size < 4) return;
    seen.add(k); Q.push([t, o, o.indexOf(a), 2, T]);
  }
  const H = (th, s) => { T = th; s.trim().split('\n').forEach(r => { const f = r.split('|'); if (f.length === 5) add(f[0], f.slice(2), f[1]); }); };

  H('atu', `
Quantos senadores compõem o Senado Federal do Brasil?|81|27|54|513
Quantos deputados federais existem no Brasil?|513|81|594|350
Qual é a duração do mandato de um presidente da República no Brasil?|4 anos|2 anos|5 anos|6 anos
Qual é a idade mínima para votar no Brasil (voto facultativo)?|16 anos|14 anos|18 anos|21 anos
Quantos ministros compõem o Supremo Tribunal Federal?|11|9|7|15
Qual dos Três Poderes é responsável por fazer as leis?|Legislativo|Executivo|Judiciário|Moderador
Quem foi o arquiteto dos principais prédios de Brasília?|Oscar Niemeyer|Burle Marx|Vilanova Artigas|Lina Bo Bardi
Qual é o lema que aparece na bandeira do Brasil?|Ordem e Progresso|Liberdade e Justiça|Paz e Amor|União e Trabalho
Qual usina hidrelétrica é binacional, dividida entre Brasil e Paraguai?|Itaipu|Belo Monte|Tucuruí|Furnas
Em que ano foi criado o programa Bolsa Família?|2003|1995|2010|2015
Qual cidade foi capital do Brasil antes de Brasília?|Rio de Janeiro|Salvador|São Paulo|Belo Horizonte
Qual foi a primeira capital do Brasil?|Salvador|Rio de Janeiro|Recife|Olinda
Qual é a cidade mais populosa do Brasil?|São Paulo|Rio de Janeiro|Brasília|Salvador
Qual país é o maior produtor mundial de café?|Brasil|Colômbia|Vietnã|Etiópia
Em qual estádio foi disputada a final da Copa do Mundo de 2014?|Maracanã|Mineirão|Morumbi|Arena Corinthians
Em qual cidade fica a sede da ONU?|Nova York|Genebra|Paris|Washington
Quantos países têm assento permanente no Conselho de Segurança da ONU?|5|3|7|10
O que foi o Brexit?|A saída do Reino Unido da União Europeia|A criação do euro|A divisão da Irlanda|Um acordo comercial com os EUA
Em qual país foram registrados os primeiros casos de covid-19?|China|Itália|Estados Unidos|Brasil
Qual empresa é dona do YouTube?|Google|Meta|Microsoft|Amazon
Quem criou o Facebook?|Mark Zuckerberg|Bill Gates|Jeff Bezos|Elon Musk
Qual rede social foi renomeada para X em 2023?|Twitter|Instagram|TikTok|Facebook
Qual empresa é dona do Instagram e do WhatsApp?|Meta|Google|Apple|Microsoft
Qual empresa criou o ChatGPT?|OpenAI|Google|Apple|Amazon
Qual cidade sediou as Olimpíadas de 2024?|Paris|Tóquio|Londres|Los Angeles
Qual cidade sediará as Olimpíadas de 2028?|Los Angeles|Brisbane|Paris|Tóquio
Quais países sediaram em conjunto a Copa do Mundo de 2026?|Estados Unidos, Canadá e México|Brasil e Argentina|Espanha e Portugal|Japão e Coreia do Sul
Qual país sediou a Copa do Mundo de 2018?|Rússia|Catar|Alemanha|África do Sul
Qual país sediou a Copa do Mundo de 2010?|África do Sul|Brasil|Alemanha|Japão
Qual seleção foi campeã da Copa do Mundo de 2018?|França|Croácia|Bélgica|Brasil
Em qual país nasceu o papa Francisco?|Argentina|Itália|Brasil|Espanha
Qual nome escolheu o papa eleito em maio de 2025?|Leão XIV|Francisco II|João Paulo III|Pio XIII
Qual telescópio espacial da NASA foi lançado em dezembro de 2021?|James Webb|Hubble|Kepler|Spitzer
Qual empresa fundada por Elon Musk fabrica foguetes?|SpaceX|Blue Origin|Boeing|Virgin Galactic
Qual é o principal gás responsável pelo aquecimento global causado pelo ser humano?|Gás carbônico|Oxigênio|Nitrogênio|Hélio
Qual é a principal fonte de energia elétrica do Brasil?|Hidrelétrica|Nuclear|Carvão|Eólica
Qual camada protege a Terra dos raios ultravioleta?|Camada de ozônio|Ionosfera|Troposfera|Exosfera
Qual é o maior campeão da Liga dos Campeões da Europa?|Real Madrid|Barcelona|Milan|Bayern de Munique
`);
  H('bra', `
O bloco Galo da Madrugada, um dos maiores do mundo, desfila em qual cidade?|Recife|Olinda|Salvador|Rio de Janeiro
O famoso São João de Caruaru fica em qual estado?|Pernambuco|Paraíba|Bahia|Ceará
Qual cidade é conhecida como a «Veneza Brasileira»?|Recife|Manaus|Belém|Fortaleza
O Pelourinho é um famoso bairro histórico de qual cidade?|Salvador|Olinda|Recife|São Luís
Fernando de Noronha pertence a qual estado?|Pernambuco|Bahia|Ceará|Rio Grande do Norte
Os Lençóis Maranhenses ficam em qual estado?|Maranhão|Piauí|Ceará|Bahia
Qual rio forma as Cataratas do Iguaçu?|Iguaçu|Paraná|Uruguai|São Francisco
Qual é o rio que corta a cidade de São Paulo?|Tietê|Amazonas|São Francisco|Paraíba do Sul
Qual é a árvore-símbolo do Brasil, que deu nome ao país?|Pau-brasil|Ipê|Jacarandá|Araucária
O acarajé é um prato típico de qual estado?|Bahia|Pernambuco|Ceará|Maranhão
Qual é o principal ingrediente da feijoada?|Feijão preto|Feijão-verde|Grão-de-bico|Lentilha
Qual é o doce típico de Pernambuco feito de massa fina enrolada com goiabada?|Bolo de rolo|Brigadeiro|Quindim|Cocada
O chimarrão é preparado com qual erva?|Erva-mate|Capim-santo|Hortelã|Boldo
O pão de queijo é típico de qual estado?|Minas Gerais|Bahia|Goiás|Paraná
O tacacá é um prato típico de qual região do Brasil?|Norte|Sul|Sudeste|Centro-Oeste
`);
  H('art', `
De qual cidade britânica são os Beatles?|Liverpool|Londres|Manchester|Birmingham
Qual artista é conhecido como o «Rei do Baião»?|Luiz Gonzaga|Gilberto Gil|Jackson do Pandeiro|Dominguinhos
Qual movimento cultural pernambucano foi liderado por Chico Science?|Manguebeat|Tropicália|Bossa nova|Jovem Guarda
Quem escreveu «O Auto da Compadecida»?|Ariano Suassuna|Jorge Amado|João Cabral de Melo Neto|Graciliano Ramos
`);
  H('esp', `
Qual time do Recife é conhecido como «Leão da Ilha»?|Sport|Náutico|Santa Cruz|Central
Qual tenista brasileiro venceu Roland Garros três vezes?|Gustavo Kuerten|Thomaz Bellucci|Fernando Meligeni|Marcelo Melo
Qual piloto brasileiro morreu em 1994 no GP de San Marino, em Ímola?|Ayrton Senna|Nelson Piquet|Rubens Barrichello|Emerson Fittipaldi
Em qual esporte Rebeca Andrade ganhou medalhas olímpicas?|Ginástica artística|Atletismo|Natação|Judô
Marta, eleita várias vezes a melhor do mundo, joga qual esporte?|Futebol|Vôlei|Basquete|Handebol
`);
  H('cie', `
Qual é o menor osso do corpo humano?|Estribo|Martelo|Falange|Fíbula
Qual é o maior órgão interno do corpo humano?|Fígado|Pulmão|Coração|Estômago
Qual planeta tem uma enorme tempestade chamada Grande Mancha Vermelha?|Júpiter|Marte|Saturno|Netuno
Qual é o nome da galáxia onde fica o Sistema Solar?|Via Láctea|Andrômeda|Triângulo|Sombrero
`);
  H('geo', `
Qual é o maior continente do planeta em área?|Ásia|África|América do Norte|Europa
Qual é o menor continente do planeta em área?|Oceania|Europa|Antártida|América do Sul
Qual oceano banha o litoral brasileiro?|Atlântico|Pacífico|Índico|Ártico
Em qual país é famosa a Oktoberfest?|Alemanha|Áustria|Bélgica|Holanda
O sushi é um prato típico de qual país?|Japão|China|Coreia do Sul|Tailândia
O Papa reside em qual cidade-estado?|Vaticano|Roma|Mônaco|San Marino
`);

  // Apelidos de clubes e estádios
  const rows = s => s.split(';').map(r => r.split('|'));
  const gen = (tpl, P) => P.forEach(([x, a]) => add(tpl.replace('{0}', x), sh(P.map(r => r[1]).filter(v => v !== a)).slice(0, 3), a));
  T = 'esp';
  gen('Qual clube brasileiro tem o apelido «{0}»?', rows('Timão|Corinthians;Verdão|Palmeiras;Galo|Atlético Mineiro;Raposa|Cruzeiro;Mengão|Flamengo;Colorado|Internacional;Imortal|Grêmio;Peixe|Santos;Fogão|Botafogo;Gigante da Colina|Vasco da Gama;Leão do Pici|Fortaleza;Leão da Ilha|Sport'));
  gen('Em qual cidade fica o estádio {0}?', rows('Maracanã|Rio de Janeiro;Morumbi|São Paulo;Mineirão|Belo Horizonte;Beira-Rio|Porto Alegre;Castelão|Fortaleza;Arena Fonte Nova|Salvador;Mané Garrincha|Brasília'));

  // Datas comemorativas: data do evento e, quando a data é única, o evento da data
  const D = rows('Dia da Consciência Negra|20 de novembro;Dia da Independência do Brasil|7 de setembro;Proclamação da República|15 de novembro;Dia do Trabalhador|1º de maio;Natal|25 de dezembro;Dia de Tiradentes|21 de abril;Dia de Nossa Senhora Aparecida|12 de outubro;Dia das Crianças|12 de outubro;Dia de Finados|2 de novembro;Dia Internacional da Mulher|8 de março;Dia Mundial do Meio Ambiente|5 de junho;Dia da Terra|22 de abril;Dia da Árvore|21 de setembro;Dia dos Povos Indígenas|19 de abril;Dia do Professor|15 de outubro;Dia do Médico|18 de outubro;Dia da Bandeira|19 de novembro;Dia da Amazônia|5 de setembro;Dia do Folclore|22 de agosto;Dia Mundial da Água|22 de março;Dia dos Namorados no Brasil|12 de junho;Dia do Amigo|20 de julho;Dia do Soldado|25 de agosto;Abolição da Escravatura (Lei Áurea)|13 de maio;Dia da Mentira|1º de abril;Dia das Bruxas (Halloween)|31 de outubro;Dia de São João|24 de junho;Ano-Novo|1º de janeiro;Dia de Reis|6 de janeiro;Dia do Bombeiro|2 de julho;Dia do Jornalista|7 de abril;Dia Mundial da Saúde|7 de abril;Dia do Advogado|11 de agosto;Dia do Estudante|11 de agosto;Dia Mundial da Alimentação|16 de outubro;Dia Internacional dos Direitos Humanos|10 de dezembro;Dia de São Valentim (namorados nos EUA)|14 de fevereiro;Dia do Nordestino|8 de outubro;Dia do Servidor Público|28 de outubro;Dia do Dentista|25 de outubro;Dia do Engenheiro|11 de dezembro;Dia do Enfermeiro|12 de maio;Dia Internacional da Paz|21 de setembro;Dia do Aviador|23 de outubro;Dia Internacional da Pessoa Idosa|1º de outubro;Dia da Imprensa|1º de junho;Dia de Santo Antônio|13 de junho;Dia de São Pedro|29 de junho;Dia de São Jorge|23 de abril');
  const dates = [...new Set(D.map(r => r[1]))];
  T = 'atu';
  D.forEach(([e, d]) => {
    add(`Em qual data se comemora: ${e}?`, sh(dates.filter(x => x !== d)).slice(0, 3), d);
    if (D.filter(r => r[1] === d).length === 1) add(`O que se comemora em ${d}?`, sh(D.filter(r => r[1] !== d).map(r => r[0])).slice(0, 3), e);
  });
})();
