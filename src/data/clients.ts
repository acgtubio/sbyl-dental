import { query } from '@solidjs/router';
import { SdClient } from '~/types/client';


// TODO: Implement API call
export const getClients = query(async () => {
	return [
		{
			id: "asdasd",
			firstname: "Adrian",
			lastname: "Tubio",
			balance: 0,
		},
		{
			id: "asdasdasdfa",
			firstname: "Christopher",
			lastname: "Gonzales",
			balance: 0,
		}
	] as SdClient[];
}, "clients");
