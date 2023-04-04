export type TicketModel = {
	id: string;
	created_at: number;
	uid: string;
	name: string;
	class: string;
	email: string;
	phoneNumber: string;
	food: "Vegan" | "Non Vegan" | string;
	claimed: boolean;
	claimed_at?: number;
};
