import React, { PropsWithChildren } from 'react';

import { render, type RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore, type RootState } from '../store/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: ReturnType<typeof setupStore>;
}

const renderWithProviders = (
    ui: React.ReactElement,
    {
        preloadedState = {},
        // create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {}) => {
    
    const Wrapper = ({ children }: PropsWithChildren<{}>) => {
        return <Provider store={store}>{children}</Provider>;
    }
    
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions })}
}

export default renderWithProviders;