const SingleCard = ({ item }) => {
  if (!item) return <p>fejl...</p>;
  return (
    <div>
      <h1>hallo</h1>
      <h1>{item.id}</h1>
      <h1>{item.name}</h1>
    </div>
  );
};

export default SingleCard;
