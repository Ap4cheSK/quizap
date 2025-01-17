export function Error({ errNum }: { errNum: number }) {
	const errorList = [
		{"id": 0, "msg": "No error message."},
		{"id": 404, "msg": "Page not found."},
		{"id": 601, "msg": "Quiz data not found."},
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
			<h2 className="error-page-code">{errNum}</h2>
			<h3 className="error-page-msg">Error Message Missing.</h3>
		</div>
	);
}