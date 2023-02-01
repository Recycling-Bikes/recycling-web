import { supabase } from "supabase/client";
import {create} from "zustand";
import { persist, devtools } from "zustand/middleware";

/* Recordatorio Colocar el estado del usuario para que se puede leer directamente */

export const formNovatosState = create(
  devtools(
    persist(
      (set, get) => ({

        quest: {},

        setQuest: (data) => {
          set({ quest: { ...data } });
        },

        clearQuest: () => {
          set(
            (state) => ({
              ...state,
              quest: {},
            }),
            true
          );
        },

        clearAll: () => {
          get().clearQuest();
        },

      }),
      { name: "FormNovatosData" }
    ),
    {
      anonymousActionType: "FormNovatosData",
      enabled: true,
      name: "FormNovatosData",
    }
  )
);

