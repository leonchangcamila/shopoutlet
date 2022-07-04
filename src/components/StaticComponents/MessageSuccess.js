import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSuccess = ({ purchaseID, text }) => {
	return (
		<Stack sx={{ width: "100%" }} spacing={2}>
			<Alert severity="success">
				{text} {purchaseID}
			</Alert>
		</Stack>
	);
};

export default MessageSuccess;