import React from 'react'
import useEquipmentStore from '../store/equipmentStore'

const ModelSelector = () => {
  const modelGender = useEquipmentStore((state) => state.modelGender)
  const setModelGender = useEquipmentStore((state) => state.setModelGender)

  return (
    <div className="flex gap-4 items-center bg-military-gray p-4 rounded border border-military-accent/30">
      <span className="text-sm font-semibold text-gray-300">Modello:</span>
      <div className="flex gap-2">
        <button
          onClick={() => setModelGender('male')}
          className={`px-6 py-2 rounded border-2 font-semibold transition-all ${
            modelGender === 'male'
              ? 'border-military-accent bg-military-accent/20 text-military-accent'
              : 'border-military-accent/30 text-gray-300 hover:border-military-accent/60'
          }`}
        >
          ♂ Maschile
        </button>
        <button
          onClick={() => setModelGender('female')}
          className={`px-6 py-2 rounded border-2 font-semibold transition-all ${
            modelGender === 'female'
              ? 'border-military-accent bg-military-accent/20 text-military-accent'
              : 'border-military-accent/30 text-gray-300 hover:border-military-accent/60'
          }`}
        >
          ♀ Femminile
        </button>
      </div>
    </div>
  )
}

export default ModelSelector