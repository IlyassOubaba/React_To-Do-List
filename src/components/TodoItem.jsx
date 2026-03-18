function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => changerEtat(tache.id)}
      />
      
        {tache.texte}
      
      <button onClick={() => supprimerTache(tache.id)}>X</button>
    </li>
  );
}

export default TodoItem;