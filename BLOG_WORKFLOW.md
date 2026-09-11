# Workflow blog — Micro-crèche Les P'tits Soleils

Procédure de publication d'un nouvel article sur `www.micro-creche-tarbes.fr`.
Site statique HTML/CSS hébergé sur GitHub Pages : **aucun générateur, aucune build**.
Chaque article est une page HTML autonome.

---

## 1. Structure des fichiers

```
/blog/index.html                      → liste des articles
/blog/<slug>/index.html               → un article
/assets/blog.css                      → styles spécifiques au blog (complète css/style.css)
/sitemap.xml                          → à mettre à jour à chaque publication
/rss.xml                              → à mettre à jour à chaque publication
/llms.txt                             → à mettre à jour à chaque publication
/robots.txt                           → ne change plus (crawlers SEO + IA déjà autorisés)
```

**URL canonique du site : `https://www.micro-creche-tarbes.fr/`** (avec `www`, avec `https`). Toutes les URL absolues des balises `canonical`, Open Graph, JSON-LD,
sitemap et RSS doivent utiliser cette forme exacte.

**Slugs** : minuscules, tirets, sans accent, avec un ancrage local quand c'est pertinent.
Exemple : `micro-creche-ou-assistante-maternelle-tarbes`.
Les URL se terminent par un `/` (dossier + `index.html`), jamais par `.html`.

---

## 2. Publier un nouvel article

### Étape 1 — Créer la page

Dupliquer `/blog/micro-creche-ou-assistante-maternelle-tarbes/index.html` dans
`/blog/<nouveau-slug>/index.html`, puis remplacer :

