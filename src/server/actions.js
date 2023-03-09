import HttpError from '@wasp/core/HttpError.js'
import Stripe from 'stripe'

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCharge = async (args, context) => {
    if (!context.user) { throw new HttpError(401) }

    const charge = await stripeInstance.charges.create({
        amount: 2000,
        currency: 'eur',
        source: 'tok_mastercard',
        description: 'This is a test charge!',
      })
}