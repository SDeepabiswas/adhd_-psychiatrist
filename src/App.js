import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import SubscriptionPlans from "./components/SubscriptionPlans";
import Footer from "./components/Footer";
import ContactUs from "./components/contactform"
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Auth0Provider
    domain="dev-cgnlraldueb0l6yc.us.auth0.com"
    clientId="8EySSMwIF1KN7Q8E19WmLCA7icdRKA27"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Analytics />
  
      
      <Newsletter />
      <SubscriptionPlans />
      </Auth0Provider>
      {/* <ContactUs /> */}
      <Footer />
      
      </div>
  );
}

export default App;
