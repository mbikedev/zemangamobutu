# Configuration Email avec LWS

Guide rapide pour configurer l'envoi d'emails avec votre hébergement LWS.

## 📋 Ce dont vous avez besoin

- Votre email LWS: `info@mobutuzemanga.com`
- Le mot de passe de votre email (celui que vous utilisez pour vous connecter au webmail)
- Accès à votre panel LWS

## 🚀 Installation (5 minutes)

### Étape 1: Installer les dépendances

```bash
npm install nodemailer @react-email/render
npm install --save-dev @types/nodemailer
```

### Étape 2: Créer le fichier .env.local

Créez un fichier `.env.local` à la racine du projet:

```env
SMTP_HOST=smtp.lws.fr
SMTP_PORT=587
SMTP_USER=info@mobutuzemanga.com
SMTP_PASSWORD=votre_mot_de_passe_email
```

**Important:** Remplacez `votre_mot_de_passe_email` par le vrai mot de passe de votre email LWS.

### Étape 3: Activer l'API route

Ouvrez le fichier `app/api/contact/route.ts` et:

1. **Décommentez** la section "METHOD 4: Using LWS SMTP"
2. **Commentez** ou **supprimez** la section "TEMPORARY PLACEHOLDER" à la fin du fichier

Le code à décommenter commence par:
```typescript
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
...
```

### Étape 4: Tester

Redémarrez le serveur de développement:

```bash
# Arrêter le serveur (Ctrl+C)
# Puis redémarrer:
npm run dev
```

Testez le formulaire de contact sur: http://localhost:3000

## 📧 Paramètres SMTP LWS

LWS fournit plusieurs configurations SMTP possibles:

### Configuration 1 (Recommandée):
```
Host: smtp.lws.fr
Port: 587
Security: STARTTLS
```

### Configuration 2 (Alternative):
```
Host: mail.mobutuzemanga.com
Port: 587
Security: STARTTLS
```

### Configuration 3 (SSL):
```
Host: smtp.lws.fr
Port: 465
Security: SSL/TLS
```

Si la première configuration ne fonctionne pas, essayez les alternatives dans votre `.env.local`.

## 🔍 Trouver vos paramètres SMTP sur LWS

1. Connectez-vous à votre **Panel LWS**
2. Allez dans **Emails** → **Comptes email**
3. Cliquez sur votre email `info@mobutuzemanga.com`
4. Cherchez la section **Configuration** ou **Paramètres SMTP**
5. Notez les paramètres fournis

## ✅ Vérification de la configuration

Après avoir configuré, vérifiez que:

1. ✅ Les packages sont installés
   ```bash
   npm list nodemailer @react-email/render
   ```

2. ✅ Le fichier `.env.local` existe et contient vos identifiants
   ```bash
   cat .env.local
   ```

3. ✅ Le code dans `app/api/contact/route.ts` est décommenté

4. ✅ Le serveur est redémarré

## 🧪 Test de l'API

Testez l'API directement:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Utilisateur",
    "email": "test@example.com",
    "message": "Ceci est un message de test"
  }'
