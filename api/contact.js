import { promises as fs } from 'fs';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, company, message } = req.body;
      
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }

      const submission = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        company: company || null,
        message,
        createdAt: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        message: 'Contact form submitted successfully',
        id: submission.id
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}