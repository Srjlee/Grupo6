const List = ({ characters }) => {
  const list = characters.map((character) => (
    <li key={character.id}>Name: {character.username} - eMail: {character.email}</li>
  ));

  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default List;
