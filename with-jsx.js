const LoadJsxButton = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  if (isClicked)
    return (
      <ul className="list-disc">
        <li>Loads Babel plugin ~ 2.9mb</li>
        <li>However this jsx under the hood is eventually gonna be compiled into React.createElement syntax by Babel only</li>
      </ul>
    );

  return (
    <button className="btn btn-blue" onClick={() => setIsClicked(true)}>
      Click
    </button>
  );
};

const withJsxDomContainer = document.querySelector("#jsx");
ReactDOM.createRoot(withJsxDomContainer).render(<LoadJsxButton />);
