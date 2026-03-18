function TodoList({ taches, changerEtat, supprimerTache, demarrerEdition }) {
  if (taches.length === 0) return null;

  return (
    <ul className="flex flex-col gap-3">
      {taches.map((tache) => (
        <li
          key={tache.id}
          className={`flex items-center gap-3 bg-white border rounded-2xl px-4 py-3.5
            shadow-sm transition-all duration-200 group
            ${tache.terminee ? 'border-gray-100 opacity-60' : 'border-gray-200 hover:border-violet-200 hover:shadow-md'}`}
        >
          {/* Checkbox */}
          <button
            onClick={() => changerEtat(tache.id)}
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
              transition-all duration-200
              ${tache.terminee
                ? 'bg-violet-500 border-violet-500 text-white'
                : 'border-gray-300 hover:border-violet-400'
              }`}
          >
            {tache.terminee && (
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          {/* Text */}
          <span className={`flex-1 text-sm text-gray-700 text-left transition-all duration-200
            ${tache.terminee ? 'line-through text-gray-400' : ''}`}>
            {tache.texte}
          </span>

          {/* Actions — visible on hover */}
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {/* Edit button */}
            <button
              onClick={() => demarrerEdition(tache)}
              title="Modifier"
              className="p-1.5 rounded-lg text-gray-400 hover:text-violet-600 hover:bg-violet-50 transition-colors duration-150"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5
                     m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>

            {/* Delete button */}
            <button
              onClick={() => supprimerTache(tache.id)}
              title="Supprimer"
              className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors duration-150"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7
                     m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;