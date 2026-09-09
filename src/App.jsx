import React, { Suspense } from 'react'
import Viewer3D from './components/Viewer3D'
import ModelSelector from './components/ModelSelector'
import EquipmentPanel from './components/EquipmentPanel'
import MolleEditor from './components/MolleEditor'
import LoadoutManager from './components/LoadoutManager'

function App() {
  return (
    <div className="w-screen h-screen bg-military-dark flex">
      {/* Left Panel - Equipment Selection */}
      <EquipmentPanel />

      {/* Center - 3D Viewer */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-400">Caricamento modello...</div>}>
            <Viewer3D />
          </Suspense>
        </div>

        {/* Bottom Controls */}
        <div className="bg-military-gray border-t border-military-accent/30 p-4">
          <ModelSelector />
        </div>
      </div>

      {/* Right Panel - Details & MOLLE Editor */}
      <div className="w-96 bg-military-gray border-l border-military-accent/30 overflow-y-auto">
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-bold text-military-accent">Configurazione</h2>
          <MolleEditor />
          <LoadoutManager />
        </div>
      </div>
    </div>
  )
}

export default App