# Site — Micro-crèche Les P'tits Soleils (Tarbes, quartier de l'Arsenal)

Site vitrine statique de la **micro-crèche Les P'tits Soleils**, 60 rue Saint-Jean, 65000 Tarbes.
La structure exploite également la micro-crèche **Les P'tits Nuages** à la même adresse : le
branding mis en avant est toujours *Les P'tits Soleils*.

Nom de domaine cible : **www.micro-creche-tarbes.fr** (déjà déclaré dans le `CNAME`).

## ✨ Stack

- HTML5 statique — pas de framework, pas de build
- CSS custom (`css/style.css`), charte pastel « soleil »
- [Font Awesome 6.4](https://fontawesome.com/) via CDN
- Google Fonts : **Baloo 2** (titres) + **Nunito** (corps) + **Caveat** (accents manuscrits)
- JavaScript vanilla (menu mobile, apparition au scroll, injection du lien de pré-inscription)

Hébergement : **GitHub Pages**. Le site fonctionne aussi en local :

```bash
python3 -m http.server 8000   # → http://localhost:8000
```

## 📁 Structure

```
.
├── index.html                  # Accueil
├── la-creche.html              # Présentation de la structure, espaces, infos pratiques
├── pedagogie.html              # Valeurs, inspirations, adaptation
├── equipe.html                 # Direction et équipe
├── vie-a-la-creche.html        # Journée type, activités, lien avec les familles
├── tarifs.html                 # Forfaits, aides CAF, FAQ (JSON-LD FAQPage)
├── contact.html                # Coordonnées, carte, étapes d'inscription
├── les-ptits-nuages.html       # La seconde micro-crèche (même adresse, même équipe)
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
├── sitemap.xml · rss.xml · llms.txt · robots.txt · CNAME
└── favicon* · apple-touch-icon.png · android-chrome-*.png · site.webmanifest
```

## ⚠️ Placeholders à remplacer avant mise en ligne

Ces valeurs sont **provisoires** et doivent être confirmées par le client.

| Élément | Valeur actuelle | Où |
|---|---|---|
| Téléphone | `07 00 00 00 00` | toutes les pages, `llms.txt`, `blog-config.json` |
| E-mail | `contact@micro-creche-tarbes.fr` | toutes les pages, `llms.txt`, `blog-config.json` |
| Adresse | `60 rue Saint-Jean, 65000 Tarbes` | toutes les pages, JSON-LD, `llms.txt` |
| Coordonnées GPS | `43.2327 / 0.0799` (centre de Tarbes) | JSON-LD des pages Accueil et Contact |
| Lien de pré-inscription | plateforme du réseau (`mcdespyrenees.jdmapps.fr`) | `js/main.js`, constante `PREINSCRIPTION_URL` |
| Capacité | « micro-crèche de 12 places » | `la-creche.html` |
| Directrice | texte générique, sans prénom | `equipe.html` |
| Mentions légales | `[RAISON_SOCIALE]`, `[FORME_JURIDIQUE]`, `[ADRESSE_SIEGE]`, `[SIRET]`, `[NUMERO_TVA]`, `[DIRECTEUR_DE_PUBLICATION]`, `[CREDITS_PHOTOS]` | `mentions-legales.html` |
| Facebook | absent (seul Instagram est présent) | footer, `contact.html` |

> **Le lien de pré-inscription est centralisé** : une seule constante `PREINSCRIPTION_URL` en haut
> de `js/main.js` alimente tous les boutons `data-link="preinscription"` du site.

## 📸 Photos à fournir

À déposer dans `assets/images/` — les pages pointent déjà vers ces noms de fichiers et affichent
une icône de repli tant qu'ils sont absents :

- `accueil-hero.jpg` — visuel principal de la page d'accueil (carré, ~1000×1000 px)
- `espace-de-vie.jpg` — l'espace de vie (paysage, ~1200×900 px)
- `pedagogie.jpg` — un atelier ou un temps d'activité (paysage)
- `directrice.jpg` — portrait de la directrice (carré, ~600×600 px)
- `vie-1.jpg` … `vie-8.jpg` — galerie « La vie à la crèche » (carrés, ~800×800 px)

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
  la section « Notre petite famille » de l'accueil et depuis le footer.
- Réciproquement, le site de Bordères doit pointer vers `https://www.micro-creche-tarbes.fr/`
  (aujourd'hui : `bientot-disponible.html` sur la carte « Tarbes » et dans son footer).

## 🚀 Déploiement GitHub Pages

1. Push sur la branche `main`
2. **Settings → Pages** : source `main` / `/ (root)`
3. Renseigner le domaine personnalisé `www.micro-creche-tarbes.fr` et cocher *Enforce HTTPS*
4. Chez le registrar, créer un enregistrement `CNAME` :
   `www` → `cazacomm.github.io`
   et pour le domaine apex, quatre enregistrements `A` vers
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

## 📝 Blog automatique

Le workflow `.github/workflows/blog-auto.yml` publie un article chaque lundi à 9h UTC.
Il nécessite le secret de dépôt **`OPENAI_API_KEY`** (Settings → Secrets and variables → Actions).
Les sujets et les règles éditoriales sont dans `BLOG_WORKFLOW.md`, les faits dans `blog-config.json`.

## 📞 Contact technique

Site conçu par **Caza Comm** — [cazacomm.fr](https://www.cazacomm.fr).
