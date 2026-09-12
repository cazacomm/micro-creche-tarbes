# Site — Micro-crèche Les P'tits Soleils (Tarbes, quartier de l'Arsenal)

Site vitrine statique de la **micro-crèche Les P'tits Soleils**, 60 rue Saint-Jean, 65000 Tarbes.
La structure exploite également la micro-crèche **Les P'tits Nuages** à la même adresse : le
branding mis en avant est toujours *Les P'tits Soleils*.

Nom de domaine cible : **www.micro-creche-tarbes.fr** — pas encore acheté.
Le fichier `CNAME` sera à créer au moment du branchement du domaine (voir « Déploiement »).
En attendant, tous les chemins du site sont **relatifs**, ce qui permet une relecture sur
`https://cazacomm.github.io/micro-creche-tarbes/`.

## ✨ Stack

- HTML5 statique — pas de framework, pas de build
- CSS custom (`css/style.css`), charte pastel « soleil »
- [Font Awesome 6.4](https://fontawesome.com/) via CDN
- Google Fonts : **Baloo 2** (titres) + **Nunito** (corps) + **Caveat** (accents manuscrits)
- JavaScript vanilla (menu mobile, apparition au scroll, injection du lien de préinscription)

Le bouton **« Accéder aux préinscriptions »** (classe `.btn-mega`) est animé en permanence, sans
interaction : dégradé qui défile, léger battement, halo qui se propage et éclat qui balaie la
surface. Les animations se désactivent automatiquement si le visiteur a demandé une réduction
des animations dans son système (`prefers-reduced-motion`).

Hébergement : **GitHub Pages**. Le site fonctionne aussi en local :

```bash
python3 -m http.server 8000   # → http://localhost:8000
```

## 📁 Structure

```
.
├── index.html                  # Accueil
├── a-propos.html               # La crèche, les espaces, la directrice, l'équipe, la journée type
├── pedagogie.html              # Valeurs, inspirations, adaptation
├── tarifs.html                 # Forfaits, aides CAF (tranches), CTA préinscription
├── contact.html                # Coordonnées, carte, étapes d'inscription
├── les-ptits-nuages.html       # La seconde micro-crèche (même adresse, même équipe)
├── bientot-disponible.html     # Placeholder pour les micro-crèches d'Ibos
├── mentions-legales.html       # Mentions légales / RGPD
├── blog/
│   ├── index.html              # Liste des articles
│   └── <slug>/index.html       # Un article
├── css/style.css               # Styles globaux
├── assets/blog.css             # Styles spécifiques au blog
├── js/main.js                  # Menu mobile, reveal, lien de pré-inscription
├── assets/images/              # Logos + photos du client
├── scripts/generate-article.py # Génération automatique d'articles (OpenAI)
├── .github/workflows/          # Publication auto du blog (lundi matin)
├── blog-config.json            # Faits et paramètres du blog
├── BLOG_WORKFLOW.md            # Procédure éditoriale
├── sitemap.xml · rss.xml · llms.txt · robots.txt
└── favicon* · apple-touch-icon.png · android-chrome-*.png · site.webmanifest
```

## ⚠️ Reste à compléter avant mise en ligne

Les coordonnées, les textes de présentation et la bio de la directrice ont été fournis par la
crèche le 12/09/2026. Il reste :

| Élément | État | Où |
|---|---|---|
| Lien de préinscription | **provisoire** : pointe vers la plateforme de Bordères | `js/main.js`, constante `PREINSCRIPTION_URL` |
| Avis de parents | **3 cartes vides, encadrées en pointillés** | `index.html`, section « Avis de nos parents » |
| Mentions légales | `[RAISON_SOCIALE]`, `[FORME_JURIDIQUE]`, `[ADRESSE_SIEGE]`, `[SIRET]`, `[NUMERO_TVA]`, `[DIRECTEUR_DE_PUBLICATION]`, `[CREDITS_PHOTOS]` | `mentions-legales.html` |
| Photos | aucune fournie, icônes de repli affichées | `assets/images/` |
| Coordonnées GPS | `43.2327 / 0.0799` (centre de Tarbes, pas l'adresse exacte) | JSON-LD accueil et contact |
| Montants CMG | `967 € / 834 € / 700 €`, repris du site de Bordères | `tarifs.html` |

> ⚠️ Les barèmes CMG sont réévalués chaque année : à vérifier sur les deux sites du réseau.

> ⚠️ La section « Avis de nos parents » contient trois emplacements vides. Il faut y coller de
> **vrais avis** (fiche Google de la crèche) avant toute mise en ligne, ou supprimer la section.
> Elle est volontairement grisée et encadrée en pointillés pour qu'on ne l'oublie pas.

> ✅ **Réseaux sociaux** : la crèche n'a **pas de page Facebook**. Un seul compte Instagram
> (`@microcreches.despyrenees`) couvre toutes les crèches du réseau — c'est le même que celui du
> Jardin des Merveilles. Ne pas ajouter d'autre lien social.

> ✅ **Capacité** : **12 places par micro-crèche** — 12 pour Les P'tits Soleils, 12 pour Les
> P'tits Nuages. Ne jamais additionner les deux ni écrire « 24 places » : l'argument à faire
> passer, c'est le petit groupe, pas le total.

> ✅ **Quartier de l'Arsenal** confirmé par le client : à mentionner explicitement avec Tarbes.
> Adresse définitive : 60 rue Saint-Jean, 65000 Tarbes.

> ⚠️ **Les P'tits Nuages a sa propre équipe.** Le site ne doit jamais laisser entendre que les
> deux crèches partagent leur équipe ou leur direction. Ce qui est commun : l'adresse, le
> téléphone, l'e-mail, les horaires et l'état d'esprit.

> **Le lien de préinscription est centralisé** : une seule constante `PREINSCRIPTION_URL` en haut
> de `js/main.js` alimente tous les boutons `data-link="preinscription"` du site.

## 📸 Photos à fournir

À déposer dans `assets/images/` — les pages pointent déjà vers ces noms de fichiers et affichent
une icône de repli tant qu'ils sont absents :

- `accueil-hero.jpg` — visuel principal de la page d'accueil (carré, ~1000×1000 px)
- `espace-de-vie.jpg` — vue d'ensemble de la crèche (paysage, ~1200×900 px)
- `salle-de-jeux.jpg` — la grande salle de jeux (paysage, ~1200×900 px)
- `pedagogie.jpg` — un atelier ou un temps d'activité (paysage)
- `directrice.jpg` — portrait de Loane (carré, ~600×600 px)
- `vie-1.jpg` … `vie-8.jpg` — galerie « La vie à la crèche » (carrés, ~800×800 px)

## 🧭 Navigation

Menu à cinq entrées, aligné sur celui du Jardin des Merveilles :
**Accueil · À propos · Pédagogie · Tarifs · Contact / Préinscription**.

`les-ptits-nuages.html`, `bientot-disponible.html`, `mentions-legales.html` et `blog/` ne figurent
pas dans le menu principal : on y accède depuis le footer et depuis la section
« Notre petite famille ».

**Accueil** — quatre sections seulement : hero, « Découvrez notre univers » (les quatre pages),
« Notre petite famille » (Bordères + Ibos), « Avis de nos parents », « La vie à la crèche ».

## 🎨 Charte graphique

Source : `assets/images/charte-graphique.png`.

| Rôle | Variable CSS | Valeur |
|---|---|---|
| Fond principal | `--cream` | `#FFFBF2` |
| Corail (logo « Micro- ») | `--coral` / `--coral-dark` | `#E98E6E` / `#D9713F` |
| Jaune soleil (logo « Crèche ») | `--yellow` / `--yellow-dark` | `#F3BE44` / `#D9A021` |
| Vert tendre | `--green` / `--green-dark` | `#A9C68C` / `#7A9B5E` |
| Bleu ciel (rappel P'tits Nuages) | `--blue` / `--blue-dark` | `#9FC9D9` / `#5E96AC` |
| Rose poudré | `--pink` / `--pink-dark` | `#F0B9AC` / `#D98570` |
| Texte | `--text` / `--brown` | `#6B6157` / `#8A5A3B` |

## 🔗 Interconnexion des sites du réseau

- Ce site pointe vers **Le Jardin des Merveilles** (`https://www.micro-creche-borderes.fr/`) depuis
  la section « Notre petite famille » (accueil et page contact), logo à l'appui, et depuis le footer.
- Réciproquement, le site de Bordères doit pointer vers `https://www.micro-creche-tarbes.fr/`
  (aujourd'hui : `bientot-disponible.html` sur la carte « Tarbes » et dans son footer).

## 🚀 Déploiement GitHub Pages

1. Push sur la branche `main` — GitHub Pages est déjà activé (source `main` / `/ (root)`).
   Aperçu : <https://cazacomm.github.io/micro-creche-tarbes/>
2. **Une fois le domaine acheté** : créer un fichier `CNAME` à la racine contenant
   `www.micro-creche-tarbes.fr`, puis le renseigner dans **Settings → Pages → Custom domain**
   et cocher *Enforce HTTPS*
3. Chez le registrar, créer un enregistrement `CNAME` :
   `www` → `cazacomm.github.io`
   et pour le domaine apex, quatre enregistrements `A` vers
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

## 📝 Blog automatique

Le workflow `.github/workflows/blog-auto.yml` publie un article chaque lundi à 9h UTC.
Il nécessite le secret de dépôt **`OPENAI_API_KEY`** (Settings → Secrets and variables → Actions).
Les sujets et les règles éditoriales sont dans `BLOG_WORKFLOW.md`, les faits dans `blog-config.json`.

## 📞 Contact technique

Site conçu par **Caza Comm** — [cazacomm.fr](https://www.cazacomm.fr).
