const express = require('express');
const Web3 = require('web3');

const app = express();

// Connect to the local Ethereum node
const web3 = new Web3('http://localhost:8545'); // Use the correct RPC server address and port

// Define routes
app.get('/', (req, res) => {
    res.send('KYC Backend Server');
});

// Example route to add a customer to the blockchain
app.post('/addCustomer', async (req, res) => {
    const { name, dob, nationality, address } = req.body;

    // Call the addCustomer function in your smart contract
    // Note: Replace `contractAddress` and `contractABI` with your contract's address and ABI
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    await contract.methods.addCustomer(name, dob, nationality, address).send({ from: 'yourAccountAddress' });

    res.send('Customer added to the blockchain');
});

// Start the server
app.listen(3000, () => {
    console.log(`Server running on http://localhost:${3000}`);
});
const express = require('express');
const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccount = require(process.env.SERVICE_ACCOUNT_KEY_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Define your routes and other server logic here

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
app.post('/submit-kyc', (req, res) => {
    // Handle KYC form submission logic here
    res.send('KYC form submitted');
  });
