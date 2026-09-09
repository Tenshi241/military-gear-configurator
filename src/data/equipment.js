export const equipmentDatabase = {
  clothing: [
    {
      id: 'marpat',
      name: 'MARPAT Uniform',
      category: 'mimetica',
      color: '#4a5f3f',
      pattern: 'digital',
      description: 'Uniforme tattica digitale MARPAT'
    },
    {
      id: 'desert',
      name: 'Desert Camo',
      category: 'mimetica',
      color: '#c9a876',
      pattern: 'desert',
      description: 'Mimetica desertica'
    },
    {
      id: 'multicam',
      name: 'Multicam',
      category: 'mimetica',
      color: '#6b8e3f',
      pattern: 'multicam',
      description: 'Mimetica Multicam universale'
    },
    {
      id: 'combat_shirt_tan',
      name: 'Combat Shirt Tan',
      category: 'combat_shirt',
      color: '#d4a574',
      description: 'Combat shirt tattica colore tan'
    },
    {
      id: 'combat_shirt_black',
      name: 'Combat Shirt Black',
      category: 'combat_shirt',
      color: '#1a1a1a',
      description: 'Combat shirt tattica colore nero'
    }
  ],
  
  footwear: [
    {
      id: 'assault_boots',
      name: 'Assault Boots',
      color: '#2a2a2a',
      type: 'tactical',
      description: 'Stivali tattici da assalto'
    },
    {
      id: 'hiking_boots',
      name: 'Hiking Boots',
      color: '#5c4c3f',
      type: 'tactical',
      description: 'Scarponi tattici da trekking'
    },
    {
      id: 'desert_boots',
      name: 'Desert Boots',
      color: '#c9a876',
      type: 'tactical',
      description: 'Stivali tattici da deserto'
    }
  ],
  
  firstLevel: [
    {
      id: 'inner_belt',
      name: 'Inner Belt',
      type: 'belt',
      width: 40,
      material: 'nylon',
      description: 'Cintura interna in nylon'
    },
    {
      id: 'rigger_belt',
      name: 'Rigger Belt',
      type: 'belt',
      width: 50,
      material: 'nylon',
      buckle: 'plastic',
      description: 'Cintura tattica Rigger con fibbia in plastica'
    },
    {
      id: 'tactical_belt',
      name: 'Tactical Belt',
      type: 'belt',
      width: 45,
      material: 'nylon',
      buckle: 'metal',
      description: 'Cintura tattica con fibbia metallica'
    }
  ],
  
  holsters: [
    {
      id: 'serpa_holster',
      name: 'SERPA Holster',
      type: 'holster',
      mounting: 'belt',
      retention: 'active',
      description: 'Fondina SERPA con sistema di ritenuta attiva'
    },
    {
      id: 'owb_holster',
      name: 'OWB Holster',
      type: 'holster',
      mounting: 'belt',
      retention: 'passive',
      description: 'Fondina esterna over-the-belt'
    }
  ],
  
  magazine_pouches: [
    {
      id: 'triple_mag_pouch',
      name: 'Triple Mag Pouch',
      type: 'magazine_pouch',
      capacity: 3,
      molle: true,
      description: 'Porta caricatori triplo MOLLE'
    },
    {
      id: 'double_mag_pouch',
      name: 'Double Mag Pouch',
      type: 'magazine_pouch',
      capacity: 2,
      molle: true,
      description: 'Porta caricatori doppio MOLLE'
    }
  ],
  
  vests: [
    {
      id: 'plate_carrier_slick',
      name: 'Plate Carrier Slick',
      type: 'plate_carrier',
      molleSlots: [
        { id: 'front-center', x: 50, y: 40, size: 'medium' },
        { id: 'front-left', x: 30, y: 40, size: 'small' },
        { id: 'front-right', x: 70, y: 40, size: 'small' },
        { id: 'shoulder-left', x: 20, y: 20, size: 'small' },
        { id: 'shoulder-right', x: 80, y: 20, size: 'small' }
      ],
      color: '#3a3a3a',
      description: 'Plate carrier semplice con slot MOLLE'
    },
    {
      id: 'chest_rig',
      name: 'Chest Rig',
      type: 'chest_rig',
      molleSlots: [
        { id: 'chest-1', x: 35, y: 45, size: 'medium' },
        { id: 'chest-2', x: 65, y: 45, size: 'medium' },
        { id: 'chest-3', x: 35, y: 65, size: 'medium' },
        { id: 'chest-4', x: 65, y: 65, size: 'medium' }
      ],
      color: '#2a2a2a',
      description: 'Chest rig tattico con 4 slot MOLLE'
    }
  ],
  
  helmets: [
    {
      id: 'ach_helmet',
      name: 'ACH Helmet',
      type: 'helmet',
      color: '#4a5f3f',
      material: 'composite',
      norotos: true,
      description: 'Elmetto tattico ACH con slitta Norotos'
    },
    {
      id: 'fast_helmet',
      name: 'FAST Helmet',
      type: 'helmet',
      color: '#3a3a3a',
      material: 'composite',
      norotos: true,
      description: 'Elmetto FAST tattico leggero'
    },
    {
      id: 'ops_core',
      name: 'Ops-Core Bump',
      type: 'helmet',
      color: '#2a2a2a',
      material: 'composite',
      norotos: true,
      description: 'Elmetto Ops-Core balistico'
    }
  ],
  
  helmet_accessories: [
    {
      id: 'anvis_mount',
      name: 'ANVIS Mount',
      type: 'night_vision_mount',
      description: 'Supporto per visore notturno ANVIS'
    },
    {
      id: 'flashlight_mount',
      name: 'Flashlight Mount',
      type: 'flashlight_mount',
      description: 'Supporto per torcia tattica'
    },
    {
      id: 'helmet_cover',
      name: 'Helmet Cover',
      type: 'helmet_cover',
      color: '#4a5f3f',
      description: 'Copricasco mimetico'
    }
  ],
  
  caps: [
    {
      id: 'baseball_cap',
      name: 'Baseball Cap',
      type: 'cap',
      color: '#3a3a3a',
      description: 'Berretto da baseball tattico'
    },
    {
      id: 'boonie_hat',
      name: 'Boonie Hat',
      type: 'boonie',
      color: '#4a5f3f',
      description: 'Cappello boonie mimetico'
    }
  ],
  
  accessories: [
    {
      id: 'radio_pouch',
      name: 'Radio Pouch',
      type: 'radio',
      molle: true,
      description: 'Pouch per ricevitore radio tattico'
    },
    {
      id: 'ifak_pouch',
      name: 'IFAK Pouch',
      type: 'medical',
      molle: true,
      description: 'Pouch medico d\'emergenza individuale'
    },
    {
      id: 'dump_pouch',
      name: 'Dump Pouch',
      type: 'dump_pouch',
      molle: true,
      description: 'Pouch per lo scarico rapido di rifiuti'
    },
    {
      id: 'utility_pouch',
      name: 'Utility Pouch',
      type: 'utility',
      molle: true,
      description: 'Pouch di utilità modulare'
    },
    {
      id: 'water_bottle_pouch',
      name: 'Water Bottle Pouch',
      type: 'hydration',
      molle: true,
      description: 'Pouch per bottiglia d\'acqua'
    }
  ]
}

export const getMolleCompatibleItems = (size) => {
  const itemSizes = {
    small: ['radio_pouch', 'utility_pouch'],
    medium: ['ifak_pouch', 'dump_pouch', 'water_bottle_pouch'],
    large: ['triple_mag_pouch']
  }
  return itemSizes[size] || []
}