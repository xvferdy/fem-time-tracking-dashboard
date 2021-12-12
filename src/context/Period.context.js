import React, { createContext, useReducer } from "react";
import periodReducer from "./Period.reducer";

// context
export const PeriodContext = createContext();
export const DispatchPeriodContext = createContext();

// context provider
const initialPeriod = "weekly";
export function PeriodProvider({ children }) {
	const [period, dispatch] = useReducer(periodReducer, initialPeriod);

	return (
		<PeriodContext.Provider value={period}>
			<DispatchPeriodContext.Provider value={dispatch}>
				{children}
			</DispatchPeriodContext.Provider>
		</PeriodContext.Provider>
	);
}
