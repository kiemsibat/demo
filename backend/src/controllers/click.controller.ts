import { ClickService } from '../services/click.service';
import express from 'express';

export const clickedRouter = express.Router();

clickedRouter.get(
  '/click',
  async (req, res) => {
    const clicked = await ClickService.getClicked();
    res.json({ status: 'success', clicked });
  }
);

clickedRouter.post(
  '/click',
  async (req, res) => {
    await ClickService.click();
    res.json({ status: 'success' });
  }
);
