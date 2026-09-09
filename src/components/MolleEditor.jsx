import React, { useState } from 'react'
import { X } from 'lucide-react'
import useEquipmentStore from '../store/equipmentStore'
import { equipmentDatabase, getMolleCompatibleItems } from '../data/equipment'

const MolleEditor = () => {
  const selectedEquipment = useEquipmentStore((state) => state.selectedEquipment)
  const setMolleItem = useEquipmentStore((state) => state.setMolleItem)
  const removeMolleItem = useEquipmentStore((state) => state.removeMolleItem)
  const [selectedSlot, setSelectedSlot] = useState(null)

  const vest = selectedEquipment.secondLevel?.vest

  if (!vest || !vest.molleSlots) {
    return (
      <div className="p-4 text-gray-400 text-sm text-center">
        Seleziona un plate carrier o chest rig per modificare i slot MOLLE
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-military-gray p-4 rounded border border-military-accent/30">
        <h3 className="text-military-accent font-semibold mb-4">Configurazione MOLLE</h3>
        <div className="grid grid-cols-2 gap-3">
          {vest.molleSlots.map((slot) => {
            const itemKey = `${vest.id}-${slot.id}`
            const installedItem = selectedEquipment.secondLevel.molleItems?.[itemKey]
            const compatibleItems = getMolleCompatibleItems(slot.size)

            return (
              <div
                key={slot.id}
                className="p-3 border-2 border-military-accent/50 rounded hover:border-military-accent transition-all cursor-pointer"
                onClick={() => setSelectedSlot(slot)}
              >
                <p className="text-xs text-gray-400 mb-2">{slot.id}</p>
                {installedItem ? (
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-semibold text-military-accent">
                      {installedItem.name}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removeMolleItem(vest.id, slot.id)
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500">Vuoto</p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {selectedSlot && (
        <div className="bg-military-gray p-4 rounded border border-military-accent/30">
          <h4 className="text-military-accent font-semibold mb-3">Slot: {selectedSlot.id}</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {getMolleCompatibleItems(selectedSlot.size).map((itemId) => {
              const item = equipmentDatabase.accessories.find(a => a.id === itemId)
              return item ? (
                <button
                  key={itemId}
                  onClick={() => {
                    setMolleItem(vest.id, selectedSlot.id, item)
                    setSelectedSlot(null)
                  }}
                  className="w-full p-2 text-left bg-military-dark rounded hover:bg-military-accent/10 transition-colors text-sm"
                >
                  <p className="font-semibold text-military-accent">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </button>
              ) : null
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default MolleEditor