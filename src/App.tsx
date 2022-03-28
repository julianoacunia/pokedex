import React from 'react';
import Routes from './components/routes';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { Helmet } from 'react-helmet';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// TODO: import color from index.css, for some reason it is not working here.
const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      {/* <Helmet>
          <meta charSet="utf-8" />
          <meta property="og:title" content="Qira - Ventas de productos agronomicos" />
          <meta property="og:description" content="Paginas donde podras comprar productos para tu campo." />
          <meta property="og:image" content={window.location.href + '/seo/picture1.webp'} />
          <meta property="og:image:width" content="1080" />
          <meta property="og:image:height" content="600" />
        </Helmet> */}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </DndProvider>
  );
};

export default App;