import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [taches, setTaches] = useState([
    { id: 1, texte: 'Learn React', terminee: false },
    { id: 2, texte: 'Build an app', terminee: false },
  ]);
  const [editingTache, setEditingTache] = useState(null);

  //Add 
  const ajouterTache = (texte) => {
    setTaches([...taches, { id: Date.now(), texte, terminee: false }]);
  };

  //Edit
  const demarrerEdition = (tache) => {
    setEditingTache(tache);
  };

  //Edit: save changes
  const sauvegarderEdition = (id, nouveauTexte) => {
    setTaches(taches.map((t) => (t.id === id ? { ...t, texte: nouveauTexte } : t)));
    setEditingTache(null);
  };

  const annulerEdition = () => setEditingTache(null);

  //Toggle done 
  const changerEtat = (id) => {
    setTaches(taches.map((t) => (t.id === id ? { ...t, terminee: !t.terminee } : t)));
  };

  //Delete
  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  const done = taches.filter((t) => t.terminee).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">

        {/* ── Header ── */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
             Todo List
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            {done} / {taches.length} tâches terminées
          </p>
          {/* Progress bar */}
          <div className="mt-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-violet-500 rounded-full transition-all duration-500"
              style={{ width: taches.length ? `${(done / taches.length) * 100}%` : '0%' }}
            />
          </div>
        </div>

        {/*Add / Edit Form*/}
        <TodoForm
          ajouterTache={ajouterTache}
          editingTache={editingTache}
          sauvegarderEdition={sauvegarderEdition}
          annulerEdition={annulerEdition}
        />

        {/*Task List*/}
        <TodoList
          taches={taches}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
          demarrerEdition={demarrerEdition}
        />

        {taches.length === 0 && (
          <p className="text-center text-gray-400 mt-10 text-sm">
            Aucune tâche pour l'instant.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;