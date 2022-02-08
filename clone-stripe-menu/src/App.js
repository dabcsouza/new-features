import React from 'react';
import Layout from './Components/Layout';
import GlobalStyles from './Components/styles/GlobalStyles';
import Navbar from './Components/NavBar';

function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>
      <GlobalStyles />
    </>
  );
};

export default App;
