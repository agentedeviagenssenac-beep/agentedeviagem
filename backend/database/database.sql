-- TABELAS CRIADAS 
create table usuarios 
(   id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome nvarchar(100) NOT NULL,   
    email nvarchar(200) UNIQUE NOT NULL, 
    senha nvarchar(12) NOT NULL, 
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
    );

create table destinos 
(   id INTEGER PRIMARY KEY AUTOINCREMENT, 
    titulo nvarchar(100) NOT NULL, 
    descricao nvarchar(500), 
    local nvarchar(MAX) NOT NULL, 
    faixa_preco NUMERIC(8,2), 
    img nvarchar(10000), 
    data_criacao DATETIME CURRENT_TIMESTAMP
    );

-- ABAIXO, COLOQUE OS COMANDOS PARA INSERÇÂO DE DADOS NAS TABELAS CRIADAS

-- PONTOS TURÍSTICOS 

 INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES ( 
    'Pedra do Itabira', 
'O Pico do Itabira — ou Pedra do Itabira — é a formação rochosa mais conhecida de Cachoeiro de Itapemirim. Seu formato lembra um dedo indicador apontado para o céu e pode ser visto de vários pontos da cidade.

O nome vem do tupi e costuma ser traduzido como “pedra empinada” ou “pedra brilhante”. A área é protegida como Monumento Natural do Itabira, unidade de conservação estadual.

Ao redor da pedra há passeios de contemplação e fotografia. Escaladas e trilhas exigem acompanhamento especializado e equipamento adequado.',

'Zona rural próxima ao centro de Cachoeiro',

'NULL',

'https://www.mochileiros.com/upload/galeria/fotos/20121203183109.JPG',

'2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Pedra da Penha',
    'A Pedra da Penha fica na comunidade de Alto São Vicente, no distrito de São Vicente, e é considerada o ponto mais alto de Cachoeiro de Itapemirim. Em dias de céu aberto, o mirante revela o litoral capixaba e a divisa com o Rio de Janeiro.

    A trilha tem cerca de 2 km de subida em meio à mata, com trechos de escada e corrimão de madeira mantidos pela comunidade. Perto da pedra há um altar com a imagem de Nossa Senhora da Penha, padroeira do Espírito Santo, construído por volta de 1930.

    A Festa da Pedra da Penha integra o calendário oficial do município. Na comunidade, restaurantes servem comida caseira no fogão a lenha.',

    'Alto São Vicente, distrito de São Vicente',

    'NULL',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqXAE9_hCYJZik6ioHpLCNKwBNl7ydt_7GvNq0CVZyg-aocNV2F918J4B&s=10',

    '2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Casa de Cultura Roberto Carlos',
    'A casa onde Roberto Carlos nasceu e viveu parte da infância foi comprada pela prefeitura e aberta à visitação em 13 de novembro de 2000. Restaurada para valorizar a arquitetura original, guarda fotos, discos, quadros e instrumentos musicais.

Reconhecida como patrimônio histórico do município, a casa é o ponto principal da Semana do Rei, programação realizada em abril, mês de aniversário do cantor. Na rua de acesso fica uma estátua do cantor em mármore branco, obra da artista Ângela Borelli.',

'Rua João de Deus Madureira, Recanto — confirme o número'

'NULL',

'https://upload.wikimedia.org/wikipedia/commons/8/83/Casa_de_Cultura_Roberto_Carlos%2C_Cachoeiro_de_Itapemerim_ES.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',

'2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Casa dos Braga',
    'A Casa dos Braga é o antigo casarão de estilo português onde viveram os irmãos Rubem Braga, o grande cronista brasileiro, e Newton Braga, poeta e criador da Festa de Cachoeiro. O imóvel é tombado pelo patrimônio histórico municipal e estadual.

Hoje abriga a Biblioteca Pública Municipal e um espaço com livros, manuscritos, pinturas e fotos dos irmãos. Nas paredes, trechos de crônicas convidam o visitante a mergulhar na obra de Rubem Braga. Ao lado fica a Praça da Poesia, palco de eventos culturais.',

'Rua 25 de Março, 166 — Centro',

'NULL',

'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxDCQjp835aqTguWOm0Sep0qyTEiOAaXNCEBi8KRi4fvU2d7p2SpNXpw&s=10',

'2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Catedral de São Pedro',
    'A pedra fundamental foi lançada em 1925 e a nova matriz da Paróquia São Pedro foi inaugurada em 1949. Com a criação da Diocese de Cachoeiro de Itapemirim, em 1958, a igreja tornou-se catedral.

São Pedro é o padroeiro da cidade: segundo a tradição, a história oficial de Cachoeiro começou num 29 de junho, dia do santo, data que também marca o Dia de Cachoeiro. A procissão de São Pedro sai da catedral durante a Festa de Cachoeiro.',

'Centro de Cachoeiro',

'NULL',

'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_skxQSEzO3b1Bm9JIehN-5f1ebiSrYMhumbfx8ZLrsDvZi4bDXOZsDCK&s=10',

'2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Ponte de Ferro',
    'Inaugurada em 27 de junho de 1910, com a presença do presidente Nilo Peçanha, a Ponte de Ferro integrava a ferrovia da Leopoldina Railway e completou a ligação entre Cachoeiro e Vitória.

A estrutura metálica, com cerca de 127 metros, foi fabricada na Inglaterra. Após a desativação do trecho ferroviário, a ponte passou a servir a pedestres, ciclistas e veículos leves. À noite, a iluminação realça sua silhueta sobre o rio.

É tombada pelo município e fica perto do Museu Ferroviário Domingos Lage e do Teatro Municipal Rubem Braga.',

'Centro, sobre o Rio Itapemirim',

'NULL',

'https://cdn.esbrasil.com.br/wp-content/uploads/2025/10/ipatrimonio_Cachoeiro-de-Itapemirim-Ponte-de-Ferro_Imagem-Prefeitura-Municipal.jpg',

'2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Praça Jerônimo Monteiro',
    'No coração do centro, a Praça Jerônimo Monteiro leva o nome do cachoeirense que governou o Espírito Santo entre 1908 e 1912. Palmeiras, chafariz e cafés ao redor fazem dela ponto de encontro tradicional.

Ali está a escultura de Newton Braga, com versos do poema “Fraternidade” gravados na base. Todo 29 de junho, o monumento recebe flores e leitura de poemas em homenagem ao idealizador do Dia de Cachoeiro.',
'Centro',
'NULL',
'https://upload.wikimedia.org/wikipedia/commons/b/b7/Pra%C3%A7a_Jer%C3%B4nimo_Monteiro%2C_Cachoeiro_de_Itapemirim_ES.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
'2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Museu Ferroviário Domingos Lage',
    'A antiga Estação Ferroviária de Cachoeiro, de estilo inglês, foi inaugurada em 1903 e pertenceu à Estrada de Ferro Leopoldina. Foi o principal ponto de ligação da cidade com Vitória, o Rio de Janeiro, o sul capixaba e a Zona da Mata mineira.

A estação encerrou as atividades em 1996, quando uma variante desviou a linha para fora do perímetro urbano. Após o tombamento, o prédio virou o Museu Ferroviário Domingos Lage, inaugurado em 2007, com acervo fotográfico e de materiais ferroviários e espaço para atividades culturais.',
'Centro, próximo à Ponte de Ferro',
'NULL',
'https://visite.museus.gov.br/wp-content/uploads/tainacan-items/14/161640/museu-ferroviario1-920x530-1.jpg',
'2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Fazenda Cafundó',
    'A Reserva Cafundó foi reconhecida como Reserva Particular do Patrimônio Natural (RPPN) em 1998 e protege cerca de 517 hectares de Mata Atlântica. É apontada como a maior reserva particular do Espírito Santo e é tombada pelo município.

A preservação é fruto do trabalho de gerações da família Nascimento. Lá já foram catalogadas centenas de espécies de aves, mamíferos e peixes. A propriedade combina trilhas, educação ambiental e atividades rurais, com restaurante de comida caseira no fogão a lenha.',

'Rodovia Cachoeiro x Alegre',
'NULL',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hBJTCSoONxwT_QQvIp5VV2MWiO5gudwOCVvwCQzkfoIWbI3nWcX3fPc4&s=10',
'2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Cachoeira Alta',
    'Localizada no distrito de São Vicente, em propriedade particular, a Cachoeira Alta tem uma queda d água de cerca de 100 metros e forma uma pequena prainha ao seu redor.

É procurada para banho, contemplação e para a prática de rapel e escalada com profissionais. O espaço tem estrutura simples, com estacionamento, banheiros, mesas e área de camping.',

'Distrito de São Vicente (cerca de 50 min do centro)',
'NULL',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nipJFhIsyBHWdO-5aorBdme4ehrzRzXkozdFauWCFdvOTIw_UdwA3vU&s=10',
'2026-11-18'
);

INSERT INTO sua_tabela (titulo, descricao, local, faixa_preco, img, data_criacao) 
VALUES (
    'Mercado Municipal',
    'O centro de Cachoeiro guarda o Mercado Municipal, erguido onde no início do século XX existia a antiga Igreja de São João. É um bom lugar para conhecer produtos típicos da região.

No bairro Guandu, o Mercado Municipal Quincas Leão — conhecido como Mercado da Pedra — foi construído em 1967, tombado como patrimônio histórico em 2005 e reformado em 2016. É um dos principais pontos de venda de frutas, verduras e produtos da agricultura familiar.',

'Rua Bernardo Horta, Guandu',
'NULL',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCaNcygpjmEPeq6K1qeDldLRm7FULKpZ6DuR5c9Xh6w&s=10',
'2026-11-18'
);

--