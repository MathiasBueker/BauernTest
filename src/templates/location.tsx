import * as React from 'react';
import { Link } from 'gatsby';

const LocationsPage = (data : any) => {
  const item = data.pageContext.item;
  return (
    <main>
      <title>Location item</title>
      <h1>Location item</h1>
      <h2>{item.location_title}</h2>
      <Link to={`/locations/`}>zurück</Link>
      <div dangerouslySetInnerHTML={{ __html: item.location_text }}></div>
    </main>
  );
};

export default LocationsPage;
