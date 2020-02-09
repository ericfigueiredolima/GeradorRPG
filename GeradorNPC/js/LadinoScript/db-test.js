// Nenhuma boa prática foi aplicada aqui, não use as funções criadas nesse local nem altere os valores de testeDB,
// essas funções e valores foram criadas apenas para efetuar testes no programa, caso queira inserir um atributo crie
// um objeto de Character, detalhes em characters.js.

var testDB = [  //AO CRIAR NORMES, O USUÁRIO TERÁ QUE ESCREVER UMA BREVE ESTÓRIA, PODENDO CITAR APENAS O NASCIMENTO E FAMÍLIA DO PERSONAGEM.
                "Gharner Sulivan", "Gharner foi criado pelos seus tios, infelizmente seus pais foram mortos por um grupo de lobos ainda quando criança.",
                "Arkan Venderbag", "A família Venderbag é conhecida pela sua lealdade com o protetorado, todos os seus filhos são treinados para proteger os reis.",
                "Thormy Haruam", "Thormy Haruam nasceu numa família nobre, destinado a assumir o trono assim que seu pai deixar o mundo.",
                "Sarah Wiston", "Sarah Wiston nunca conheceu seus pais, foi abandonada em um orfanato ainda bebê.",
                "Rylai Sabrend", "Rylai e sua irmã gêmea Lina nasceram numa escola de magia, frutos do amor de Rethorius e Andra, dois professores renomados.",
                "Luna Stilius", "Luna Stilius, nasceu num povoado de amazonas, sua mãe morreu assim que lhe deu a luz e seu pai era um qualquer escravo de guerra usado somente para procriar.",
                "Arquius Stilius", "Filho de Aurin e Salansa, Arquius nasceu em Furasltkanlin, pequeno vilarejo elfico ao sul do continente.",
                "Lhoris Nardual", "Lhoris foi gerado numa situação de alto risco na grande guerra, sua mãe Scarla fugiu ainda grávida para cria-lo sozinha nas montanhas afim de proteger seu pequenino.",
                "Marlevaur Merith", "Não se sabe nada sobre a família ou o nascimento de Marlevaur.",
                "Eshenesra Nakiasha", "Nascida em Lonclar, filha de um casal de alfaiate.",
                "Gaylia Lorelei", "Filha de Serint e Dendan, Gaylia nasceu em Rondan.",
                "Hacathra Keya", "Nascida e criada por um casal de idosos, Hacathra Keya foi deixada pelos seus pais por motivos políticos.",
                "Dra'or Dushtemash", "Quando Dra'or nasceu, a sua tribo festejou por 3 dias, filho de sangue do grande Arckork.",
                "Buz-hurtz Nernerkarg", "Os Nernerkarg são extremamente mal recebidos entre os orcs, considerados desonrados por todas as tribos orcs devido a uma antiga história de traição de seus antepassados.",
                "Gul-kash Kalukdra", "Abandonado quando bebê, deixado para viver com os anões.",
                "Beika Gadrag", "Filha do grande Gurak, escolhida pela lua de sangue, destinada a vingar sua tribo.",
                "Nerorz Grat-buck", "Nerorz Grat-buck quase não veio ao mundo devido a tentativa de aborto do seu pai.",
                "Kaa Bruknosh", "Kaa creceu no laboratório de Hyndrant, criada pelo humano mestre Whyn e seus serviçais ela nunca conheceu seus verdadeiros pais nem seu passado, Whyn sempre evitou o assunto.",

                //AO CRIAR HABILIDADES NATURAIS O USUÁRIO TERÁ QUE ESCREVER UMA BREVE ESTÓRIA EXPLICANDO COMO O PERSONAGEM 
                //DOMINOU ESSA HABILIDADE, PODENDO CITAR PARTE DA JUVENTUDE DO MESMO, ELE PODE TAMBÉM ADICIONAR UM TÍTULO 
                //QUE SERÁ VINCULADO DIRETAMENTE À AQUELA HABILIDADE, AO ADICIONAR ESSE TÍTULO DESTA FORMA ELE NÃO PODERÁ 
                //USAR ARTIGOS OU ADJETIVOS QUE RELACIONE O PERSONAGEM À ALGUM SEXO, CASO O USUÁRIO INSIRA O TÍTULO DESTA FORMA 
                //PERSONAGEM GERADO NÃO RECEBERÁ TÍTULO RECEBIDO POR AÇÕES, USE ESSA OPÇÃO APENAS SE QUISER DAR ÊNFASE A ESSA HABILIDADE.
                //ESSA HABILIDADE SÓ SERÁ GERADA EM PERSONAGENS DE NÍVEL NOVATO ATÉ EXPERIENTE.
                "Estômago de Ferro", "Estômago de Ferro", "!nome passou a sua juventude no laboratório do mestre Whyn, el!sexoAE adorava experimentar suas misteriosas bebidas coloridas com suas mais variadas reações, nem sempre eram boas, mas hoje em dia não há bebida que afete negativamente !nome, el!sexoAE acabou adiquirindo uma certa imunidade estomacal.",
                "Língua Afiada", "Bom de Papo", "Todos os dias e por muitas primaveras !nome acompanhou o comércio, aprendendo que uma simples luva de couro pode valer uma fortuna quando vendida na hora adequada, el!sexoAE se aprimorou na arte da barganha.",
                "Bafo de Fogo", "Cospe Fogo", "Ainda criança, !nome conheceu Tharnan, um velho artísta de rua a qual se tornou amig!sexoAO, durante muitos anos lhe acompanhou em suas rotinas, aprendendo técnicas surpreendentes de sopro de fogo com rum, o que se tornou últil em várias situações.", 
                "Escrever Pergaminhos", "Cresceu e amadureceu ao redor de cultos, aprendeu a ler e escrever e se especializou em escritas de pergaminhos, não hà um arcano de Trinstan Wall que não precisou dos serviços de !nome.",
                "Forjar Armas", "Conheceu Reina Toque de Prata aos 7 anos, encantou-se com a arte da forja e passou toda sua mocidade aprendendo com Reina, tornando-se !sexoAO armeir!sexoAO mais requisitad!sexoAO das provícias de Hallau.",
                "Pintar Quadros", "Na sua adolecência, !nome ganhou de um velho comerciante um conjunto barato de pinceis e tintas, de alguma forma el!sexoAE parecia ter um talento natural para pintura, em poucos anos se auto aprimorou, seus quadros são de alta qualidade e níveis detalhes, ainda não é muito conhecid!sexoAO, mas não há um trabalho até hoje que não fosse elogiado.",
                "Conhecimento de Colinas", "O local onde cresceu é cercado por vastas colinas, toda sua juventude até seu amadurecimento foi passada explorando ao lado dos seus amigos cada ponto de Terra Primal 'Colinas', hoje estar numa colina é a maior fonte de segurança para !nome.",
                "Falsificar Documentos", "Cresceu e amadureceu vizitando os arredores da Zona Geada, lado criminoso de Arelia, aprendeu a falsificar documentos para burlar impostos com o casal Griank, ainda na fase jovem adulta, !nome falsificou documentos e tomou posse da propriedade Griank, fazendo com que fossem presos, atualmente !nome tem várias identidades e não há nenhum local que não consiga acessar.",
                "Oratória", "!nome cresceu com sarcedotes e conselheiros, aprendeu a guiar grande massa plebeia, atualmente el!sexoAE representa grande parte da plebe de Tristan Wall, odiad!sexoAO por alguns e amad!sexoAO por muitos.",

                //AO CRIAR UMA HABILIDADE MÍTICA O USUÁRIO TERÁ QUE ESCREVER UMA BREVE ESTÓRIA EXPLICANDO COMO O PERSONAGEM
                //DESCOBRIU ESSE DOM, NÃO PODERÁ CITAR NASCIMENTO NEM FAMÍLIA, DEVERÁ EXPLICAR ESSA DESCOBERTA E COMO FOI SUA
                //INFÂNCIA COM ESSE DOM, ALÉM DISSO SERÁ OBRIGATÓRIO ADICIONAR UM TÍTULO COM BASE NO DOM RECEBIDO,
                //AO ADICIONAR ESSE TÍTULO ELE NÃO PODERÁ USAR ARTIGOS OU ADJETIVOS QUE RELACIONE O PERSONAGEM À ALGUM SEXO,
                //CASO SEJA NECESSÁRIO CITAR UM ARTIGO USE O COMANDO !sexoAO.
                //ESSA HABILIDADE SÓ SERÁ GERADA EM PERSONAGENS DE NÍVEL LENDA ATÉ DEUS MENOR.
                "Sangue de Dragão", "Sangue de Dragão", "Ainda quando criança, !nome misteriosamente revelou-se ter uma habilidade natural para uso de magia, isso sempre foi um mistério.",
                "Oráculo", "Olhos do Futuro", "Nas primeiras primaveras da sua vida, !nome teve sua primeira visão do futuro, e foi se tornando frequente, atualmente !nome também é conhecid!sexoAO como Olhos do Futuro, é altamente requisitad!sexoAO pela nobreza de toda a província.",
                "Falar com Deuses", "!sexoAO Amig!sexoAO dos Deuses", "Desde criança !nome sempre conversou com os deuses em suas orações, logicamente ninguém nunca acreditou e !sexoAO consideram louc!sexoAO.",
                "Purificar Natureza", "Aura do Renascer", "Um belo dia quando passeava por um jardim abandonado, sua flora tornou-se viva magicamente, !nome descobriu então que tinha um dom de trazer vida a natureza.",
                "Corpo de Pedra", "Corpo de Pedra", "Certo dia um incêndio acidental tomou o cômodo em que !nome estava, derrepente sua pelo se tornou rocha, deixando-!sexoAO totalmente ilesa, vários especialista tentaram estuda-l!sexoAO desde então, mas nunca encontraram a origem deste poder.",
                "Toque da Morte", "Mão do Diabo", "Infelizmente !nome parece ter sido amaldiçoad!sexoAO pelos deuses, o toque da sua mão parece matar qualquer um instantaneamente, o uso de luvas de couro de grifo parece impedir o efeito, el!nomeAO descobriu a maldição da pior forma ainda quando criança.",
                "Onisciência", "Sabe Tudo", "!nome nunca precisou estudar, el!sexoAE simplesmente sabe todas as respostas, não se sabe como, mas desde criança o povoado local lhe consultava antes de tomar qualquer decisão.",
                "Roubo de Poder", "Rouba Alma", "Embora ter parecido um nascimento normal, !nome desenvolveu um poder misterioso capaz de tomar para si o poder místico de qualquer ser vivo.",
                "Força Infinita", "Força dos Deuses", "Não se sabe se vem de uma linhagem antiga, se é filh!sexoAO de um deus ou se !nome é a própria encarnação divina, mas ainda criança el!sexoAE levantou uma grande estátua que havia caído em um camponês usando apenas as mãos.",

                //AO CRIAR UM TÍTULO CONQUISTADO O USUÁRIO TERÁ QUE ESCREVER UMA BREVE ESTÓRIA EXPLICANDO COMO O PERSONAGEM 
                //RECEBEU ESSE TÍTULO, PODENDO CITAR ALGUMA AÇÃO JA NA FASE ADULTA, ESTILO DE VIDA ATUAL OU BOATOS. 
                //AO ADICIONAR ESSE TÍTULO DESTA FORMA ELE TERÁ QUE VINCULAR DIRETAMENTE A ALGUM SEXO.
                //ESSA HABILIDADE SÓ SERÁ GERADA EM PERSONAGENS DE NÍVEL NOVATO ATÉ EXPERIENTE.
                "O Briguento", "!nome também é conhecido localmente como !nome O Briguento, dizem que não há uma confusão que ocorra na qual !nome não esteja envolvido.",
                "O Fedorento", "Não é difícil encontrar !nome, seu cheiro rapidamente lhe entrega, uma mistura de peixe com estrume de bode, ele libera esse aroma naturalmente, simplesmente não existe banho que resolva, acabou ficando conhecido como !nome Fedorento por aqui.",
                "O Matador de Praga", "!nome ficou conhecido como O Matador de Praga recentemente por eliminar uma ratazana que assumiu os aposentos subterrâneo do castelo de Haruam, não se sabe detalhes de como ele conseguiu esse feito, mas os ratos nunca mais voltaram a aparecer.",
                "A Chorona", "Com seu coração super sensível quando se trata de sentimentos, !nome simplesmente não consegue conter as lágrimas ao presenciar algum ato que não seja de seu agrado, é muito conhecida como !nome A Chorona pelo povo local.",
                "A Branca", "!nome A Branca recebeu esse título pelo simples fato de gostar de vestes brancas, é apenas uma referência usada para ser identificada.",
                "A Solitária", "Atualmente !nome vive sozinha, nunca é vista acompanhada, quase nunca abandona sua moradia, ficou conhecida como A Solitária por adotar esse estilo de vida peculiar.",

                "O Carrasco", "Não se sabe como !nome recebeu esse título, ele não é o Carrasco de Zherdala, mas simplesmente ele é conhecido assim, ninguém sabe a origem desse apelido.",
                "O Putrefador", "Acidentalmente !nome trocou o frasco de perfume por aroma macabro de Radidte, ao vizitar a feira local acabou apodrecendo os alimentos que ali vendiam só de passar por perto, causando um enorme prejuízo e ficando assim conhecido como O Putrefador.",
                "Derrubador de Ogre", "Certo dia um meio ogre bêbado causava problema numa taverna local, disseram que !nome acabou com ele apenas com uma mão e uma caneca, ficou conhecido como Derrubador de Ogre apartir daí.",
                "Machado de Prata", "!nome Machado de Prata ficou conhecida assim por caminhar com um lindo machado de prata pendurado nas costas, ela nunca foi vista o manuseando, e ninguém espera um dia ver.",
                "A Dama da Noite", "Nos campos de Zherdala todos ouviram falar de !nome A Dama da Noite, ela costuma ser vista vagando pelos campos sem destino aparentemente, quase pode ser confundida com um espírito.",
                "Vento do Norte", "!nome Vento do Norte recebeu esse título pelo rei de Arelia ao chegar na cidade trazendo uma notícia de extrema importância que acabou salvando indiretamente o comércio local, ela ficou conhecida assim desde então como algo que trouxesse bons presságios.",

                "O Viajante", "!nome não costuma ficar por mais de uma semana em um local, sempre que alguém comenta algo sobre ele acaba sendo direcionado como O Viajante devido aos seus trajes e quantidade de bagagem.",
                "O Legionário", "Apesar da sua juventude ser um pouco diferente, !nome acabou ficando mas conhecido pela atuação na Guerra dos Três Reis, mesmo não aparentando como tal, o chamam de O Legionário desde então.",
                "O Mestre dos Cães", "Não há maior conhecedor de cães do que !nome, vivendo com mais de 50 deles, de raças totalmente distintas e altamente treinados, conhecido como Mestre dos Cães em todo reino do sul.",
                "A Escolhida do Tempo", "Anunciada pelos sacerdotes e cantado pelos bardos, !nome A Escolhida do Tempo ficou conhecida assim por causa de uma cicatriz de nascença, isso pode não passar de uma grande confusão.",
                "A Sangue Ancestral", "Foi chamada de A Sangue Ancestral pelos xamãs do Lago Ochaj, não se sabe o real motivo, mas o título acabou pegando pelos fiéis locais e se espanhando como uma praga por todo o reino.",
                "A Alada", "!nome costuma levar consigo um pequeno estoque de poções de levitação, devido ao uso constante ela acabou tornando-se bem estável ao levitar, e voa com ótima mobilidade, caso sendo confundida com uma elfa do céu, o povo do norte a chamam de A Alada e acreditam que !nome tenha o dom de voar naturalmente."
            ] ;


