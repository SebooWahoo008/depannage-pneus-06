# PROCÉDURE POUR TESTER L'APPLICATION SUR MOBILE

Ce guide explique comment tester l'application sur votre téléphone mobile en utilisant la connexion WiFi.

## Prérequis

- Votre ordinateur et votre téléphone doivent être connectés au même réseau WiFi
- L'application doit être installée et configurée sur votre ordinateur

## Étapes à suivre

### 1. Obtenir l'adresse IP de votre ordinateur

Dans une invite de commande (PowerShell) :

```powershell
ipconfig | findstr "IPv4"
```

Vous obtiendrez une adresse IP semblable à celle-ci : `192.168.1.163`

### 2. Démarrer le serveur avec accès réseau

Arrêtez d'abord tous les processus Node.js en cours (si nécessaire) :

```powershell
taskkill /f /im node.exe
```

Puis démarrez le serveur en spécifiant explicitement l'hôte et le port :

```powershell
npx next dev --hostname 0.0.0.0 --port 3000
```

Vous verrez un message de confirmation avec :
- Local: http://localhost:3000
- Network: http://0.0.0.0:3000

### 3. Accéder à l'application depuis votre téléphone

Ouvrez le navigateur sur votre téléphone et entrez l'URL :

```
http://[ADRESSE_IP_DE_VOTRE_ORDINATEUR]:3000
```

Par exemple : `http://192.168.1.163:3000`

## Dépannage

Si vous ne parvenez pas à accéder à l'application :

1. **Vérifiez la connexion réseau** : Assurez-vous que votre téléphone et votre ordinateur sont sur le même réseau WiFi.

2. **Testez avec un serveur HTTP simple** :
   ```powershell
   npx http-server -p 8080
   ```
   Puis essayez d'accéder à `http://[ADRESSE_IP_DE_VOTRE_ORDINATEUR]:8080`

3. **Vérifiez les pare-feu** : Désactivez temporairement le pare-feu Windows ou créez une règle pour autoriser les connexions au port 3000.

4. **Utilisez l'option permanente** : Modifiez votre fichier package.json pour inclure l'option hostname :
   ```json
   "scripts": {
     "dev": "next dev --hostname 0.0.0.0"
   }
   ```
   Puis utilisez `npm run dev` 