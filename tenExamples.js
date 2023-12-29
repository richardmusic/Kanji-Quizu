const multiExample1 = [
    "湯が<span style='color: #2e2e2e;'>沸いた</span> <span style='color: #bfbfbf;'>Yu ga waita - The water boiled</span><br>",
    "<span style='color: #2e2e2e;'>沸騰する</span>前に止めて <span style='color: #bfbfbf;'>Futtou suru mae ni tomete - Stop before it boils</span><br>",
    "やかんで水を<span style='color: #2e2e2e;'>沸かす</span> <span style='color: #bfbfbf;'>Yakan de mizu o wakasu - Boiling water in a kettle</span><br>",
    "<span style='color: #2e2e2e;'>沸騰している</span>湯気がすごい <span style='color: #bfbfbf;'>Futtou shiteiru yuge ga sugoi - The steam from boiling is intense</span><br>",
    "<span style='color: #2e2e2e;'>沸騰する</span>と音がする <span style='color: #bfbfbf;'>Futtou suru to oto ga suru - There's a sound when it boils</span><br>",
    "<span style='color: #2e2e2e;'>沸騰したら</span>すぐ火を止めて <span style='color: #bfbfbf;'>Futtou shitara sugu hi o tomete - Turn off the heat as soon as it boils</span><br>",
    "<span style='color: #2e2e2e;'>沸騰する</span>まで待って <span style='color: #bfbfbf;'>Futtou suru made matte - Wait until it boils</span><br>",
    "<span style='color: #2e2e2e;'>沸騰した</span>熱いお湯がほしい <span style='color: #bfbfbf;'>Futtou shita atsui oyu ga hoshii - I want boiling hot water</span><br>",
    "<span style='color: #2e2e2e;'>沸騰する</span>前に取り出して <span style='color: #bfbfbf;'>Futtou suru mae ni toridashite - Take it out before it boils</span><br>",
    "湯を<span style='color: #2e2e2e;'>沸かす</span>ときに火を強くする <span style='color: #bfbfbf;'>Yu o wakasu toki ni hi o tsuyoku suru - Increase the heat when boiling water</span><br>",
    "鍋で湯を<span style='color: #2e2e2e;'>沸かしています</span> <span style='color: #bfbfbf;'>Nabe de yu o wakashiteimasu - Boiling water in the pot</span><br>",];
const multiExample2 = [
    "<span style='color: #2e2e2e;'>需要</span>が高いです <span style='color: #bfbfbf;'>Juyou ga takai desu - The demand is high</span><br>",
    "その商品は<span style='color: #2e2e2e;'>需要</span>があります <span style='color: #bfbfbf;'>Sono shouhin wa juyou ga arimasu - There is demand for that product</span><br>",
    "<span style='color: #2e2e2e;'>需要</span>を満たす必要があります <span style='color: #bfbfbf;'>Juyou o mitasu hitsuyou ga arimasu - There is a need to meet the demand</span><br>",
    "<span style='color: #2e2e2e;'>需要</span>が急速に増えています <span style='color: #bfbfbf;'>Juyou ga kyuusoku ni fueteimasu - The demand is increasing rapidly</span><br>",
    "<span style='color: #2e2e2e;'>需要予測</span>が難しいです <span style='color: #bfbfbf;'>Juyou yosoku ga muzukashii desu - Forecasting demand is difficult</span><br>",
    "そのサービスには<span style='color: #2e2e2e;'>需要</span>がありますか？ <span style='color: #bfbfbf;'>Sono saabisu ni wa juyou ga arimasu ka? - Is there a demand for that service?</span><br>",
    "<span style='color: #2e2e2e;'>需要</span>に応じて製品を調整します <span style='color: #bfbfbf;'>Juyou ni oujite seihin o chousei shimasu - We adjust the products according to the demand</span><br>",
    "<span style='color: #2e2e2e;'>需要</span>を満たすために努力しています <span style='color: #bfbfbf;'>Juyou o mitasu tame ni doryoku shiteimasu. - We are making efforts to meet the demand</span><br>",
    "<span style='color: #2e2e2e;'>需要</span>が予想以上でした <span style='color: #bfbfbf;'>Juyou ga yosou ijou deshita. - The demand exceeded expectations</span><br>",
    "<span style='color: #2e2e2e;'>需要</span>が安定しています <span style='color: #bfbfbf;'>Juyou ga antei shiteimasu. - The demand is stable</span><br>",];
