import React, { useState } from 'react'
import { Save, RotateCcw, Copy, Trash2 } from 'lucide-react'
import useEquipmentStore from '../store/equipmentStore'

const LoadoutManager = () => {
  const [loadoutName, setLoadoutName] = useState('')
  const loadoutHistory = useEquipmentStore((state) => state.loadoutHistory)
  const saveLoadout = useEquipmentStore((state) => state.saveLoadout)
  const loadLoadout = useEquipmentStore((state) => state.loadLoadout)
  const resetLoadout = useEquipmentStore((state) => state.resetLoadout)

  const handleSave = () => {
    if (loadoutName.trim()) {
      saveLoadout(loadoutName)
      setLoadoutName('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-military-gray p-4 rounded border border-military-accent/30">
        <h3 className="text-military-accent font-semibold mb-3">Salva Loadout</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={loadoutName}
            onChange={(e) => setLoadoutName(e.target.value)}
            placeholder="Nome della configurazione..."
            className="flex-1 bg-military-dark border border-military-accent/30 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-military-accent"
            onKeyPress={(e) => e.key === 'Enter' && handleSave()}
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-military-accent text-black rounded font-semibold hover:bg-military-accent/80 transition-colors flex items-center gap-2"
          >
            <Save size={18} />
          </button>
          <button
            onClick={resetLoadout}
            className="px-4 py-2 bg-red-900/30 text-red-300 rounded hover:bg-red-900/50 transition-colors flex items-center gap-2"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {loadoutHistory.length > 0 && (
        <div className="bg-military-gray p-4 rounded border border-military-accent/30">
          <h3 className="text-military-accent font-semibold mb-3">Configurazioni Salvate ({loadoutHistory.length})</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {loadoutHistory.map((loadout, index) => (
              <div key={index} className="p-2 bg-military-dark rounded flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-military-accent">{loadout.name}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(loadout.timestamp).toLocaleDateString('it-IT')}
                  </p>
                </div>
                <button
                  onClick={() => loadLoadout(index)}
                  className="px-3 py-1 text-xs bg-military-accent/20 text-military-accent rounded hover:bg-military-accent/40 transition-colors"
                >
                  Carica
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LoadoutManager