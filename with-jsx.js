const LoadJsxButton = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  if (isClicked)
    return (
      <div>
        <p>Loads Babel plugin ~ 2.9mb</p>
        <p>Loads react + react-dom ~ 143kb</p>
        <p>Total : 3.043 kb</p>
      </div>
    );

  return (
    <button className="btn btn-blue" onClick={() => setIsClicked(true)}>
      Click
    </button>
  );
};

const withJsxDomContainer = document.querySelector("#jsx");
ReactDOM.createRoot(withJsxDomContainer).render(<LoadJsxButton />);
