export function Error({ errNum }: { errNum: number }) {
	const errorList = [
		{"id": 0, "msg": "No error message."},
		{"id": 404, "msg": "Page not Found."},
	];

	const triggeredError = errorList.find(error => error.id === errNum);

	if(triggeredError) {
		return (
			<div className="error-page">
				<h2 className="error-page-code">{triggeredError.id}</h2>
				<h3 className="error-page-msg">{triggeredError.msg}</h3>
			</div>
		);
	}

	return (
		<div className="error-page">
			<h2 className="error-page-code">0</h2>
			<h3 className="error-page-msg">Error Message Missing.</h3>
		</div>
	);
}