import Head from 'next/head'


function AboutPage() {
    console.log('[HomePage] render');
    return (
        <>
            <Head >
                <title>About - Gohome Blog</title>
            </Head>
          
            <main>
                <h1>About</h1>
            </main>
        </>

    )
}

export default AboutPage