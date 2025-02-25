const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <div className="toolbar">
      {filters.map((item) => (
        <button
          key={item}
          className={`btn-toolbar ${item === selected ? "btn-active" : "btn-noactive"}`}
          onClick={() => onSelectFilter(item)}
        >
          {item}
        </button>
        )
      )}
    </div>
  );
}

export default Toolbar;