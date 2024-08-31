const selfsigned = require('selfsigned')
const fs = require('fs')

const attrs = [{ name: 'commonName', value: 'localhost' }]
const options = { days: 365 }

selfsigned.generate(attrs, options, (err, pems) => {
	if (err) {
		console.error(err)
		return
	}

	fs.writeFileSync('localhost.key', pems.private)
	fs.writeFileSync('localhost.crt', pems.cert)
	console.log('Certificates generated')
})
