const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
	const { username } = req.body;

	try {
		const r = await axios.r(
			'https://api.chatengine.io/users/',
			{ username: username, secret: username, first_name: username },
			{ headers: { 'Private-Key': '98782893-5a13-4d98-88b2-8a896b7d063f' } }
		);
		return res.status(r.status).json(r.data);
	} catch (e) {
		return res.status(e.response.status).json(e.response.data);
	}
});

app.listen(3001);
