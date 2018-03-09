<?php
/**
 * response structure for api
 */
function getResponse($data, $massage, $status, $error) {
	return ['data' => $data,
		'message' => $massage,
		'status' => $status,
		'error' => $error,
	];
}

function getErrorLog($e) {
	return [

		'messsage' => $e->getMessage(),
		'line' => $e->getLine(),
		'code' => $e->getCode(),
		'file' => $e->getFile(),
	];
}
