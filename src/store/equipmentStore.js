import { create } from 'zustand'

const useEquipmentStore = create((set) => ({
  modelGender: 'male', // male | female
  selectedEquipment: {
    clothing: null,
    footwear: null,
    firstLevel: {},
    secondLevel: {
      vest: null,
      molleItems: {}
    },
    head: {},
    accessories: {}
  },
  loadoutHistory: [],
  
  setModelGender: (gender) => set({ modelGender: gender }),
  
  setEquipment: (category, item) => set((state) => ({
    selectedEquipment: {
      ...state.selectedEquipment,
      [category]: item
    }
  })),
  
  setMolleItem: (vestId, slotId, item) => set((state) => ({
    selectedEquipment: {
      ...state.selectedEquipment,
      secondLevel: {
        ...state.selectedEquipment.secondLevel,
        molleItems: {
          ...state.selectedEquipment.secondLevel.molleItems,
          [`${vestId}-${slotId}`]: item
        }
      }
    }
  })),
  
  removeMolleItem: (vestId, slotId) => set((state) => {
    const molleItems = { ...state.selectedEquipment.secondLevel.molleItems }
    delete molleItems[`${vestId}-${slotId}`]
    return {
      selectedEquipment: {
        ...state.selectedEquipment,
        secondLevel: {
          ...state.selectedEquipment.secondLevel,
          molleItems
        }
      }
    }
  }),
  
  saveLoadout: (name) => set((state) => ({
    loadoutHistory: [
      ...state.loadoutHistory,
      { name, equipment: state.selectedEquipment, timestamp: new Date() }
    ]
  })),
  
  loadLoadout: (index) => set((state) => {
    const loadout = state.loadoutHistory[index]
    return { selectedEquipment: loadout.equipment }
  }),
  
  resetLoadout: () => set({
    selectedEquipment: {
      clothing: null,
      footwear: null,
      firstLevel: {},
      secondLevel: {
        vest: null,
        molleItems: {}
      },
      head: {},
      accessories: {}
    }
  })
}))

export default useEquipmentStore