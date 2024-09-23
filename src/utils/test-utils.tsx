import React, { PropsWithChildren } from 'react';

import { render, type RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore, type RootState, type AppStore } from '../store/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: AppStore;
}

const renderWithProviders = (
    ui: React.ReactElement,
    extendedRenderOptions: ExtendedRenderOptions = {}
    ) => {

    const {
        preloadedState = {},
        // create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    } = extendedRenderOptions;
    
    const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
        return <Provider store={store}>{children}</Provider>;
    }
    
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions })}
}

export default renderWithProviders;