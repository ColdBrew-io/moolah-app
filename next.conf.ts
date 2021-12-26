import dotenv from 'dotenv';

dotenv.config(); 

module.exports = {
    env: {
        NEXT_PUBLIC_BUDGETS_ENDPOINT: process.env.NEXT_PUBLIC_BUDGETS_ENDPOINT
    }
};