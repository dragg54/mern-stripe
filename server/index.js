// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('sk_test_51MZnT6HXwt4BpIBQC26Z5Z4ujiT51tzc1QZF95eTENcL6MwfwvmCS6X5V1ERNVGzXaYwK409aG0QyCt6FVGOaqt9002ssFDb8A');
const express = require('express')
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

app.post("/payment", (req, res)=>{
  const {product, token} = req.body

  return stripe.customers.create({
    email: token.email,
    id: token.id 
  }).then((customer)=>{
    stripe.charges.create({
      amount: product.price,
      currency: "usd",
      customer: customer.id,
      description: `purchase of ${product.name}`
    }).then((res)=>{
      res.status(200).send(res)
    }).catch((err)=>{
      console.log(err)
      res.sendStatus(500)
    })
  })
})

app.listen(4242, () => console.log('Running on port 4242'));