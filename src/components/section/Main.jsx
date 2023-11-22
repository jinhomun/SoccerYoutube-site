import React from 'react'

import ScrollTo from '../../utils/scrollTo'

import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import { HelmetProvider, Helmet } from 'react-helmet-async'



const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | Soccer Youtube"
                defaultTitle="Soccer Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>

    )
}

export default Main