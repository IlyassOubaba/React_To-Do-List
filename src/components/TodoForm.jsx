import { useState, useEffect } from 'react';

function TodoForm({ ajouterTache, editingTache, sauvegarderEdition, annulerEdition }) {
  const [texte, setTexte] = useState('');
  const [erreur, setErreur] = useState('');

  // Pre-fill form when editing
  useEffect(() => {
    if (editingTache) {
      setTexte(editingTache.texte);
      setErreur('');
    } else {
      setTexte('');
    }
  }, [editingTache]);

  const handleSubmit = () => {
    //Validation: empty field
    if (!texte.trim()) {
      setErreur('⚠️ Le champ ne peut pas être vide.');
      return;
    }

    if (editingTache) {
      sauvegarderEdition(editingTache.id, texte.trim());
    } else {
      ajouterTache(texte.trim());
    }

    setTexte('');
    setErreur('');
  };

  const handleCancel = () => {
    setTexte('');
    setErreur('');
    annulerEdition();
  };

  const isEditing = !!editingTache;

  return (
    <div className={`bg-white rounded-2xl shadow-sm border p-5 mb-6 transition-all duration-300 ${
      isEditing ? 'border-violet-400 ring-2 ring-violet-100' : 'border-gray-200'
    }`}>
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
        {isEditing ? '✏️ Modifier la tâche' : ' Nouvelle tâche'}
      </h2>

      {/* Input */}
      <input
        type="text"
        value={texte}
        onChange={(e) => {
          setTexte(e.target.value);
          if (erreur) setErreur('');
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="Entrez une tâche..."
        className={`w-full px-4 py-2.5 rounded-xl border text-gray-800 text-sm placeholder-gray-300
          focus:outline-none focus:ring-2 transition-all duration-200
          ${erreur
            ? 'border-red-400 focus:ring-red-200 bg-red-50'
            : 'border-gray-200 focus:ring-violet-200 focus:border-violet-400'
          }`}
      />

      {/* Error message if field is empty*/}
      {erreur && (
        <p className="mt-2 text-xs text-red-500 font-medium">
          {erreur}
        </p>
      )}

      {/* Buttons */}
      <div className="flex gap-2 mt-3">
        <button
          onClick={handleSubmit}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 active:scale-95
            ${isEditing ? 'bg-violet-600 hover:bg-violet-700' : 'bg-gray-900 hover:bg-gray-700'}`}
        >
          {isEditing ? ' Sauvegarder' : '+ Ajouter'}
        </button>

        {isEditing && (
          <button
            onClick={handleCancel}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500
              bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all duration-200"
          >
            Annuler
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoForm;