import * as React from 'react';

const SSRPage = ({ serverData } : any) => {
  
  React.useEffect(() => {
    import('edk-storybook');
  }, []);
  
  return(
   <main>
    <h1>SSR Page edk-button and dogs</h1>
    <div>
      <img alt='Happy dog' src={serverData.message} />
    </div>

    <edk-storybook buttonText='HELLO EDK-Button'>some light-dom</edk-storybook>
  </main>
  )
};

export default SSRPage;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
