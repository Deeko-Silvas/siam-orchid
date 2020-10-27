import React, {useState, useEffect} from 'react';
import WebsiteDetails from './websiteDetails';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Route from './components/pages/route';
import Home from './components/pages/home';
import Food from './components/pages/food';
import Gallery from './components/pages/gallery';
import Contact from './components/pages/contact';

import './app.css';

const App  = () => {
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })




  return (
    <div>
      <Header 
        logo={WebsiteDetails.details.logo}
        name={WebsiteDetails.details.name}
        phone={WebsiteDetails.contact.phone}
        pages={WebsiteDetails.details.pages}
      />
      <main>
        <div className="wrapper">
          <Route path="/">
            <Home WebsiteDetails={WebsiteDetails} />
          </Route>
          <Route path="/food">
            <Food 
              name={WebsiteDetails.details.name}
              hero={WebsiteDetails.foodHeroImage}
              food={WebsiteDetails.food}
              menus={WebsiteDetails.menus} 
              setMenu={WebsiteDetails.setMenu} 
            />
          </Route>
          <Route path="/gallery">
            <Gallery WebsiteDetails={WebsiteDetails} />
          </Route>
          <Route path="/contact">
            <Contact WebsiteDetails={WebsiteDetails} />
          </Route>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
