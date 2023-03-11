import './App.scss';

const App = () => {
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  const {id} = getParams();

  return (
    <div className='App'>
      {
        id === '1' &&
        <div className='title'>
          3월 캠페인<br/>
          "대면예배편"
        </div>
      }
      <img src={images[`${id}.png`]}/>
    </div>
  );
}

const importAll = (r) => {
  let images = {};
  r.keys().map(item => images[item.replace('./', '')] = r(item));
  return images;
}

const getParams = (url = window.location) => {
  let params = {};
  new URL(url).searchParams.forEach(function (val, key) {
    if (params[key] !== undefined) {
      if (!Array.isArray(params[key])) {
        params[key] = [params[key]];
      }
      params[key].push(val);
    } else {
      params[key] = val;
    }
  });
  return params;
}

export default App;
