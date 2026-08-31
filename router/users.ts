import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from the patient route', success: true });
});

router.get('/all', (req, res) => {
    res.status(200).json({ message: 'Hello from the patient route', success: true });
});

export default router;