import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
  // Autres propriétés de l'état
  selectedPage: string | null; // Stocker l'URL de la page sélectionnée
}

const initialState: DashboardState = {
  // Initialiser l'état, par exemple :
  selectedPage: null, // Aucune page sélectionnée au départ
  // ...
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Autres actions de votre slice...

    // Action pour sélectionner une page
    selectPage: (state, action: PayloadAction<string>) => {
      // Mettre à jour la page sélectionnée dans l'état
      state.selectedPage = action.payload;
    },
  },
});

export const { selectPage } = dashboardSlice.actions;

export default dashboardSlice.reducer;