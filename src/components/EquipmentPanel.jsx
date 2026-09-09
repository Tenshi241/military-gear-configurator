import React, { useState } from 'react'
import { ChevronDown, Plus, Trash2 } from 'lucide-react'
import useEquipmentStore from '../store/equipmentStore'
import { equipmentDatabase, getMolleCompatibleItems } from '../data/equipment'

const EquipmentPanel = () => {
  const [expandedCategory, setExpandedCategory] = useState('clothing')
  const selectedEquipment = useEquipmentStore((state) => state.selectedEquipment)
  const setEquipment = useEquipmentStore((state) => state.setEquipment)
  const setMolleItem = useEquipmentStore((state) => state.setMolleItem)
  const removeMolleItem = useEquipmentStore((state) => state.removeMolleItem)

  const categories = [
    { id: 'clothing', label: 'Abbigliamento', icon: '👕' },
    { id: 'footwear', label: 'Calzature', icon: '👢' },
    { id: 'firstLevel', label: 'Primo Livello', icon: '⛓️' },
    { id: 'secondLevel', label: 'Secondo Livello', icon: '🦺' },
    { id: 'helmets', label: 'Elmetti', icon: '⛑️' },
    { id: 'accessories', label: 'Accessori', icon: '📦' }
  ]

  const getCategoryData = (categoryId) => {
    return equipmentDatabase[categoryId] || []
  }

  return (
    <div className="w-full max-w-md bg-military-gray border-l border-military-accent/30 overflow-y-auto h-full">
      <div className="p-4 border-b border-military-accent/30">
        <h2 className="text-xl font-bold text-military-accent">Armadio Tattico</h2>
        <p className="text-gray-400 text-sm">Seleziona l'equipaggiamento</p>
      </div>

      {categories.map((category) => (
        <div key={category.id} className="border-b border-military-accent/20">
          <button
            onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-military-accent/10 transition-colors"
          >
            <span className="flex items-center gap-2">
              <span>{category.icon}</span>
              <span className="font-semibold">{category.label}</span>
            </span>
            <ChevronDown 
              size={20} 
              className={`transition-transform ${
                expandedCategory === category.id ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedCategory === category.id && (
            <div className="bg-military-dark/50 p-3 space-y-2">
              {getCategoryData(category.id).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setEquipment(category.id, item)}
                  className="w-full p-3 text-left rounded border border-military-accent/30 hover:border-military-accent hover:bg-military-accent/10 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.description}</p>
                    </div>
                    {item.color && (
                      <div 
                        className="w-6 h-6 rounded border border-gray-500 flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default EquipmentPanel