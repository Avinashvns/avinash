import { configureStore } from '@reduxjs/toolkit';

// Example slice (aap apne needs ke hisab se badal sakte ho)
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Add other reducers here
  },
});