function createDBtest(){
    createNamesTest();
    createNaturalSkillsTest();
    createMythicalSkillsTest();
    createDeedsTest();
}


function createNamesTest(){
    createHumanManNamesTest( testDB, 0, 6 ) ;
    createHumanWomanNamesTest( testDB, 6, 12 ) ;
    createElfManNamesTest( testDB, 12, 18 ) ;
    createElfWomanNamesTest( testDB, 18, 24 ) ;
    createOrcManNamesTest( testDB, 24, 30 ) ;
    createOrcWomanNamesTest( testDB, 30, 36 ) ;
}

function createNaturalSkillsTest(){
    createNaturalSkillNovatoTest( testDB, 36, 45 ) ;
    createNaturalSkillChampionTest( testDB, 45, 51 ) ;
    createNaturalSkillExperientTest( testDB, 51, 57 ) ;
}

function createMythicalSkillsTest(){
    createMythicalSkillLegendTest( testDB, 57, 66 ) ;
    createMythicalSkillEpicTest( testDB, 66, 75 ) ;
    createMythicalSkillLesserGodTest( testDB, 75, 84 ) ;
}

function createDeedsTest(){
    createDeedManNoobTest( testDB, 84, 90 ) ;
    createDeedWomanNoobTest( testDB, 90, 96 ) ;
    createDeedManChampionTest( testDB, 96, 102 ) ;
    createDeedWomanChampionTest( testDB, 102, 108 ) ;
    createDeedManExperientTest( testDB, 108, 114 ) ;
    createDeedWomanExperientTest( testDB, 114, 120 ) ;
}

function createHumanManNamesTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.name = valuesList[index] ;
        character.race = races.HUMAN ;
        character.gender = genders.MAN ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createHumanWomanNamesTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.name = valuesList[index] ;
        character.race = races.HUMAN ;
        character.gender = genders.WOMAN ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createElfManNamesTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.name = valuesList[index] ;
        character.race = races.ELF ;
        character.gender = genders.MAN ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createElfWomanNamesTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.name = valuesList[index] ;
        character.race = races.ELF ;
        character.gender = genders.WOMAN ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createOrcManNamesTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.name = valuesList[index] ;
        character.race = races.ORC ;
        character.gender = genders.MAN ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createOrcWomanNamesTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.name = valuesList[index] ;
        character.race = races.ORC ;
        character.gender = genders.WOMAN ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createNaturalSkillNovatoTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.NOOB ;
        character.naturalSkill = valuesList[index] ;
        index++;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createNaturalSkillChampionTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.CHAMPION ;
        character.naturalSkill = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createNaturalSkillExperientTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.EXPERIENT ;
        character.naturalSkill = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createMythicalSkillLegendTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.LEGEND ;
        character.mythicalSkill = valuesList[index] ;
        index++;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createMythicalSkillEpicTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.EPIC ;
        character.mythicalSkill = valuesList[index] ;
        index++;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createMythicalSkillLesserGodTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.LESSER_GOD ;
        character.mythicalSkill = valuesList[index] ;
        index++;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createDeedManNoobTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.NOOB ;
        character.gender = genders.MAN ;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createDeedWomanNoobTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.NOOB ;
        character.gender = genders.WOMAN ;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createDeedManChampionTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.CHAMPION ;
        character.gender = genders.MAN ;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createDeedWomanChampionTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.CHAMPION ;
        character.gender = genders.WOMAN ;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createDeedManExperientTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.EXPERIENT ;
        character.gender = genders.MAN ;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}

function createDeedWomanExperientTest( valuesList, startList, endList ) {
    for ( index = startList ; index < endList ; index++) {
        character.level = levels.EXPERIENT ;
        character.gender = genders.WOMAN ;
        character.deed = valuesList[index] ;
        index++;
        character.background = valuesList[index] ;
        characters.push(character) ;
        character = [];
    }
}