import React from 'react';
import { graphql, Link } from 'gatsby';

const Locations = ({ data }: any) => {
  const locations = data.directus.location;

  return (
    <div>
      <h1>Locations list</h1>
      <p>
        Detailpages created with the defer: true option
        <br></br>(Deferred Static Generation)
      </p>
      {locations.map((item :any) => (
        <div key={item.id}>
          <h2>
            {item.id} - {item.location_title}
          </h2>
          <Link to={`/location/${item.id}`}>more</Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    directus {
      location {
        id
        location_text
        location_title
      }
    }
  }
`;
export default Locations;
