# application_web_alma
## Cette projet a pour but de publier une page web pour l'association ALMA qui participera à l'édition 2026 du 4L trophy.

### A faire:
Adaptation à tout écran -> Affichage header pour petits écrans

Améliorer référencement:
ajouter un fichier sitemap.xml pour le référencement
mettre au point les meta (SEO) (regarder ce que c'est ...)

Contenu:
Ajouter une partie budget (mettre nos dépenses aussi ?)
Ameliorer partie sur le 4L trophy
Ajouter nos motivations/raisons de participer au 4L trophy

Idée: mettre les images d'en-tête en position fixed.
Ajouter des textes en-dessous des logos des partenaires dans la page accueil et des liens vers la page "nos partenaires".

Vitesse:
fichier robot.txt ?
feuilles de style separees pour les differents types d'affichages/tailles d'écran ? (optimisation du css ?)

Problème:
Lorsqu'on déroule le menu déroulant de la version mobile et qu'on élargit la page, le menu ne s'affiche plus bien.
La largeur des marges ou padding des sections n'est pas la même sur toutes les pages. Il en résulte que la page est plus ou occupée en largeur selon les pages.


### Organisation du code:

Les headers et footers sur chaque page sont identiques. Ils utilisent un display flex.
Le main de chaque page a une classe de la forme "main_accueil", main_qsn" (page "qui sommes-nous?"), ... car chaque page a sa propre organisation personnalisée.
Chaque page est découpée en sections qui ont une classe de la forme "section s1", "section s2", ... Je ne sais pas pourquoi j'avais recrée une classe "section" au début alors qu'une section est déjà un objet. J'ai essayé de retirer cette classe dans v032, je n'ai pas terminé.
Remarque: dans la page "nos partenaires" il y a des noms de sections qui ne sont pas de la forme "section s1" mais de la forme "section s-VML" pour la section qui présente notre partenaire VML par exemple.
Les sections sont généralement en display grid, avec une hauteur "auto".

Le CSS balaye dans l'ordre suivant chacune des pages:
- accueil
- qsn
- le projet
- nos partenaires
- nous contacter
Dans chaque page, il commence par les consignes générales pour la page puis blaye les sections dans l'ordre (s1, s2, ...).

Important: la "section s1" de chaque page est la même sur toutes les pages sauf la page d'accueil à l'exception de la photo de fond (et du titre si on choisit d'en mettre un). Il s'agit d'une section particulière, bizarrement conçue ! Etre attentif à cela !

Tout du long j'ai crée beaucoup de classes pour pouvoir garder une grande flexibilité. Si la version publiée venait à se stabiliser, il y aurait problement un gros travail de restructuration et de simplification du CSS.



### Branches:

Branche publiée: main  
Branches de travail:  
v031: ajout de titres dans les s1 de chaque page (ajout du titre de la page sur l'image d'accueil de chaque page)  
v032: retrait de la classe "section"  
v04: ajout d'une version pour mobile  