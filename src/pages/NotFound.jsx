import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <section className="text-center p-8">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-6">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <Link to="/" className="text-blue-600 underline hover:text-blue-800">
        Go back to Home
      </Link>
    </section>
  </div>
);

export default NotFound;
