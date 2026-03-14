# CLAUDE.md — IGC Site Web

## Projet

Site vitrine d'**Immo Gestion Conseil inc. (IGC)** — gestion d'immeubles résidentiels au Québec (coopératives, OBNL, copropriétés, résidences pour aînés).

## Stack technique

- **Framework** : Next.js 16 (App Router) avec TypeScript
- **Styles** : Tailwind CSS 4 (via PostCSS)
- **Icônes** : lucide-react
- **Build** : `output: "standalone"` dans `next.config.ts`

## Structure

```
src/
  app/
    layout.tsx          # Layout racine (Header + Footer)
    page.tsx            # Accueil
    services/page.tsx
    a-propos/page.tsx
    contact/page.tsx
    politique-confidentialite/page.tsx
    globals.css
  components/
    Header.tsx
    Footer.tsx
```

## Commandes

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run start    # Serveur production
```

## Conventions

- Langue du site : **français** (lang="fr", locale fr_CA)
- Variables CSS custom IGC : `--igc-dark`, `--igc-darker`, `--igc-blue`, `--igc-blue-light`, `--igc-blue-dark`
- Classes Tailwind utilitaires : `bg-igc-dark`, `text-igc-blue`, etc.
- Routing : App Router Next.js, dossiers en kebab-case (ex: `politique-confidentialite`)
- Composants partagés dans `src/components/`

## Notes

- Le build a un bug préexistant sur `/_global-error` (Next.js internal), sans impact sur le site.
- Les fichiers `Politique confidentialite.html` et `Politique confidentialité.txt` à la racine sont les sources de référence pour la politique de confidentialité.