```

Vous devriez recevoir:
```json
{
  "success": true,
  "message": "Emails sent successfully"
}
```

## 🎯 Ce qui se passe quand quelqu'un soumet le formulaire

1. **Vous recevez** un email sur `info@mobutuzemanga.com` avec:
   - Le nom de la personne
   - Son email
   - Son message
   - Un bouton pour répondre directement

2. **L'expéditeur reçoit** un email de confirmation avec:
   - Votre logo et blason
   - Un message de remerciement
   - Vos coordonnées
   - Un lien vers votre site

## 🔒 Sécurité

### Protection du mot de passe

Le fichier `.env.local` est déjà dans `.gitignore`, donc votre mot de passe ne sera jamais envoyé sur GitHub.

### Vérification

```bash
# Vérifier que .env.local est ignoré
git status
# Il ne devrait PAS apparaître dans la liste
```

## 🐛 Résolution des problèmes

### Erreur: "Authentication failed"

**Cause:** Mot de passe incorrect ou compte verrouillé

**Solution:**
1. Vérifiez le mot de passe dans `.env.local`
2. Connectez-vous au webmail LWS pour vérifier que le compte fonctionne
3. Si nécessaire, réinitialisez le mot de passe via le panel LWS

### Erreur: "Connection timeout"

**Cause:** Port ou host incorrect

**Solutions:**
1. Essayez le port 465 au lieu de 587:
   ```env
   SMTP_PORT=465
   ```
   Et dans le code, changez `secure: false` en `secure: true`

2. Essayez l'host alternatif:
   ```env
   SMTP_HOST=mail.mobutuzemanga.com
   ```

### Erreur: "self signed certificate"

**Cause:** Problème de certificat SSL

**Solution:** Le code inclut déjà:
```typescript
tls: {
  rejectUnauthorized: false
}
```
C'est normal pour le développement. En production, demandez à LWS de vérifier leurs certificats SSL.

### Les emails ne sont pas reçus

1. **Vérifiez les spams** - Les premiers emails peuvent aller dans les spams
2. **Vérifiez les logs** - Regardez la console du serveur pour les erreurs
3. **Testez l'API** - Utilisez la commande curl ci-dessus
4. **Vérifiez les quotas** - LWS peut avoir des limites d'envoi

### Erreur 550: "Relay access denied"

**Cause:** Le serveur SMTP refuse l'envoi

**Solutions:**
1. Vérifiez que vous utilisez le bon email (info@mobutuzemanga.com)
2. Vérifiez que l'email est bien configuré sur LWS
3. Contactez le support LWS pour vérifier que l'envoi SMTP est activé

## 📊 Limites LWS

LWS impose généralement des limites d'envoi:
- **Emails/heure:** Environ 100-300 (varie selon l'offre)
- **Emails/jour:** Environ 500-1000 (varie selon l'offre)

Pour un site vitrine, c'est largement suffisant.

## 🔄 Intégration avec le formulaire de contact

Le formulaire dans `components/Contact.tsx` utilise actuellement Web3Forms.

### Option A: Garder Web3Forms + Ajouter les emails stylisés

Modifiez le `handleSubmit` dans `Contact.tsx`:

```typescript
async function handleSubmit(e: FormEvent) {
  e.preventDefault();
  if (formData.honeypot) return;

  setLoading(true);
  setError("");

  try {
    // 1. Envoyer via Web3Forms (comme avant)
    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '60703374-0885-4d4c-91be-907d9cf8423a',
        subject: 'Nouveau message depuis mobutuzemanga.com',
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    // 2. Envoyer via votre API (emails stylisés)
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await web3Response.json();
    if (data.success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    }
  } catch (err) {
    setError("Impossible d'envoyer le message.");
  } finally {
    setLoading(false);
  }
}
```

### Option B: Remplacer Web3Forms complètement

Remplacez tout le contenu de `handleSubmit`:

```typescript
async function handleSubmit(e: FormEvent) {
  e.preventDefault();
  if (formData.honeypot) return;

  setLoading(true);
  setError("");

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } else {
      setError(data.error || "Une erreur est survenue.");
    }
  } catch (err) {
    setError("Impossible d'envoyer le message.");
  } finally {
    setLoading(false);
  }
}
```

## 📞 Support LWS

Si vous rencontrez des problèmes avec les paramètres SMTP:
- **Support LWS:** https://aide.lws.fr
- **Téléphone:** +33 (0)1 77 62 30 03
- **Email:** support@lws.fr

## ✨ Personnalisation

Pour personnaliser les emails, éditez:
- **Templates:** `components/email/EmailTemplate.tsx`
- **Couleurs:** Modifier l'objet `colors` dans le fichier
- **Textes:** Modifier l'objet `config` dans le fichier

## 🚀 Déploiement

Lors du déploiement sur Netlify ou Vercel:

1. **Ajoutez les variables d'environnement** dans les paramètres du projet:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`

2. **Ne commitez JAMAIS** le fichier `.env.local`

3. **Testez** après le déploiement avec le formulaire de production

## 📚 Ressources

- [Documentation LWS Email](https://aide.lws.fr/a/242)
- [Nodemailer Documentation](https://nodemailer.com)
- [React Email](https://react.email)

---

**Besoin d'aide?** Contactez le support LWS ou référez-vous à la documentation dans `components/email/README.md`
