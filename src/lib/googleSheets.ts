import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "./sheetsCred.json";
import { unverifiedTicketModel } from "@/models/unverifiedTicketModel";
class GSpread {
	async getSheet() {
		const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID);
		await doc.useServiceAccountAuth(creds);
		await doc.loadInfo();
		const sheet = doc.sheetsByIndex[0];
		return sheet;
	}

	async getRows() {
		const sheet = await this.getSheet();
		const rows = await sheet.getRows();
		const data = [];
		for (let row of rows) {
			data.push({
				Timestamp: row.Timestamp,
				"Email address": row["Email address"],
				"NAME (FULL NAME AS PER IC)": row["NAME (FULL NAME AS PER IC)"],
				"IC number": row["IC number"],
				"Phone Number": row["Phone Number"],
				Class: row.Class,
				Food: row.Food,
				"Payment Method": row["Payment Method"],
				"Account Name (FOR TNG ONLY)\nIf you are not using a TNG account with your own name, please provide the account name you are using.":
					row[
						"Account Name (FOR TNG ONLY)\nIf you are not using a TNG account with your own name, please provide the account name you are using."
					],
				"Payment Proof": row["Payment Proof"],
				AGREEMENT: row.AGREEMENT,
			} as unverifiedTicketModel);
		}
		return data;
	}

	async getTicket(email: string) {
		const rows = await this.getRows();
		const row = rows.find((row) => row["Email address"] === email);
		return row;
	}

	async markVerified(ic: string) {
		// const sheet = await this.getSheet();
		// const rows = await sheet.getRows();
		// const row = rows.find((row) => row["IC number"] === ic);
		// if (row) {
		// 	row.verified = "true";
		// 	await row.save();
		// 	return true;
		// }
		return true;
	}
}

export default GSpread;
