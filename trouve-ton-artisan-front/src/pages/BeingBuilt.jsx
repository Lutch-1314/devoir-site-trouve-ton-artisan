import { Helmet } from "react-helmet-async";

const BeingBuilt = () => {
  return (
    <>
      <Helmet>
        <title>Page en construction - Trouve ton artisan</title>
        <meta name="description" content="Cette page est actuellement en cours de construction." />
      </Helmet>
      
      <section className="section default-container being-built">
        <h1>Page en construction...</h1>
        <p>Cette page sera bientôt disponible.</p>
      </section>
    </>
  );
};

export default BeingBuilt;