- `<title>` (≈ 60 caractères max, avec la ville quand c'est naturel)
- `<meta name="description">` — **strictement moins de 155 caractères**
- `<link rel="canonical">` → nouvelle URL complète
- balises `og:title`, `og:description`, `og:url`
- balises `twitter:title`, `twitter:description`
- JSON-LD `Article` : `headline`, `description`, `datePublished`, `dateModified`, `mainEntityOfPage.@id`
- JSON-LD `BreadcrumbList` : 3ᵉ élément (`name` + `item`)
- JSON-LD `FAQPage` : les 5 questions/réponses
- le `<h1>` du hero, le fil d'ariane, la ligne de date, le corps de l'article et le bloc FAQ

> Les blocs header, menu mobile, décors SVG du hero, pré-footer CTA et footer se recopient **tels
> quels**, sans modification. Ne jamais toucher à `css/style.css`.

### Étape 2 — Référencer l'article dans `/blog/index.html`

Ajouter une carte `.post-card` **en haut** de la grille (ordre antéchronologique) :

```html
<a href="<slug>/" class="post-card">
  <span class="post-tag">Catégorie</span>
  <h3>Titre de l'article</h3>
  <div class="post-meta"><time datetime="AAAA-MM-JJ">JJ mois AAAA</time> · Lecture X min</div>
  <p class="post-excerpt">Résumé en une à deux phrases.</p>
  <span class="card-cta">Lire l'article <i class="fa-solid fa-arrow-right"></i></span>
</a>
```

### Étape 3 — Mettre à jour les fichiers de diffusion

1. **`sitemap.xml`** : ajouter un bloc `<url>` (`priority` 0.6, `changefreq` monthly) et passer le
   `lastmod` de `/blog/` à la date du jour.
2. **`rss.xml`** : ajouter un `<item>` en haut de la liste et mettre à jour `lastBuildDate`.
   Format de date RFC 822 : `Fri, 11 Sep 2026 09:00:00 +0200`.
3. **`llms.txt`** : ajouter la ligne de l'article dans la section « Blog ».

### Étape 4 — Vérifier avant de pousser

- [ ] Toutes les URL absolues sont en `https://www.micro-creche-tarbes.fr/...`
- [ ] `meta description` < 155 caractères
- [ ] Un seul `<h1>` par page, hiérarchie H2 / H3 respectée
- [ ] Les trois blocs JSON-LD passent le [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Les liens internes du blog sont **relatifs au dossier de l'article** (`../../index.html`, `../../contact.html`)
      — le blog est dans un sous-dossier et le site n'utilise aucun chemin absolu
- [ ] Le NAP est identique partout : *Les P'tits Soleils · 60 rue Saint-Jean, 65000 Tarbes · 07 00 00 00 00*
- [ ] Rendu mobile vérifié
- [ ] Après mise en ligne : soumettre l'URL dans la Google Search Console

---

## 3. Règles éditoriales

**Longueur** : 1200 à 1500 mots, plus une FAQ de 5 questions.

**Structure type** : chapô → 4 à 6 `H2` → `H3` en sous-parties → paragraphe de rattachement local
→ FAQ → CTA.

**Ancrage local** : citer Tarbes et le quartier de l'Arsenal, et selon le sujet Séméac, Aureilhan,
Odos, Laloubère, Bordères-sur-l'Échez ou l'agglomération tarbaise. Au moins une mention naturelle
du NAP par article.

**Les deux micro-crèches** : la structure exploite Les P'tits Soleils **et** Les P'tits Nuages à la
même adresse. Le branding mis en avant est **toujours Les P'tits Soleils**. Les P'tits Nuages ne se
mentionne qu'en passant, pour éviter que les familles ne se perdent — jamais comme une offre
concurrente ou distincte.

**Interdits absolus** — ne jamais écrire sans source validée par la direction :
- montants de tarifs, de participation familiale ou d'aides
- chiffres précis (taux, pourcentages, statistiques, effectifs autres que le nombre de places)
- noms de familles ou d'enfants accueillis
- textes réglementaires cités de mémoire (articles de loi, décrets, seuils CAF)
- dates de création, d'agrément ou d'ouverture

En cas de doute : rester qualitatif (« selon votre situation », « renseignez-vous auprès de votre
caisse ») et renvoyer vers la page Tarifs ou le contact direct.

**Ton** : bienveillant, concret, accessible. Vouvoiement des parents. Pas de jargon non expliqué.

**Optimisation GEO (moteurs de réponse IA)** : une question = une réponse autoportante dans la FAQ,
formulée pour pouvoir être citée hors contexte. Les faits vérifiables (adresse, horaires, âges,
nombre de places) doivent apparaître en clair dans le texte, pas seulement dans le JSON-LD.

**Rythme conseillé** : 1 à 2 articles par mois.

---

## 4. Douze sujets d'articles suggérés

| # | Sujet | Angle / intention de recherche |
|---|-------|-------------------------------|
| 1 | Micro-crèche ou assistante maternelle à Tarbes : comment choisir | Comparatif des modes de garde, intention « choix » — `micro-creche-ou-assistante-maternelle-tarbes` publié |
| 2 | Le déroulé d'une journée type à la micro-crèche, de 7h30 à 18h30 | Rassurer les parents, montrer le quotidien réel |
| 3 | L'adaptation en micro-crèche : bien préparer les premiers jours | Période de familiarisation, séparation, conseils aux parents |
| 4 | La motricité libre selon Emmi Pikler : ce que cela change au quotidien | Pilier pédagogique, complète la page Pédagogie |
| 5 | Montessori chez les tout-petits : ce que c'est vraiment (et ce que ce n'est pas) | Déconstruction des idées reçues, requête informationnelle forte |
| 6 | Quand commencer ses démarches de garde d'enfant à Tarbes | Calendrier d'anticipation, sans citer de délais chiffrés officiels |
| 7 | Le sommeil du tout-petit en collectivité : siestes, rituels et repères | Sujet à très forte recherche parentale |
| 8 | La diversification alimentaire vue depuis la crèche | Conseils pratiques + articulation maison / crèche |
| 9 | Les bienfaits de la petite structure : pourquoi le petit effectif change tout | Différenciation concurrentielle assumée |
| 10 | Sorties et activités avec un tout-petit à Tarbes et alentour | Contenu 100 % local, fort potentiel de partage |
| 11 | Langage et communication avant les premiers mots | Signes associés à la parole, babillage, accompagnement du langage |
| 12 | Les questions à poser lors d'une visite de micro-crèche | Checklist parents — excellent aimant à liens et à citations IA |

---

## 5. Commandes utiles

```bash
# Aperçu local
python3 -m http.server 8000
# → http://localhost:8000/blog/

# Génération automatique d'un article (nécessite OPENAI_API_KEY)
python3 scripts/generate-article.py --dry-run   # simulation
python3 scripts/generate-article.py             # publication du sujet suivant

# Publication
git add .
git commit -m "Blog : nouvel article <titre>"
git push origin main
```

GitHub Pages redéploie automatiquement après le push (compter quelques minutes).

Le workflow `.github/workflows/blog-auto.yml` publie également un article automatiquement chaque
lundi matin, à condition que le secret `OPENAI_API_KEY` soit défini dans les paramètres du dépôt.
