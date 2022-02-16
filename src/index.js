import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from '@emotion/css';
import { Global } from '@emotion/react';
import createCache from '@emotion/cache';
import { CacheProvider } from "@emotion/react";
import { App } from "./components/app";
 import { GlobalStyled } from "./global-styles";

import './global-styles';


const emotionCache = createCache({
    key: 'jewelry-shop',
    ...(process.env.NODE_ENV === 'development' && { stylisPlugins: [] }),
});

const Main = (
    <CacheProvider value={emotionCache}>
        <GlobalStyled />
        <App />
    </CacheProvider>
)


ReactDOM.render(
    Main,
    document.getElementById("root")
)