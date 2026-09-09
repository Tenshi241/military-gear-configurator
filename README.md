# 🎖️ Military Gear Configurator - 3D Equipment Builder

**Una applicazione web interattiva per visualizzare e configurare equipaggiamento militare tattico su modelli umani 3D**

![Status](https://img.shields.io/badge/status-active%20development-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18.2-61dafb?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-r128-black?logo=three.js)

## 🎯 Descrizione

Military Gear Configurator è una web application innovativa che permette di:

✅ **Visualizzare equipaggiamento tattico** su modelli 3D maschili e femminili
✅ **Configurare loadout** completi di equipaggiamento militare
✅ **Sistema MOLLE modulare** per piazzare accessori su plate carrier e chest rig
✅ **Salvare e caricare** configurazioni personalizzate
✅ **Interfaccia intuitiva** con categorie organizzate
✅ **Visualizzazione 360°** e zoomabile del modello

## 🏗️ Architettura

```
┌──────────────────────────────────────────┐
│      Military Gear Configurator         │
├──────────────┬──────────────┬───────────┤
│ Equipment    │   3D Viewer  │  MOLLE    │
│ Panel        │   + Controls │  Editor   │
└──────────────┴──────────────┴───────────┘
      │               │            │
      ├──────────────→ Zustand Store ←──────────┤
      │     (Equipment State Management)        │
      └───────────────────────────────────────┘
```

### Stack Tecnologico

- **Frontend Framework**: React 18.2
- **3D Graphics**: Three.js + React Three Fiber
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Lucide React Icons

## 📂 Struttura del Progetto

```
military-gear-configurator/
├── src/
│   ├── components/
│   │   ├── Viewer3D.jsx           # Componente 3D con Three.js
│   │   ├── EquipmentPanel.jsx     # Pannello di selezione equipaggiamento
│   │   ├── ModelSelector.jsx      # Selezione genere modello
│   │   ├── MolleEditor.jsx        # Editor modulare MOLLE
│   │   └── LoadoutManager.jsx     # Gestione configurazioni salvate
│   ├── store/
│   │   └── equipmentStore.js      # Zustand store globale
│   ├── data/
│   │   └── equipment.js           # Database equipaggiamento
│   ├── App.jsx                    # Componente principale
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Stili globali
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Quick Start

### Prerequisiti
- Node.js >= 16.x
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/Tenshi241/military-gear-configurator.git
cd military-gear-configurator

# Installa dipendenze
npm install

# Avvia dev server
npm run dev
```

L'app si aprirà automaticamente su `http://localhost:3000`

### Build per Produzione

```bash
npm run build
npm run preview
```

## 🎮 Come Usare

### 1. Selezionare il Modello
Comincia scegliendo tra modello maschile o femminile dal pannello in basso.

### 2. Scegliere l'Equipaggiamento
Nel pannello sinistro, seleziona le categorie:
- 🎽 **Abbigliamento**: Uniformi, combat shirt, pantaloni
- 👢 **Calzature**: Stivali tattici e scarponi
- ⚙️ **Primo Livello**: Cinture, cinturoni, fondine
- 🦺 **Secondo Livello**: Plate carrier, chest rig
- ⛑️ **Elmetti**: Vari modelli di protezione testa
- 📦 **Accessori**: Radio, IFAK, pouch modulari

### 3. Configurare MOLLE
Se hai selezionato un plate carrier o chest rig:
1. Vai al pannello di destra "Configurazione"
2. Clicca su uno slot MOLLE
3. Seleziona un accessorio compatibile
4. L'articolo sarà aggiunto al gilet

### 4. Salvare Configurazioni
Nel pannello "Loadout Manager":
1. Inserisci il nome della configurazione
2. Clicca "Salva"
3. Visualizza la cronologia delle configurazioni salvate
4. Carica qualsiasi configurazione precedente

## 📊 Database Equipaggiamento

### Categorie Principali

#### 1. Abbigliamento
- **Uniformi**: MARPAT, Desert Camo, Multicam
- **Combat Shirt**: Tan, Black
- **Pattern**: Digital, Desert, Multicam

#### 2. Calzature
- **Assault Boots**: Stivali tattici da assalto
- **Hiking Boots**: Scarponi da trekking
- **Desert Boots**: Stivali da deserto

#### 3. Primo Livello (Waistline)
- **Inner Belt**: Cintura interna in nylon
- **Rigger Belt**: Cintura tattica con fibbia in plastica
- **Tactical Belt**: Cintura con fibbia metallica
- **Holsters**: SERPA, OWB
- **Magazine Pouches**: Triple e Double mag pouch

#### 4. Secondo Livello (Carrier Systems)
- **Plate Carrier**: Con 5 slot MOLLE
- **Chest Rig**: Con 4 slot MOLLE

#### 5. Elmetti
- **ACH Helmet**: Elmetto composito con slitta Norotos
- **FAST Helmet**: Elmetto FAST leggero
- **Ops-Core Bump**: Elmetto balistico
- **Accessori**: Montaggi NVG, torcia, copricaschi

#### 6. Accessori Modulari
- **Radio Pouch**: Per ricevitore radio
- **IFAK**: Pouch medico d'emergenza
- **Dump Pouch**: Per scarico rapido
- **Utility Pouch**: Generico modulare
- **Water Bottle Pouch**: Per idratazione

## 🧠 State Management (Zustand)

```javascript
// Struttura dello stato
{
  modelGender: 'male' | 'female',
  selectedEquipment: {
    clothing: { ...item },
    footwear: { ...item },
    firstLevel: { ...items },
    secondLevel: {
      vest: { ...item, molleSlots: [...] },
      molleItems: {
        'vest-id-slot-id': { ...item }
      }
    },
    head: { ...items },
    accessories: { ...items }
  },
  loadoutHistory: [
    { name: string, equipment: {...}, timestamp: Date }
  ]
}
```

### Azioni Disponibili

```javascript
// Cambiar genere modello
setModelGender('male' | 'female')

// Aggiungere equipaggiamento
setEquipment(category, item)

// Gestire slot MOLLE
setMolleItem(vestId, slotId, item)
removeMolleItem(vestId, slotId)

// Gestire loadout
saveLoadout(name)
loadLoadout(index)
resetLoadout()
```

## 🎨 Customizzazione

### Aggiungere Nuovo Equipaggiamento

Edita `src/data/equipment.js`:

```javascript
export const equipmentDatabase = {
  clothing: [
    {
      id: 'my_uniform',
      name: 'My Custom Uniform',
      category: 'mimetica',
      color: '#4a5f3f',
      pattern: 'custom',
      description: 'Descrizione uniforme'
    }
    // ... altri item
  ]
}
```

### Aggiungere Slot MOLLE

Nella definizione del vest in `equipment.js`:

```javascript
molleSlots: [
  { id: 'front-center', x: 50, y: 40, size: 'medium' },
  { id: 'custom-slot', x: 70, y: 50, size: 'small' }
]
```

## 🔄 Componenti Principali

### Viewer3D.jsx
Componente Three.js che renderizza il modello umano con:
- Rotazione automatica 360°
- Zoom e pan manuale
- Aggiornamento dinamico colori in base all'equipaggiamento
- Rendering plate carrier e accessori

### EquipmentPanel.jsx
Pannello sinistro con:
- Categorie espandibili/collassabili
- Visualizzazione preview colori
- Descrizioni equipaggiamento
- Selezione facile e intuitiva

### MolleEditor.jsx
Editor avanzato con:
- Griglia slot MOLLE
- Compatibilità items per dimensione
- Aggiunta/rimozione dinamica
- Feedback visivo in tempo reale

### LoadoutManager.jsx
Gestione configurazioni:
- Salvataggio con nome custom
- Cronologia illimitata
- Caricamento rapido
- Reset con un click

## 🚧 Roadmap Futuro

### Prossime Versioni
- [ ] **Modelli 3D Avanzati**: Skinning e animazioni migliori
- [ ] **Export**: Salva screenshot della configurazione
- [ ] **Condivisione**: Genera link per condividere loadout
- [ ] **Database Esteso**: Centinaia di item reali
- [ ] **Filtri Avanzati**: Per brand, prezzo, nazione
- [ ] **Comparativa**: Visualizza 2 loadout affianco
- [ ] **Peso Totale**: Calcolo dinamico del peso
- [ ] **Mobile Responsive**: Versione mobile/tablet
- [ ] **API Backend**: Per sincronizzazione cloud
- [ ] **Community**: Condivisione loadout pubblici

## 🤝 Contribuire

Contributi sono benvenuti! Per contribuire:

1. **Fork** il repository
2. Crea un **branch feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit** i tuoi cambiamenti (`git commit -m 'Add some AmazingFeature'`)
4. **Push** al branch (`git push origin feature/AmazingFeature`)
5. Apri una **Pull Request**

### Linee Guida
- Mantieni la struttura dei componenti
- Aggiungi descrizioni nel codice
- Aggiorna la documentazione se necessario
- Testa su modelli sia maschili che femminili

## 📝 Licenza

Questo progetto è licenziato sotto la [MIT License](LICENSE) - vedi il file LICENSE per dettagli.

## 👤 Autore

**Tenshi241**
- GitHub: [@Tenshi241](https://github.com/Tenshi241)

## 💬 Feedback

Hai suggerimenti o trovato un bug? [Apri un issue](https://github.com/Tenshi241/military-gear-configurator/issues)

## 📚 Risorse Utili

- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">

**Made with ❤️ for military gear enthusiasts**

[⬆ Torna su](#-military-gear-configurator---3d-equipment-builder)

</div>
