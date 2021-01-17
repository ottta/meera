import Head from "next/head";

const PageIndex = () => {
    const metas = {
        title: "Meraki®",
        description: "Meraki is a bla bla bla...",
        url: "https://meraki-puce.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1482575832494-771f74bf6857?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
    };
    return (
        <>
            <Head>
                <title>{metas.title}</title>
                <meta name="description" content={metas.description} />
                <meta property="og:title" content={metas.title} />
                <meta property="og:description" content={metas.description} />
                <meta property="og:image" content={metas.image} />
                <meta property="og:url" content={metas.url} />
                <meta property="twitter:title" content={metas.title} />
                <meta
                    property="twitter:description"
                    content={metas.description}
                />
                <meta property="twitter:image" content={metas.image} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="og:site_name"
                    content="Indonesian Wedding, Inc."
                />
            </Head>
            <div
                style={{
                    height: "150vh",
                    width: "100%",
                    maxWidth: 1200,
                    margin: "0 auto",
                }}
            >
                Page Index
            </div>
        </>
    );
};

export default PageIndex;