const multiExample3 = [
    "虫刺されで<span style='color: #2e2e2e;'>腫れた</span> <span style='color: #bfbfbf;'>Mushi sasare de hareta - I got swollen from a bug bite</span><br>",
    "目が<span style='color: #2e2e2e;'>腫れています</span> <span style='color: #bfbfbf;'>Me ga harete imasu - My eyes are swollen</span><br>",
    "喉が<span style='color: #2e2e2e;'>腫れている</span>ようだ <span style='color: #bfbfbf;'>Nodo ga harete iru you da - Looks like my throat is swollen</span><br>",
    "けがで足が<span style='color: #2e2e2e;'>腫れました</span> <span style='color: #bfbfbf;'>Kega de ashi ga hare mashita - My leg got swollen from the injury</span><br>",
    "その蚊に刺されて<span style='color: #2e2e2e;'>腫れた</span> <span style='color: #bfbfbf;'>Sono ka ni sasarete hareta - I got swollen from that mosquito bite</span><br>",
    "手が<span style='color: #2e2e2e;'>腫れてて</span>動かせない <span style='color: #bfbfbf;'>Te ga harete te ugokasenai - My hand is swollen, and I can't move it</span><br>",
    "彼の体に<span style='color: #2e2e2e;'>腫瘍</span>が見つかった <span style='color: #bfbfbf;'>Kare no karada ni shuyou ga mitsukatta - A tumor was found in his body</span><br>",
    "<span style='color: #2e2e2e;'>腫れ</span>が引かない <span style='color: #bfbfbf;'>Hare ga hikanai - The swelling isn't going down</span><br>",
    "<span style='color: #2e2e2e;'>腫瘍</span>が原因で痛みが出ています <span style='color: #bfbfbf;'>Shuyou ga gen'in de itami ga dete imasu - Pain is occurring due to the tumor</span><br>",
    "<span style='color: #2e2e2e;'>腫れ止め</span>の薬を塗った <span style='color: #bfbfbf;'>Hare dome no kusuri o nutta - I applied some anti-swelling medicine</span><br>",];
const multiExample4 = [
    "彼は<span style='color: #2e2e2e;'>疾患</span>を抱えています <span style='color: #bfbfbf;'>Kare wa shikkan o kakaete imasu - He has a medical condition</span><br>",
    "<span style='color: #2e2e2e;'>疾患</span>の症状が出てきた <span style='color: #bfbfbf;'>Shikkan no shoujou ga dete kita - The symptoms of the illness appeared</span><br>",
    "<span style='color: #2e2e2e;'>疾病</span>を治療する必要があります <span style='color: #bfbfbf;'>Shippei o chiryou suru hitsuyou ga arimasu - There is a need to treat the disease</span><br>",
    "<span style='color: #2e2e2e;'>疾患</span>の治療法を探しています <span style='color: #bfbfbf;'>Shikkan no chiryouhou o sagashite imasu - Looking for treatment options for the illness</span><br>",
    "その<span style='color: #2e2e2e;'>疾患</span>は遺伝的な要素がある <span style='color: #bfbfbf;'>Sono shikkan wa iden-teki na youso ga aru - That illness has a genetic component</span><br>",
    "<span style='color: #2e2e2e;'>疾患</span>の早期発見が重要です <span style='color: #bfbfbf;'>Shikkan no souki hakken ga juuyou desu - Early detection of the illness is important</span><br>",
    "<span style='color: #2e2e2e;'>疾患</span>のリスクを減らす方法を知りたい <span style='color: #bfbfbf;'>Shikkan no risuku o herasu houhou o shiritai - I want to know ways to reduce the risk of illness</span><br>",
    "彼は病気で<span style='color: #2e2e2e;'>疾走</span>している <span style='color: #bfbfbf;'>Kare wa byouki de shissou shite iru - He's running a fever due to sickness</span><br>",
    "その<span style='color: #2e2e2e;'>疾患</span>はかなり重篤です <span style='color: #bfbfbf;'>Sono shikkan wa kanari jutoku desu - That illness is quite severe</span><br>",
    "<span style='color: #2e2e2e;'>疾病</span>にかかるのを予防するために手を洗いましょう <span style='color: #bfbfbf;'>Shippei ni kakaru no o yobou suru tame ni te o araimashou - Let's wash our hands to prevent illness</span>"];
