// Banco 3: mais de 1000 perguntas geradas de tabelas (acrescente linhas para crescer). Repetidas são ignoradas.
(function () {
  const sh = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(p => p[1]);
  const seen = new Set(Q.map(q => q[0] + '|' + q[1][q[2]]));
  let T = '';
  const rows = s => s.split(';').map(r => r.split('|'));
  const pick = (pool, a) => sh([...new Set(pool)].filter(v => v !== a)).slice(0, 3);
  function add(t, w, a, l) {
    const k = t + '|' + a; if (seen.has(k)) return;
    const o = sh([a, ...w]); if (new Set(o).size < 4) return;
    seen.add(k); Q.push([t, o, o.indexOf(a), l, T]);
  }
  function numadd(t, a, l) {
    const d = a < 12 ? [1, 2, 3, 4] : a < 60 ? [1, 2, 4, 6, 10] : a < 300 ? [2, 10, 20, 30, 50] : [1, 2, 3, 5, 10, 20];
    add(t, sh(d.flatMap(x => [a + x, a - x]).filter(x => x > 0)).slice(0, 3).map(String), String(a), l);
  }
  function gen(tpl, P, ai, l, pool) {
    pool = pool || P.map(r => r[ai]);
    P.forEach(r => { const t = tpl.replace(/\{(\d)\}/g, (_, i) => r[i]); if (!t.includes(r[ai])) add(t, pick(pool, r[ai]), r[ai], l); });
  }

  // Países: capital, capital -> país, continente
  T = 'geo';
  const CN = { s: 'América do Sul', n: 'América do Norte', e: 'Europa', a: 'Ásia', f: 'África', o: 'Oceania' };
  const C = rows('Argentina|Buenos Aires|s;Chile|Santiago|s;Uruguai|Montevidéu|s;Paraguai|Assunção|s;Peru|Lima|s;Colômbia|Bogotá|s;Venezuela|Caracas|s;Equador|Quito|s;Brasil|Brasília|s;Guiana|Georgetown|s;Suriname|Paramaribo|s;México|Cidade do México|n;Cuba|Havana|n;Estados Unidos|Washington D.C.|n;Canadá|Ottawa|n;Panamá|Cidade do Panamá|n;Costa Rica|San José|n;Jamaica|Kingston|n;Haiti|Porto Príncipe|n;Guatemala|Cidade da Guatemala|n;Honduras|Tegucigalpa|n;Nicarágua|Manágua|n;El Salvador|San Salvador|n;República Dominicana|Santo Domingo|n;Bahamas|Nassau|n;Portugal|Lisboa|e;Espanha|Madri|e;Itália|Roma|e;Alemanha|Berlim|e;França|Paris|e;Reino Unido|Londres|e;Irlanda|Dublin|e;Holanda|Amsterdã|e;Bélgica|Bruxelas|e;Suíça|Berna|e;Áustria|Viena|e;Grécia|Atenas|e;Polônia|Varsóvia|e;Suécia|Estocolmo|e;Noruega|Oslo|e;Finlândia|Helsinque|e;Dinamarca|Copenhague|e;Hungria|Budapeste|e;República Tcheca|Praga|e;Ucrânia|Kiev|e;Croácia|Zagreb|e;Romênia|Bucareste|e;Islândia|Reykjavik|e;Bulgária|Sófia|e;Sérvia|Belgrado|e;Eslováquia|Bratislava|e;Eslovênia|Liubliana|e;Lituânia|Vilnius|e;Letônia|Riga|e;Estônia|Tallinn|e;Albânia|Tirana|e;Bielorrússia|Minsk|e;Japão|Tóquio|a;China|Pequim|a;Coreia do Sul|Seul|a;Índia|Nova Délhi|a;Tailândia|Bangkok|a;Vietnã|Hanói|a;Filipinas|Manila|a;Irã|Teerã|a;Iraque|Bagdá|a;Arábia Saudita|Riade|a;Paquistão|Islamabade|a;Afeganistão|Cabul|a;Nepal|Katmandu|a;Líbano|Beirute|a;Síria|Damasco|a;Mongólia|Ulan Bator|a;Bangladesh|Daca|a;Camboja|Phnom Penh|a;Laos|Vientiane|a;Malásia|Kuala Lumpur|a;Catar|Doha|a;Jordânia|Amã|a;Emirados Árabes Unidos|Abu Dhabi|a;Coreia do Norte|Pyongyang|a;Egito|Cairo|f;Marrocos|Rabat|f;Argélia|Argel|f;Nigéria|Abuja|f;Quênia|Nairóbi|f;Etiópia|Adis Abeba|f;Angola|Luanda|f;Moçambique|Maputo|f;Gana|Acra|f;Senegal|Dacar|f;Tunísia|Túnis|f;Cabo Verde|Praia|f;Líbia|Trípoli|f;Sudão|Cartum|f;Tanzânia|Dodoma|f;Uganda|Kampala|f;Zimbábue|Harare|f;Zâmbia|Lusaka|f;Namíbia|Windhoek|f;Camarões|Iaundé|f;Madagascar|Antananarivo|f;Guiné-Bissau|Bissau|f;Mali|Bamako|f;Austrália|Camberra|o;Nova Zelândia|Wellington|o;Fiji|Suva|o').map(r => [r[0], r[1], CN[r[2]]]);
  gen('Qual é a capital deste país: {0}?', C, 1, 2);
  gen('{1} é a capital de qual país?', C, 0, 2);
  gen('Em qual continente fica este país: {0}?', C, 2, 1, Object.values(CN));

  // Estados brasileiros
  T = 'bra';
  const E = rows('Acre|AC|Rio Branco;Alagoas|AL|Maceió;Amapá|AP|Macapá;Amazonas|AM|Manaus;Bahia|BA|Salvador;Ceará|CE|Fortaleza;Distrito Federal|DF|Brasília;Espírito Santo|ES|Vitória;Goiás|GO|Goiânia;Maranhão|MA|São Luís;Mato Grosso|MT|Cuiabá;Mato Grosso do Sul|MS|Campo Grande;Minas Gerais|MG|Belo Horizonte;Pará|PA|Belém;Paraíba|PB|João Pessoa;Paraná|PR|Curitiba;Pernambuco|PE|Recife;Piauí|PI|Teresina;Rio de Janeiro|RJ|Rio de Janeiro;Rio Grande do Norte|RN|Natal;Rio Grande do Sul|RS|Porto Alegre;Rondônia|RO|Porto Velho;Roraima|RR|Boa Vista;Santa Catarina|SC|Florianópolis;São Paulo|SP|São Paulo;Sergipe|SE|Aracaju;Tocantins|TO|Palmas');
  gen('Qual é a sigla da unidade da federação {0}?', E, 1, 2);
  gen('Qual unidade da federação tem a sigla {1}?', E, 0, 2);
  gen('{2} é a capital de qual unidade da federação?', E, 0, 2);
  gen('Qual bioma brasileiro {0}?', rows('abriga a maior floresta tropical do planeta|Amazônia;é de savana e ocupa o Brasil Central|Cerrado;tem clima semiárido e vegetação adaptada à seca, no Nordeste|Caatinga;é formado por grandes planícies alagáveis em Mato Grosso e Mato Grosso do Sul|Pantanal;é formado por campos no sul do Rio Grande do Sul|Pampa;cobria originalmente boa parte do litoral brasileiro|Mata Atlântica'), 1, 2);

  // Ciências
  T = 'cie';
  const EL = rows('Hidrogênio|H|1;Hélio|He|2;Lítio|Li|3;Carbono|C|6;Nitrogênio|N|7;Oxigênio|O|8;Flúor|F|9;Neônio|Ne|10;Sódio|Na|11;Magnésio|Mg|12;Alumínio|Al|13;Silício|Si|14;Fósforo|P|15;Enxofre|S|16;Cloro|Cl|17;Argônio|Ar|18;Potássio|K|19;Cálcio|Ca|20;Ferro|Fe|26;Níquel|Ni|28;Cobre|Cu|29;Zinco|Zn|30;Prata|Ag|47;Estanho|Sn|50;Iodo|I|53;Platina|Pt|78;Ouro|Au|79;Mercúrio|Hg|80;Chumbo|Pb|82;Urânio|U|92');
  EL.forEach(r => numadd('Qual é o número atômico do elemento ' + r[0] + '?', +r[2], 3));
  gen('Qual elemento químico tem o símbolo {1}?', EL, 0, 2);
  gen('O animal «{0}» é:', rows('vaca|Herbívoro;leão|Carnívoro;urso|Onívoro;elefante|Herbívoro;tigre|Carnívoro;porco|Onívoro;girafa|Herbívoro;lobo|Carnívoro;cavalo|Herbívoro;tubarão|Carnívoro;coelho|Herbívoro;galinha|Onívoro;jacaré|Carnívoro;panda|Herbívoro;águia|Carnívoro;ovelha|Herbívoro;cabra|Herbívoro;chimpanzé|Onívoro;capivara|Herbívoro;tamanduá|Insetívoro'), 1, 2, ['Herbívoro', 'Carnívoro', 'Onívoro', 'Insetívoro']);
  gen('Qual é o nome do processo {0}?', rows('pelo qual as plantas produzem glicose usando a luz do sol|Fotossíntese;pelo qual um líquido vira gás|Evaporação;pelo qual um gás vira líquido|Condensação;pelo qual um sólido vira líquido|Fusão;pelo qual a água vira gelo|Solidificação;pelo qual a célula se divide em duas idênticas|Mitose;em que as plantas perdem água pelas folhas|Transpiração;de troca de gases nos pulmões|Hematose;pelo qual os alimentos são quebrados no corpo|Digestão;pelo qual um sólido vira gás sem passar pelo estado líquido|Sublimação'), 1, 2);
  gen('Qual ciência estuda {0}?', rows('os seres vivos|Biologia;os astros e o universo|Astronomia;as rochas e a estrutura da Terra|Geologia;o clima e a atmosfera|Meteorologia;as plantas|Botânica;os animais|Zoologia;os insetos|Entomologia;os povos e suas culturas|Antropologia;a mente e o comportamento|Psicologia;os fósseis|Paleontologia'), 1, 2);
  const PL = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno'];
  PL.forEach((p, i) => add(`Qual é o ${i + 1}º planeta a partir do Sol?`, pick(PL, p), p, 2));

  // História e personalidades
  T = 'his';
  rows('a Independência do Brasil foi proclamada|1822;a República foi proclamada no Brasil|1889;terminou a Segunda Guerra Mundial|1945;caiu o Muro de Berlim|1989;começou a Revolução Francesa|1789;Vasco da Gama chegou à Índia|1498;o Brasil sediou as Olimpíadas|2016;Getúlio Vargas chegou ao poder com a Revolução de 1930|1930;começou a Guerra do Paraguai|1864;foi fundado o Estado de Israel|1948;a União Soviética foi dissolvida|1991;Santos Dumont voou com o 14-Bis em Paris|1906;foi fundada a cidade do Rio de Janeiro|1565;Barack Obama tomou posse como presidente dos EUA|2009;o euro começou a circular em notas e moedas|2002;o primeiro iPhone foi lançado|2007;foi criada a Petrobras|1953;o Maracanã foi inaugurado|1950;a Copa do Mundo foi disputada no Catar|2022').forEach(r => numadd('Em que ano ' + r[0] + '?', +r[1], 3));
  gen('Quem foi {0}?', rows('o líder indiano da não violência|Mahatma Gandhi;o líder sul-africano que combateu o apartheid|Nelson Mandela;o criador da teoria da relatividade|Albert Einstein;o navegador que chegou à América em 1492|Cristóvão Colombo;o imperador francês derrotado em Waterloo|Napoleão Bonaparte;o líder negro americano que lutou pelos direitos civis e fez o discurso «Eu tenho um sonho»|Martin Luther King;o primeiro presidente dos Estados Unidos|George Washington;o presidente americano que aboliu a escravidão|Abraham Lincoln;a pioneira da enfermagem moderna|Florence Nightingale;o criador da psicanálise|Sigmund Freud;o filósofo grego mestre de Platão|Sócrates;o filósofo grego tutor de Alexandre, o Grande|Aristóteles;o conquistador macedônio que criou um vasto império|Alexandre, o Grande;o compositor de «As Quatro Estações»|Antonio Vivaldi;o compositor que ficou surdo e escreveu a «Ode à Alegria»|Ludwig van Beethoven;o criador da Microsoft|Bill Gates;o cofundador da Apple|Steve Jobs;o pai da aviação brasileira|Santos Dumont;a rainha do Egito que se aliou a Júlio César|Cleópatra;o líder da Revolução Cubana de 1959|Fidel Castro;o líder nazista da Alemanha|Adolf Hitler;o primeiro-ministro britânico durante a Segunda Guerra Mundial|Winston Churchill;a princesa que assinou a Lei Áurea|Princesa Isabel;o imperador do Brasil que reinou por quase 50 anos|Dom Pedro II;o presidente brasileiro que criou a CLT|Getúlio Vargas;o físico britânico autor de «Uma Breve História do Tempo»|Stephen Hawking'), 1, 3);

  // Idiomas
  T = 'lin';
  rows('exceção|excessão|esceção|eceção;excesso|exceço|ecesso|excesço;paralisar|paralizar|parralisar|paralissar;analisar|analizar|anallisar|analissar;privilégio|previlégio|privilégo|prevelégio;beneficente|beneficiente|benefisente|beneficênte;pretensão|pretenção|pretenssão|pretençao;obsessão|obseção|obcessão|obsecão;mortadela|mortandela|murtadela|mortadella;sobrancelha|sombrancelha|sobransselha|sobrancelia;maquiagem|maquiajem|maquiágem|maquiagen;expectativa|espectativa|exspectativa|espectatíva;interesse|intersse|interece|interese;chuchu|xuxu|chuchú|chuxu;berinjela|beringela|berinjéla|berigela;asterisco|asterístico|asterisko|astérisco;mendigo|mendingo|mendígo|menndigo;assessor|asessor|assesor|acessor;empecilho|impecilho|empessilho|empecillho').forEach(r => add('Qual palavra está escrita corretamente?', [r[1], r[2], r[3]], r[0], 2));
  gen('Qual é o antônimo de «{0}»?', rows('alto|baixo;rápido|lento;grande|pequeno;feliz|triste;forte|fraco;claro|escuro;quente|frio;cheio|vazio;novo|velho;doce|amargo;rico|pobre;duro|mole;longe|perto;subir|descer;abrir|fechar;amar|odiar;entrar|sair;chegar|partir;vencer|perder;começo|fim;dia|noite;verdade|mentira;paz|guerra;bom|mau;gordo|magro;leve|pesado;seco|molhado;largo|estreito;fácil|difícil;comprar|vender;lembrar|esquecer;presente|ausente;barato|caro;cedo|tarde'), 1, 2);
  const EN = rows('cachorro|dog;gato|cat;casa|house;livro|book;água|water;maçã|apple;carro|car;escola|school;amigo|friend;família|family;vermelho|red;azul|blue;verde|green;amarelo|yellow;preto|black;branco|white;um|one;dois|two;três|three;obrigado|thank you;bom dia|good morning;cadeira|chair;mesa|table;janela|window;porta|door;cidade|city;rua|street;sol|sun;lua|moon;estrela|star;chuva|rain;pão|bread;leite|milk;queijo|cheese;peixe|fish;pássaro|bird;cavalo|horse;vaca|cow;porco|pig;mão|hand;olho|eye;cabeça|head;pé|foot;coração|heart;feliz|happy;triste|sad;grande|big;pequeno|small;rápido|fast');
  gen('Como se diz «{0}» em inglês?', EN, 1, 1);
  gen('O que significa «{1}» em inglês?', EN, 0, 1);

  // Siglas
  T = 'sig';
  const SG = rows('CPU|Unidade Central de Processamento;RAM|Memória de Acesso Aleatório;USB|Barramento Serial Universal;PDF|Formato de Documento Portátil;HTML|Linguagem de Marcação de Hipertexto;GPS|Sistema de Posicionamento Global;SMS|Serviço de Mensagens Curtas;WWW|Rede Mundial de Computadores;OMS|Organização Mundial da Saúde;FIFA|Federação Internacional de Futebol;NASA|Administração Nacional da Aeronáutica e Espaço;PIB|Produto Interno Bruto;IBGE|Instituto Brasileiro de Geografia e Estatística;CPF|Cadastro de Pessoas Físicas;CNPJ|Cadastro Nacional da Pessoa Jurídica;OAB|Ordem dos Advogados do Brasil;STF|Supremo Tribunal Federal;INSS|Instituto Nacional do Seguro Social;FGTS|Fundo de Garantia do Tempo de Serviço;ENEM|Exame Nacional do Ensino Médio;SUS|Sistema Único de Saúde;UTI|Unidade de Terapia Intensiva;DNA|Ácido Desoxirribonucleico;ONG|Organização Não Governamental;OTAN|Organização do Tratado do Atlântico Norte;UE|União Europeia;FMI|Fundo Monetário Internacional;IPTU|Imposto Predial e Territorial Urbano;IPVA|Imposto sobre a Propriedade de Veículos Automotores;CLT|Consolidação das Leis do Trabalho;CNH|Carteira Nacional de Habilitação;RG|Registro Geral;LED|Diodo Emissor de Luz;SAMU|Serviço de Atendimento Móvel de Urgência;CEP|Código de Endereçamento Postal;ABNT|Associação Brasileira de Normas Técnicas');
  gen('O que significa a sigla {0}?', SG, 1, 2);
  gen('Qual sigla significa «{1}»?', SG, 0, 2);

  // Matemática e curiosidades numéricas
  T = 'mat';
  const RM = rows('XIV|14;XIX|19;XL|40;XLIV|44;XC|90;CD|400;CM|900;MCMXC|1990;MMXXIV|2024;XXVII|27;DCLXVI|666;MDCCC|1800');
  gen('Qual número o algarismo romano {0} representa?', RM, 1, 2);
  gen('Como se escreve o número {1} em algarismos romanos?', RM, 0, 2);
  rows('triângulo|3;quadrado|4;pentágono|5;octógono|8;eneágono|9;decágono|10;dodecágono|12').forEach(r => numadd(`Quantos lados tem um ${r[0]}?`, +r[1], 2));
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const rep = (n, f) => { for (let i = 0; i < n; i++) f(); };
  rep(60, () => { const a = R(120, 899), b = R(100, 499); numadd(`Quanto é ${a} + ${b}?`, a + b, 2); });
  rep(45, () => { const b = R(100, 450), a = b + R(50, 450); numadd(`Quanto é ${a} − ${b}?`, a - b, 2); });
  rep(35, () => { const a = R(21, 49), b = R(6, 9); numadd(`Quanto é ${a} × ${b}?`, a * b, 2); });
  rep(45, () => { const b = R(3, 12), q = R(6, 40); numadd(`Quanto é ${b * q} ÷ ${b}?`, q, 2); });
  rep(35, () => { const f = [2, 3, 4, 5, 10][R(0, 4)], n = f * R(4, 40); numadd(`Quanto é 1/${f} de ${n}?`, n / f, 2); });
  rep(30, () => { const a = R(3, 25), b = R(3, 25); numadd(`Qual é a área de um retângulo de ${a} m por ${b} m, em m²?`, a * b, 2); });
  rep(25, () => { const a = R(3, 40); numadd(`Qual é o perímetro de um quadrado de lado ${a} cm?`, 4 * a, 2); });
  rep(35, () => { const a = R(1, 20), d = R(2, 9); numadd(`Qual é o próximo número da sequência ${a}, ${a + d}, ${a + 2 * d}, ${a + 3 * d}, ...?`, a + 4 * d, 2); });
  rep(25, () => { const m = R(4, 30), a = m - R(1, 3), c = m + R(1, 3); numadd(`Qual é a média de ${a}, ${m}, ${m} e ${c}?`, m, 2); });
  for (let h = 2; h <= 12; h++) numadd(`Quantos minutos há em ${h} horas?`, 60 * h, 1);
  for (let d = 2; d <= 9; d++) numadd(`Quantas horas há em ${d} dias?`, 24 * d, 1);
  for (let n = 2; n <= 10; n++) numadd(`Quanto é ${n} ao cubo?`, n ** 3, 2);
  T = 'cur';
  rows('janeiro|31;março|31;abril|30;maio|31;junho|30;julho|31;agosto|31;setembro|30;outubro|31;novembro|30;dezembro|31').forEach(r => numadd(`Quantos dias tem o mês de ${r[0]}?`, +r[1], 1));
})();
