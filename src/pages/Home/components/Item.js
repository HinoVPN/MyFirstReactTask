const Item = ({id, note, date, time, deleteData, submittingState }) => {

    function deleteItem() {
        submittingState.current = true;
        deleteData(function(prev){
            return prev.filter(item => item.id !== id)
        })
    }
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">Remove</button>
    </div>
  );
};

export default Item;
