import Head from "next/head";

type metaProps = {
  title: string;
  description: string;
  keywords: string;
};

const Meta = ({ title, keywords, description }: metaProps) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Thet Paing Soe" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Apple TV+ - Apple",
  description:
    "Apple TV+ features critically acclaimed Apple Original shows and movies. Watch on the Apple TV app across devices.",
  keywords: "apple tv plus",
};

export default Meta;