const multiExample5 = [
    "<span style='color: #2e2e2e;'>匿名</span> で投稿することができます <span style='color: #bfbfbf;'>Tokumei de toukou suru koto ga dekimasu - You can post anonymously</span><br>",
    "<span style='color: #2e2e2e;'>匿名性</span> を保つために、偽名を使うことがあります <span style='color: #bfbfbf;'>Tokumei-sei o tamotsu tame ni, gimei o tsukau koto ga arimasu - To maintain anonymity, one may use a false name</span><br>",
    "<span style='color: #2e2e2e;'>匿名性</span>を重んじる人もいます <span style='color: #bfbfbf;'>Tokumeisei o omonjiru hito mo imasu. - There are people who value anonymity -</span><br>",
    "彼は<span style='color: #2e2e2e;'>匿名</span>でそのフォーラムに投稿した <span style='color: #bfbfbf;'>Kare wa tokumei de sono fo-ramu ni toukou shita - He posted on that forum anonymously</span><br>",
    "私は<span style='color: #2e2e2e;'>匿名</span>の手紙を受け取ったことがあります <span style='color: #bfbfbf;'>Watashi wa tokumei no tegami o uketotta koto ga arimasu - I have received an anonymous letter before</span><br>",
    "<span style='color: #2e2e2e;'>匿名性</span>を保つことはオンラインのセキュリティに関して重要です <span style='color: #bfbfbf;'>Tokumeisei o tamotsu koto wa onrain no sekuriti ni kan shite juuyou desu - Maintaining anonymity is important for online security</span><br>",
    "そのウェブサイトでは、<span style='color: #2e2e2e;'>匿名</span>で質問をすることができます <span style='color: #bfbfbf;'>Sono webusaito de wa, tokumei de shitsumon o suru koto ga dekimasu - On that website, you can ask questions anonymously</span><br>",
    "<span style='color: #2e2e2e;'>匿名性</span>を守るために、プライバシー設定を確認しましょう <span style='color: #bfbfbf;'>Tokumeisei o mamoru tame ni, puraibashii settei o kakunin shimashou - To protect anonymity, let's check the privacy settings</span><br>",
    "彼は<span style='color: #2e2e2e;'>匿名</span>で寄付をした <span style='color: #bfbfbf;'>Kare wa tokumei de kifu o shita - He made a donation anonymously</span><br>",
    "<span style='color: #2e2e2e;'>匿名</span>の通報者が事件の解決に役立った <span style='color: #bfbfbf;'>Tokumei no tsuuhousha ga jiken no kaiketsu ni yakudatta - An anonymous tipster helped solve the case</span><br>",];
const multiExample6 = [
    "5asdf",
    "5",
    "5",
];
const multiExample7 = [
    "5",
    "5",
    "5",
];
const multiExample8 = [
    "5",
    "5",
    "5",
];
const multiExample9 = [
    "5",
    "5",
    "5",
];
const multiExample10 = [
    "5",
    "5",
    "5",
];
const multiExample12 = [
    "5",
    "5",
    "5",
];
const multiExample13 = [
    "5",
    "5",
    "5",
];
const multiExample14 = [
    "5",
    "5",
    "5",
];
const multiExample15 = [
    "5",
    "5",
    "5",
];
const multiExample16 = [
    "5",
    "5",
    "5",
];
const multiExample17 = [
    "5",
    "5",
    "5",
];
const multiExample18 = [
    "5",
    "5",
    "5",
];
const multiExample19 = [
    "5",
    "5",
    "5",
];
const multiExample20 = [
    "5",
    "5",
    "5",
];
const multiExample11 = [
    "5",
    "5",
    "5",
];

export {multiExample1};
export {multiExample2};
export {multiExample3};
export {multiExample4};
export {multiExample5};
export {multiExample6};
export {multiExample7};
export {multiExample8};
export {multiExample9};
export {multiExample10};
export {multiExample11};
export {multiExample12};
export {multiExample13};
export {multiExample14};
export {multiExample15};
export {multiExample16};
export {multiExample17};
export {multiExample18};
export {multiExample19};
export {multiExample20};
