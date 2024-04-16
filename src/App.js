// App.js
import React from 'react';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Welcome to Our Medical Store</h2>
                        <p>
                            We provide a wide range of medical products to meet your healthcare needs.
                            Explore our selection and find the right products for you.
                        </p>
                    </div>
                    
                </div>

                
                
                <div className="mt-5">
                    <h3>About Our Medical Store</h3>
                    <p>
                        At our medical store, we are dedicated to providing quality healthcare products
                        to our customers. With a focus on customer satisfaction, we strive to offer a
                        wide range of products to meet your medical needs.
                    </p>
                    <p>
                        Visit our store or browse our online catalog to explore our selection of
                        pharmaceuticals, medical supplies, and wellness products.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
