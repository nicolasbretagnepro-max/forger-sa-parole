// ============================================================
// FORGER SA PAROLE — Données enrichies v2
// ============================================================

const CONTENT = {

// ── SESSIONS ────────────────────────────────────────────────
sessions: [

// ════════════════════════════════════════════════════════════
// SESSION 1 — Les 3 piliers : éthos, pathos, logos
// ════════════════════════════════════════════════════════════
{
  id: 1,
  type: "normale",
  theme: "Les 3 piliers : éthos, pathos, logos",
  format: "Cours magistral",
  icon: "🏛️",
  duration: "~30 min",
  objectif: "Maîtriser le triangle rhétorique d'Aristote et l'identifier dans tout discours.",
  content: `
<h2>Les trois piliers de la rhétorique — fondation de tout discours</h2>

<p>Avant d'ouvrir la bouche ou de poser un mot sur le papier, trois questions se posent — que vous le sachiez ou non. <em>Qui suis-je pour parler ?</em> (éthos). <em>Dans quel état émotionnel vais-je mettre mon auditoire ?</em> (pathos). <em>Avec quels arguments ?</em> (logos). Aristote, vers 350 avant notre ère, fut le premier à formaliser cette triade. Vingt-quatre siècles plus tard, elle reste l'outil d'analyse le plus puissant dont dispose quiconque cherche à comprendre — ou à exercer — la persuasion.</p>

<blockquote>« Les preuves par le discours sont de trois espèces : les unes résident dans le caractère moral de l'orateur ; les autres dans la disposition de l'auditeur ; les troisièmes dans le discours lui-même. »<br>— Aristote, <em>Rhétorique</em>, Livre I, ch. 2 (~350 av. J.-C.)</blockquote>

<h3>1. L'éthos — la crédibilité comme première preuve</h3>

<p>Le mot grec <em>êthos</em> désigne le caractère, la manière d'être habituelle. En rhétorique, il désigne la crédibilité que l'orateur dégage — non pas comme propriété fixe, mais comme construction dynamique qui se joue avant, pendant et après la prise de parole.</p>

<p>Aristote distingue trois composantes de l'éthos :</p>
<ul>
<li><strong>La phronèsis</strong> — la prudence pratique, la compétence perçue. L'orateur paraît-il <em>savoir</em> de quoi il parle ?</li>
<li><strong>L'arétè</strong> — la vertu morale, l'intégrité. L'orateur paraît-il <em>honnête</em>, sans agenda caché ?</li>
<li><strong>L'eunoia</strong> — la bienveillance. L'orateur semble-t-il parler dans l'intérêt de son auditoire ?</li>
</ul>

<p>Ces trois éléments se construisent bien avant de parler — par la réputation, le parcours, les recommandations. Mais ils se jouent aussi à chaque phrase. Un vocabulaire précis, une capacité à anticiper les objections, une posture assurée sans arrogance : autant de signaux d'éthos que l'auditoire decode en temps réel, souvent sans en être conscient.</p>

<p><strong>L'éthos en situation professionnelle.</strong> En réunion, votre éthos se construit dans les 90 premières secondes. Comment vous entrez dans la salle. Si vous avez préparé ou si vous improvisez visiblement. Si vous citez des données ou des impressions. La précision du mot que vous choisissez. Tout cela est lu — même par des interlocuteurs qui ne savent pas lire l'éthos de façon formelle. Ils le sentent.</p>

<p><strong>Analyse de cas — Barack Obama, Discours de Chicago, 2008.</strong> Obama arrive sur scène avec un éthos déjà constitué : premier président afro-américain élu, ancien professeur de droit constitutionnel, auteur de deux mémoires reconnus. Mais il ne s'appuie pas dessus. Il commence par le récit d'une Américaine de 106 ans, Ann Nixon Cooper, témoin d'un siècle de transformations. Ce choix rhétorique est une décision d'éthos : au lieu de rappeler ses propres titres, il transfère la crédibilité morale à une témoin qui incarne la légitimité historique. C'est de l'éthos par procuration — une technique que Cicéron appelait <em>auctoritas</em>.</p>

<h3>2. Le pathos — émouvoir n'est pas manipuler</h3>

<p>Le pathos, du grec <em>pathos</em> (ce qu'on éprouve, la passion), désigne la mobilisation des émotions de l'auditoire. C'est la dimension du discours la plus mal comprise, parce qu'elle est souvent assimilée à la manipulation. Cette confusion est ancienne : Platon lui-même, dans le <em>Gorgias</em>, fustige les orateurs qui font pleurer les jurés pour obtenir un acquittement.</p>

<p>Aristote répond à cette critique dans le Livre II de la <em>Rhétorique</em>, consacré entièrement aux émotions. Sa position est plus nuancée : les émotions ne sont pas opposées à la raison — elles sont des formes de jugement. La colère est l'émotion appropriée face à l'injustice. La peur est l'émotion appropriée face au danger réel. Mobiliser ces émotions, c'est aider l'auditoire à percevoir la réalité de la situation. Ce n'est pas de la manipulation — c'est de la mise en résonance.</p>

<p>La manipulation pathétique, elle, consiste à produire une émotion <em>disproportionnée</em> ou <em>non pertinente</em> par rapport à la situation réelle. Faire pleurer pour éviter un procès équitable. Créer une panique injustifiée pour vendre un produit de sécurité. La distinction est donc dans l'<em>adéquation</em> entre l'émotion produite et la réalité des faits.</p>

<p><strong>Les registres du pathos.</strong> Aristote recense dans le Livre II une taxonomie des émotions rhétoriques : colère/douceur, amour/haine, peur/confiance, honte/effronterie, indignation/envie, pitié/indignation. Pour chacune, il analyse les conditions qui la produisent et les moyens de la susciter. C'est, en 350 avant notre ère, une psychologie des émotions d'une précision remarquable.</p>

<p><strong>Analyse de cas — Martin Luther King, "I Have a Dream", 1963.</strong> King ne décrit pas la discrimination de façon statistique ou juridique (ce serait du logos pur). Il projette une <em>vision</em> : ses enfants jugés non sur la couleur de leur peau mais sur la valeur de leur caractère, la liberté sonnant depuis chaque montagne. Le temps verbal est le futur — il ne parle pas de ce qui est, mais de ce qui <em>sera</em>. Cette projection dans un monde désirable est une technique pathétique précise : ce que les rhétoriciens appellent l'<em>enargeia</em> — rendre visible et présent ce qui est absent. L'auditoire ne raisonne pas sur la discrimination ; il <em>ressent</em> le futur possible. Et c'est ce ressenti qui mobilise.</p>

<h3>3. Le logos — l'argument comme structure de réalité</h3>

<p>Le logos, du grec <em>logos</em> (parole, raison, calcul), désigne la dimension logique et argumentative du discours. C'est l'ensemble des preuves, des raisonnements, des faits qui fondent la thèse défendue.</p>

<p>En rhétorique, le logos ne vise pas la démonstration mathématique — c'est l'affaire de la logique et des sciences. Il vise la <em>vraisemblance</em> : rendre une position suffisamment plausible et cohérente pour qu'un auditoire raisonnable l'adopte. Aristote parle de <em>syllogisme rhétorique</em> — l'enthymème — et d'induction rhétorique — l'exemple.</p>

<p>L'enthymème est un syllogisme incomplet : une des prémisses est sous-entendue parce que l'auditoire la partage. "Il ment depuis le début, on ne peut pas lui faire confiance." La prémisse sous-entendue : "Qui ment une fois ment toujours." L'auditoire la reconstruit lui-même — et cette reconstruction active crée un sentiment d'adhésion plus fort que si on la formulait explicitement.</p>

<p><strong>La force du logos réside dans sa réfutabilité.</strong> Un logos solide peut être attaqué — sur les faits, sur le raisonnement, sur la pertinence de la conclusion. C'est sa force, non sa faiblesse. Un argument qui ne peut pas être attaqué n'est pas un argument : c'est un dogme ou une tautologie. La réfutabilité est la marque de l'honnêteté intellectuelle.</p>

<p><strong>Analyse de cas — Émile Zola, "J'Accuse", 1898.</strong> Zola structure son texte comme un réquisitoire : faits établis, puis enchaînement logique de responsabilités. Il nomme, il date, il cite. Chaque accusation est une prémisse vérifiable. La conclusion ("Dreyfus est innocent, les vrais coupables sont ces hommes") découle logiquement. C'est du logos pur — délibérément, car Zola sait qu'il s'adresse à une opinion publique et à des juges qui doivent pouvoir vérifier. Il signe de son nom en bas. L'acte même de signer, c'est de l'éthos — il engage sa réputation.</p>

<h3>Le triangle en action : dosage et hiérarchie</h3>

<p>Ces trois modes de persuasion ne fonctionnent pas séparément — ils se combinent en proportions variables selon le contexte, l'auditoire et l'objectif.</p>

<p>Une règle pratique : <strong>l'éthos est toujours premier</strong>. Si votre crédibilité est nulle, logos et pathos ne servent à rien — l'auditoire n'écoute pas. C'est pourquoi les négociateurs de crise commencent toujours par établir une connexion humaine avant d'argumenter. C'est pourquoi un inconnu qui prend la parole dans une réunion doit d'abord signaler sa légitimité avant de défendre une position.</p>

<p>Ensuite : <strong>le pathos ouvre, le logos ferme</strong>. L'émotion crée l'attention et la disposition à croire. L'argument structure et solidifie l'adhésion. Un discours qui n'est que pathos enthousiasme puis s'oublie. Un discours qui n'est que logos convainc les esprits mais ne mobilise pas les corps.</p>

<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;">
<tr style="background:rgba(88,86,214,0.08);">
<th style="padding:8px;text-align:left;border-bottom:1px solid #ddd;">Contexte</th>
<th style="padding:8px;text-align:left;border-bottom:1px solid #ddd;">Pilier dominant</th>
<th style="padding:8px;text-align:left;border-bottom:1px solid #ddd;">Risque si absent</th>
</tr>
<tr><td style="padding:8px;border-bottom:1px solid #eee;">Entretien d'embauche</td><td style="padding:8px;border-bottom:1px solid #eee;">Éthos</td><td style="padding:8px;border-bottom:1px solid #eee;">On ne vous croit pas</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid #eee;">Réunion conflictuelle</td><td style="padding:8px;border-bottom:1px solid #eee;">Pathos → Logos</td><td style="padding:8px;border-bottom:1px solid #eee;">Rejet émotionnel de vos arguments</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid #eee;">Rapport, note de synthèse</td><td style="padding:8px;border-bottom:1px solid #eee;">Logos</td><td style="padding:8px;border-bottom:1px solid #eee;">Impression de légèreté</td></tr>
<tr><td style="padding:8px;">Discours public, conférence</td><td style="padding:8px;">Pathos + Éthos</td><td style="padding:8px;">Oubli immédiat</td></tr>
</table>

<h3>Erreurs classiques à éviter</h3>

<p><strong>Confondre éthos et statut.</strong> Le titre ou le grade confèrent un éthos institutionnel — mais il s'effondre dès la première phrase floue ou imprécise. Le statut est un capital initial, non un chèque en blanc.</p>

<p><strong>Utiliser le pathos sans logos sous-jacent.</strong> Émouvoir sans convaincre, c'est le discours du démagogue. L'émotion sans fondement logique s'évapore — ou pire, se retourne contre vous quand les faits démentent le récit.</p>

<p><strong>Vouloir "juste donner des informations".</strong> Il n'y a pas de discours neutre. Choisir quels faits présenter, dans quel ordre, avec quels mots : c'est déjà du logos, de l'éthos et du pathos. La prétendue neutralité est un choix rhétorique comme un autre — souvent le moins efficace.</p>

<h3>Mot du jour — Enthymème</h3>
<p>Du grec <em>enthumema</em> (ce qu'on garde dans l'esprit). Syllogisme rhétorique dont une prémisse est sous-entendue car partagée par l'auditoire. L'enthymème est plus efficace que le syllogisme complet : il rend l'auditoire acteur du raisonnement. "Cette marque est portée par des champions" (sous-entendu : acheter cette marque, c'est être un champion). Publius, Aristote, Livre II, ch. 22.</p>
`,
  anchor: "Identifie un moment de la semaine où tu as dû convaincre quelqu'un. Quel pilier as-tu mobilisé en premier — éthos, pathos ou logos ? En était-il bien choisi au vu du contexte ?",
  action: "Avant ta prochaine prise de parole importante, pose-toi ces 3 questions : Quelle est ma crédibilité perçue sur ce sujet ? Dans quel état émotionnel est mon interlocuteur ? Quel est mon argument central — en une phrase ?",
  connections: [2, 5],
  resources: {
    extraits: [
      { titre: "Aristote, Rhétorique, Livre I ch. 2", texte: "« Les preuves par le discours sont de trois espèces : les unes résident dans le caractère moral de l'orateur ; les autres dans la disposition de l'auditeur ; les troisièmes dans le discours lui-même. Quand on nous trompe, cela provient de l'une ou de l'autre de ces causes. Or, ce n'est pas la même chose de persuader et de démontrer. La démonstration est rigoureuse ; la persuasion se fonde sur le vraisemblable. »" },
      { titre: "Cicéron, De Oratore, Livre II (~55 av. J.-C.)", texte: "« L'orateur accompli est celui qui parle devant le peuple de façon à instruire, à plaire et à émouvoir. Instruire est une nécessité, plaire est une douceur, émouvoir est une victoire. »" }
    ],
    discours: [
      { titre: "MLK — I Have a Dream (1963)", desc: "Le modèle absolu de pathos structuré. Identifier les passages purement émotionnels vs. les passages argumentatifs.", lien: "https://www.youtube.com/watch?v=vP4iY1TtS3s" },
      { titre: "Obama — Discours de victoire, Chicago (2008)", desc: "Analyser comment il construit son éthos sans jamais le mentionner explicitement.", lien: "https://www.youtube.com/watch?v=CqQLMzBEAC8" },
      { titre: "Zola — J'Accuse (1898)", desc: "Le logos pur à l'état brut. Chaque paragraphe est une prémisse d'un raisonnement global.", lien: "https://www.wikisource.org/wiki/J%27Accuse..." }
    ],
    biblio: [
      { titre: "Aristote, Rhétorique", auteur: "trad. Pierre Chiron, GF Flammarion", note: "Commencer par le Livre I (piliers) et le Livre II (émotions). Le Livre III (style) pour plus tard." },
      { titre: "La Rhétorique d'Aristote", auteur: "Michel Meyer (dir.), Librairie Générale Française", note: "Excellent commentaire contemporain. Plus accessible que le texte brut." },
      { titre: "Rhétorique de la communication", auteur: "Chaïm Perelman & L. Olbrechts-Tyteca", note: "Le Traité de l'argumentation (1958) — réhabilitation de la rhétorique au XXe siècle." }
    ]
  },
  quiz: [
    { q: "Aristote distingue trois composantes de l'éthos. Lesquelles ?", a: "Phronèsis (compétence perçue), arétè (vertu morale/intégrité), eunoia (bienveillance envers l'auditoire)." },
    { q: "Qu'est-ce que l'enargeia ?", a: "Technique pathétique consistant à rendre visible et présent ce qui est absent — projeter une vision si concrète que l'auditoire la ressent comme réelle. Utilisée massivement par MLK." },
    { q: "Pourquoi l'éthos est-il 'toujours premier' selon la règle pratique ?", a: "Si la crédibilité de l'orateur est nulle, l'auditoire n'écoute pas — logos et pathos ne peuvent pas fonctionner sans ce socle de confiance préalable." },
    { q: "Quelle est la différence entre persuader et démontrer selon Aristote ?", a: "La démonstration est rigoureuse et produit une certitude logique. La persuasion se fonde sur le vraisemblable et vise l'adhésion d'un auditoire raisonnable — pas la vérité absolue." }
  ],
  quizMcq: [
    {
      q: "La phronèsis, selon Aristote, désigne quelle composante de l'éthos ?",
      options: ["La bienveillance envers l'auditoire", "La compétence perçue / prudence pratique", "La vertu morale et l'intégrité", "La capacité à émouvoir"],
      answer: 1,
      explication: "La phronèsis désigne la prudence pratique — l'impression que l'orateur sait de quoi il parle. L'arétè est la vertu morale, l'eunoia la bienveillance envers l'auditoire."
    },
    {
      q: "Dans quel ordre mobilise-t-on les piliers selon la règle pratique ?",
      options: ["Logos → Pathos → Éthos", "Pathos → Logos → Éthos", "Éthos d'abord, puis Pathos ouvre et Logos ferme", "Les trois simultanément, aucune hiérarchie"],
      answer: 2,
      explication: "L'éthos est toujours premier : sans crédibilité, personne n'écoute. Ensuite le pathos crée la disposition à croire, le logos structure et consolide l'adhésion."
    },
    {
      q: "Dans 'J'Accuse' de Zola (1898), quel pilier rhétorique domine ?",
      options: ["Éthos — Zola engage sa propre réputation", "Pathos — Zola cherche à émouvoir l'opinion publique", "Logos — structure factuelle et raisonnement vérifiable", "Un mélange parfaitement équilibré des trois"],
      answer: 2,
      explication: "Zola nomme, date, cite — chaque accusation est une prémisse vérifiable. C'est du logos pur. L'acte de signer construit aussi l'éthos par engagement personnel, mais le logos structure tout le texte."
    }
  ],
  writingExercise: {
    title: "Analyse rhétorique d'un discours réel",
    duration: "~20 min",
    instruction: "Choisissez un discours, une publicité, un email professionnel ou une prise de parole récente que vous avez observée. Rédigez une analyse rhétorique complète de 200-300 mots : (1) identifiez le pilier dominant et justifiez par des extraits précis ; (2) analysez comment les deux autres piliers sont mobilisés ou absents ; (3) évaluez l'efficacité globale selon le triangle d'Aristote et proposez une amélioration concrète.",
    correctionCriteria: "Évalue mon analyse sur : (1) Exactitude des définitions éthos/pathos/logos (2) Pertinence des exemples tirés du discours — les extraits cités justifient-ils l'analyse ? (3) Justesse de la hiérarchisation des piliers (4) Qualité et précision de l'amélioration proposée. Note /5 sur chaque axe + reformulation d'une phrase de mon analyse qui manque de précision."
  }
},

// ════════════════════════════════════════════════════════════
// SESSION 2 — L'argument : structure, solidité, failles
// ════════════════════════════════════════════════════════════
{
  id: 2,
  type: "normale",
  theme: "L'argument : structure, solidité, failles",
  format: "Dialogue socratique",
  icon: "⚖️",
  duration: "~30 min",
  objectif: "Construire un argument solide, identifier ses prémisses et le tester en 3 questions.",
  content: `
<h2>Anatomie de l'argument — ce qui tient et ce qui cède</h2>

<p>Un argument n'est pas une opinion vigoureusement exprimée. Ce n'est pas non plus une vérité criée plus fort que les autres. Un argument est une structure logique : elle peut être correcte ou incorrecte, solide ou friable — indépendamment du volume sonore ou de l'assurance de celui qui le profère. Comprendre cette structure est la première condition pour argumenter avec rigueur et pour résister à ceux qui ne le font pas.</p>

<h3>Le syllogisme — brique fondamentale</h3>

<p>Aristote formalise dans ses <em>Analytiques</em> (~350 av. J.-C.) ce qu'il appelle le syllogisme : un raisonnement en trois temps.</p>

<blockquote>Prémisse majeure (vérité générale) : Tout homme est mortel.<br>
Prémisse mineure (cas particulier) : Socrate est un homme.<br>
Conclusion : Socrate est mortel.</blockquote>

<p>La force du syllogisme : si les deux prémisses sont vraies et que la forme logique est correcte, la conclusion est <em>nécessairement</em> vraie. Il n'y a pas de débat possible. C'est ce qui le distingue de la rhétorique ordinaire, qui travaille dans le domaine du vraisemblable, non du nécessaire.</p>

<p>En pratique, on n'explicite presque jamais les deux prémisses. On utilise des enthymèmes (voir S1) — des syllogismes raccourcis dont une prémisse est sous-entendue. "Il a menti dans ce dossier, donc son témoignage ne vaut rien." Prémisse sous-entendue : "Qui ment une fois est généralement indigne de confiance." Cette prémisse peut être contestée — et c'est souvent là que se joue le vrai débat.</p>

<h3>Les deux types de raisonnements rhétoriques</h3>

<p><strong>La déduction (du général au particulier).</strong> On part d'une règle générale pour en tirer une conclusion sur un cas particulier. "Les marchés financiers détestent l'incertitude. Cette élection crée de l'incertitude. Donc les marchés vont baisser." La solidité dépend de la prémisse majeure — est-elle vraiment vraie ? Toujours ? Dans toutes les conditions ?</p>

<p><strong>L'induction (du particulier au général).</strong> On part de cas particuliers pour en tirer une règle générale. "Ce produit a échoué en France, en Allemagne et en Espagne. Donc il ne fonctionnera pas en Europe." La solidité dépend du nombre de cas et de leur représentativité. Un seul contre-exemple suffit à réfuter une loi universelle — c'est la leçon du Cygne noir de Nassim Taleb : on avait observé des milliers de cygnes blancs et conclu que tous les cygnes étaient blancs. L'Australie a démenti la prémisse en 1697.</p>

<h3>Le test de solidité en 3 questions</h3>

<p>Avant de défendre un argument, ou pour en évaluer un, posez ces trois questions :</p>

<p><strong>Question 1 — La prémisse est-elle vraie ou vérifiable ?</strong> C'est souvent là que tout se joue. On accepte des prémisses comme allant de soi alors qu'elles sont discutables. "La croissance économique est toujours souhaitable." "Les clients veulent des prix bas." Ces prémisses cachées méritent d'être interrogées.</p>

<p><strong>Question 2 — La conclusion découle-t-elle logiquement de la prémisse ?</strong> Le saut logique est l'erreur la plus fréquente. "Les ventes baissent depuis que Marie dirige l'équipe commerciale, donc c'est sa faute." La baisse peut avoir d'autres causes. La corrélation n'est pas la causalité.</p>

<p><strong>Question 3 — La conclusion répond-elle à la question posée ?</strong> Il arrive qu'un argument soit parfaitement structuré mais hors-sujet — il répond à une question légèrement différente de celle posée. Les avocats experts utilisent cette technique pour déplacer le débat sur un terrain plus favorable.</p>

<h3>Les 5 failles classiques d'un argument</h3>

<p><strong>1. La prémisse fausse ou non vérifiée.</strong> "Les gens heureux sont productifs. Si on rend les employés heureux, ils seront productifs." La prémisse majeure est contestable — le lien entre bonheur et productivité est bien moins simple que ça. La causalité peut être inverse (la productivité produit le bonheur, pas l'inverse) ou inexistante.</p>

<p><strong>2. L'induction abusive.</strong> Généraliser à partir d'un échantillon non représentatif. "Mon ami a arrêté de fumer grâce aux patches, donc les patches fonctionnent." Un cas particulier ne fait pas une règle. Cette erreur est omniprésente dans le raisonnement quotidien et dans les médias.</p>

<p><strong>3. La confusion corrélation/causalité.</strong> Deux phénomènes se produisent ensemble — on en conclut que l'un cause l'autre. Les ventes de glaces augmentent en même temps que les noyades. La glace ne cause pas les noyades — c'est la chaleur qui cause les deux. Ce sophisme est si fréquent qu'il a son propre adage latin : <em>post hoc ergo propter hoc</em> (après ça, donc à cause de ça).</p>

<p><strong>4. Le saut quantitatif.</strong> Passer du "certains" au "tous", du "parfois" au "toujours", du "dans ce cas" au "en général". "Certains chefs de projet utilisent cette méthode. Donc cette méthode est la meilleure." L'amplification quantitative est une erreur logique fréquente dans les argumentaires commerciaux.</p>

<p><strong>5. La question piégée.</strong> Formuler une question dont les termes présupposent la réponse. "Quand avez-vous arrêté de mentir à vos clients ?" présuppose que vous avez menti. Répondre à la question dans ses propres termes, c'est accepter la présupposition. La parade : "La question présuppose quelque chose que je conteste."</p>

<h3>Argument vs opinion : une distinction fondamentale</h3>

<p>La distinction semble évidente — elle ne l'est pas dans la pratique. Une opinion est une préférence, une croyance, une évaluation subjective. <em>"Je pense que le travail hybride est mieux."</em> Elle n'a pas à se justifier — c'est une position personnelle.</p>

<p>Un argument est une proposition avec des raisons vérifiables. <em>"Le travail hybride augmente la rétention des talents de 23% selon Stanford (2022), parce qu'il réduit le coût de trajet et augmente l'autonomie perçue."</em> La différence ? L'argument peut être <strong>attaqué sur ses prémisses</strong> — les 23% sont-ils fiables ? L'étude est-elle généralisable ? La rétention est-elle le bon indicateur ?</p>

<p>L'erreur fréquente : présenter une opinion comme si c'était un argument ("C'est évident", "Tout le monde sait que...") ou rejeter un argument en le traitant comme une opinion ("C'est ton point de vue"). Les deux sont des formes de paresse intellectuelle.</p>

<h3>Construire un argument à l'envers — la technique de l'avocat</h3>

<p>Les avocats de plaidoirie apprennent à construire leurs arguments à rebours : <em>partez de la conclusion que vous voulez atteindre, puis remontez vers les prémisses qui la soutiennent</em>. Ce n'est pas de la malhonnêteté — c'est de l'efficacité rhétorique. Vous savez où vous voulez aller. Vous sélectionnez ensuite les faits et raisonnements qui y mènent de façon légitime.</p>

<p>La contrepartie honnête : une fois l'argument construit, appliquez le test en 3 questions <em>comme si vous étiez l'adversaire</em>. Quelle est la prémisse la plus fragile ? Quel saut logique est le plus contestable ? Quelle objection n'avez-vous pas anticipée ? Cette auto-contradiction préventive est ce que les rhétoriciens appellent la <em>refutatio</em> — et elle renforce considérablement la crédibilité (éthos) de celui qui la pratique.</p>

<h3>Analyse de cas — Perelman et le "nouvel auditoire universel"</h3>

<p>Le philosophe belge Chaïm Perelman, dans son <em>Traité de l'argumentation</em> (1958, avec Lucie Olbrechts-Tyteca), introduit une notion fondamentale : l'<strong>auditoire universel</strong>. Un argument solide n'est pas seulement celui qui convainc l'auditoire présent — c'est celui qui convaincrait <em>tout auditoire raisonnable</em>, indépendamment de ses préjugés et de ses intérêts. C'est le test ultime de solidité.</p>

<blockquote>« L'argumentation est efficace quand elle parvient à accroître ou à diminuer l'adhésion des esprits aux thèses qu'on leur présente. »<br>— Perelman & Olbrechts-Tyteca, <em>Traité de l'argumentation</em>, 1958</blockquote>

<h3>Mot du jour — Réfutabilité (falsifiabilité)</h3>
<p>Concept introduit par Karl Popper dans <em>La Logique de la découverte scientifique</em> (1934). Un énoncé est réfutable s'il existe une expérience ou un fait qui pourrait le démontrer faux. "Tous les corbeaux sont noirs" est réfutable — il suffit d'un corbeau blanc. "L'âme humaine est immortelle" n'est pas réfutable — aucune observation ne peut la démontrer fausse. La réfutabilité est le critère qui distingue la connaissance scientifique du dogme. En rhétorique : un argument non réfutable n'est pas un argument solide — c'est une assertion.</p>
`,
  anchor: "Formule l'argument le plus solide que tu aies entendu ou utilisé cette semaine. Identifie sa prémisse majeure. Est-elle vraiment vérifiée ?",
  action: "La prochaine fois que tu construis un argument professionnel (email, présentation, discussion), écris-le d'abord en 3 lignes : Prémisse → Raisonnement → Conclusion. Puis applique-lui le test des 3 questions.",
  connections: [1, 3, 8],
  resources: {
    extraits: [
      { titre: "Aristote, Analytiques premiers, Livre I (~350 av. J.-C.)", texte: "« Un syllogisme est un discours dans lequel, certaines choses étant posées, quelque chose d'autre que ces données en résulte nécessairement du seul fait de ces données. »" },
      { titre: "Perelman & Olbrechts-Tyteca, Traité de l'argumentation (1958)", texte: "« Contrairement à la démonstration, l'argumentation ne s'adresse pas à une raison impersonnelle, mais à un auditoire particulier ou universel. C'est pourquoi ses prémisses ne sont pas des vérités, mais des points de départ acceptés. »" }
    ],
    discours: [
      { titre: "Zola — J'Accuse (1898)", desc: "Disséquer la structure argumentative : quelles sont les prémisses ? Les raisonnements ? Y a-t-il des sauts logiques ?", lien: "https://www.wikisource.org/wiki/J%27Accuse..." },
      { titre: "Débat Lincoln-Douglas (1858)", desc: "Modèle historique d'argumentation contradictoire rigoureuse. Observer comment chacun attaque les prémisses de l'autre.", lien: "https://www.nps.gov/liho/learn/historyculture/debates.htm" }
    ],
    biblio: [
      { titre: "Traité de l'argumentation", auteur: "Chaïm Perelman & L. Olbrechts-Tyteca, PUF (1958/2008)", note: "La réhabilitation philosophique de la rhétorique au XXe siècle. Dense mais fondamental. Commencer par l'introduction." },
      { titre: "La Logique de la découverte scientifique", auteur: "Karl Popper, Payot (1934/1973)", note: "Pour comprendre la réfutabilité et pourquoi elle est le critère d'un bon argument." },
      { titre: "L'Argumentation dans la communication", auteur: "Philippe Breton, La Découverte (1996)", note: "Le manuel français de référence. Accessible, illustré. Pont entre rhétorique antique et pratiques contemporaines." }
    ]
  },
  quiz: [
    { q: "Qu'est-ce que la confusion corrélation/causalité ? Donne un exemple.", a: "Deux phénomènes corrélés ne sont pas nécessairement liés causalement. Ex : les ventes de glaces et les noyades augmentent ensemble — non pas parce que l'une cause l'autre, mais parce que les deux sont causées par la chaleur. Latin : post hoc ergo propter hoc." },
    { q: "Quelle est la technique de construction 'à l'envers' des avocats ?", a: "Partir de la conclusion souhaitée, puis remonter vers les prémisses qui la soutiennent de façon légitime. Suivi d'une auto-réfutation préventive (refutatio) pour identifier les failles avant l'adversaire." },
    { q: "Qu'est-ce que l'auditoire universel selon Perelman ?", a: "Un argument vraiment solide est celui qui convaincrait tout auditoire raisonnable, indépendamment de ses préjugés et intérêts — pas seulement l'auditoire présent." }
  ],
  quizMcq: [
    {
      q: "Qu'est-ce qu'un enthymème ?",
      options: ["Un syllogisme dont la conclusion est fausse", "Un syllogisme dont une prémisse est sous-entendue car partagée", "Une induction à partir de cas trop peu nombreux", "Un argument circulaire qui se prouve lui-même"],
      answer: 1,
      explication: "L'enthymème est un syllogisme raccourci : une prémisse est sous-entendue parce que l'auditoire la partage. Cette reconstruction active crée un sentiment d'adhésion plus fort qu'un syllogisme complet explicité."
    },
    {
      q: "'Les ventes de glaces et les noyades augmentent ensemble.' Quel problème logique illustre cet exemple ?",
      options: ["La prémisse fausse ou non vérifiée", "La généralisation hâtive", "La confusion corrélation/causalité", "Le saut quantitatif"],
      answer: 2,
      explication: "Post hoc ergo propter hoc. La chaleur cause simultanément les deux phénomènes — la glace ne cause pas les noyades. Deux événements corrélés ne sont pas nécessairement liés causalement."
    },
    {
      q: "La technique de construction 'à l'envers' des avocats consiste à...",
      options: ["Réfuter l'adversaire avant même qu'il argumente", "Partir de la conclusion souhaitée pour remonter vers les prémisses légitimes", "Cacher la prémisse la plus fragile au centre de l'argument", "Utiliser exclusivement des preuves à charge"],
      answer: 1,
      explication: "On sait où on veut aller, on sélectionne les faits et raisonnements qui y mènent légitimement — puis on applique la refutatio (auto-critique) pour trouver ses propres failles avant l'adversaire."
    }
  ],
  writingExercise: {
    title: "Construire et tester un argument professionnel",
    duration: "~20 min",
    instruction: "Prenez une position que vous défendez ou devrez défendre prochainement (pourquoi décision X est juste, pourquoi projet Y mérite d'être lancé, pourquoi approche Z est préférable). Rédigez l'argument complet en 200-250 mots en explicitant : prémisse majeure, prémisse mineure, conclusion. Puis appliquez le test des 3 questions : la prémisse est-elle vraiment vérifiable ? la conclusion découle-t-elle logiquement ? répond-elle à la vraie question ? Identifiez et formulez la faille principale de votre propre argument — et proposez comment un adversaire honnête pourrait l'attaquer.",
    correctionCriteria: "Évalue mon argument sur : (1) Solidité de la prémisse majeure — est-elle vraiment vérifiable ou présuppose-t-elle trop ? (2) Légitimité du raisonnement — y a-t-il un saut logique ? (3) Pertinence de la conclusion par rapport à la vraie question posée (4) Honnêteté et précision de l'auto-réfutation. Note /5 sur chaque axe + reformulation de la prémisse la plus fragile."
  }
},

// ════════════════════════════════════════════════════════════
// SESSION 3 — Les sophismes
// ════════════════════════════════════════════════════════════
{
  id: 3,
  type: "atelier",
  theme: "Les sophismes — reconnaître et démonter",
  format: "Étude de cas",
  icon: "🎭",
  duration: "~35 min",
  objectif: "Identifier les 10 sophismes principaux et les démonter sans confrontation ouverte.",
  content: `
<h2>Les sophismes — l'art de paraître raisonner</h2>

<p>Un sophisme est un raisonnement qui <em>paraît</em> valide mais ne l'est pas. Il peut être intentionnel — c'est alors un instrument de manipulation délibérée — ou involontaire, résultat d'une paresse intellectuelle ou d'une confusion cognitive. Dans les deux cas, l'effet est le même : une conclusion invalide présentée comme si elle découlait logiquement de prémisses solides.</p>

<p>Les Grecs distinguaient le <em>sophiste</em> (celui qui vend la sagesse apparente) du <em>philosophe</em> (celui qui aime la vraie sagesse). Platon a consacré plusieurs dialogues à démontrer comment les sophistes de son époque — Protagoras, Gorgias, Thrasymaque — utilisaient le langage pour paraître sages sans l'être. Aristote, dans ses <em>Réfutations sophistiques</em>, recense et classiﬁe pour la première fois les erreurs de raisonnement — 13 types dans ce texte fondateur.</p>

<p>Schopenhauer, vingt-deux siècles plus tard, propose dans <em>L'Art d'avoir toujours raison</em> (1831) une liste de 38 stratagèmes dialectiques — une taxonomie pragmatique, non plus de l'erreur logique, mais de la mauvaise foi conversationnelle. "Mon seul but, dit-il, est de décrire fidèlement ce qui se passe réellement dans les discussions humaines." Ce livre est un manuel de survie, pas de philosophie.</p>

<h3>Les 10 sophismes à maîtriser absolument</h3>

<p><strong>1. Ad hominem</strong> — attaquer la personne, pas l'argument.<br>
<em>"Vous parlez de gestion financière saine, mais vous avez fait faillite il y a dix ans."</em><br>
L'histoire personnelle de l'orateur ne rend pas son argument vrai ou faux. Un alcoolique repenti peut donner de bons conseils sur la sobriété. La forme la plus vicieuse est l'<em>ad hominem tu quoque</em> : "Et toi ? Tu fais pareil !" — qui invalide la critique sans répondre à son fond.</p>

<p><strong>2. L'homme de paille</strong> (<em>straw man</em>) — déformer la position adverse pour mieux l'attaquer.<br>
<em>"Il veut réduire les dépenses militaires." → "Il veut qu'on soit sans défense face à nos ennemis !"</em><br>
On substitue à la position réelle une position caricaturale plus facile à attaquer. C'est le sophisme le plus fréquent dans les débats politiques et dans les réunions professionnelles conflictuelles. Défense : reformuler sa position avec précision avant que l'autre l'interprète.</p>

<p><strong>3. L'appel à la majorité</strong> (<em>argumentum ad populum</em>) — ce que tout le monde croit est vrai.<br>
<em>"90% des gens pensent que [X], donc [X] est vrai."</em><br>
La vérité n'est pas démocratique. La Terre était ronde quand tout le monde la croyait plate. La cigarette a été promue par des médecins pendant des décennies. Ce sophisme est particulièrement redoutable dans les organisations où la pression du consensus écrase la pensée critique.</p>

<p><strong>4. La fausse dichotomie</strong> (<em>false dilemma</em>) — réduire à deux options quand il y en a davantage.<br>
<em>"Soit vous soutenez ce projet à 100%, soit vous n'êtes pas un membre de l'équipe."</em><br>
Le monde binaire est une fiction rhétorique. Entre "pour" et "contre", il y a "neutre", "partiellement favorable", "favorable sous conditions", "opposé sur ce point mais pas sur les autres". La fausse dichotomie force un choix artificiel et pénalise la nuance.</p>

<p><strong>5. La pente glissante</strong> (<em>slippery slope</em>) — enchaîner des causalités non démontrées.<br>
<em>"Si on autorise le télétravail, les gens ne viendront plus jamais au bureau, les équipes se désintègreront, et l'entreprise s'effondrera."</em><br>
Chaque lien causal de la chaîne doit être démontré séparément. La pente glissante présuppose que le premier pas entraîne inévitablement tous les suivants — ce qui est rarement le cas.</p>

<p><strong>6. L'appel à l'autorité</strong> (<em>argumentum ad verecundiam</em>) — utiliser le prestige sans pertinence.<br>
<em>"Un prix Nobel de physique pense que les vaccins sont dangereux."</em><br>
L'autorité doit être pertinente au domaine. Un Nobel de physique n'a pas plus d'autorité qu'un non-spécialiste en virologie. Ce sophisme est particulièrement trompeur parce que l'appel à l'autorité peut être légitime — un cardiologue parlant de cardiologie est une autorité pertinente.</p>

<p><strong>7. La généralisation hâtive</strong> — conclure une règle générale depuis un trop petit échantillon.<br>
<em>"J'ai eu deux mauvaises expériences avec des consultants. Les consultants sont inutiles."</em><br>
Variante de l'induction abusive (S2). Ce sophisme est alimenté par le biais de confirmation : on retient les cas qui confirment notre croyance, on ignore ceux qui la contredisent.</p>

<p><strong>8. La question piégée</strong> (<em>complex question</em>) — formuler une question dont les termes présupposent la réponse.<br>
<em>"Avez-vous arrêté de traiter vos clients avec mépris ?"</em><br>
Toute réponse directe (oui/non) accepte la présupposition. La parade : "Votre question présuppose quelque chose que je conteste formellement : [reformuler la présupposition et la réfuter]."</p>

<p><strong>9. L'appel à la nature</strong> — ce qui est naturel est bon, ce qui est artificiel est mauvais.<br>
<em>"Ce produit est 100% naturel, donc il est sans danger."</em><br>
L'amiante est naturel. Le cyanure est naturel. La pénicilline est artificielle. La naturalité n'est pas un critère de valeur ou de sécurité.</p>

<p><strong>10. La diversion</strong> (<em>red herring</em>) — déplacer le débat sur un sujet connexe mais distinct.<br>
<em>[En plein débat sur les résultats financiers] "La vraie question, c'est notre culture d'entreprise, pas les chiffres du trimestre."</em><br>
La diversion peut être non intentionnelle (on suit une tangente) ou délibérée (on fuit un terrain défavorable). Défense : "C'est un point important, mais il est distinct de la question posée. Revenons à [question initiale]."</p>

<h3>La technique de démontage en 3 temps</h3>

<p>Nommer publiquement un sophisme ("c'est un ad hominem") peut être perçu comme une agression ou un cours magistral non sollicité. Il vaut mieux démonter le sophisme sans le nommer — la clarté est la même, l'effet de condescendance est évité.</p>

<p><strong>Temps 1 — Reformuler la position adverse avec précision.</strong> "Si je comprends bien, tu dis que [reformulation exacte, sans caricature]." Cette étape seule démantèle l'homme de paille — vous montrez que vous avez entendu la vraie position.</p>

<p><strong>Temps 2 — Poser une question sur le lien logique.</strong> "Qu'est-ce qui te fait penser que A entraîne nécessairement B ?" Pour la pente glissante : "Est-ce que le premier pas rend vraiment les suivants inévitables ?" Ces questions exposent la fragilité sans accusation directe.</p>

<p><strong>Temps 3 — Proposer une alternative ou une nuance.</strong> "Ne pourrait-on pas aussi envisager que [position intermédiaire ou alternative] ?" Vous n'imposez pas — vous ouvrez. L'autre peut alors revoir sa position sans perdre la face.</p>

<h3>Les sophismes de Schopenhauer — au-delà de la logique</h3>

<p>Schopenhauer observe que dans une conversation réelle, la victoire n'est pas toujours au meilleur argument. Elle va souvent à celui qui maîtrise le mieux les mécanismes psychologiques de la joute verbale. Trois de ses stratagèmes les plus utiles à connaître défensivement :</p>

<p><strong>Stratagème 1 — L'extension.</strong> Généraliser la thèse adverse au-delà de ses limites pour la rendre intenable. Réponse : "Ce n'est pas ce que j'ai dit. Je parle précisément de [X], dans [ces conditions], et non de [généralisation]."</p>

<p><strong>Stratagème 12 — La distraction.</strong> Changer de sujet quand on est en difficulté. Réponse : nommer le déplacement calmement. "Vous soulevez un point intéressant, mais nous avons dévié. La question était [rappel précis]."</p>

<p><strong>Stratagème 38 — L'attaque personnelle.</strong> Quand tous les arguments échouent, attaquer la personne. Réponse : ne pas répondre à l'attaque. "Cette remarque ne porte pas sur le fond du sujet. Ma position reste [X], et je suis prêt à en discuter sur le fond."</p>

<h3>Mot du jour — Paralogisme</h3>
<p>Du grec <em>paralogismos</em> (raisonnement à côté). Erreur de raisonnement <em>involontaire</em> — à distinguer du sophisme, qui est délibéré. Les deux produisent une conclusion invalide, mais leurs intentions diffèrent. En pratique, la distinction est souvent impossible à établir de l'extérieur — ce qui plaide pour donner le bénéfice du doute dans les premières discussions. Aristote, <em>Réfutations sophistiques</em>, ch. 1.</p>
`,
  anchor: "Identifie un sophisme que tu as entendu cette semaine — en réunion, dans les médias, dans une conversation. Nomme-le et explique pourquoi c'en est un.",
  action: "Cette semaine, lors d'une conversation difficile, applique le 3-temps de démontage : reformuler → questionner le lien → proposer une alternative. Sans jamais prononcer le mot 'sophisme'.",
  connections: [2, 8],
  resources: {
    extraits: [
      { titre: "Schopenhauer, L'Art d'avoir toujours raison, Stratagème 1 (1831)", texte: "« Étendre l'affirmation de l'adversaire au-delà de ses limites naturelles, l'interpréter dans le sens le plus large possible, l'exagérer, et réfuter ensuite cette affirmation généralisée — alors que lui a dit quelque chose de beaucoup plus restreint et de beaucoup plus modéré. »" },
      { titre: "Aristote, Réfutations sophistiques, ch. 1 (~350 av. J.-C.)", texte: "« Les arguments sophistiques sont ceux qui ne tirent que l'apparence d'une conclusion, sans avoir la conclusion réelle, les uns à cause de l'incapacité de celui qui raisonne, les autres à cause de la mauvaise foi de l'interlocuteur. »" }
    ],
    discours: [
      { titre: "Débat présidentiel Nixon-Kennedy (1960)", desc: "Premier débat télévisé de l'histoire américaine. Analyser comment Kennedy gère les attaques ad hominem sur son manque d'expérience.", lien: "https://www.youtube.com/watch?v=gbrcRKqLSRw" },
      { titre: "Christopher Hitchens — débat sur la religion", desc: "Maître du démontage de sophismes en temps réel. Observer sa technique de reformulation avant réfutation.", lien: "https://www.youtube.com/results?search_query=christopher+hitchens+debate" }
    ],
    biblio: [
      { titre: "L'Art d'avoir toujours raison", auteur: "Arthur Schopenhauer, Mille et une nuits (1831/2003)", note: "80 pages. À lire en entier. Chaque stratagème prend 1-2 pages. Irritant et indispensable." },
      { titre: "Réfutations sophistiques", auteur: "Aristote, trad. Louis-André Dorion, Vrin", note: "Classification originale des sophismes. Plus technique, mais la source primaire." },
      { titre: "Logique de la découverte scientifique", auteur: "Karl Popper, Payot", note: "Pour comprendre pourquoi les sophismes sont des substituts à la réfutabilité." }
    ]
  },
  exercise: {
    title: "Atelier — Identifier et démonter",
    duration: "~15 min",
    instruction: "Pour chacun des 3 extraits ci-dessous, identifie le sophisme, nomme-le, et formule la réponse que tu donnerais en utilisant le 3-temps.",
    cases: [
      {
        text: "\"Si on autorise le télétravail deux jours par semaine, dans six mois tout le monde sera chez soi, personne ne se parlera plus, la cohésion d'équipe s'effondrera et l'entreprise perdra ses meilleurs éléments.\"",
        answer: "Pente glissante. Réponse 3-temps : (1) 'Si je comprends bien, tu crains que le télétravail partiel mène à une désintégration totale de l'équipe.' (2) 'Qu'est-ce qui te fait penser que deux jours rendrait le retour au bureau impossible ?' (3) 'Ne pourrait-on pas tester 2 jours avec des critères d'évaluation à 3 mois ?'"
      },
      {
        text: "\"Tu critiques ma façon de gérer le budget, mais rappelle-toi que ton projet de l'an dernier a dépassé les coûts de 40%.\"",
        answer: "Ad hominem (tu quoque). La performance passée du critique ne rend pas la critique invalide. Réponse : 'Ma gestion de l'an dernier est un sujet distinct. La question est de savoir si ce budget est bien calibré — sur le fond, qu'est-ce que tu contestes ?'"
      },
      {
        text: "\"Tout le monde dans l'équipe pense que cette approche est la bonne. Si toi tu n'es pas convaincu, peut-être que le problème vient de ta résistance au changement.\"",
        answer: "Double sophisme : appel à la majorité + ad hominem. Réponse : 'Le consensus de l'équipe est un signal, pas une preuve. Quels sont les arguments qui soutiennent cette approche indépendamment de ce que tout le monde en pense ?'"
      }
    ]
  },
  quiz: [
    { q: "Décris l'homme de paille en une phrase et donne un exemple professionnel.", a: "Déformer la position adverse en une caricature plus facile à attaquer. Ex : 'Il veut réduire les réunions' → 'Il veut qu'on ne se coordonne plus jamais.'" },
    { q: "Quelle est la différence entre un sophisme et un paralogisme ?", a: "Le sophisme est délibéré (mauvaise foi rhétorique). Le paralogisme est une erreur involontaire de raisonnement. Les deux produisent une conclusion invalide." },
    { q: "Pourquoi ne pas nommer le sophisme publiquement lors d'un débat ?", a: "Cela peut être perçu comme condescendant ou agressif. Mieux vaut démonter le sophisme par le 3-temps (reformuler, questionner, proposer) sans employer le vocabulaire technique." }
  ],
  quizMcq: [
    {
      q: "'Tu critiques ma gestion du budget, mais rappelle-toi que ton projet de l'an dernier a dépassé ses coûts de 40%.' Quel sophisme ?",
      options: ["Homme de paille", "Pente glissante", "Ad hominem tu quoque", "Appel à la majorité"],
      answer: 2,
      explication: "L'ad hominem tu quoque ('et toi donc ?') : attaquer le critique plutôt que la critique. Les performances passées du critique ne rendent pas sa critique invalide sur le fond — elles sont logiquement hors-sujet."
    },
    {
      q: "'Soit vous soutenez ce projet à 100%, soit vous n'êtes pas un vrai membre de l'équipe.' Quel sophisme ?",
      options: ["Diversion (red herring)", "Fausse dichotomie", "Appel à l'autorité", "Pente glissante"],
      answer: 1,
      explication: "La fausse dichotomie réduit à deux options un espace qui en comporte davantage : favorable sous conditions, opposé sur ce point seulement, neutre, etc. Elle force un choix artificiel et pénalise la nuance."
    },
    {
      q: "Quelle est la première étape du démontage d'un sophisme en 3 temps ?",
      options: ["Nommer le sophisme pour informer l'interlocuteur", "Proposer immédiatement une alternative plus nuancée", "Reformuler la position adverse avec précision et demander validation", "Poser une question sur la solidité du lien logique"],
      answer: 2,
      explication: "Reformuler d'abord : 'Si je comprends bien, tu soutiens que X parce que Y. Est-ce exact ?' Cette étape seule démantèle souvent l'homme de paille — elle montre qu'on a entendu la vraie position."
    }
  ],
  writingExercise: {
    title: "Identifier et démonter un sophisme réel",
    duration: "~20 min",
    instruction: "Identifiez un sophisme que vous avez entendu récemment — réunion, médias, conversation, publicité, débat politique. Rédigez en 200-300 mots : (1) le contexte et la citation exacte ou fidèlement reconstituée du sophisme ; (2) le nom du sophisme et la démonstration que c'en est un (quelle règle logique exacte est violée ?) ; (3) votre réponse complète en 3 temps — reformuler, questionner le lien, proposer une alternative — rédigée comme si vous parliez en temps réel, sans jamais prononcer le mot 'sophisme'.",
    correctionCriteria: "Évalue ma réponse sur : (1) Exactitude de l'identification — est-ce vraiment ce sophisme, ou un autre ? (2) Clarté de la démonstration logique — la règle violée est-elle bien explicitée ? (3) Efficacité du 3-temps — neutralise-t-il le sophisme sans confrontation ouverte ? (4) Naturel et fluidité à l'oral — est-ce qu'on pourrait prononcer ces phrases ? Note /5 + reformulation de l'étape la moins convaincante."
  }
},

// ════════════════════════════════════════════════════════════
// SESSION 4 — Le vocabulaire
// ════════════════════════════════════════════════════════════
{
  id: 4,
  type: "normale",
  theme: "Le vocabulaire — comment l'élargir vraiment",
  format: "Cours magistral",
  icon: "📖",
  duration: "~30 min",
  objectif: "Passer du vocabulaire passif au vocabulaire actif par des méthodes concrètes et durables.",
  content: `
<h2>Le vocabulaire — l'outil de précision de la pensée</h2>

<p>Victor Hugo écrivait : "Le mot, c'est le Verbe, et le Verbe, c'est Dieu." Formule mystique mise à part, il pointait quelque chose de fondamental : le mot n'est pas l'emballage d'une idée préexistante — il est constitutif de l'idée elle-même. On ne pense pas d'abord, puis on cherche les mots. On pense <em>avec</em> les mots dont on dispose. Un vocabulaire pauvre, c'est une pensée appauvrie — non par manque d'intelligence, mais par manque d'outils.</p>

<p>George Orwell l'avait compris mieux que quiconque. Dans son essai <em>Politics and the English Language</em> (1946), il démontrait que les politiques utilisent délibérément un langage vague — "pacification", "rectification des frontières", "transferts de population" — pour masquer des réalités que leur formulation précise rendrait insupportables. La langue façonne la pensée ; la pensée floue est souvent une langue floue.</p>

<h3>Les deux vocabulaires : passif et actif</h3>

<p>Tout locuteur dispose de deux lexiques distincts.</p>

<p>Le <strong>vocabulaire passif</strong> (ou de réception) regroupe les mots qu'on reconnaît à la lecture ou à l'écoute. Il est toujours plus vaste que le vocabulaire actif — souvent 3 à 5 fois plus. Un locuteur francophone cultivé reconnaît 50 000 à 100 000 mots ; il en utilise activement 15 000 à 20 000.</p>

<p>Le <strong>vocabulaire actif</strong> (ou de production) est l'ensemble des mots qu'on emploie spontanément à l'oral et à l'écrit, sans effort particulier de recherche. C'est lui qui détermine la qualité de l'expression. Et c'est lui qui stagne si on ne travaille pas spécifiquement à le développer.</p>

<p>L'enjeu pédagogique n'est donc pas d'apprendre des mots nouveaux — mais de <em>faire passer des mots du passif à l'actif</em>. Vous connaissez probablement le mot "aporie". Mais l'utiliseriez-vous spontanément en réunion ? Probablement pas. Il est dans votre passif. Le travail consiste à l'ancrer dans votre actif.</p>

<h3>Pourquoi le mot précis change tout</h3>

<p>Flaubert passait des heures, des jours parfois, à chercher le mot juste — <em>le mot exact</em>. Pas le mot approchant, le mot convenable, le mot à peu près juste. Le mot juste. Cette obsession n'est pas du perfectionnisme esthétique : c'est une exigence épistémologique. Un mot imprécis traduit une pensée imprécise.</p>

<p>Comparez :</p>
<ul>
<li>"C'est intéressant" → signifie rien. Une présentation, un scandale et un résultat financier peuvent tous être "intéressants".</li>
<li>"C'est révélateur" → suggère que quelque chose de caché vient d'apparaître.</li>
<li>"C'est paradoxal" → signale une contradiction interne dans le phénomène.</li>
<li>"C'est décisif" → indique que ce point tranche une question en suspens.</li>
<li>"C'est éloquent" → dit que les faits parlent d'eux-mêmes.</li>
</ul>

<p>Ces cinq mots ne sont pas des synonymes. Ils traduisent cinq analyses différentes. Choisir le bon mot, c'est avoir fait l'analyse.</p>

<h3>Les 5 méthodes concrètes</h3>

<p><strong>Méthode 1 — La substitution systématique.</strong> À chaque fois que vous utilisez un mot générique — "faire", "chose", "bien", "intéressant", "difficile", "montrer", "penser" — imposez-vous de trouver le mot exact. Pas un synonyme sophistiqué : le mot qui traduit précisément ce que vous voulez dire. "Faire une présentation" → "délivrer", "exposer", "soumettre", "plaider". Chacun dit quelque chose de différent.</p>

<p><strong>Méthode 2 — Le carnet de mots (méthode active).</strong> Quand vous lisez et rencontrez un mot que vous ne maîtrisez pas activement : notez-le. Écrivez sa définition dans vos propres mots — sans copier le dictionnaire. Puis rédigez une phrase qui l'emploie dans votre contexte professionnel. Ce tri-action (noter, définir, employer) est le seul qui garantit le passage au vocabulaire actif.</p>

<p><strong>Méthode 3 — La méthode Feynman du mot.</strong> Prenez un mot que vous pensez connaître. Fermez le dictionnaire. Expliquez-le à voix haute comme à un enfant de 12 ans. Là où vous butiez, vous ne le maîtrisez pas vraiment — il est dans votre passif. Retournez à la définition, revenez au test. Recommencez jusqu'à ce que l'explication soit fluide et concrète.</p>

<p><strong>Méthode 4 — La contrainte d'écriture.</strong> Bannissez cinq mots de votre lexique pendant sept jours : "très", "bien", "intéressant", "chose", "faire" (au sens générique). Pas une exception. Cette contrainte est inconfortable au début — et c'est exactement pour cette raison qu'elle fonctionne. Elle force le cerveau à chercher les vrais mots au lieu d'activer les réflexes par défaut.</p>

<p><strong>Méthode 5 — La lecture active avec annotation.</strong> Lire Montaigne, La Rochefoucauld, ou Camus avec un crayon à la main — non pas pour comprendre, mais pour <em>collecter</em>. Chaque tournure remarquable, chaque mot utilisé de façon inattendue, chaque phrase dont le rythme vous frappe : annotez. Le style ne s'apprend pas en théorie.</p>

<h3>Les registres de langue — naviguer sans erreur</h3>

<p>Un vocabulaire riche, ce n'est pas seulement savoir des mots rares. C'est savoir naviguer entre les registres selon le contexte :</p>

<ul>
<li><strong>Registre soutenu</strong> — conférence académique, plaidoirie, discours officiel. Lexique précis, syntaxe complexe, distance respectueuse.</li>
<li><strong>Registre courant</strong> — réunion professionnelle, email formel, entretien. Standard, clair, sans familiarité excessive.</li>
<li><strong>Registre familier</strong> — conversation informelle, équipe proche, humour. Raccourcis, expressions idiomatiques.</li>
</ul>

<p>L'erreur la plus coûteuse en milieu professionnel : utiliser le registre familier dans un contexte qui exige le registre courant. Elle décrédibilise immédiatement — non pas à cause du vocabulaire lui-même, mais parce qu'elle signale un mauvais calibrage du contexte. C'est un signal d'éthos négatif (voir S1).</p>

<h3>La nuance : ce que le synonyme ne dit pas</h3>

<p>Il n'existe pas de vrais synonymes en français — seulement des mots proches avec des nuances distinctes. Comprendre ces nuances, c'est comprendre la réalité plus finement.</p>

<p><em>Prudent / Précautionneux / Circonspect / Timoré.</em> Ces quatre adjectifs décrivent tous un rapport à la prudence — mais pas le même. Prudent est positif et actif. Précautionneux insiste sur les précautions prises. Circonspect suggère une attention méfiante aux détails. Timoré est péjoratif — excès de prudence paralysante. Confondre ces quatre mots, c'est confondre quatre personnalités.</p>

<h3>Analyse de cas — Flaubert et la chasse au mot juste</h3>

<p>Dans une lettre à Louise Colet (1852), Flaubert décrit sa méthode : "Ce que je veux faire, c'est un livre sur rien, un livre sans attache extérieure, qui se tiendrait de lui-même par la force interne de son style, comme la terre sans être soutenue se tient en l'air." Pour <em>Madame Bovary</em>, il réécrit certaines pages cinquante fois, cherchant le rythme, le son, le mot exact. Résultat : un roman où chaque mot compte — où rien ne peut être retiré sans que le sens souffre.</p>

<blockquote>« Le talent, c'est d'avoir envie de faire quelque chose. »<br>— Gustave Flaubert, <em>Correspondance</em>, 1852</blockquote>

<p>Cette exigence flaubertienne n'est pas réservée aux romanciers. Elle s'applique à tout écrit professionnel qui compte : une note de direction, un argumentaire commercial, un email crucial. La différence entre un texte ordinaire et un texte remarquable tient souvent à dix mots choisis avec soin là où cent ont été écrits d'un jet.</p>

<h3>Mot du jour — Hapax</h3>
<p>Du grec <em>hapax legomenon</em> (dit une seule fois). Mot ou forme qui n'apparaît qu'une seule fois dans un corpus donné. En rhétorique, l'hapax désigne aussi un mot utilisé dans un sens unique, créé pour l'occasion — néologisme ponctuel. Shakespeare était maître des hapax : il a inventé plus de 1 700 mots de l'anglais. L'hapax rhétorique peut être un outil stylistique puissant — à condition d'être compris au premier passage.</p>
`,
  anchor: "Donne 2 synonymes plus précis pour 3 de ces mots : intéressant / difficile / montrer / penser / bien. Pour chacun, précise la nuance qui les distingue.",
  action: "Choisis 3 mots génériques que tu utilises souvent (oral ou écrit). Bannis-les pendant 7 jours. Note quel mot tu emploies à la place à chaque occurrence.",
  connections: [1, 7],
  resources: {
    extraits: [
      { titre: "George Orwell, Politics and the English Language (1946)", texte: "« Un homme qui s'habitue à écrire dans ce style a déjà franchi un long chemin vers l'idiotie politique. La langue vagabonde et les idées de troupeau vont de pair. »" },
      { titre: "Flaubert, Lettre à Louise Colet (1852)", texte: "« Ce que je veux faire, c'est un livre sur rien, un livre sans attache extérieure, qui se tiendrait de lui-même par la force interne de son style. »" }
    ],
    discours: [
      { titre: "Discours de Simone Veil — loi sur l'IVG (1974)", desc: "Exercice : identifier les mots précisément choisis et ceux qui auraient pu être remplacés. Mesurer l'impact de chaque choix lexical.", lien: "https://www.ina.fr/ina-eclaire-actu/simone-veil-1974" },
      { titre: "De Gaulle — Appel du 18 juin (1940)", desc: "Économie de mots absolue. Chaque mot est irremplaçable. Analyser pourquoi.", lien: "https://www.youtube.com/watch?v=zghoDJHzqWc" }
    ],
    biblio: [
      { titre: "Dictionnaire des synonymes et nuances", auteur: "Henri Bertaud du Chazaud, Robert Laffont", note: "Indispensable. Pas pour trouver des synonymes — pour comprendre leurs différences." },
      { titre: "Politics and the English Language", auteur: "George Orwell (1946), dans Essais, articles, lettres", note: "20 pages. Le texte le plus important sur la relation entre langue et pensée." },
      { titre: "Dictionnaire des idées reçues", auteur: "Gustave Flaubert, Gallimard", note: "Un désapprentissage des formules creuses. Chaque entrée est un coup de pied dans une idée préconçue." }
    ]
  },
  quiz: [
    { q: "Quelle est la différence entre vocabulaire passif et actif ? Donne des chiffres.", a: "Passif : mots reconnus à la lecture/écoute (~50 000-100 000 pour un francophone cultivé). Actif : mots employés spontanément (~15 000-20 000). L'écart est de 3 à 5 fois." },
    { q: "Pourquoi Orwell dit-il que 'la langue vagabonde et les idées de troupeau vont de pair' ?", a: "Le langage vague permet de penser vaguement — et de masquer des réalités derrière des euphémismes. Une langue précise force une pensée précise. La vagueur lexicale est souvent une complice de la vagueur intellectuelle ou politique." },
    { q: "Donne la nuance entre 'prudent', 'précautionneux', 'circonspect' et 'timoré'.", a: "Prudent : actif et positif. Précautionneux : insiste sur les précautions prises. Circonspect : attention méfiante aux détails. Timoré : péjoratif, excès de prudence paralysante." }
  ],
  quizMcq: [
    {
      q: "Quelle est la différence essentielle entre vocabulaire passif et vocabulaire actif ?",
      options: ["Le passif s'utilise à l'écrit, l'actif à l'oral spontané", "Le passif est reconnu à la lecture ; l'actif est employé spontanément en production", "Le passif contient les mots techniques, l'actif les mots courants", "Le passif est toujours plus grand chez les experts du domaine"],
      answer: 1,
      explication: "L'écart est de x3 à x5 : un francophone cultivé reconnaît 50 000-100 000 mots mais n'en produit spontanément que 15 000-20 000. L'enjeu est de faire passer des mots du passif à l'actif par la pratique."
    },
    {
      q: "Quelle nuance distingue 'timoré' des autres synonymes de 'prudent' ?",
      options: ["Timoré insiste sur les précautions concrètes prises avant d'agir", "Timoré est péjoratif — excès de prudence qui paralyse l'action", "Timoré est le plus positif et valorisant des synonymes", "Timoré désigne une attention méfiante et attentive aux détails"],
      answer: 1,
      explication: "Prudent : positif et actif. Précautionneux : insiste sur les précautions. Circonspect : méfiance attentive. Timoré : péjoratif — la prudence excessive qui paralyse. Ces quatre mots décrivent quatre personnalités."
    },
    {
      q: "La méthode Feynman appliquée à un mot consiste à...",
      options: ["Apprendre sa racine étymologique et ses dérivés principaux", "L'utiliser dans 10 phrases différentes en une semaine", "L'expliquer à voix haute comme à un enfant de 12 ans, sans dictionnaire", "Trouver 5 synonymes et noter leurs nuances précises"],
      answer: 2,
      explication: "Là où vous butez dans l'explication, le mot n'est pas vraiment dans votre actif — il est dans le passif. L'explication fluide et concrète, sans jargon, est le seul test fiable de la maîtrise active."
    }
  ],
  writingExercise: {
    title: "Réécriture par substitution lexicale",
    duration: "~20 min",
    instruction: "Prenez un email ou un texte professionnel que vous avez rédigé récemment (100-200 mots). Réécrivez-le intégralement en appliquant les 5 méthodes : bannissez les mots génériques (faire, chose, bien, intéressant, difficile, montrer, penser) et substituez-les par le mot exact ; remplacez les passifs par des actifs ; retirez les adverbes remplaçables par un adjectif plus fort ; adoptez le registre précis de votre destinataire. Présentez les deux versions côte à côte, puis commentez en 3-4 lignes les 3 substitutions les plus significatives et leur effet sur le sens.",
    correctionCriteria: "Évalue ma réécriture sur : (1) Précision des substitutions — les mots choisis sont-ils vraiment plus exacts ou juste plus 'savants' ? (2) Cohérence du registre avec le contexte et le destinataire (3) Efficacité de la réduction des mots parasites (4) Pertinence des justifications des substitutions. Note /5 + 2-3 mots ou tournures dans ma version 'améliorée' qui restent encore imprécis."
  }
},

// ════════════════════════════════════════════════════════════
// SESSION 5 — L'art de la conversation
// ════════════════════════════════════════════════════════════
{
  id: 5,
  type: "normale",
  theme: "L'art de la conversation — écoute et rebond",
  format: "Jeu de rôle",
  icon: "💬",
  duration: "~30 min",
  objectif: "Écouter à 4 niveaux, rebondir avec précision, utiliser le silence comme outil rhétorique.",
  content: `
<h2>L'écoute comme compétence rhétorique — pas comme vertu morale</h2>

<p>L'écoute est presque toujours présentée comme une qualité humaine — une vertu empathique, un signe d'attention portée à l'autre. C'est vrai. Mais réduire l'écoute à une vertu morale, c'est en manquer la dimension proprement rhétorique : l'écoute est aussi une compétence technique qui détermine la qualité de votre réponse, la précision de votre argumentation, et la force de votre position dans toute conversation.</p>

<p>Sun Tzu écrit dans <em>L'Art de la guerre</em> (~500 av. J.-C.) : "Connais ton ennemi et connais-toi toi-même." En conversation, écouter vraiment, c'est collecter des informations sur la logique, les failles, les besoins et les peurs de votre interlocuteur. Ce n'est pas de la manipulation — c'est de l'intelligence tactique mise au service d'un échange plus juste.</p>

<h3>Les 4 niveaux d'écoute</h3>

<p><strong>Niveau 1 — L'attente de parole.</strong> Le niveau par défaut. On entend les mots, mais on pense déjà à sa réponse. Le cerveau alloue ses ressources à la construction de la prochaine phrase, non à la compréhension de celle qui est prononcée. C'est l'écoute qui dit "oui, oui" en hochant la tête et qui répond à côté. Inutile rhétoriquement — et souvent perçu comme un manque de respect.</p>

<p><strong>Niveau 2 — L'écoute factuelle.</strong> On retient les faits, les arguments, les prémisses explicites. On peut résumer ce que l'interlocuteur vient de dire. C'est le niveau minimum d'une conversation productive. Il permet la reformulation (cf. infra), mais ne donne pas accès à la structure sous-jacente du discours.</p>

<p><strong>Niveau 3 — L'écoute structurelle.</strong> On identifie la logique sous-jacente : quelles sont les prémisses implicites ? Les sophismes éventuels ? Les points faibles que l'interlocuteur lui-même n'a pas identifiés ? Ce niveau d'écoute permet de répondre non pas aux mots prononcés, mais à la structure du raisonnement — ce qui est radicalement plus efficace. C'est ce niveau qu'utilise un avocat en contre-interrogatoire.</p>

<p><strong>Niveau 4 — L'écoute émotionnelle.</strong> On perçoit l'état affectif de l'interlocuteur : est-il anxieux ? Sur la défensive ? En quête de validation ? Cherche-t-il à convaincre ou à se rassurer ? Ce niveau permet d'ajuster l'éthos et le pathos en temps réel — de répondre non seulement à ce qui est dit, mais à ce qui est ressenti et à ce qui est tu.</p>

<blockquote>« La nature nous a donné deux oreilles et une bouche, afin que nous entendions deux fois plus que nous ne parlons. »<br>— Épictète, <em>Entretiens</em> (~100 ap. J.-C.)</blockquote>

<h3>La reformulation — outil n°1 du rebond</h3>

<p>La reformulation consiste à résumer la position de l'interlocuteur dans ses propres termes — ou dans des termes plus clairs — avant de répondre. Elle produit trois effets simultanés :</p>

<p><strong>Elle confirme la compréhension.</strong> "Si je comprends bien, tu soutiens que X parce que Y. Est-ce exact ?" Cette vérification évite les réponses à côté, les débats de sourds et les malentendus qui s'accumulent sur vingt minutes.</p>

<p><strong>Elle force la précision.</strong> Reformuler la position d'un interlocuteur, c'est souvent révéler que cette position n'est pas aussi claire qu'elle le paraissait. L'interlocuteur est alors invité à préciser — et souvent, en précisant, il modifie ou nuance sa propre position.</p>

<p><strong>Elle signale l'écoute.</strong> La reformulation est un signal d'éthos puissant : elle montre que vous avez vraiment écouté. Dans une conversation tendue, ce signal peut suffire à désamorcer une escalade.</p>

<p>Attention : la reformulation ne doit pas déformer (sinon c'est l'homme de paille, cf. S3). Elle reformule dans les termes de l'interlocuteur, pas dans les vôtres.</p>

<h3>La question socratique — creuser sans confronter</h3>

<p>Socrate n'argumentait pas. Il questionnait. Sa méthode — l'<em>elenchus</em> — consistait à poser des questions en apparence naïves pour conduire l'interlocuteur à réaliser lui-même les contradictions de sa position. "Qu'est-ce que la beauté ?" "Qu'est-ce que la justice ?" En cherchant à répondre, l'interlocuteur découvrait ses propres ignorances.</p>

<p>En conversation contemporaine, la question socratique est l'outil le plus élégant du rebond parce qu'elle évite la confrontation directe tout en étant potentiellement plus déstabilisante qu'une réfutation frontale :</p>

<ul>
<li>"Pourquoi est-ce important pour toi ?" — creuse les présupposés.</li>
<li>"Qu'est-ce qui te fait penser que c'est le cas ?" — expose la prémisse.</li>
<li>"Comment saurais-tu que tu as tort ?" — teste la réfutabilité (voir S2).</li>
<li>"Qu'est-ce que ça changerait si c'était différent ?" — mesure l'enjeu réel.</li>
</ul>

<h3>Le pivot — changer de terrain sans rupture</h3>

<p>Le pivot est une technique de rebond qui permet d'introduire un point que l'on veut placer, en repartant de ce que l'interlocuteur vient de dire. Il ne contrarie pas — il <em>prolonge</em>, puis oriente.</p>

<p>Structure : "Ce que tu dis sur [X] est juste / intéressant / important. Ça me conduit à [Y]." Le pivot est une forme de <em>judo rhétorique</em> : on utilise l'élan de l'interlocuteur pour déplacer la conversation vers son propre terrain.</p>

<p>C'est une technique que maîtrisent les bons intervieweurs, les négociateurs et les politiques aguerris. Observez comment un politique répond rarement à la question posée — il prend systématiquement ce qu'il peut dans la question pour aller là où il veut aller.</p>

<h3>Le silence — la pression rhétorique sous-estimée</h3>

<p>Le silence après une question ou un argument est inconfortable. Culturellement, on est conditionné à le remplir. C'est une erreur.</p>

<p>Schopenhauer note (Stratagème 4) que l'adversaire en difficulté parle souvent trop pour combler son propre malaise — et se trahit dans le surplus. Le silence crée une pression rhétorique réelle : il force l'interlocuteur à combler le vide, souvent en précisant, en se contredisant, ou en concédant.</p>

<p>En pratique : après avoir posé une question difficile ou prononcé un argument fort, ne meublez pas. Attendez. Trois secondes de silence vous sembleront une éternité — elles ne le sont pas pour l'autre. Les meilleurs négociateurs font du silence une règle quasi absolue après avoir formulé leur position.</p>

<h3>La conversation sous pression — 3 principes</h3>

<p><strong>Principe 1 — Reformuler avant de répondre.</strong> Même sous pression, même si la question est agressive. La reformulation ralentit le tempo, signale le contrôle, et vous donne le temps de formuler.</p>

<p><strong>Principe 2 — Répondre à la question juste, pas à la question posée.</strong> Si la question contient un présupposé faux, corriger le présupposé avant de répondre. "La question suppose que X — ce n'est pas le cas. La vraie question est Y. Et ma réponse à Y est..."</p>

<p><strong>Principe 3 — Ne jamais défendre une position attaquée par ad hominem.</strong> Si l'attaque porte sur vous plutôt que sur votre argument, ne répondez pas à l'attaque. "Ce n'est pas de cela qu'il s'agit. Mon argument est [rappel de l'argument]. Qu'est-ce que vous y objectez sur le fond ?"</p>

<h3>Analyse de cas — Le débat Nixon-Kennedy (1960)</h3>

<p>Le premier débat télévisé présidentiel de l'histoire américaine est un cas d'école en matière d'écoute et de rebond. Nixon, vice-président sortant, connaît les dossiers mieux que Kennedy. Il répond aux questions avec précision et substance. Kennedy écoute Nixon — et rebondit non pas sur le fond de ses réponses, mais sur leur <em>ton</em> et leur <em>registre</em>. Nixon défend, justifie, explique. Kennedy projette, propose, aspire. Kennedy gagne le débat télévisé. Nixon gagne le débat radio (d'après les sondages de l'époque — les auditeurs sans image perçoivent Nixon comme plus solide).</p>

<p>La leçon : dans une conversation, l'écoute de niveau 4 (émotionnelle) permet de détecter non seulement ce que l'autre dit, mais <em>comment</em> l'auditoire perçoit ce qui est dit. Et d'adapter sa propre communication en conséquence.</p>

<h3>Mot du jour — Elenchus</h3>
<p>Du grec <em>elenchos</em> (réfutation, examen critique). Méthode socratique consistant à interroger l'interlocuteur jusqu'à ce qu'il découvre lui-même les contradictions de sa position. Différent de la réfutation directe : l'elenchus conduit l'autre à se réfuter lui-même. Platon, <em>Ménon</em>, <em>Euthyphron</em>, <em>Gorgias</em> — tous construits sur cette méthode.</p>
`,
  anchor: "Décris une conversation de la semaine en 3-4 lignes. À quel niveau d'écoute étais-tu ? Qu'aurais-tu dit ou demandé différemment avec les outils de cette session ?",
  action: "Dans ta prochaine conversation importante, utilise au moins une fois la reformulation complète ('Si je comprends bien...') avant de répondre à un argument. Note l'effet produit.",
  connections: [1, 3, 8],
  resources: {
    extraits: [
      { titre: "Épictète, Entretiens (~100 ap. J.-C.)", texte: "« Nous avons deux oreilles et une bouche, afin que nous entendions deux fois plus que nous ne parlons. Ce qui est difficile dans l'art de la conversation, ce n'est pas de parler — c'est d'écouter. »" },
      { titre: "Platon, Ménon (~380 av. J.-C.)", texte: "« SOCRATE : Et pourtant, Ménon, tu soutiens que tu sais ce qu'est la vertu. — MÉNON : Certainement. — SOCRATE : Alors dis-moi ce qu'elle est. — MÉNON : ... »" }
    ],
    discours: [
      { titre: "Débat Nixon-Kennedy (1960)", desc: "Comparer la version audio (Nixon gagne) et la version vidéo (Kennedy gagne). Analyser pourquoi l'écoute de niveau 4 a changé le résultat.", lien: "https://www.youtube.com/watch?v=gbrcRKqLSRw" },
      { titre: "Chris Voss — Never Split the Difference (conférence)", desc: "L'ancien négociateur du FBI sur l'écoute tactique. Ses techniques de 'mirroring' et de 'labeling' sont de la reformulation à haute intensité.", lien: "https://www.youtube.com/results?search_query=chris+voss+negotiation+masterclass" }
    ],
    biblio: [
      { titre: "Ne coupez jamais la poire en deux", auteur: "Chris Voss & Tahl Raz, Belfond (2016)", note: "Techniques de négociation du FBI appliquées aux conversations quotidiennes. Très opérationnel." },
      { titre: "L'Approche centrée sur la personne", auteur: "Carl Rogers, Dunod (1961/2005)", note: "La théorie de l'écoute empathique. Fondement psychologique de la reformulation." },
      { titre: "Gorgias", auteur: "Platon, trad. Monique Canto, GF Flammarion", note: "La critique de la rhétorique par Platon — essentielle pour comprendre ses limites éthiques." }
    ]
  },
  quiz: [
    { q: "Décris l'écoute structurelle et donne un exemple de ce qu'elle permet de détecter.", a: "On identifie la logique sous-jacente : prémisses implicites, sophismes, failles non détectées par l'interlocuteur lui-même. Ex : détecter qu'une position repose sur une prémisse non vérifiée, avant même qu'elle soit formulée explicitement." },
    { q: "Quelle est la différence entre reformulation et homme de paille ?", a: "La reformulation traduit fidèlement la position de l'interlocuteur dans ses termes ou des termes plus clairs. L'homme de paille la déforme pour la rendre plus facile à attaquer." },
    { q: "Pourquoi le silence après un argument fort est-il une technique rhétorique ?", a: "Il force l'interlocuteur à combler le vide — souvent en précisant, se contredisant ou concédant. Il signale aussi la confiance : on n'a pas besoin d'ajouter, l'argument se suffit." }
  ],
  quizMcq: [
    {
      q: "L'écoute de niveau 3 (structurelle) permet principalement de...",
      options: ["Percevoir l'état émotionnel et les peurs implicites de l'interlocuteur", "Retenir les faits et arguments explicitement formulés", "Identifier les prémisses implicites et les sophismes en temps réel", "Calibrer son registre et ses exemples sur l'interlocuteur"],
      answer: 2,
      explication: "Au niveau 3, on identifie la logique sous-jacente : prémisses implicites, sophismes, failles non détectées par l'interlocuteur lui-même. On peut ainsi répondre à la structure du raisonnement, pas seulement aux mots prononcés."
    },
    {
      q: "Quelle est la différence clé entre reformulation et homme de paille ?",
      options: ["La reformulation est défensive, l'homme de paille est offensif", "La reformulation traduit fidèlement la position ; l'homme de paille la déforme pour l'attaquer", "L'homme de paille est souvent involontaire, la reformulation toujours délibérée", "La reformulation s'applique aux faits, l'homme de paille aux valeurs"],
      answer: 1,
      explication: "La reformulation dit 'Si je comprends bien, tu soutiens X parce que Y' et attend confirmation. L'homme de paille substitue une caricature plus facile à attaquer. L'intention est radicalement inverse."
    },
    {
      q: "Pourquoi le silence après un argument fort est-il efficace rhétoriquement ?",
      options: ["Il permet de formuler mentalement son prochain point", "Il force l'interlocuteur à combler le vide, souvent en se trahissant ou concédant", "Il témoigne de la politesse et du respect envers l'interlocuteur", "Il signale qu'on n'a plus rien à ajouter sur le sujet"],
      answer: 1,
      explication: "Schopenhauer : l'adversaire en difficulté parle souvent trop pour combler son propre malaise — et se contredit ou concède dans le surplus. Le silence crée une pression rhétorique réelle sans aucun mot."
    }
  ],
  writingExercise: {
    title: "Analyse d'une conversation selon les 4 niveaux",
    duration: "~20 min",
    instruction: "Choisissez une conversation importante que vous avez eue récemment (professionnelle ou personnelle, enjeu réel). Rédigez en 250-350 mots : (1) description factuelle — contexte, enjeux, ce qui a été dit ; (2) diagnostic honnête de votre niveau d'écoute réel avec les preuves (qu'avez-vous raté ? avez-vous préparé vos réponses pendant que l'autre parlait ?) ; (3) ce qu'une écoute de niveau 3 aurait révélé sur la structure du raisonnement adverse ; (4) la reformulation exacte que vous auriez dû utiliser et la question socratique précise que vous auriez pu poser.",
    correctionCriteria: "Évalue mon analyse sur : (1) Honnêteté et précision du diagnostic du niveau d'écoute — les preuves sont-elles convaincantes ? (2) Pertinence de ce que l'écoute structurelle aurait révélé (3) Qualité de la reformulation proposée — est-elle fidèle, sans déformer ? (4) Efficacité de la question socratique — ouvre-t-elle un espace de réflexion sans confrontation ? Note /5 + formulation alternative pour le moment le plus difficile de la conversation."
  }
},

// ════════════════════════════════════════════════════════════
// SESSION 6 — Révision active (S1-S5)
// ════════════════════════════════════════════════════════════
{
  id: 6,
  type: "normale",
  theme: "Révision active — Sessions 1 à 5",
  format: "Mini-quiz à froid",
  icon: "🔄",
  duration: "~25 min",
  objectif: "Consolider les 5 premières sessions par auto-interrogation active et identifier les lacunes résiduelles.",
  content: `
<h2>Révision active — ce que la science dit sur la mémoire</h2>

<p>La révision n'est pas la relecture. Relire ses notes donne une impression de maîtrise — la familiarité avec le texte est prise pour de la compréhension. C'est ce que les psychologues cognitifs appellent le <em>fluency illusion</em> : ce qui est facile à lire semble facile à retenir. Illusion.</p>

<p>Henry Roediger et Jeffrey Karpicke (Washington University) ont démontré en 2006 ce qu'ils appellent l'<strong>effet de test</strong> : s'auto-interroger sans consulter ses notes améliore la rétention à long terme de 50 à 80% par rapport à la relecture passive — même si les réponses sont incorrectes. L'acte de chercher, de tâtonner, de se tromper et de corriger ancre l'information plus profondément que n'importe quelle relecture.</p>

<p>C'est le principe des flashcards (voir onglet Vocabulaire de cette app), de la méthode Feynman, et de tout bon enseignement socratique. Ce que vous devez faire dans cette session : fermer les sessions précédentes et répondre de mémoire. Résistez à l'envie de vérifier avant d'avoir formulé votre réponse.</p>

<h3>Synthèse des 5 sessions — ce que vous devez maîtriser</h3>

<p><strong>Session 1 — Les 3 piliers.</strong> Éthos (crédibilité : phronèsis + arétè + eunoia), pathos (émotion : mise en résonance, pas manipulation), logos (argument : prémisses + raisonnement + conclusion). Règle : l'éthos est toujours premier. Le pathos ouvre, le logos ferme.</p>

<p><strong>Session 2 — L'argument.</strong> Syllogisme (P majeure + P mineure → Conclusion). Deux types : déduction (général → particulier) et induction (particulier → général). Risques : prémisse fausse, saut logique, confusion corrélation/causalité. Test en 3 questions. Concept de réfutabilité (Popper).</p>

<p><strong>Session 3 — Les sophismes.</strong> 10 sophismes à identifier : ad hominem, homme de paille, appel à la majorité, fausse dichotomie, pente glissante, appel à l'autorité, généralisation hâtive, question piégée, appel à la nature, diversion. Démontage en 3 temps : reformuler → questionner le lien → proposer une alternative.</p>

<p><strong>Session 4 — Le vocabulaire.</strong> Passif vs. actif (écart x3 à x5). 5 méthodes : substitution, carnet, Feynman, contrainte, lecture active. Registres (soutenu / courant / familier). Nuance ≠ synonymie.</p>

<p><strong>Session 5 — L'écoute et le rebond.</strong> 4 niveaux d'écoute (attente / factuelle / structurelle / émotionnelle). 3 outils de rebond : reformulation (Si je comprends bien…), question socratique, pivot. Le silence comme outil de pression rhétorique.</p>

<h3>Les connexions essentielles entre les sessions</h3>

<p>Ces cinq sessions ne sont pas cinq chapitres indépendants — elles forment un système. Comprendre leurs articulations est aussi important que maîtriser leurs contenus.</p>

<p><strong>Éthos (S1) ↔ Vocabulaire (S4).</strong> La précision lexicale est un des signaux les plus puissants de l'éthos. Quand vous utilisez le mot exact là où les autres disent "intéressant", vous envoyez un signal de compétence (phronèsis). Le vocabulaire est de l'éthos incarné.</p>

<p><strong>Logos (S1) ↔ Argument (S2) ↔ Sophismes (S3).</strong> Le logos est la catégorie ; l'argument en est la structure ; le sophisme en est la contrefaçon. Qui maîtrise les trois peut construire des arguments solides ET identifier quand son interlocuteur lui en présente de faux.</p>

<p><strong>Écoute (S5) ↔ Sophismes (S3).</strong> L'écoute de niveau 3 (structurelle) permet de détecter les sophismes en temps réel, pendant que l'interlocuteur parle — avant même qu'il ait fini sa phrase. C'est une compétence qui s'entraîne : entendre "pente glissante" ou "homme de paille" dans le discours adverse, tout en gardant un visage neutre.</p>

<p><strong>Pathos (S1) ↔ Écoute niveau 4 (S5).</strong> Le pathos qu'on produit dans son discours suppose qu'on perçoit le pathos de l'interlocuteur — son état émotionnel réel. L'écoute émotionnelle est la condition de l'efficacité pathétique.</p>

<h3>Ce que vous savez maintenant que vous ne saviez pas avant</h3>

<p>Au début de ce programme, vous perceviez probablement les conversations comme des échanges d'informations ou d'opinions. Cinq sessions plus tard, vous devriez voir quelque chose de plus structuré :</p>

<ul>
<li>Toute prise de parole mobilise simultanément éthos, pathos et logos — dans des proportions à calibrer selon le contexte.</li>
<li>Tout argument peut être analysé en ses prémisses et son raisonnement — et chaque composante peut être testée.</li>
<li>Tout discours adverse peut contenir des sophismes — identifiables et démontables sans confrontation.</li>
<li>Le mot choisi n'est pas anecdotique — il est constitutif de l'analyse et du message.</li>
<li>L'écoute est une compétence technique — elle se pratique à 4 niveaux différents avec des outils différents.</li>
</ul>

<h3>Mot du jour — Mnémotechnie</h3>
<p>Du grec <em>mnêmê</em> (mémoire) et <em>technê</em> (art). Art de faciliter la mémorisation par des procédés associatifs — acronymes, palais de mémoire, histoires, rimes. Les orateurs grecs utilisaient le <em>loci</em> (méthode des lieux) : associer chaque point du discours à un lieu dans un espace mental familier. Cicéron l'attribuait à Simonide de Céos (~556-468 av. J.-C.), qui aurait survécu à un effondrement en se souvenant précisément où chaque invité était assis.</p>
`,
  anchor: "Sans consulter vos notes, expliquez éthos, pathos et logos à quelqu'un qui ne les connaît pas — en 5 lignes maximum, sans jargon. Puis identifiez quel concept vous avez eu le plus de mal à expliquer clairement.",
  action: "Sans ouvrir les sessions précédentes, listez les 10 sophismes de la S3 de mémoire. Pour chacun que vous ne retrouvez pas, rouvrez la S3 et relisez uniquement ce sophisme.",
  connections: [1, 2, 3, 4, 5],
  resources: {
    extraits: [
      { titre: "Roediger & Karpicke, The Power of Testing Memory (2006)", texte: "« Tester sa mémoire améliore la rétention à long terme bien davantage que d'étudier le même laps de temps. Cet effet de test se maintient même quand les tests sont difficiles et que les réponses sont incorrectes — à condition d'obtenir un retour (feedback). »" }
    ],
    discours: [],
    biblio: [
      { titre: "Make It Stick : The Science of Successful Learning", auteur: "Peter Brown, Henry Roediger & Mark McDaniel, Harvard University Press (2014)", note: "La vulgarisation accessible de la science de l'apprentissage. Révolutionnaire sur la révision." },
      { titre: "Moonwalking with Einstein", auteur: "Joshua Foer, Penguin Press (2011)", note: "Journaliste qui devient champion du monde de mémoire en un an. La méthode des loci expliquée de façon vivante." }
    ]
  },
  quiz: [
    { q: "Qu'est-ce que la fluency illusion ?", a: "La confusion entre familiarité et maîtrise : relire ses notes donne une impression de compréhension parce que le texte est facile à lire. C'est une illusion — la facilité de lecture ne garantit pas la capacité à restituer." },
    { q: "Quel est l'effet de test selon Roediger & Karpicke (2006) ?", a: "S'auto-interroger sans consulter ses notes améliore la rétention à long terme de 50 à 80% par rapport à la relecture passive — même si les réponses sont incorrectes." },
    { q: "Expliquez la connexion entre l'écoute de niveau 3 (S5) et les sophismes (S3).", a: "L'écoute structurelle permet de détecter les sophismes en temps réel pendant que l'interlocuteur parle — identifier 'pente glissante' ou 'homme de paille' avant même qu'il ait fini sa phrase, tout en gardant un visage neutre." }
  ],
  quizMcq: [
    {
      q: "Qu'est-ce que la 'fluency illusion' selon les psychologues cognitifs ?",
      options: ["L'impression de parler couramment une langue étrangère après peu d'étude", "La confusion entre facilité de lecture et vraie mémorisation/compréhension", "Une erreur logique fréquente dans les raisonnements par analogie", "La tendance à surestimer l'étendue de son vocabulaire actif"],
      answer: 1,
      explication: "Relire ses notes donne une impression de maîtrise parce que le texte est familier. La familiarité n'est pas de la compréhension. Solution : s'auto-interroger à livre fermé — même si les premières réponses sont fausses."
    },
    {
      q: "Selon Roediger & Karpicke (2006), l'effet de test améliore la rétention à long terme de...",
      options: ["10 à 20% par rapport à la relecture passive", "30 à 40% par rapport à la relecture passive", "50 à 80% par rapport à la relecture passive", "Plus de 100% par rapport à la relecture passive"],
      answer: 2,
      explication: "L'acte de chercher, tâtonner, se tromper et corriger ancre l'information plus profondément que toute relecture — même si les premières réponses sont incorrectes. Le ratage fait partie du processus."
    },
    {
      q: "Quelle connexion essentielle unit l'éthos (S1) et le vocabulaire (S4) ?",
      options: ["Ils concernent tous deux le choix du registre de langue approprié", "La précision lexicale est l'un des signaux les plus puissants de l'éthos perçu", "L'éthos s'apprend toujours avant le vocabulaire dans tout programme sérieux", "Ils sont indépendants dans les situations professionnelles réelles"],
      answer: 1,
      explication: "Utiliser le mot exact là où les autres disent 'intéressant' ou 'difficile' envoie un signal de compétence (phronèsis). Le vocabulaire précis est de l'éthos incarné — la crédibilité se construit aussi mot par mot."
    }
  ],
  writingExercise: {
    title: "Autoportrait rhétorique — bilan mi-parcours",
    duration: "~25 min",
    instruction: "Rédigez un autoportrait rhétorique de 300-400 mots en trois parties rigoureuses : (1) Ce que j'ai réellement intégré — citez 2-3 réflexes nouveaux concrets dans vos conversations ou écrits, avec un exemple précis pour chacun (pas 'je fais plus attention' — mais 'avant de répondre à l'objection de Marc en réunion, j'ai reformulé...') ; (2) Ce qui résiste encore — identifiez 2 compétences des 5 premières sessions non intégrées et expliquez pourquoi (concept flou ? manque d'occasions ? habitude trop ancrée ?) ; (3) Mon plan de correction — une action spécifique et mesurable pour les 7 prochains jours sur le point le plus faible.",
    correctionCriteria: "Évalue mon autoportrait sur : (1) Honnêteté et précision de l'auto-diagnostic — les exemples sont-ils vraiment concrets et vérifiables ? (2) Profondeur de l'analyse des résistances — les causes identifiées sont-elles pertinentes ? (3) Réalisme et spécificité du plan d'action (4) Qualité de l'expression elle-même — est-ce que mon texte applique les principes de S4 et S7 ? Note /5 + signal sur l'écart entre ce que je pense maîtriser et ce que mon écriture révèle réellement."
  }
},

// ════════════════════════════════════════════════════════════
// SESSION 7 — La phrase : clarté, rythme, ponctuation
// ════════════════════════════════════════════════════════════
{
  id: 7,
  type: "atelier",
  theme: "La phrase — clarté, rythme, ponctuation",
  format: "Atelier d'écriture",
  icon: "✍️",
  duration: "~35 min",
  objectif: "Maîtriser la phrase comme unité rhétorique : clarté, économie, rythme, ponctuation.",
  content: `
<h2>La phrase — l'atome du discours écrit</h2>

<p>La phrase est à l'écrit ce que la respiration est à l'oral : elle donne le rythme, l'oxygène, le tempo. Une phrase mal construite ne nuit pas seulement à la lisibilité — elle trahit une pensée insuffisamment clarifiée. Comme l'écrivait Boileau dans <em>L'Art poétique</em> (1674) : "Ce que l'on conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément." La phrase difficile à lire est presque toujours une idée difficile à penser.</p>

<p>Ce que Boileau n'a pas dit : la clarté n'est pas l'absence de complexité. Une phrase peut être longue, syntaxiquement riche, techniquement élaborée — et parfaitement claire. La question n'est pas la longueur, mais la hiérarchie : l'idée principale est-elle identifiable ? Les propositions subordonnées servent-elles l'idée principale ou la noient-elles ?</p>

<h3>Les 4 pathologies de la phrase</h3>

<p><strong>1. La phrase-fleuve.</strong> Elle accumule des propositions coordinées et subordonnées, des incises, des parenthèses et des compléments de toute nature, jusqu'à ce que le lecteur, dont l'attention a été sollicitée depuis le début, perde le fil de l'idée principale que l'auteur, qui pourtant avait quelque chose d'intéressant à dire, n'a pas réussi à déposer clairement dans son esprit.<br>
<em>→ Règle : une idée principale par phrase. Ce qui ne sert pas l'idée principale devient une nouvelle phrase.</em></p>

<p><strong>2. La nominalisation excessive.</strong> "La réalisation d'une prise en compte des besoins des équipes dans l'optique d'une optimisation des processus de communication interne a été engagée." Neuf noms. Zéro verbe d'action.<br>
<em>→ Règle : favorisez les verbes. "L'équipe a commencé à écouter ses membres pour mieux communiquer." Même sens — 9 mots contre 22.</em></p>

<p><strong>3. Le conditionnel de précaution.</strong> "Il pourrait éventuellement être envisageable de considérer que cette approche présente potentiellement certains avantages non négligeables." Cette phrase est vide. Elle n'affirme rien. Elle ne nie rien. Elle occupe de l'espace.<br>
<em>→ Règle : si vous y croyez, affirmez. Si vous n'y croyez pas, ne le dites pas. L'hésitation stylistique trahit l'hésitation de pensée.</em></p>

<p><strong>4. L'échauffement et la conclusion superflue.</strong> Hemingway avait une règle : après avoir écrit un texte, supprimez le premier et le dernier paragraphe. Le vrai début et la vraie fin sont presque toujours cachés derrière des échauffements ("Avant d'aborder le sujet, il convient de...") et des conclusions qui répètent ce qui vient d'être dit.<br>
<em>→ Règle : commencez par le premier fait ou la première thèse. Terminez après le dernier argument — pas après le résumé du dernier argument.</em></p>

<h3>L'économie — le principe de Tchekhov</h3>

<p>Anton Tchekhov formulait ainsi son principe d'économie narrative : "Si un fusil est accroché au mur au premier acte, il doit avoir tiré au troisième." Tout ce qui est présent doit servir. Tout ce qui ne sert pas doit disparaître.</p>

<p>Appliqué à la phrase : chaque mot doit gagner sa place. Un mot qui peut être retiré sans perte de sens doit être retiré. "Il est absolument essentiel et fondamentalement important que vous compreniez bien ce point crucial" → "Comprenez ce point." Quatre mots contre quatorze. Puissance multipliée par 3.</p>

<p>Tests pratiques pour chaque phrase :</p>
<ul>
<li>Si je retire ce mot, le sens change-t-il ? (Non → le mot est superflu.)</li>
<li>Est-ce que "très" ajoute quelque chose ? (Presque jamais — remplacez par un adjectif plus fort.)</li>
<li>Puis-je reformuler en verbe actif plutôt qu'en tournure passive ? (Presque toujours oui.)</li>
</ul>

<h3>Le rythme — ce que le lecteur ressent sans le savoir</h3>

<p>On ne lit pas un texte rythmé différemment — on le ressent différemment. Un texte sans rythme se lit comme on marche dans du sable. Un texte rythmé avance. Les mécanismes :</p>

<p><strong>La variation des longueurs.</strong> La phrase longue s'étire, accumule, développe une idée dans toute sa complexité. Puis vient la courte. Elle frappe. Le lecteur respire. Puis une autre longue qui approfondit, qui nuance, qui enrichit. Et encore une courte. Forte. Ce va-et-vient est le rythme de base de la prose efficace.</p>

<p><strong>La ponctuation forte.</strong> Le point-virgule marque une pause ; il relie deux idées proches sans les fondre. Les deux-points annoncent : une liste, une explication, une conséquence. Le tiret — utilisé avec parcimonie — crée une rupture de ton, une confidence. L'abus de la virgule noie tout dans un flux continu sans respiration.</p>

<p><strong>L'anaphore.</strong> Répéter un mot en début de phrase crée un effet de marteau — et de mémorisation. "Je refuse. Je refuse que ce projet échoue par manque de préparation. Je refuse que l'équipe subisse les conséquences de décisions prises sans elle." Trois fois "je refuse" — chaque occurrence renforce la précédente. C'est ce que MLK faisait avec "I have a dream".</p>

<h3>Les 6 règles d'Orwell</h3>

<p>Dans <em>Politics and the English Language</em> (1946), George Orwell formule six règles pour l'écrivain. Elles s'appliquent à tout texte professionnel :</p>

<ol>
<li>N'utilisez jamais de métaphore, comparaison ou figure rhétorique que vous voyez souvent en print.</li>
<li>N'utilisez jamais un mot long là où un mot court suffit.</li>
<li>Si vous pouvez couper un mot, coupez-le toujours.</li>
<li>N'utilisez jamais la voix passive là où vous pouvez utiliser la voix active.</li>
<li>N'utilisez jamais d'expression étrangère, scientifique ou de jargon si vous pouvez trouver l'équivalent courant.</li>
<li>Enfreignez toutes ces règles plutôt que de dire quelque chose de barbare.</li>
</ol>

<p>La sixième règle est la plus importante. Les règles servent l'expression — elles ne la gouvernent pas. La précision grammaticale au détriment de la clarté de pensée est une inversion de priorité.</p>

<h3>Analyse de cas — De Gaulle, Appel du 18 juin 1940</h3>

<p>Le discours le plus court et le plus efficace de l'histoire française récente. 225 mots. Analysons la structure phrastique :</p>

<p><em>"La France a perdu une bataille ! Mais la France n'a pas perdu la guerre !"</em></p>

<p>Deux phrases. Douze mots. Structure chiasmatique presque parfaite. "France" répétée deux fois — anaphore minimaliste. La rupture entre les deux phrases ("Mais") est une concession rhétorique : de Gaulle ne nie pas la défaite — il la contextualise. C'est une technique de cadrage (reframing) d'une efficacité absolue. Il ne dit pas "nous vaincrons" — il dit "la défaite n'est pas la fin". Ce changement de cadre est accompli en douze mots.</p>

<p>Ensuite : "Quoi qu'il arrive, la flamme de la résistance française ne doit pas s'éteindre et ne s'éteindra pas." La phrase est longue — mais sa structure est parfaitement hiérarchisée : une proposition conditionnelle ("Quoi qu'il arrive") qui couvre toutes les éventualités, puis la thèse principale en deux temps (devoir + futur). La longueur ici est au service de l'ambition : couvrir tous les cas possibles.</p>

<h3>Mot du jour — Parataxe / Hypotaxe</h3>
<p><strong>Parataxe</strong> : juxtaposition de propositions sans mots de liaison. "Il entre. Il regarde. Il repart." Effet : rapidité, brutalité, impact. Style de Hemingway, de César (<em>Veni, vidi, vici</em>).<br>
<strong>Hypotaxe</strong> : subordination des propositions avec liens explicites (parce que, bien que, si, quand). Permet la nuance et la hiérarchie des idées. Style de Proust, de Cicéron.<br>
Les deux sont des outils — alterner selon l'effet voulu est une compétence stylistique de base.</p>
`,
  anchor: "Prenez une phrase longue d'un email ou document que vous avez rédigé cette semaine. Réécrivez-la en deux phrases plus courtes, sans perdre le sens. Qu'avez-vous coupé ?",
  action: "Prendre le prochain email professionnel important que vous écrivez : rédigez d'abord normalement, puis relisez en appliquant les 3 tests (ce mot peut-il être retiré ? ce verbe est-il actif ? est-ce que 'très' ajoute quelque chose ?). Envoyez la version révisée.",
  connections: [4, 9],
  resources: {
    extraits: [
      { titre: "Boileau, L'Art poétique, Chant I (1674)", texte: "« Ce que l'on conçoit bien s'énonce clairement, / Et les mots pour le dire arrivent aisément. / Hâtez-vous lentement ; et sans perdre courage, / Vingt fois sur le métier remettez votre ouvrage. »" },
      { titre: "George Orwell, Politics and the English Language (1946)", texte: "« La prose mauvaise ne ressemble pas à de la prose mauvaise. Elle ressemble à de la prose parfaite — jusqu'au moment où vous essayez d'extraire le sens. »" }
    ],
    discours: [
      { titre: "De Gaulle — Appel du 18 juin (1940)", desc: "225 mots. Analyser : combien de phrases ? Quelle longueur moyenne ? Quels mots sont répétés ? Quelle ponctuation ?", lien: "https://www.youtube.com/watch?v=zghoDJHzqWc" },
      { titre: "Churchill — We Shall Fight on the Beaches (1940)", desc: "L'anaphore à l'état pur. Compter les 'we shall fight' et analyser l'effet d'accumulation.", lien: "https://www.youtube.com/watch?v=MkTw3_PmKtc" }
    ],
    biblio: [
      { titre: "Politics and the English Language", auteur: "George Orwell (1946) — disponible en ligne gratuitement", note: "20 pages. Les 6 règles. À lire avant tout exercice d'écriture." },
      { titre: "On Writing", auteur: "Stephen King, Hodder & Stoughton (2000)", note: "La moitié est autobiographique, l'autre est un manuel d'écriture d'une clarté absolue. King sur l'adverbe : 'L'enfer est pavé d'adverbes.'" },
      { titre: "Le style comme morale", auteur: "Jean-Louis Curtis, Julliard (1960)", note: "Essai français sur la relation entre style et éthique de la pensée." }
    ]
  },
  exercise: {
    title: "Atelier — Chirurgie de phrase",
    duration: "~15 min",
    instruction: "Réécrivez chacune de ces phrases en les rendant 50% plus courtes minimum, sans perdre le sens. Identifiez la pathologie de chaque phrase originale.",
    cases: [
      {
        text: "\"Il me semble que, dans un certain nombre de cas, il pourrait être envisageable de considérer que cette approche présente potentiellement certains avantages non négligeables qui mériteraient d'être pris en compte dans le cadre de notre réflexion stratégique.\"",
        answer: "Pathologie : conditionnel de précaution + nominalisation. Correction : 'Cette approche présente des avantages stratégiques réels.' (8 mots contre 39)"
      },
      {
        text: "\"La réunion qui s'est tenue hier en présence des membres de l'équipe concernés par le projet a permis de mettre en lumière un certain nombre de points de divergence qui nécessitent une attention particulière.\"",
        answer: "Pathologie : phrase-fleuve + nominalisation. Correction : 'La réunion d'hier a révélé des désaccords dans l'équipe — ils exigent une attention immédiate.' (16 mots contre 36)"
      },
      {
        text: "\"Je vous contacte afin de vous informer du fait que nous avons bien pris note de votre demande et que nous nous engageons à y apporter une réponse dans les meilleurs délais.\"",
        answer: "Pathologie : échauffement + passif + formules creuses. Correction : 'Nous avons bien reçu votre demande et vous répondrons rapidement.' (10 mots contre 33)"
      }
    ]
  },
  quiz: [
    { q: "Qu'est-ce que la nominalisation excessive ? Donnez un exemple et sa correction.", a: "Remplacer les verbes par des noms d'action alourdissant la phrase. Ex : 'réalisation d'une prise en compte des besoins' → 'prendre en compte les besoins'. Les verbes d'action donnent du mouvement et réduisent la longueur." },
    { q: "Quelle est la différence entre parataxe et hypotaxe ? Donnez un exemple célèbre de chacun.", a: "Parataxe : juxtaposition sans lien. 'Veni, vidi, vici' (César). Hypotaxe : subordination avec liens explicites. Les phrases de Proust (parfois une page entière). Alterner selon l'effet voulu." },
    { q: "Quelle est la règle de Tchekhov appliquée à la phrase ?", a: "Chaque mot doit servir. Un mot qui peut être retiré sans perte de sens doit être retiré. Test : si je retire ce mot, le sens change-t-il ? Non → superflu." }
  ],
  quizMcq: [
    {
      q: "Qu'est-ce que la nominalisation excessive ?",
      options: ["Utiliser trop de noms propres dans un texte formel", "Remplacer les verbes d'action par des noms d'action, alourdissant la phrase", "Répéter le même substantif sans utiliser de pronoms de substitution", "Abuser des termes techniques spécialisés du domaine"],
      answer: 1,
      explication: "'La réalisation d'une prise en compte des besoins' → 'Prendre en compte les besoins'. Les verbes donnent du mouvement. Neuf noms sans verbe d'action = phrase vide. Règle : favoriser le verbe à chaque occasion."
    },
    {
      q: "La parataxe se caractérise par...",
      options: ["Des phrases longues et syntaxiquement hiérarchisées", "L'utilisation intensive de figures de répétition", "La juxtaposition de propositions sans mots de liaison", "La subordination explicite des propositions secondaires"],
      answer: 2,
      explication: "'Il entre. Il regarde. Il repart.' (Hemingway). Effet : rapidité, brutalité, impact. À opposer à l'hypotaxe (Proust, Cicéron) qui hiérarchise les propositions par subordination explicite."
    },
    {
      q: "La règle de Tchekhov appliquée à la phrase signifie...",
      options: ["Commencer chaque phrase par le sujet, sans inversion", "Limiter les phrases à 20 mots pour garantir la clarté", "Tout mot qui peut être retiré sans perte de sens doit l'être", "Alterner systématiquement phrases courtes et longues"],
      answer: 2,
      explication: "Test : si je retire ce mot, le sens change-t-il ? Non → le mot est superflu. 'Il est absolument essentiel et fondamentalement important' → 'Il est essentiel'. La puissance augmente avec la concision."
    }
  ],
  writingExercise: {
    title: "Chirurgie de texte — réécriture complète",
    duration: "~25 min",
    instruction: "Prenez un texte professionnel récent que vous avez écrit (email, note, compte-rendu — 150-250 mots minimum). Travaillez en 4 étapes : (1) identifiez et annotez toutes les pathologies présentes (phrase-fleuve, nominalisation, conditionnel de précaution, échauffement/conclusion superflue) ; (2) réécrivez le texte en corrigeant chaque pathologie ; (3) vérifiez les 6 règles d'Orwell une par une ; (4) mesurez et commentez la réduction : combien de mots avant/après ? Quel est le ratio ? Présentez texte original (annoté) + texte corrigé + commentaire des 3 corrections les plus significatives.",
    correctionCriteria: "Évalue ma réécriture sur : (1) Exhaustivité de l'identification des pathologies — en ai-je manqué ? (2) Efficacité des corrections — les problèmes sont-ils vraiment résolus ou déplacés ? (3) Qualité du texte final — rythme, clarté, impact (4) Ratio de réduction — est-il suffisant (objectif : -30% minimum) ? Note /5 + réécriture d'une phrase qui pourrait encore être améliorée dans ma version 'corrigée'."
  }
},

// ════════════════════════════════════════════════════════════
// SESSION 8 — Tenir sa place sous pression
// ════════════════════════════════════════════════════════════
{
  id: 8,
  type: "normale",
  theme: "Tenir sa place sous pression — Schopenhauer",
  format: "Débat contradictoire",
  icon: "🛡️",
  duration: "~30 min",
  objectif: "Maintenir sa posture et ses arguments face à la pression rhétorique, l'intimidation et la mauvaise foi.",
  content: `
<h2>Tenir sa place — la résistance rhétorique</h2>

<p>Il existe une compétence que les académies de rhétorique n'enseignent presque jamais — et pourtant la plus demandée dans la vie réelle : savoir tenir sa place quand on est sous pression. Non pas s'imposer, non pas "gagner" le débat, mais refuser que la <em>forme</em> de la pression — le ton, le volume, l'autorité, le nombre — remplace l'<em>argument</em>.</p>

<p>Schopenhauer observe dans <em>L'Art d'avoir toujours raison</em> (1831) que dans une joute verbale réelle, la victoire n'est pas toujours au meilleur argument. Elle va souvent à celui qui maîtrise le mieux les mécanismes psychologiques de la déstabilisation. Son observation est cynique — mais précisément parce qu'elle l'est, elle est utile : <em>connaître les armes de l'adversaire permet de s'en défendre</em>.</p>

<blockquote>« La dialectique ériste est l'art de discuter de telle sorte qu'on ait toujours raison, par des moyens honnêtes ou malhonnêtes. »<br>— Arthur Schopenhauer, <em>L'Art d'avoir toujours raison</em>, 1831</blockquote>

<h3>Les mécanismes de la déstabilisation</h3>

<p><strong>La pression par le tempo.</strong> Parler vite, enchaîner les arguments sans laisser le temps de répondre, changer de sujet avant que l'interlocuteur ait pu traiter le précédent. L'adversaire se retrouve à courir après des questions que l'autre accumule. Défense : ralentir délibérément son propre tempo. Prendre le temps de reformuler. Ne pas suivre le rythme imposé.</p>

<p><strong>La pression par le volume et le ton.</strong> Élever la voix, adopter un ton tranchant ou condescendant — "C'est pourtant évident", "Tout le monde sait ça", "Je suis surpris que vous ne compreniez pas". Ces signaux visent à produire une honte sociale qui court-circuite le raisonnement. Défense : ne pas répondre à la tonalité. Maintenir son propre registre, indépendamment du registre adverse.</p>

<p><strong>La pression par l'autorité hiérarchique.</strong> "Je suis votre responsable hiérarchique et je vous dis que..." L'autorité hiérarchique est un facteur contextuel — pas un argument logique. Le fait qu'un supérieur affirme quelque chose ne le rend pas vrai. Défense : distinguer l'obéissance (décision organisationnelle légitime) de l'adhésion intellectuelle (conviction). On peut obéir sans être convaincu — et dire les deux simultanément.</p>

<p><strong>La pression par le consensus.</strong> "Tout le monde dans l'équipe est d'accord sauf toi." Appel à la majorité (voir S3) + pression sociale. La vérité n'est pas démocratique dans un débat logique. Défense : "Le consensus est un signal que je prends au sérieux. Mais les raisons qui me semblent aller dans l'autre sens restent valides. Pouvons-nous les examiner ?"</p>

<h3>Les 8 stratagèmes défensifs de Schopenhauer</h3>

<p><strong>Stratagème 1 — Contre l'extension.</strong> Quand l'adversaire généralise votre thèse au-delà de vos limites : "Ce n'est pas ce que j'ai dit. Je parle de [X précis] dans [conditions Y] — pas de [généralisation Z]."</p>

<p><strong>Stratagème 4 — L'utilisation du silence.</strong> Quand vous n'avez pas de réponse immédiate, ne meublez pas avec des mots creux. Le silence est préférable — il signale le sérieux, pas la défaite. Reprenez quand vous avez formulé votre réponse.</p>

<p><strong>Stratagème 12 — Contre la distraction.</strong> Quand l'adversaire change de sujet en difficulté : "Vous soulevez un point intéressant — mais nous avons dévié. La question initiale était [rappel précis]. Y reviendrons-nous ?"</p>

<p><strong>Stratagème 17 — La distinction fine.</strong> Quand votre thèse est attaquée, distinguer les aspects sur lesquels vous cédez de ceux sur lesquels vous tenez. "Sur ce point particulier, je te concède X. Mais cela ne change pas ma position sur Y, qui est le cœur de ma thèse."</p>

<p><strong>Stratagème 26 — Contre l'effet de masse.</strong> "La question n'est pas ce que tout le monde pense — c'est de savoir si [argument A] est fondé. Qu'est-ce qui, sur le fond, le contredit ?"</p>

<p><strong>Stratagème 30 — La contra-question.</strong> Quand on vous pose une question dont la réponse vous affaiblit, retournez la question : "Avant de répondre, je voudrais comprendre : pourquoi cette question est-elle pertinente dans ce contexte ?"</p>

<p><strong>Stratagème 35 — Le recadrage de la thèse.</strong> Quand votre thèse a été partiellement réfutée, montrez qu'elle tient encore dans une version légèrement reformulée — plus précise, plus modeste — qui reste utile. Ce n'est pas une retraite : c'est une précision.</p>

<p><strong>Stratagème 38 — Contre l'attaque personnelle.</strong> Ne répondez pas à l'attaque. Ignorez-la explicitement et revenez à l'argument. "Cette remarque porte sur moi, pas sur le sujet. Mon argument était [rappel]. Qu'y objectez-vous sur le fond ?"</p>

<h3>La posture — condition préalable à tout le reste</h3>

<p>Avant les techniques, la posture. Un orateur qui perd son calme a déjà perdu — non pas l'argument, mais le terrain sur lequel l'argument peut être entendu. La pression rhétorique cherche précisément à produire une réaction émotionnelle, parce qu'une réaction émotionnelle fait quitter le terrain logique.</p>

<p>Trois principes de posture sous pression :</p>

<p><strong>1. Ralentir, jamais accélérer.</strong> La tentation sous pression est de répondre vite — défensivement. L'efficacité est dans le ralentissement : reformuler, s'accorder un temps de réponse, parler moins vite. La lenteur délibérée est un signal de contrôle — pas d'hésitation.</p>

<p><strong>2. Distinguer la position et la personne.</strong> On peut tenir ferme sur sa position tout en restant ouvert sur la relation. "Je ne partage pas cette analyse — mais je comprends pourquoi tu la défends." La dissociation entre désaccord intellectuel et tension relationnelle est une des compétences les plus rares et les plus utiles.</p>

<p><strong>3. Concéder ce qui peut l'être — tenir sur ce qui ne peut pas.</strong> Une concession sur un point secondaire renforce la crédibilité sur le point principal. "Tu as raison que [point mineur]. Cela ne change pas ma position sur [point central], parce que [raison]." Refuser toute concession sur toute chose est perçu comme de la rigidité — et affaiblit paradoxalement la position centrale.</p>

<h3>Analyse de cas — Simone Veil, Assemblée nationale, 1974</h3>

<p>Le 26 novembre 1974, Simone Veil défend devant l'Assemblée nationale le projet de loi sur l'interruption volontaire de grossesse. Elle fait face à une salle hostile, à des interruptions, à des attaques personnelles violentes. Elle tient. Analyser comment :</p>

<p>Elle ouvre en concédant d'emblée : "Je le fais avec conviction, mais aussi avec une certaine humilité, car cette situation est grave. Je voudrais tout d'abord vous faire partager une certitude : nul n'a le monopole de la vérité sur ce sujet." Concession d'humilité — qui renforce l'éthos plutôt qu'elle ne l'affaiblit. Elle ne prétend pas avoir raison seule : elle ouvre un espace de discussion.</p>

<p>Face aux interruptions, elle maintient le registre, sans répondre aux attaques sur la personne. Elle revient systématiquement aux faits : le nombre de femmes concernées, les conditions d'avortement clandestins, les données médicales. Le logos comme ancre sous la pression du pathos adverse.</p>

<h3>Mot du jour — Éristique</h3>
<p>Du grec <em>eris</em> (querelle, discorde). Art de disputer pour avoir raison — par des moyens honnêtes ou non (Schopenhauer). À distinguer de la dialectique (recherche de la vérité par la contradiction) et de la rhétorique (persuasion d'un auditoire). L'éristique cherche la victoire conversationnelle, pas la vérité. Savoir la reconnaître chez l'adversaire est une compétence défensive fondamentale.</p>
`,
  anchor: "Décris en 3 lignes une situation récente où tu t'es senti déstabilisé dans une conversation. Quel mécanisme de déstabilisation reconnaissez-tu ? Quel stratagème défensif aurait été approprié ?",
  action: "La prochaine fois que tu te sens sous pression dans un échange, reformule la question avant de répondre — même si vous n'en avez pas besoin pour comprendre. Ce temps de reformulation achète du recul et signale le contrôle.",
  connections: [2, 3, 5],
  resources: {
    extraits: [
      { titre: "Schopenhauer, L'Art d'avoir toujours raison, Préface (1831)", texte: "« Mon but n'est pas d'enseigner la vérité — c'est de décrire fidèlement ce qui se passe réellement dans les discussions humaines. Ceux qui veulent raisonner honnêtement trouveront ici un miroir déplaisant. Mais un miroir utile. »" },
      { titre: "Simone Veil, Discours à l'Assemblée nationale (1974)", texte: "« Je voudrais tout d'abord vous faire partager une certitude : nul n'a le monopole de la conscience sur ce sujet. Je voudrais vous dire aussi ma conviction que le droit à la vie est le premier des droits de l'homme — et que la décision difficile que nous prenons doit tenir compte de cette réalité. »" }
    ],
    discours: [
      { titre: "Simone Veil — Discours sur la loi IVG (1974)", desc: "Analyser : comment tient-elle face aux interruptions ? Quelles concessions fait-elle ? Comment revient-elle aux faits ?", lien: "https://www.ina.fr/ina-eclaire-actu/simone-veil-1974" },
      { titre: "Margaret Thatcher — The Lady's Not for Turning (1980)", desc: "Modèle de refus de concession sous pression politique intense. Observer la posture et le registre.", lien: "https://www.youtube.com/results?search_query=thatcher+lady+not+for+turning" }
    ],
    biblio: [
      { titre: "L'Art d'avoir toujours raison", auteur: "Arthur Schopenhauer, Mille et une nuits (1831/2003)", note: "Les 38 stratagèmes. Lire en entier. Annotez ceux que vous reconnaissez dans vos conversations récentes." },
      { titre: "Difficult Conversations", auteur: "Stone, Patton & Heen, Penguin Books (2000)", note: "Le manuel Harvard sur la gestion des conversations difficiles. Distingue conversation sur 'ce qui s'est passé', sur les sentiments, sur l'identité." }
    ]
  },
  quiz: [
    { q: "Quelle est la différence entre tenir sa position et avoir raison ?", a: "Tenir sa position, c'est refuser que la pression (ton, volume, autorité, nombre) remplace l'argument — même en concédant sur des points secondaires. Avoir raison est une question de fond. On peut tenir sa position sur une thèse fausse. On peut céder sur une thèse juste. La posture est indépendante de la vérité." },
    { q: "Pourquoi une concession sur un point secondaire renforce-t-elle la crédibilité sur le point central ?", a: "Elle signale l'honnêteté intellectuelle — la capacité à reconnaître ce qui est juste, même chez l'adversaire. Elle rend le refus de concéder sur le point central plus crédible : 'Je concède quand c'est juste ; ici je ne cède pas parce que ce n'est pas juste.'" },
    { q: "Qu'est-ce que l'éristique ? En quoi diffère-t-elle de la dialectique ?", a: "L'éristique cherche la victoire conversationnelle, par tous moyens. La dialectique cherche la vérité par la contradiction constructive. Schopenhauer décrit l'éristique — Socrate pratiquait la dialectique (en théorie)." }
  ],
  quizMcq: [
    {
      q: "La pression par le tempo dans une joute verbale consiste à...",
      options: ["Parler très lentement pour dominer l'espace conversationnel", "Enchaîner les arguments avant que l'interlocuteur ait traité le précédent", "Utiliser un vocabulaire technique pour désorienter l'adversaire", "Répéter la même affirmation jusqu'à la fatigue de l'interlocuteur"],
      answer: 1,
      explication: "On accumule les arguments trop vite pour que l'interlocuteur puisse les traiter un à un. Défense : ralentir délibérément son propre tempo, reformuler, refuser de suivre le rythme imposé."
    },
    {
      q: "Concéder un point secondaire sous pression permet principalement de...",
      options: ["Éviter le conflit en donnant satisfaction à l'adversaire", "Renforcer la crédibilité sur le point central par un signal d'honnêteté intellectuelle", "Affaiblir sa position en cédant du terrain à l'adversaire", "Changer de sujet sans paraître défensif ou en fuite"],
      answer: 1,
      explication: "'Je concède quand c'est juste ; ici je ne cède pas parce que ce n'est pas juste.' La concession ciblée signale l'honnêteté et rend le refus de concéder sur le point central plus crédible et plus fort."
    },
    {
      q: "L'éristique selon Schopenhauer se distingue de la dialectique en ce qu'elle...",
      options: ["Cherche la vérité par la contradiction méthodique", "Cherche la victoire conversationnelle par tous moyens, honnêtes ou non", "Vise la persuasion d'un auditoire impartial et raisonnable", "Repose exclusivement sur la logique formelle et les syllogismes"],
      answer: 1,
      explication: "L'éristique cherche la victoire — différente de la dialectique (vérité) et de la rhétorique (persuasion d'un auditoire). Savoir la reconnaître chez l'adversaire est une compétence défensive fondamentale."
    }
  ],
  writingExercise: {
    title: "Analyse et reconstruction d'une situation de pression",
    duration: "~25 min",
    instruction: "Décrivez en 300-400 mots une situation récente où vous avez subi une pression rhétorique réelle (réunion conflictuelle, critique directe, déstabilisation par le ton ou le volume, consensus contre vous). Structurez rigoureusement : (1) description précise du mécanisme de pression — identifiez-le parmi ceux de cette session et justifiez ; (2) analyse honnête de votre réaction réelle — avez-vous accéléré, reculé, perdu votre registre, cédé sur le fond ? ; (3) reconstruction de la scène : formulez exactement ce que vous diriez maintenant — les phrases précises, dans l'ordre chronologique de l'échange.",
    correctionCriteria: "Évalue mon analyse sur : (1) Exactitude de l'identification du mécanisme de pression utilisé (2) Honnêteté et précision de l'auto-analyse — les preuves de déstabilisation sont-elles concrètes ? (3) Efficacité de la reconstruction — les réponses proposées neutralisent-elles vraiment la pression sans fuir ? (4) Naturel et fluidité des formulations proposées — peut-on les prononcer sans paraître robotique ? Note /5 + reformulation du moment le plus difficile de l'échange."
  }
},

// ════════════════════════════════════════════════════════════
// SESSION 9 — La prise de parole formelle
// ════════════════════════════════════════════════════════════
{
  id: 9,
  type: "atelier",
  theme: "La prise de parole formelle",
  format: "Feynman inversé",
  icon: "🎤",
  duration: "~35 min",
  objectif: "Structurer toute prise de parole formelle, maîtriser l'accroche et la conclusion mémorable.",
  content: `
<h2>La prise de parole formelle — une architecture, pas une improvisation</h2>

<p>La grande erreur sur la prise de parole formelle : croire qu'elle exige surtout du talent oratoire. En réalité, elle exige surtout de la <em>structure</em>. Un discours bien structuré est compréhensible même mal prononcé. Un discours brillamment prononcé mais mal structuré laisse l'auditoire dans le vague.</p>

<p>Cicéron, dans <em>De Oratore</em> (~55 av. J.-C.), distingue cinq étapes de la préparation oratoire : <em>inventio</em> (trouver les idées), <em>dispositio</em> (les organiser), <em>elocutio</em> (les formuler), <em>memoria</em> (les mémoriser), <em>actio</em> (les délivrer). L'enseignement moderne de la communication saute presque toujours les quatre premières pour aller directement à la cinquième — comment se tenir, comment parler. C'est l'inverse du bon ordre.</p>

<h3>La structure universelle en 5 temps</h3>

<p><strong>1. L'accroche (30 secondes maximum).</strong></p>
<p>Vous avez 30 secondes pour que l'auditoire décide s'il vous accorde son attention. Pas une seconde de plus. Quatre types d'accroches qui fonctionnent :</p>
<ul>
<li><strong>La question rhétorique.</strong> "Combien de fois avez-vous quitté une réunion sans comprendre pourquoi vous y étiez ?" Elle crée l'implication immédiate.</li>
<li><strong>Le chiffre surprenant.</strong> "En France, 73% des réunions se terminent sans décision." La précision crée la crédibilité.</li>
<li><strong>L'anecdote courte.</strong> Une scène concrète, 3 phrases maximum. Elle active l'imagination avant l'analyse.</li>
<li><strong>La citation placée.</strong> Pas n'importe laquelle — une qui contredit une idée reçue ou ouvre un paradoxe.</li>
</ul>
<p>Ce qu'on ne fait <strong>jamais</strong> : commencer par se présenter longuement, remercier les organisateurs, ou dire "je suis honoré d'être là". L'auditoire s'en fiche — il veut savoir ce que vous allez lui apporter.</p>

<p><strong>2. L'enjeu (1 minute).</strong></p>
<p>"Pourquoi ce que je vais dire vous importe ?" Si l'auditoire ne perçoit pas l'enjeu pour lui, il ne s'engagera pas — même si le contenu est excellent. L'enjeu répond à la question implicite de tout auditoire : "Et moi là-dedans ?" Articuler l'enjeu, c'est activer le pathos avant d'aller au logos.</p>

<p><strong>3. Le développement en 3 points maximum.</strong></p>
<p>Au-delà de 3 points, la mémoire de l'auditoire lâche. Ce n'est pas une opinion — c'est une constante cognitive documentée depuis les travaux de George Miller sur la mémoire à court terme (1956 : "The Magical Number Seven, Plus or Minus Two"). Pour une présentation de 20 minutes, visez 2 ou 3 points.</p>
<p>Structure de chaque point : <strong>Thèse → Illustration → Implication</strong>.</p>
<ul>
<li>Thèse : l'idée en une phrase.</li>
<li>Illustration : exemple concret, chiffre, anecdote — qui rend l'idée visible.</li>
<li>Implication : ce que cette idée change pour l'auditoire spécifiquement.</li>
</ul>
<p>Transition entre les points : une phrase de liaison qui montre le fil conducteur. "Ce premier point nous amène directement à..." "Mais maîtriser [X] ne suffit pas si..."</p>

<p><strong>4. La réponse aux objections anticipées.</strong></p>
<p>Soulever soi-même les objections prévisibles, c'est un signal fort d'éthos : cela montre la maîtrise du sujet et désarme les contradicteurs avant qu'ils parlent. Deux formulations : "Certains d'entre vous se demandent peut-être si..." ou "La limite évidente de cette approche est...". Puis répondre à l'objection.</p>
<p>Ne pas anticiper une objection évidente, c'est laisser le soin à l'auditoire de la formuler — et lui donner l'impression que vous ne l'avez pas vue.</p>

<p><strong>5. La conclusion mémorable.</strong></p>
<p>La dernière phrase est la plus mémorisée. Ce n'est pas un résumé — c'est un envoi. Ce qui reste. Trois types qui fonctionnent :</p>
<ul>
<li><strong>L'appel à l'action concret.</strong> Une action précise, réalisable dans les 7 jours. Pas "réfléchissez à..." — "faites X".</li>
<li><strong>La formule mémorable.</strong> Une phrase construite pour être citée. Chiasme, anaphore, paradoxe apparent. De Gaulle : "La France a perdu une bataille. Mais la France n'a pas perdu la guerre."</li>
<li><strong>Le retour à l'accroche.</strong> Revenir à l'image, à la question ou à l'anecdote du début — et lui donner une résolution. Structure circulaire : sentiment d'achèvement.</li>
</ul>
<p>Ce qu'on ne fait <strong>jamais</strong> : "En résumé..." (l'auditoire décroche), "Je n'ai plus qu'une chose à ajouter..." (si vous devez le dire, c'est que vous en avez trop dit), "Merci de votre attention." (remerciez de l'attention que vous n'avez peut-être pas méritée).</p>

<h3>Les 5 erreurs classiques de la prise de parole formelle</h3>

<p><strong>L'excuse préventive.</strong> "Je ne suis pas vraiment un expert en...", "Je n'ai pas eu beaucoup de temps pour préparer...", "Je vais faire de mon mieux..." Chaque phrase d'excuse détruit l'éthos avant que vous ayez parlé. Votre auditoire ne cherchait pas à être rassuré sur votre incompétence.</p>

<p><strong>Le regard sur les notes.</strong> Les notes en main signalent que vous ne maîtrisez pas votre sujet. Si vous devez en avoir, convertissez-les en mots-clés sur une feuille — des déclencheurs, pas des phrases complètes. Le regard dans les yeux de l'auditoire est le premier signal d'éthos en prise de parole.</p>

<p><strong>Trop de slides.</strong> Une slide par point, pas plus. Un slide chargé de texte dit à l'auditoire qu'il peut lire lui-même et ne pas vous écouter. La règle : si votre slide peut remplacer votre parole, votre parole est de trop.</p>

<p><strong>Parler trop vite sous stress.</strong> Le stress accélère la parole. L'accélération réduit la compréhension. La compréhension réduite augmente le stress. Cercle vicieux. La solution : faire une pause délibérée avant de commencer — 3 secondes de silence, regard sur l'auditoire, puis commencer lentement.</p>

<p><strong>Ignorer l'auditoire spécifique.</strong> Le même discours à un comité de direction, à une équipe technique et à un public grand public — c'est toujours une erreur. Le registre, le vocabulaire, les exemples, le niveau de détail doivent être calibrés pour l'auditoire réel.</p>

<h3>La méthode Feynman appliquée à la préparation</h3>

<p>Richard Feynman avait une règle : si je ne peux pas expliquer ce concept à un lycéen en cinq minutes, c'est que je ne le comprends pas vraiment. Cette règle s'applique à la préparation d'une prise de parole formelle.</p>

<p>Test de préparation en trois étapes :</p>
<ol>
<li>Formulez votre thèse centrale en une phrase, sans jargon.</li>
<li>Expliquez votre développement à quelqu'un qui ne connaît pas le sujet. Là où vous butez, c'est là que votre pensée est floue.</li>
<li>Formulez votre conclusion en une phrase mémorable. Si vous n'y arrivez pas, votre message n'est pas encore assez clair.</li>
</ol>

<h3>Mot du jour — Dispositio</h3>
<p>Deuxième des cinq parties de la rhétorique cicéronienne (après l'inventio). L'art d'organiser les arguments dans l'ordre le plus efficace — non pas l'ordre logique, mais l'ordre rhétorique. Cicéron recommande de commencer fort (capter l'attention), mettre le plus faible au milieu (effet de sandwiche), et terminer fort (mémoire de fin). L'auditoire retient davantage le début et la fin que le milieu.</p>
`,
  anchor: "Sur un sujet que tu maîtrises (ton métier, une passion), formule les 5 éléments d'une présentation de 5 minutes : accroche, enjeu, 3 points (en titres), objection anticipée, conclusion mémorable. 10 lignes maximum.",
  action: "Prépare mentalement la structure en 5 temps de la prochaine présentation ou explication que tu dois donner. Formule l'accroche et la conclusion avant de penser au contenu.",
  connections: [1, 4, 7],
  resources: {
    extraits: [
      { titre: "Cicéron, De Oratore, Livre I (~55 av. J.-C.)", texte: "« L'orateur parfait est celui qui joint la gravité du philosophe, les connaissances du jurisconsulte, l'art du comédien et la voix du musicien. » (Paraphrase de Cicéron sur l'idéal oratoire — la liste de ses exigences était exhaustive.)" },
      { titre: "Aristote, Rhétorique, Livre III, ch. 13", texte: "« Un discours a nécessairement deux parties : vous devez énoncer l'objet de votre propos, puis le prouver. C'est pourquoi on ne peut avoir plus que ces parties : Exorde, Énoncé, Preuve, Péroraison. »" }
    ],
    discours: [
      { titre: "Steve Jobs — Discours de Stanford (2005)", desc: "Structure en 3 histoires. Analyser : comment construit-il l'accroche de chaque histoire ? Comment fait-il la transition ?", lien: "https://www.youtube.com/watch?v=UF8uR6Z6KLc" },
      { titre: "Chimamanda Ngozi Adichie — The Danger of a Single Story (TED, 2009)", desc: "Modèle d'utilisation de l'anecdote comme structure. Chaque point est une histoire. Observer la structure en boucle (retour à l'accroche finale).", lien: "https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story" }
    ],
    biblio: [
      { titre: "De Oratore", auteur: "Cicéron, trad. Edmond Courbaud, Les Belles Lettres", note: "Le texte fondateur de la formation oratoire. Commencer par le Livre I (l'idéal de l'orateur) et le Livre II (la dispositio)." },
      { titre: "TED Talks : The Official TED Guide to Public Speaking", auteur: "Chris Anderson, Headline Book Publishing (2016)", note: "Le guide officiel de TED. Accessible, concret. Particulièrement utile sur la structure narrative." }
    ]
  },
  exercise: {
    title: "Atelier — Feynman inversé",
    duration: "~20 min",
    instruction: "Choisissez un concept que vous maîtrisez bien (votre métier, une compétence, une passion). Préparez une présentation de 5 minutes en utilisant la structure en 5 temps. Écrivez les 5 éléments (accroche, enjeu, 3 titres de points, objection, conclusion mémorable). Puis présentez à voix haute. Notez : où avez-vous buté ? Qu'est-ce qui vous semblait clair mais ne l'était pas à voix haute ?",
    cases: []
  },
  quiz: [
    { q: "Quelles sont les 5 parties de la rhétorique selon Cicéron ?", a: "Inventio (trouver les idées), Dispositio (les organiser), Elocutio (les formuler), Memoria (les mémoriser), Actio (les délivrer). L'erreur fréquente : s'entraîner à l'Actio sans maîtriser la Dispositio." },
    { q: "Pourquoi ne pas dépasser 3 points dans un développement formel ?", a: "Au-delà de 3, la mémoire à court terme de l'auditoire sature (Miller, 1956 : 'The Magical Number Seven'). 3 points ancrés valent toujours mieux que 7 oubliés." },
    { q: "Qu'est-ce que la dispositio selon Cicéron, et quel est son principe d'ordre ?", a: "L'art d'organiser les arguments dans l'ordre rhétorique le plus efficace — pas l'ordre logique. Cicéron : commencer fort, placer le plus faible au milieu (l'auditoire retient moins), terminer fort (primauté de la fin)." }
  ],
  quizMcq: [
    {
      q: "Dans la structure en 5 temps, qu'est-ce qu'on formule en PREMIER avant de penser au contenu ?",
      options: ["L'enjeu — pourquoi l'auditoire doit s'y intéresser", "L'accroche et la conclusion mémorable", "Les 3 titres du développement", "Les objections prévisibles et leurs réponses"],
      answer: 1,
      explication: "L'accroche capte l'attention, la conclusion crée la mémorisation. Ces deux éléments se formulent avant tout contenu. La conclusion ne s'improvise jamais — elle s'écrit en premier et guide tout le reste."
    },
    {
      q: "Pourquoi limiter le développement à 3 points maximum ?",
      options: ["Les discours longs perdent systématiquement leur impact rhétorique", "La mémoire à court terme de l'auditoire sature au-delà de 3 éléments distincts", "Les 3 piliers d'Aristote imposent naturellement cette structure", "L'auditoire perd l'attention au-delà de 20 minutes de présentation"],
      answer: 1,
      explication: "Miller (1956) : 'The Magical Number Seven, Plus or Minus Two' — la mémoire à court terme est structurellement limitée. 3 points ancrés valent toujours mieux que 7 oubliés. Chaque point suit la structure TII."
    },
    {
      q: "La dispositio cicéronienne recommande quel ordre des arguments ?",
      options: ["L'ordre chronologique naturel des faits", "Du plus faible au plus fort, pour monter en puissance", "Fort au début, plus faible au milieu, fort à la fin", "Du plus simple au plus complexe pour l'auditoire"],
      answer: 2,
      explication: "L'auditoire retient davantage le début et la fin (effets de primauté et de récence). L'argument le plus faible va au milieu — il est moins mémorisé. Ce n'est pas l'ordre logique : c'est l'ordre rhétorique."
    }
  ],
  writingExercise: {
    title: "Préparer une présentation complète en 5 temps",
    duration: "~30 min",
    instruction: "Préparez une présentation de 5 minutes sur un sujet que vous maîtrisez vraiment (votre métier, un projet, une conviction forte, une compétence). Rédigez les 5 éléments complets — pas des titres, les phrases exactes que vous prononceriez : (1) l'accroche complète (3 phrases maximum, une des 4 formes vues en cours) ; (2) l'enjeu formulé pour l'auditoire spécifique que vous désignez ; (3) les 3 points avec Thèse + Illustration + Implication pour chacun ; (4) l'objection la plus prévisible et votre réponse ; (5) la conclusion mémorable. Précisez en introduction à qui cette présentation s'adresse exactement.",
    correctionCriteria: "Évalue ma présentation sur : (1) Efficacité de l'accroche — capte-t-elle l'attention en 30 secondes ? crée-t-elle une tension ou une question ? (2) Clarté de l'enjeu — l'auditoire comprend-il précisément pourquoi c'est important pour lui ? (3) Structure TII de chaque point — thèse claire, illustration concrète et mémorable, implication précise pour cet auditoire (4) Mémorabilité de la conclusion. Note /5 + reformulation de la conclusion si elle peut être plus frappante ou plus précise."
  }
},

// ════════════════════════════════════════════════════════════
// SESSION 10 — Bilan et recalibrage
// ════════════════════════════════════════════════════════════
{
  id: 10,
  type: "normale",
  theme: "Bilan et recalibrage",
  format: "Entretien réflexif",
  icon: "🏆",
  duration: "~30 min",
  objectif: "Mesurer la progression réelle, identifier les lacunes persistantes et définir la suite.",
  content: `
<h2>Bilan — ce qui a changé, ce qui reste à travailler</h2>

<p>Un programme de formation ne se mesure pas au nombre de pages lues ou de sessions complétées. Il se mesure à ce qui a changé dans vos réflexes. Non pas "j'ai appris que l'éthos existe" — mais "avant d'entrer dans une réunion importante, je passe maintenant 30 secondes à calibrer mon éthos perçu". Non pas "je sais ce qu'est un sophisme" — mais "en réunion hier, j'ai identifié une pente glissante en temps réel et j'ai posé la question qui a exposé la faille".</p>

<p>Cette distinction — savoir vs. faire — est au cœur de ce que les chercheurs en sciences de l'apprentissage appellent le <em>transfert</em> : la capacité à utiliser une compétence dans un contexte différent de celui où elle a été acquise. C'est le niveau le plus difficile d'apprentissage, et le seul qui compte vraiment.</p>

<h3>Les 10 compétences du programme — où en êtes-vous ?</h3>

<p>Pour chacune, posez-vous la question : <em>est-ce que je fais cela instinctivement, avec effort, ou seulement quand j'y pense ?</em></p>

<p><strong>1. Analyser le triangle rhétorique.</strong> Identifier éthos, pathos, logos dans tout discours — y compris dans une conversation ordinaire. Calibrer les proportions selon le contexte.</p>

<p><strong>2. Construire un argument solide.</strong> Formuler prémisse → raisonnement → conclusion. Identifier la prémisse la plus fragile avant l'adversaire. Tester en 3 questions.</p>

<p><strong>3. Identifier les sophismes.</strong> Reconnaître les 10 types en temps réel. Les démonter sans confrontation directe par le 3-temps.</p>

<p><strong>4. Élargir le vocabulaire actif.</strong> Utiliser des substitutions systématiques. Maintenir un carnet de mots. Naviguer entre les registres sans erreur.</p>

<p><strong>5. Écouter à 4 niveaux.</strong> Atteindre régulièrement le niveau 3 (structurel) dans les conversations importantes. Utiliser reformulation, question socratique et pivot.</p>

<p><strong>6. Réviser activement.</strong> Préférer l'auto-interrogation à la relecture. Appliquer l'effet de test à tout apprentissage.</p>

<p><strong>7. Écrire des phrases précises.</strong> Appliquer les 3 tests (ce mot peut-il être retiré ? verbe actif ? "très" ajoute-t-il ?). Alterner parataxe et hypotaxe selon l'effet voulu.</p>

<p><strong>8. Tenir sa place sous pression.</strong> Maintenir le tempo et le registre sous pression. Concéder ce qui peut l'être, tenir sur ce qui ne peut pas. Ignorer les attaques ad hominem.</p>

<p><strong>9. Structurer une prise de parole formelle.</strong> Mobiliser instinctivement la structure en 5 temps. Formuler une accroche et une conclusion mémorable avant de penser au contenu.</p>

<p><strong>10. Voir la rhétorique comme un système.</strong> Comprendre les connexions entre les compétences — comment l'éthos se construit aussi par le vocabulaire, comment l'écoute structurelle active l'identification des sophismes, comment la dispositio précède l'elocutio.</p>

<h3>Les lacunes les plus fréquentes à ce stade</h3>

<p>Après un programme de cette densité, certaines lacunes sont structurelles — elles résistent au premier passage et nécessitent un travail spécifique :</p>

<p><strong>La précision du vocabulaire sous pression.</strong> En situation détendue, le vocabulaire actif est disponible. Sous stress — réunion difficile, prise de parole improvisée — on revient aux mots génériques. La solution : des exercices de substitution à l'oral, pas seulement à l'écrit.</p>

<p><strong>L'écoute de niveau 3 en conversation rapide.</strong> Le niveau 3 (structurel) demande des ressources cognitives que le stress mobilise ailleurs. S'entraîner en situation de faible enjeu d'abord — conversations quotidiennes — avant de déployer en situation à fort enjeu.</p>

<p><strong>La conclusion mémorable.</strong> La plupart des prises de parole se terminent sans conclusion — elles s'arrêtent. La formule finale mémorable s'écrit en préparation, pas en improvisation. Imposez-vous d'écrire la dernière phrase avant la première.</p>

<h3>Trois directions pour la suite</h3>

<p><strong>Approfondir les textes fondamentaux.</strong> Lire Aristote (Rhétorique, Livre II — les émotions), Schopenhauer (les 38 stratagèmes complets), Cicéron (De Oratore, Livre II — la dispositio), Perelman (Traité de l'argumentation — l'auditoire universel). Ces textes ne se lisent pas : ils se travaillent, avec un crayon.</p>

<p><strong>Pratiquer délibérément.</strong> Toastmasters : clubs de prise de parole présents dans toutes les grandes villes françaises, réunions hebdomadaires gratuites. Écriture régulière : un billet hebdomadaire de 400 mots sur un sujet de votre choix, relecture en appliquant les règles d'Orwell. Demande de feedback formalisé : après une présentation importante, demander à un pair de noter 1 point fort et 1 point d'amélioration — pas "c'était bien".</p>

<p><strong>Enseigner.</strong> La méthode Feynman ultime : expliquer ces concepts à quelqu'un d'autre. Le forcer à comprendre vous révèle ce que vous n'avez pas vraiment intégré. Choisissez un concept par semaine et expliquez-le à quelqu'un de votre entourage — sans jargon, avec un exemple concret. Si vous ne pouvez pas, relisez la session correspondante.</p>

<h3>La rhétorique comme éthique</h3>

<p>Une dernière mise en garde — que les grands rhétoriciens ont tous formulée, d'Aristote à Cicéron en passant par Quintilien : la maîtrise rhétorique est un amplificateur. Elle amplifie ce que vous êtes déjà. Mise au service de la vérité et de l'intérêt de votre auditoire, elle est un outil de clarté et de justice. Mise au service du mensonge ou de l'exploitation, elle est un outil de manipulation.</p>

<p>Quintilien (<em>Institution oratoire</em>, ~95 ap. J.-C.) pose la question directement : peut-on être un grand orateur et un homme mauvais ? Sa réponse : non. Le grand orateur est nécessairement <em>vir bonus dicendi peritus</em> — un homme de bien habile à parler. Ce n'est pas naïf : c'est une exigence éthique intégrée à la définition même de la compétence.</p>

<blockquote>« L'orateur parfait, tel que nous le cherchons à former, ne peut être que l'homme de bien — car les mauvais hommes ne méritent pas ce nom. »<br>— Quintilien, <em>Institution oratoire</em>, Livre XII, ~95 ap. J.-C.</blockquote>

<h3>Mot du jour — Vir bonus dicendi peritus</h3>
<p>Latin de Quintilien (<em>Institution oratoire</em>, ~95 ap. J.-C.) : "homme de bien habile à parler". Définition quintilienne de l'orateur parfait — qui intègre l'excellence éthique (vir bonus) à la compétence technique (dicendi peritus). L'idée : la rhétorique sans éthique n'est pas de la rhétorique — c'est de la sophistique. Toute la tradition humaniste de la formation oratoire découle de cette définition.</p>
`,
  anchor: "3 choses concrètes que vous faites différemment depuis le début de ce programme. Soyez précis : pas 'je m'exprime mieux' mais 'avant de répondre à une objection, je reformule maintenant systématiquement.'",
  action: "Choisissez une direction pour la suite (approfondir / pratiquer / enseigner) et prenez un engagement concret pour les 30 prochains jours. Écrivez-le quelque part où vous le reverrez.",
  connections: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  resources: {
    extraits: [
      { titre: "Quintilien, Institution oratoire, Livre XII (~95 ap. J.-C.)", texte: "« L'orateur parfait, tel que nous le cherchons à former, ne peut être que l'homme de bien — car les mauvais hommes ne méritent pas ce nom. Non seulement j'exige de l'orateur qu'il soit homme de bien : j'exige en plus qu'il soit parfaitement habile à parler. »" },
      { titre: "Aristote, Rhétorique, Livre III, ch. 1", texte: "« Le style est ce qui permet aux mots d'avoir leur plein effet. Après les idées et la structure vient la manière de les présenter — et c'est là que les hommes commencent à se distinguer vraiment. »" }
    ],
    discours: [],
    biblio: [
      { titre: "Institution oratoire", auteur: "Quintilien, trad. Jean Cousin, Les Belles Lettres", note: "Le traité de formation le plus complet de l'Antiquité. Le Livre X (sur la lecture) et le Livre XII (sur l'éthique oratoire) pour commencer." },
      { titre: "Rhétorique", auteur: "Aristote, trad. Pierre Chiron, GF Flammarion", note: "Pour aller au-delà du programme : Livre II (émotions), Livre III (style). Avec le commentaire de Michel Meyer pour ne pas se perdre." },
      { titre: "Toastmasters International", auteur: "toastmasters.org", note: "Clubs de prise de parole dans toutes les grandes villes. Réunions hebdomadaires. L'environnement de pratique délibérée le plus structuré disponible en dehors d'une école." }
    ]
  },
  exercise: {
    title: "Synthèse personnelle — Mon pitch rhétorique",
    duration: "~20 min",
    instruction: "Exercice de bilan : choisissez un sujet que vous maîtrisez (votre métier, un projet, une conviction). Rédigez une prise de parole de 5 minutes en appliquant tout ce que vous avez appris dans ce programme. Utilisez la structure en 5 temps (S9), au moins une figure de style (S7), une reformulation anticipée des objections (S8), et un vocabulaire précis (S4). Puis copiez le prompt ci-dessous pour obtenir un retour de Claude sur votre synthèse.",
    cases: []
  },
  quiz: [
    { q: "Qu'est-ce que le 'transfert' en sciences de l'apprentissage, et pourquoi est-ce le niveau le plus difficile ?", a: "La capacité à utiliser une compétence dans un contexte différent de celui où elle a été acquise. Difficile parce que le cerveau encode les compétences de façon contextuelle — il faut un entraînement délibéré dans des contextes variés pour généraliser." },
    { q: "Qu'est-ce que 'vir bonus dicendi peritus' et qui l'a formulé ?", a: "Quintilien, Institution oratoire (~95 ap. J.-C.). 'Homme de bien habile à parler' — la définition de l'orateur parfait qui intègre l'exigence éthique à la compétence technique." },
    { q: "Quelle est la lacune la plus fréquente après un programme de rhétorique dense ?", a: "La précision du vocabulaire sous pression : en situation détendue le vocabulaire actif est disponible, mais sous stress on revient aux mots génériques. Solution : s'entraîner à la substitution à l'oral, pas seulement à l'écrit." }
  ],
  quizMcq: [
    {
      q: "Le 'transfert' en sciences de l'apprentissage désigne...",
      options: ["La transmission de connaissances d'un mentor à un apprenant", "L'utilisation d'une compétence dans un contexte différent de celui d'apprentissage", "Le passage du vocabulaire passif au vocabulaire actif par la pratique", "La mémorisation durable d'un concept abstrait à long terme"],
      answer: 1,
      explication: "'Savoir que l'éthos existe' ≠ 'calibrer instinctivement son éthos avant toute réunion'. Le transfert exige un entraînement délibéré dans des contextes variés — c'est le niveau d'apprentissage le plus difficile."
    },
    {
      q: "Que signifie 'vir bonus dicendi peritus' selon Quintilien ?",
      options: ["Un rhéteur maîtrisant les 5 parties de la rhétorique cicéronienne", "Un homme de bien habile à parler — l'éthique et la technique sont indissociables", "Un philosophe qui préfère la dialectique de la vérité à la persuasion", "Un orateur pratiquant l'elenchus socratique dans ses débats"],
      answer: 1,
      explication: "Quintilien : l'orateur parfait ne peut être qu'un homme de bien. La rhétorique sans éthique n'est pas de la rhétorique — c'est de la sophistique. La compétence technique et la vertu morale sont constitutives l'une de l'autre."
    },
    {
      q: "Quelle lacune est la plus fréquente après un programme de rhétorique dense ?",
      options: ["L'incapacité à identifier les sophismes dans des situations rapides", "La confusion entre éthos et pathos dans les discours complexes", "Le vocabulaire précis qui disparaît sous stress, remplacé par les mots génériques", "La difficulté à structurer une prise de parole formelle improvisée"],
      answer: 2,
      explication: "En situation détendue, le vocabulaire actif est disponible. Sous stress, le cerveau revient aux mots par défaut. Solution : s'entraîner à la substitution à l'oral dans des situations de faible enjeu d'abord."
    }
  ],
  writingExercise: {
    title: "Mon pitch rhétorique personnel — synthèse complète",
    duration: "~30 min",
    instruction: "Rédigez un texte de synthèse de 400-500 mots qui mobilise l'ensemble du programme. Choisissez un sujet que vous maîtrisez vraiment et précisez d'emblée à qui vous vous adressez et dans quel contexte ce texte serait prononcé. Le texte doit obligatoirement : (1) suivre la structure en 5 temps (S9) ; (2) intégrer au moins une figure de style nommée (S7) ; (3) anticiper et répondre à une objection réelle (S8) ; (4) utiliser un vocabulaire précis — bannissez 'intéressant', 'difficile', 'faire', 'chose', 'bien' (S4) ; (5) se terminer par une formule mémorable. Le tout sans que ces contraintes paraissent artificielles.",
    correctionCriteria: "Évalue mon texte de synthèse sur l'ensemble des compétences : (1) Triangle rhétorique — éthos/pathos/logos bien dosés selon le contexte et l'auditoire déclaré ? (2) Solidité argumentative — prémisses vérifiables, pas de sophismes, pas de sauts logiques ? (3) Qualité lexicale — mots précis, registre adapté, vocabulaire actif perceptible ? (4) Structure en 5 temps — tous les éléments présents et efficaces, transitions fluides ? (5) Style — clarté, rythme, figure de style bien employée (pas plaquée) ? Note /5 sur chaque axe. Puis : la phrase la plus forte du texte + la phrase la plus faible réécrite en mieux."
  }
},

], // fin sessions

// ── FIGURES DE STYLE (enrichies — 6 rubriques) ──────────────
figures: [
  {
    name: "Anaphore",
    icon: "🔁",
    category: "Répétition",
    etymologie: "Du grec ana- (en arrière, de nouveau) + pherein (porter). Littéralement : 'ramener en avant'.",
    def: "Répétition d'un même mot ou groupe de mots au début de phrases, propositions ou vers successifs.",
    effet: "Emphase progressive, rythme martelé, mémorisation puissante. Chaque répétition renforce la précédente — effet cumulatif et émotionnel croissant.",
    exemples: [
      { type: "Littéraire", texte: "\"Partir, c'est mourir un peu, / C'est mourir à ce qu'on aime.\" (Edmond Haraucourt, Rondel de l'adieu, 1891)" },
      { type: "Politique", texte: "\"I have a dream that one day... I have a dream that one day... I have a dream that one day...\" (Martin Luther King, 1963) — 8 occurrences en 5 minutes." },
      { type: "Contemporain", texte: "\"Notre force, c'est notre cohésion. Notre force, c'est notre capacité à décider vite. Notre force, c'est vous.\" (Discours de direction, réunion d'équipe)" }
    ],
    usage: "Discours de mobilisation, plaidoiries, publicité, slogans. Particulièrement efficace en conclusion — la répétition finale crée l'effet d'ancrage mémoriel.",
    pieges: "L'anaphore trop répétée devient mécanique et perd son effet. Maximum 3-4 occurrences dans un discours ordinaire (MLK pouvait se permettre 8 — vous probablement pas). Ne jamais commencer un discours entier par une anaphore — l'effet s'épuise avant la fin."
  },
  {
    name: "Épiphore",
    icon: "🔂",
    category: "Répétition",
    etymologie: "Du grec epi- (sur, après) + pherein (porter). 'Porter après' — l'inverse de l'anaphore.",
    def: "Répétition d'un même mot ou groupe de mots en fin de phrases ou propositions successives.",
    effet: "Insistance sur la conclusion, effet de marteau — l'oreille attend la répétition et la reçoit comme une confirmation.",
    exemples: [
      { type: "Littéraire", texte: "\"Je le vis, je rougis, je pâlis à sa vue.\" (Racine, Phèdre, 1677) — trois verbes en cascade qui finissent par l'état." },
      { type: "Politique", texte: "\"Du sang, de la labeur, des larmes et de la sueur.\" (Churchill, 1940) — l'accumulation finit sur le mot le plus fort." },
      { type: "Contemporain", texte: "\"Ce projet nous engage. Notre réputation nous engage. Notre avenir nous engage.\" — le mot 'engage' martèle la responsabilité." }
    ],
    usage: "Discours de conclusion, phrases de synthèse, listes rhétoriques. Souvent combinée avec l'anaphore (symploque) pour un effet maximal.",
    pieges: "Moins naturelle que l'anaphore à l'oral — risque de paraître artificielle. Réservez-la à l'écrit ou à des discours très préparés."
  },
  {
    name: "Oxymore",
    icon: "☯️",
    category: "Contraste",
    etymologie: "Du grec oxus (aigu, pointu) + moros (émoussé, stupide). Alliance de l'aigu et de l'émoussé — un paradoxe dans le mot même.",
    def: "Association de deux termes contradictoires en apparence, qui crée un sens nouveau par leur tension.",
    effet: "Tension intellectuelle et émotionnelle, mémorisation par le paradoxe, densification du sens — deux idées opposées coexistent en deux mots.",
    exemples: [
      { type: "Littéraire", texte: "\"Cette obscure clarté qui tombe des étoiles.\" (Corneille, Le Cid, 1637) — la clarté d'un ciel étoilé qui reste sombre." },
      { type: "Politique", texte: "\"Le silence éloquent\" — formule utilisée pour décrire le refus de répondre qui dit plus qu'une réponse." },
      { type: "Contemporain", texte: "\"Une dépendance libératrice\" (marketing d'une app) ; \"Un luxe accessible\" (positionnement de marque) ; \"Une urgence tranquille\" (management en crise calme)." }
    ],
    usage: "Titres, formules de marque, définitions de paradoxes réels, descriptions de situations complexes. L'oxymore est particulièrement utile pour décrire ce qui ne peut pas être réduit à une seule catégorie.",
    pieges: "Ne pas confondre avec le paradoxe (logique) — l'oxymore est stylistique. 'Le silence éloquent' n'est pas logiquement paradoxal : il décrit une réalité. Éviter les oxymores devenus clichés : 'beauté cruelle', 'douce amertume'."
  },
  {
    name: "Chiasme",
    icon: "🔀",
    category: "Structure",
    etymologie: "Du grec khiasmos, de la lettre chi (Χ) — qui forme une croix. L'inversion graphique de la lettre illustre l'inversion de la structure.",
    def: "Figure de construction qui inverse l'ordre des éléments dans deux propositions parallèles. Structure : A-B / B'-A'.",
    effet: "Balance mémorable, formule frappante qui semble évidente a posteriori, sentiment d'achèvement — la symétrie satisfait l'oreille.",
    exemples: [
      { type: "Littéraire", texte: "\"Il faut manger pour vivre, et non pas vivre pour manger.\" (Molière, L'Avare, 1668). Structure : [manger][vivre] / [vivre][manger]." },
      { type: "Politique", texte: "\"Ask not what your country can do for you — ask what you can do for your country.\" (Kennedy, 1961). Structure : [you][country] / [country][you]." },
      { type: "Contemporain", texte: "\"On ne travaille pas pour réussir ; on réussit parce qu'on travaille.\" — variante professionnelle du chiasme de motivation." }
    ],
    usage: "Formules mémorables, maximes, conclusions de discours. Le chiasme se mémorise facilement — il est fait pour être cité. Idéal pour les formules de conclusion.",
    pieges: "Un chiasme forcé sonne faux immédiatement. Si la structure est artificielle, elle se remarque. Ne pas en abuser : un chiasme par discours est généralement un maximum. Le chiasme doit formuler une idée vraiment paradoxale ou inversée — pas n'importe quelle phrase."
  },
  {
    name: "Métaphore",
    icon: "🌊",
    category: "Analogie",
    etymologie: "Du grec metaphora, de meta (au-delà, à travers) + pherein (porter). 'Transporter le sens au-delà' — d'un domaine à un autre.",
    def: "Analogie directe sans terme comparatif — identification de deux réalités pour créer un sens nouveau. Différent de la comparaison (qui dit 'comme').",
    effet: "Visualisation immédiate, densité de sens, mémorisation par l'image concrète. La métaphore est la figure reine parce qu'elle est constitutive de la pensée humaine.",
    exemples: [
      { type: "Littéraire", texte: "\"Le temps est un fleuve.\" (Héraclite, paraphrase). Ce n'est pas 'le temps ressemble à un fleuve' — il l'est, dans la langue." },
      { type: "Politique", texte: "\"Cette réunion était un naufrage.\" — pas une comparaison (comme un naufrage), une identification. L'auditoire visualise le chaos, l'eau qui monte, la perte." },
      { type: "Contemporain", texte: "\"Notre pipeline commercial\" (métaphore industrielle dans le marketing) ; \"Déployer une stratégie\" (métaphore militaire) ; \"Les leviers de croissance\" (métaphore mécanique)." }
    ],
    usage: "Partout — et c'est le problème. Les métaphores les plus puissantes sont celles qu'on invente pour un contexte précis (métaphore vive). Les métaphores usées deviennent invisibles et donc inutiles.",
    pieges: "La métaphore filée incohérente : 'Notre stratégie est un marathon — mais il faut aussi savoir appuyer sur l'accélérateur.' Marathon et accélérateur n'appartiennent pas au même domaine. Ce mélange détruit l'image. Choisir une métaphore et la tenir."
  },
  {
    name: "Hyperbole",
    icon: "🔝",
    category: "Intensité",
    etymologie: "Du grec hyperbolê, de hyper (au-dessus) + ballein (lancer). 'Lancer au-dessus' — exagérer au-delà de la réalité.",
    def: "Exagération expressive pour renforcer une idée. L'auditoire sait qu'il s'agit d'une exagération — c'est la convention qui lui donne son efficacité.",
    effet: "Emphase, vivification, humour possible, dramatisation. L'hyperbole force l'attention là où un énoncé factuel passerait inaperçu.",
    exemples: [
      { type: "Littéraire", texte: "\"Je te l'ai dit mille fois.\" — personne n'a dit mille fois la même chose. L'exagération exprime l'exaspération." },
      { type: "Politique", texte: "\"Ce budget est une catastrophe absolue.\" — 'absolue' est l'hyperbolisation d'un jugement qui reste subjectif." },
      { type: "Contemporain", texte: "En publicité : 'La plus grande révolution technologique du siècle.' Hyperbolique mais attendu — l'auditoire intègre la convention." }
    ],
    usage: "Humour, indignation, publicité, discours émotionnels. L'hyperbole est naturelle à l'oral — elle l'est moins à l'écrit formel où elle peut paraître imprécise.",
    pieges: "L'hyperbolisme chronique : si tout est 'révolutionnaire', 'catastrophique' ou 'incroyable', plus rien ne l'est. L'hyperbolisation dévalue les mots. Dans un contexte professionnel sérieux, l'hyperbole peut nuire à la crédibilité."
  },
  {
    name: "Litote",
    icon: "🔽",
    category: "Intensité",
    etymologie: "Du grec litotês, de litos (simple, maigre). 'Dire moins pour exprimer plus' — l'art de la suggestion par la soustraction.",
    def: "Atténuation qui dit moins pour suggérer plus. Figure inverse de l'hyperbole — on minimise pour mieux insister.",
    effet: "Élégance, suggestion, ironie possible. La litote laisse à l'auditoire le soin de reconstituer l'intensité réelle — ce qui le rend acteur de l'interprétation.",
    exemples: [
      { type: "Littéraire", texte: "\"Va, je ne te hais point.\" (Corneille, Le Cid, 1637) — Chimène dit à Rodrigue qu'elle l'aime, en disant seulement qu'elle ne le hait pas." },
      { type: "Politique", texte: "\"Ce n'est pas la politique la plus judicieuse.\" (sous-entendu : c'est une erreur grave)." },
      { type: "Contemporain", texte: "\"Je ne suis pas insensible à vos arguments.\" — litote diplomatique pour dire 'vous avez raison mais je ne vais pas le dire directement.'" }
    ],
    usage: "Diplomatie, euphémisme, ironie élégante, contextes où l'affirmation directe serait trop brutale ou trop naïve. La litote est la figure de la politesse anglaise par excellence.",
    pieges: "La litote mal maîtrisée crée de l'ambiguïté — l'interlocuteur ne sait pas si vous dites la chose ou son contraire. En contexte de crise ou de clarté requise, privilégier l'affirmation directe."
  },
  {
    name: "Antithèse",
    icon: "🔄",
    category: "Contraste",
    etymologie: "Du grec antithesis, de anti (contre) + thesis (position). 'Position contre position'.",
    def: "Opposition de deux idées, termes ou phrases dans un même mouvement rhétorique. Plus large que le chiasme : elle oppose sans nécessairement inverser la structure.",
    effet: "Clarté par le contraste, dynamisme argumentatif, sentiment de complétude — 'tout a été dit, le pour et le contre'.",
    exemples: [
      { type: "Littéraire", texte: "\"La clarté est la politesse de celui qui écrit.\" (Jules Renard) — l'opposé implicite : l'obscurité est l'impolitesse." },
      { type: "Politique", texte: "\"Gouverner, c'est choisir.\" (Pierre Mendès France) — antithèse implicite : ne pas choisir, c'est ne pas gouverner." },
      { type: "Contemporain", texte: "\"Nous n'agissons pas parce que les choses sont difficiles ; les choses sont difficiles parce que nous n'agissons pas.\" (Sénèque, adapté)" }
    ],
    usage: "Argumentation contradictoire, plaidoiries, discours de conviction. L'antithèse est particulièrement efficace pour démontrer qu'on a considéré les deux côtés d'une question.",
    pieges: "L'antithèse forcée crée une fausse dichotomie (voir S3) — elle peut simplifier abusivement une réalité complexe. Éviter : 'Soit vous êtes avec nous, soit vous êtes contre nous.'"
  },
  {
    name: "Périphrase",
    icon: "🔡",
    category: "Substitution",
    etymologie: "Du grec periphrasis, de peri (autour) + phrazein (exprimer). 'Exprimer en tournant autour' — nommer par la description plutôt que par le nom.",
    def: "Groupe de mots qui remplace un mot unique par sa description, ses attributs ou ses fonctions.",
    effet: "Style soutenu, euphémisme, insistance sur un aspect particulier du référent, élégance dans la variété.",
    exemples: [
      { type: "Littéraire", texte: "\"L'astre du jour\" (le soleil) ; \"La Ville Éternelle\" (Rome) ; \"Le roi des animaux\" (le lion)." },
      { type: "Politique", texte: "\"Le Président de la République\" au lieu de simplement 'le Président' — insistance sur la fonction constitutionnelle." },
      { type: "Contemporain", texte: "\"Procéder à un licenciement économique\" au lieu de 'licencier' — euphémisme institutionnel typique." }
    ],
    usage: "Style soutenu, évitement de la répétition, euphémisme, insistance sur une qualité particulière. Très utilisée dans les discours officiels et dans la prose littéraire.",
    pieges: "Périphrases creuses : 'les décisions de nature à impacter positivement les paramètres de performance' pour 'les bonnes décisions'. La périphrase administrative transforme souvent des idées simples en formules opaques."
  },
  {
    name: "Prétérition",
    icon: "🤫",
    category: "Feinte",
    etymologie: "Du latin praeteritio, de praeterire (passer devant, omettre). 'Dire en passant sous silence' — parler d'une chose en prétendant ne pas en parler.",
    def: "Figure qui consiste à déclarer qu'on ne va pas parler de quelque chose — tout en en parlant.",
    effet: "Ironie, sous-entendu puissant, suggestion d'une idée qu'on veut planter sans en assumer la responsabilité directe.",
    exemples: [
      { type: "Littéraire", texte: "\"Je passerai sous silence ses nombreuses aventures passées...\" (et on les a passées en revue)." },
      { type: "Politique", texte: "\"Je ne dirai rien de ses erreurs de gestion des cinq dernières années — le peuple les connaît.\" Cicéron utilisait systématiquement cette figure dans ses plaidoiries." },
      { type: "Contemporain", texte: "\"Sans parler du retard de livraison de 3 semaines, concentrons-nous sur l'avenir.\" — le retard est mentionné en niant qu'on en parle." }
    ],
    usage: "Débat, plaidoirie, discours politique, ironie. La prétérition permet d'introduire une idée dévastatrice avec une fausse modestie rhétorique.",
    pieges: "Facilement repérable par un auditoire attentif — elle peut se retourner contre l'orateur si perçue comme manipulation évidente. Dans un contexte de dialogue honnête, elle est une forme de mauvaise foi."
  },
  {
    name: "Ironie",
    icon: "😏",
    category: "Feinte",
    etymologie: "Du grec eirôneia, de eirôn (celui qui feint d'ignorer). L'ironie socratique : feindre l'ignorance pour mieux démontrer l'ignorance de l'autre.",
    def: "Dire le contraire de ce qu'on pense, en comptant sur la complicité du récepteur pour décoder le sens réel.",
    effet: "Humour, critique élégante, connivence avec l'auditoire, distance critique. L'ironie crée une communauté d'initiés — ceux qui comprennent et ceux qui ne comprennent pas.",
    exemples: [
      { type: "Littéraire", texte: "\"Quelle belle âme que ce Tartuffe !\" (paraphrase de Molière) — dit par quelqu'un qui vient de le voir mentir." },
      { type: "Politique", texte: "\"Je dois féliciter le gouvernement pour cette remarquable gestion de la crise.\" (dit par l'opposition après un fiasco)." },
      { type: "Contemporain", texte: "\"Encore une réunion pour planifier la prochaine réunion — exactement ce dont on avait besoin.\" Ironie de couloir." }
    ],
    usage: "Humour, critique, distanciation. L'ironie est un outil de lien social — elle suppose une connivence qui, en se formant, crée un groupe.",
    pieges: "Risquée à l'écrit sans signal tonique — l'ironie écrite peut être prise au premier degré. En contexte interculturel, l'ironie est souvent le premier élément à se perdre. Dans un contexte tendu ou hiérarchique, elle peut être perçue comme de l'arrogance."
  },
  {
    name: "Allégorie",
    icon: "🦅",
    category: "Analogie",
    etymologie: "Du grec allegoria, de allos (autre) + agoreuein (parler en public). 'Dire autre chose que ce qu'on dit' — représentation symbolique prolongée.",
    def: "Représentation d'une idée abstraite ou d'un concept complexe par une image concrète développée de façon continue.",
    effet: "Mémorisation par l'image, accès à des idées abstraites via le concret, profondeur de sens — l'allégorie peut être lue à plusieurs niveaux simultanément.",
    exemples: [
      { type: "Littéraire", texte: "La Caverne de Platon (République, Livre VII) : des prisonniers enchaînés prennent les ombres pour la réalité. Allégorie de l'ignorance et de la philosophie comme libération." },
      { type: "Politique", texte: "\"Le vaisseau de l'État\" — métaphore filée en allégorie : le capitaine (le chef), les matelots (les citoyens), la tempête (la crise), le port (la paix)." },
      { type: "Contemporain", texte: "\"Notre entreprise est un écosystème\" — si développée en détail (les prédateurs, les symbioses, la biodiversité, la résilience), c'est une allégorie de l'organisation." }
    ],
    usage: "Discours complexes, philosophie, pédagogie, politique. L'allégorie permet de rendre accessible ce qui serait autrement trop abstrait ou trop risqué à dire directement.",
    pieges: "L'allégorie incomprise crée de la confusion. Elle suppose une connivence culturelle que l'auditoire doit partager. Ne pas développer une allégorie si vous n'êtes pas sûr que l'image de base est comprise."
  },
  {
    name: "Personnification",
    icon: "🧑",
    category: "Analogie",
    etymologie: "Du latin persona (masque de théâtre, personnage) + facere (faire). Prêter un masque humain à ce qui n'est pas humain.",
    def: "Attribution de traits humains (pensées, sentiments, volontés, actions) à des êtres non humains, des objets ou des abstractions.",
    effet: "Vivification, proximité émotionnelle, rend accessible et proche ce qui est distant ou abstrait.",
    exemples: [
      { type: "Littéraire", texte: "\"La mort viendra et elle aura tes yeux.\" (Cesare Pavese, 1950) — la mort personnifiée dans le visage de l'aimée." },
      { type: "Politique", texte: "\"La France se lève.\" (De Gaulle) — la France comme être humain qui se réveille, prend conscience, agit." },
      { type: "Contemporain", texte: "\"Le marché a peur.\" ; \"L'algorithme apprend.\" ; \"L'entreprise souffre.\" — personnifications courantes dans le discours économique." }
    ],
    usage: "Discours politiques (incarner des abstractions nationales), publicité, pédagogie, poésie. La personnification d'un concept abstrait (la justice, la liberté) lui donne une force émotionnelle que l'abstraction seule ne peut pas avoir.",
    pieges: "La personnification excessive peut anthropomorphiser des systèmes qui obéissent à d'autres logiques — 'le marché a décidé' peut masquer des décisions humaines bien réelles."
  },
  {
    name: "Euphémisme",
    icon: "🕊️",
    category: "Intensité",
    etymologie: "Du grec euphemismos, de eu (bien) + pheme (parole). 'Parler de bonne façon' — en douceur, en atténuant.",
    def: "Substitution d'un terme doux ou indirect à un terme choquant, brutal ou socialement difficile.",
    effet: "Adoucissement, politesse, possibilité de parler de sujets difficiles sans brutalité. Parfois : dissimulation ou manipulation.",
    exemples: [
      { type: "Littéraire", texte: "\"Il nous a quittés\" pour 'il est mort'. \"Une aventure\" pour 'une liaison'. La littérature policière regorge d'euphémismes pour la violence." },
      { type: "Politique", texte: "\"Dommages collatéraux\" pour 'victimes civiles'. \"Flexibilisation du marché du travail\" pour 'facilitation des licenciements'. \"Rectification des frontières\" (Orwell) pour 'annexion par la force'." },
      { type: "Contemporain", texte: "\"Un plan de réorganisation\" pour 'des licenciements'. \"Une opportunité de développement\" pour 'une critique'. \"Un challenge\" pour 'un problème grave'." }
    ],
    usage: "Bienséance, diplomatie, communication de crise. L'euphémisme est parfois nécessaire (parler de la mort à des proches) et parfois manipulateur (masquer des réalités derrière des formules creuses).",
    pieges: "Orwell a dénoncé systématiquement les euphémismes politiques comme instruments de dissimulation. Un euphémisme qui masque une réalité grave n'est pas de la politesse — c'est de la manipulation. Toujours se demander : est-ce que cet euphémisme protège l'interlocuteur ou dissimule quelque chose de dérangeant ?"
  },
  {
    name: "Renversement",
    icon: "↕️",
    category: "Structure",
    etymologie: "Du latin reversare (retourner, inverser). Variante sémantique du chiasme : non plus une inversion de mots, mais une inversion du rapport entre deux concepts.",
    def: "Inversion du rapport logique ou causal entre deux concepts, créant un renversement de perspective — plus profond qu'un simple jeu sur les mots.",
    effet: "Renversement de point de vue, révélation d'une vérité cachée dans l'inversion, sentiment de profondeur soudaine.",
    exemples: [
      { type: "Littéraire", texte: "\"On ne trouve pas le bonheur, on le crée.\" — l'inversion du rapport actif/passif change la philosophie sous-jacente." },
      { type: "Politique", texte: "\"Ce n'est pas la crise qui crée la peur ; c'est la peur qui crée la crise.\" — renversement causal." },
      { type: "Contemporain", texte: "\"Nous ne pilotons pas les outils — ce sont les outils qui nous pilotent.\" — renversement sujet/objet dans la relation homme/technologie." }
    ],
    usage: "Maximes, formules de management, conclusions de discours, essais. Le chiasme sémantique est plus puissant que le syntaxique parce qu'il révèle une vérité non évidente.",
    pieges: "Un chiasme sémantique faux sonne creux — 'Ce n'est pas nous qui faisons le succès, c'est le succès qui nous fait.' Beau à l'oreille, vide de sens. Le chiasme sémantique doit être vrai, pas seulement sonner vrai."
  }
], // fin figures

// ── VOCABULAIRE (35 mots) ────────────────────────────────────
vocabulary: [
  { word: "Éthos", def: "Crédibilité de l'orateur — ce qu'il dégage avant et pendant sa prise de parole. Comprend phronèsis (compétence), arétè (vertu) et eunoia (bienveillance).", example: "Un médecin parlant de santé a un éthos immédiat fondé sur sa formation. En réunion, l'éthos se construit dès la façon d'entrer dans la salle.", category: "Piliers", session: 1 },
  { word: "Pathos", def: "Dimension émotionnelle du discours — l'art de mettre l'auditoire dans un état favorable au message sans manipulation. Mise en résonance, pas démagogie.", example: "MLK : 'I have a dream' — vision projetée qui touche la chair avant d'atteindre la raison. Kennedy : le récit d'Ann Nixon Cooper.", category: "Piliers", session: 1 },
  { word: "Logos", def: "Structure logique du discours : prémisses, raisonnement, conclusion. Ce qui rend un message réfutable — et donc solide.", example: "Un argument avec prémisse documentée et conclusion qui en découle logiquement. Zola dans J'Accuse : chaque accusation est une prémisse vérifiable.", category: "Piliers", session: 1 },
  { word: "Phronèsis", def: "Prudence pratique, sagesse de l'action — première composante de l'éthos chez Aristote. La compétence perçue de l'orateur sur son sujet.", example: "Un orateur qui anticipe les objections avant qu'elles soient formulées démontre sa phronèsis — il maîtrise le sujet assez bien pour voir ses propres failles.", category: "Piliers", session: 1 },
  { word: "Enthymème", def: "Syllogisme rhétorique dont une prémisse est sous-entendue car partagée par l'auditoire. Plus efficace que le syllogisme complet : il rend l'auditoire acteur du raisonnement.", example: "'Il ment depuis le début, on ne peut pas lui faire confiance.' Prémisse sous-entendue : 'Qui ment une fois est généralement indigne de confiance.'", category: "Logique", session: 1 },
  { word: "Syllogisme", def: "Raisonnement déductif en 3 temps : prémisse majeure (vérité générale) → prémisse mineure (cas particulier) → conclusion nécessaire.", example: "Tout homme est mortel (P. majeure). Socrate est un homme (P. mineure). Donc Socrate est mortel (Conclusion). Si les prémisses sont vraies, la conclusion est nécessairement vraie.", category: "Logique", session: 2 },
  { word: "Réfutabilité", def: "Propriété d'un énoncé pouvant être démontré faux par l'expérience ou la logique. Critère de solidité selon Karl Popper (1934). Un argument non réfutable n'est pas un argument : c'est un dogme.", example: "'Tous les corbeaux sont noirs' est réfutable — un corbeau blanc suffit. 'L'âme est immortelle' ne l'est pas — aucune observation ne peut la démontrer fausse.", category: "Logique", session: 2 },
  { word: "Induction", def: "Raisonnement du particulier vers le général. Risque principal : l'induction abusive — généraliser depuis un échantillon insuffisant ou non représentatif.", example: "'Ce produit a échoué en France, en Allemagne et au Royaume-Uni. Donc il ne fonctionnera pas en Europe.' Valide si l'échantillon est représentatif — invalide s'il ne l'est pas.", category: "Logique", session: 2 },
  { word: "Post hoc ergo propter hoc", def: "Latin : 'après ça, donc à cause de ça.' Confusion entre corrélation et causalité — l'un des sophismes les plus fréquents dans le raisonnement quotidien.", example: "Les ventes de glaces augmentent en même temps que les noyades. La glace ne cause pas les noyades — la chaleur cause les deux. Même erreur en management : 'Les résultats ont baissé depuis que Marie est arrivée.'", category: "Logique", session: 2 },
  { word: "Sophisme", def: "Raisonnement qui semble valide mais ne l'est pas — intentionnel (manipulation) ou involontaire. Aristotle en recense 13 types dans les Réfutations sophistiques (~350 av. J.-C.).", example: "Ad hominem, homme de paille, appel à la majorité, fausse dichotomie, pente glissante, appel à l'autorité — les 6 sophismes les plus fréquents en contexte professionnel.", category: "Logique", session: 3 },
  { word: "Paralogisme", def: "Erreur de raisonnement involontaire — à distinguer du sophisme délibéré. Les deux produisent une conclusion invalide, mais leurs intentions diffèrent.", example: "Généraliser depuis un seul cas sans le remarquer. Confondre corrélation et causalité par inadvertance. Le paralogisme mérite la correction ; le sophisme mérite la méfiance.", category: "Logique", session: 3 },
  { word: "Ad hominem", def: "Sophisme qui attaque la personne plutôt que l'argument. L'histoire personnelle ou les traits de l'orateur ne rendent pas son raisonnement valide ou invalide.", example: "'Vous parlez de gestion financière saine, mais vous avez fait faillite.' La faillite passée ne rend pas l'analyse financière fausse. Variante : tu quoque ('Et toi ?').", category: "Sophismes", session: 3 },
  { word: "Homme de paille", def: "Sophisme qui déforme la position adverse en une caricature plus facile à attaquer. On réfute une version simplifiée, pas la thèse réelle.", example: "'Il veut réduire les réunions.' → 'Il veut qu'on ne se coordonne plus jamais !' La caricature remplace la nuance pour faciliter la critique.", category: "Sophismes", session: 3 },
  { word: "Hapax", def: "Du grec hapax legomenon : 'dit une seule fois'. Mot ou forme n'apparaissant qu'une fois dans un corpus. En rhétorique : néologisme ponctuel créé pour l'occasion.", example: "Shakespeare a inventé plus de 1 700 mots de l'anglais — dont beaucoup étaient des hapax qui ont finalement été adoptés. 'Eyeball', 'bedroom', 'lonely' sont des inventions shakespeariennes.", category: "Style", session: 4 },
  { word: "Aporie", def: "Difficulté logique ou philosophique sans solution apparente — ni impasse pratique ni simple paradoxe. Position d'équilibre impossible entre deux vérités contradictoires.", example: "'Cette proposition soulève une aporie : si X est vrai, Y ne peut l'être, mais sans Y, X est impossible.' Distinct du paradoxe (apparent) et de l'impasse (pratique).", category: "Philosophie", session: 4 },
  { word: "Tautologie", def: "Énoncé qui répète la même idée sous une forme différente sans rien ajouter. Donne l'illusion d'une démonstration — en réalité il ne démontre rien.", example: "'Un cercle est une forme ronde.' / 'C'est ainsi parce que c'est comme ça.' / 'Le succès, c'est réussir.' En rhétorique, la tautologie est une fausse preuve.", category: "Logique", session: 4 },
  { word: "Elenchus", def: "Méthode socratique d'interrogation conduisant l'interlocuteur à réaliser lui-même les contradictions de sa position. Réfutation par questionnement progressif.", example: "Socrate interroge Ménon sur la vertu — jusqu'à ce que Ménon découvre qu'il ne sait pas définir ce qu'il croyait savoir. L'elenchus ne démontre pas : il expose.", category: "Méthode", session: 5 },
  { word: "Reformulation", def: "Technique d'écoute et de rebond : résumer fidèlement la position adverse avant de répondre. Confirme la compréhension, force la précision, signale l'écoute.", example: "'Si je comprends bien, tu soutiens que X parce que Y — est-ce exact ?' Différente de l'homme de paille : elle reformule sans déformer.", category: "Méthode", session: 5 },
  { word: "Convaincre", def: "Amener quelqu'un à adhérer à une thèse par des arguments rationnels. Il comprend et accepte. Travaille sur le logos.", example: "On convainc avec des données, des prémisses vérifiables, un raisonnement solide. Résultat : adhésion intellectuelle durable.", category: "Méthode", session: 1 },
  { word: "Persuader", def: "Amener quelqu'un à croire ou agir par des moyens émotionnels, esthétiques ou psychologiques. Travaille sur le pathos. Peut fonctionner sans preuve formelle.", example: "Un récit qui émeut persuade même sans argument. La publicité persuade. Un orateur charismatique persuade avant que l'argument soit exposé.", category: "Méthode", session: 1 },
  { word: "Fluency illusion", def: "Biais cognitif confondant familiarité et maîtrise. Relire ses notes semble efficace parce que le texte paraît facile — c'est une illusion de compréhension.", example: "Vous relisez votre cours sur les sophismes et tout semble clair. Mais à l'oral, impossible de les citer de mémoire. La familiarité n'est pas la maîtrise.", category: "Apprentissage", session: 6 },
  { word: "Effet de test", def: "S'auto-interroger sans consulter ses notes améliore la rétention de 50-80% par rapport à la relecture passive. Roediger & Karpicke (2006).", example: "Fermer le cours, essayer de rappeler les 10 sophismes de mémoire, vérifier, recommencer. L'acte de chercher — même en se trompant — ancre l'information.", category: "Apprentissage", session: 6 },
  { word: "Parataxe", def: "Juxtaposition de propositions sans mots de liaison. Effet de rapidité, brutalité, impact maximal. Style de Hemingway et de César.", example: "Veni, vidi, vici (César). 'Il entre. Il regarde. Il repart.' La parataxe coupe, tranche, avance. Elle refuse l'explication — elle impose le constat.", category: "Style", session: 7 },
  { word: "Hypotaxe", def: "Subordination des propositions avec liens explicites causaux, concessifs, temporels. Permet la nuance, la hiérarchie des idées, la complexité.", example: "La phrase proustienne — parfois une page entière — qui subordonne tout à l'impression centrale. Permet de montrer comment les choses se causent et se nuancent.", category: "Style", session: 7 },
  { word: "Nominalisation", def: "Transformation d'un verbe ou adjectif en nom, alourdissant la phrase et masquant l'action. Pathologie fréquente du style administratif.", example: "'Procéder à la réalisation d'une évaluation' au lieu de 'évaluer'. 'Opérer un rapprochement' au lieu de 'rapprocher'. La nominalisation dilue l'action.", category: "Style", session: 7 },
  { word: "Éristique", def: "Art de disputer pour avoir raison — par des moyens honnêtes ou non (Schopenhauer, 1831). Cherche la victoire conversationnelle, pas la vérité.", example: "Un avocat qui sait qu'il a perdu mais continue à déstabiliser l'adversaire par des techniques rhétoriques fait de l'éristique. Outil défensif : savoir la reconnaître.", category: "Méthode", session: 8 },
  { word: "Dialectique", def: "Art de conduire un dialogue par confrontation d'arguments opposés pour en dégager une vérité. ≠ rhétorique (convaincre) ≠ éristique (gagner).", example: "Le dialogue socratique est de la dialectique : on cherche la vérité ensemble, pas à écraser l'adversaire. Hegel systématise : thèse → antithèse → synthèse.", category: "Méthode", session: 8 },
  { word: "Inventio", def: "Première des cinq parties de la rhétorique cicéronienne. L'art de trouver les idées, les arguments et les preuves pertinents à un sujet donné.", example: "Avant de préparer une présentation, l'inventio consiste à lister toutes les idées possibles, tous les angles, tous les arguments — avant de les trier (dispositio).", category: "Structure", session: 9 },
  { word: "Dispositio", def: "Deuxième partie de la rhétorique cicéronienne. L'art d'organiser les arguments dans l'ordre rhétorique le plus efficace — pas l'ordre logique.", example: "Cicéron : commencer fort, placer le plus faible au milieu, terminer fort. L'auditoire retient davantage le début et la fin que le milieu.", category: "Structure", session: 9 },
  { word: "Enargeia", def: "Technique rhétorique grecque consistant à rendre visible et présent ce qui est absent — projeter une image si concrète que l'auditoire la ressent comme réelle.", example: "MLK ne décrit pas la discrimination statistiquement — il projette un futur : ses enfants jugés sur leur caractère. L'auditoire voit, ressent, y croit.", category: "Style", session: 1 },
  { word: "Oxymore", def: "Figure associant deux termes contradictoires pour créer un sens nouveau par leur tension. Stylistique ≠ paradoxe logique.", example: "'Un silence éloquent.' 'Cette obscure clarté qui tombe des étoiles.' (Corneille). 'Un luxe accessible.' L'oxymore nomme ce qui ne peut pas être réduit à une seule catégorie.", category: "Figures", session: 4 },
  { word: "Anaphore", def: "Répétition d'un mot ou groupe en début de propositions successives. Effet de marteau, rythme cumulatif, mémorisation.", example: "'I have a dream… I have a dream… I have a dream…' (MLK, 1963 — 8 occurrences). 'Notre force, c'est… Notre force, c'est…'", category: "Figures", session: 7 },
  { word: "Chiasme", def: "Figure inversant l'ordre des éléments dans deux propositions parallèles. Structure A-B / B'-A'. Formule mémorable, sentiment d'achèvement.", example: "'Il faut manger pour vivre, non vivre pour manger.' (Molière). 'Ask not what your country can do for you — ask what you can do for your country.' (Kennedy).", category: "Figures", session: 7 },
  { word: "Vir bonus dicendi peritus", def: "Latin de Quintilien (~95 ap. J.-C.) : 'homme de bien habile à parler'. Définition de l'orateur parfait qui intègre l'excellence éthique à la compétence technique.", example: "La rhétorique sans éthique n'est pas de la rhétorique — c'est de la sophistique. Toute la tradition humaniste de la formation oratoire découle de cette exigence.", category: "Philosophie", session: 10 },
  { word: "Épidictique", def: "Genre rhétorique de la célébration ou du blâme. L'un des 3 genres d'Aristote avec le délibératif (politique) et le judiciaire (tribunal).", example: "Discours funèbre, éloge académique, discours de remise de prix. Temps rhétorique : le présent. L'épidictique crée ou consolide les valeurs communes d'une communauté.", category: "Genres", session: 10 }
],

// ── DIAGNOSTIC DE BASELINE ───────────────────────────────────
baseline: [
  {
    id: 1, points: 4,
    q: "Qu'est-ce que la rhétorique ? Donnez une définition en une phrase.",
    criteria: ["Correcte", "Ancrée historiquement", "Non tautologique", "Précise"],
    ideal: "Art de convaincre et de persuader par le discours, codifié par Aristote (~350 av. J.-C.) comme technique de communication efficace dans toute situation argumentative."
  },
  {
    id: 2, points: 6,
    q: "Quelle est la différence entre convaincre et persuader ?",
    criteria: ["Logos vs pathos mentionné", "Distinction nette", "Exemple à l'appui"],
    ideal: "Convaincre : amener à adhérer par des arguments rationnels (logos) — adhésion intellectuelle. Persuader : amener à croire ou agir par des moyens émotionnels ou esthétiques (pathos) — peut fonctionner sans preuve formelle. On peut persuader de quelque chose de faux ; on ne peut convaincre qu'avec des raisons solides."
  },
  {
    id: 3, points: 15,
    q: "Nommez et expliquez les 3 éléments du triangle rhétorique d'Aristote.",
    criteria: ["Éthos défini avec ses 3 composantes", "Pathos : émotion ≠ manipulation", "Logos : structure réfutable", "Distinctions claires", "Exemple pour chacun"],
    ideal: "Éthos : crédibilité de l'orateur (phronèsis + arétè + eunoia). Pathos : mise en résonance émotionnelle adaptée à la réalité — ≠ manipulation. Logos : structure logique réfutable (prémisses + raisonnement + conclusion). Règle pratique : l'éthos est toujours premier."
  },
  {
    id: 4, points: 10,
    q: "Qu'est-ce qu'un sophisme ? Donnez un exemple concret.",
    criteria: ["Définition correcte", "Exemple pertinent et nommé", "Non confondu avec paralogisme"],
    ideal: "Raisonnement qui paraît valide mais ne l'est pas — intentionnel ou non. Ex : ad hominem ('Vous avez fait faillite donc votre analyse financière est fausse'), homme de paille, pente glissante. Paralogisme = involontaire ; sophisme = délibéré."
  },
  {
    id: 5, points: 10,
    q: "Quelle est la différence entre un argument et une opinion ?",
    criteria: ["Réfutabilité mentionnée", "Distinction prémisses/subjectivité", "Exemple"],
    ideal: "L'argument est réfutable — il repose sur des prémisses vérifiables et un raisonnement attaquable. L'opinion est une préférence ou croyance subjective qui n'a pas à se justifier. Un argument peut être démontré faux sur ses prémisses ; une opinion, non."
  },
  {
    id: 6, points: 10,
    q: "Trouvez le problème dans ce raisonnement : « Les Français mangent du pain. Les Allemands mangent du pain. Donc manger du pain rend patriote. »",
    criteria: ["Double sophisme identifié", "Induction abusive nommée", "Confusion causalité/corrélation nommée"],
    ideal: "Double sophisme : (1) induction abusive — généraliser depuis deux cas n'est pas une preuve universelle ; (2) confusion corrélation/causalité — le pain et le patriotisme coexistent mais l'un ne cause pas l'autre. Post hoc ergo propter hoc."
  },
  {
    id: 7, points: 10,
    q: "Reformulez cette phrase en la rendant 50% plus courte sans perdre le sens : « Il me semble que, dans un certain nombre de cas, il pourrait être envisageable de considérer que cette approche présente potentiellement certains avantages non négligeables. »",
    criteria: ["Raccourcie ≥50%", "Sens conservé", "Verbe d'action présent", "Conditionnel supprimé"],
    ideal: "Ex : 'Cette approche présente de réels avantages.' ou 'Cette approche mérite d'être considérée.' La pathologie originale : conditionnel de précaution + nominalisation."
  },
  {
    id: 8, points: 15,
    q: "Définissez précisément ces 3 mots : aporie / tautologie / oxymore",
    criteria: ["Aporie ≠ paradoxe ≠ impasse", "Tautologie = redondance ≠ démonstration", "Oxymore = association contradictoire stylistique", "Exemple pour chacun"],
    ideal: "Aporie : difficulté logique sans solution apparente — ni impasse pratique, ni simple paradoxe. Tautologie : répétition inutile qui donne l'illusion d'une démonstration ('un cercle est rond'). Oxymore : association de termes contradictoires créant un sens nouveau — stylistique, ≠ paradoxe logique ('silence éloquent')."
  },
  {
    id: 9, points: 10,
    q: "Quand vous voulez convaincre quelqu'un qui n'est pas d'accord, par quoi commencez-vous instinctivement ? Décrivez votre méthode réelle.",
    criteria: ["Honnêteté sur la méthode réelle", "Conscience des réflexes par défaut", "Autoévaluation"],
    ideal: "Question ouverte — l'objectif est la conscience de la méthode réelle (souvent : arguments en rafale, ton plus ferme, répétition). Réponse idéale : écoute d'abord, reformulation pour vérifier le désaccord réel, puis argument ciblé sur la prémisse en jeu."
  },
  {
    id: 10, points: 10,
    q: "Qu'est-ce qui fait qu'une personne est perçue comme quelqu'un « qui sait de quoi il parle » quand elle prend la parole ?",
    criteria: ["Éthos nommé ou décrit", "Au moins 2 composantes de l'éthos (phronèsis/arétè/eunoia)", "Exemples concrets"],
    ideal: "Précision du vocabulaire (phronèsis), capacité à anticiper les objections (phronèsis + arétè), cohérence posture/discours (arétè), ton assuré sans agressivité (eunoia), concessions sur les points secondaires (arétè + phronèsis)."
  }
],

baselineScore: [
  { min: 0,  max: 30,  label: "Fondations à poser",    desc: "Normal pour un départ. Le programme est fait pour ça.",              color: "#FF3B30" },
  { min: 31, max: 55,  label: "Intuition solide",       desc: "Vous avez les bons réflexes. Les outils vont les formaliser.",        color: "#FF9500" },
  { min: 56, max: 75,  label: "Base réelle",            desc: "Vous savez — il faut maintenant affiner la précision.",              color: "#34C759" },
  { min: 76, max: 100, label: "Niveau avancé",          desc: "Recalibrer les exercices vers le haut dès la Session 1.",            color: "#007AFF" }
]

}; // fin CONTENT
