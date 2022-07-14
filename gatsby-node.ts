const path = require(`path`);

exports.createPages = async ({ graphql , actions, reporter } : any) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      directus {
        location {
          id
          location_text
          location_title
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading data`, result.errors);
    return;
  }

  const templatePath = path.resolve(`src/templates/location.tsx`);
  result.data.directus.location.forEach((node : any ) => {
    createPage({
      path: `/location/${node.id}`,
      component: templatePath,
      context: {
        item: node,
      },
      defer: true,
    });
  });
};
