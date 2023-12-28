import $ from "../index";

type loginDataTypes = {
	email: string;
	password: string;
};

type ResponsTypes = Promise<{
	error: boolean;
	serverResponse: {
		[key: string]: any;
	};
}>;

export function registerAPI(data: any): ResponsTypes {
	// console.log('look i got here');
	return $({
		url: "/auth/register",
		method: "post",
		data: data,
	});
}


export function loginAPI(data: loginDataTypes): ResponsTypes {
	// console.log('look i got here');
	return $({
		url: "",
		method: "post",
		data: data,
	});
}