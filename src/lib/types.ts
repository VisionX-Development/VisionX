/** Session-Typ (wird später durch Auth-Library ergänzt) */
export interface Session {
	user: {
		name?: string | null;
		email?: string | null;
		role?: string;
	};
}
