import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import { IndexPage } from "./components/Pages";
import { BoostsPage } from "./components/Pages/boosts";
import { TaskPage } from "./components/Pages/task";
import { UpgradePage } from "./components/Pages/upgrade";
import { useExpand } from "@vkruglikov/react-telegram-web-app";

const TELEGRAM_BOT_TOKEN = '7120576382:AAGsW4orzPqYd8uTPcfETLh67-_3PChTA-A'; // Palitan ng iyong aktwal na bot token

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [maxPower, setMaxPower] = useState<number>(3000);
  const [click, setClick] = useState<number>(15);
  const [progress, setProgress] = useState<number>(15);
  const [currentPower, setCurrentPower] = useState<number>(0);
  const [isIncreasing, setIsIncreasing] = useState<boolean>(false);
  const [isExpanded, expand] = useExpand();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 8000); // Imitasyon ng 8 segundo na paglo-load
  }, []);

  const saveDataToTelegram = async () => {
    try {
      const res = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: 'your_chat_id', // Palitan ng chat ID kung saan mo gustong i-store ang data
        text: `Count: ${count}, Current Power: ${currentPower}` // Halimbawang data na itatago
      });

      console.log('Data saved to Telegram bot:', res.data);
    } catch (error) {
      console.error('Error saving data to Telegram bot:', error);
    }
  };

  const handleTelegramLogin = async () => {
    try {
      const res = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`);
      const botName = res.data.result.username;
      console.log(`Telegram Bot Name: ${botName}`);
      
      // Kung mayroon kang logic dito para sa pag-handle ng user data pagkatapos mag-login
      // Halimbawa, mag-redirect sa ibang page o i-update ang state
    } catch (error) {
      console.error('Error fetching Telegram bot details:', error);
    }
  };

  if (loading) {
    return <SplashPage />;
  }

  return (
    <Routes>
      {/* Siguraduhing lahat ng required props ay ibinibigay sa IndexPage component */}
      <Route index element={<IndexPage
        click={click}
        count={count}
        currentPower={currentPower}
        setCount={setCount}
        setCurrentPower={setCurrentPower}
        progress={progress}
        maxPower={maxPower}
        saveDataToTelegram={saveDataToTelegram} // Dito ibinibigay ang save function sa prop
      />} />
      <Route path="/boosts" element={<BoostsPage count={count} />} />
      <Route path="/task" element={<TaskPage />} />
      <Route path="/upgrade" element={<UpgradePage count={count} />} />
      <Route path="/login" element={<LoginPage handleTelegramLogin={handleTelegramLogin} />} />
    </Routes>
  );
};

const SplashPage = () => (
  <div>
    <h1>Loading...</h1>
    {/* Ilagay ang custom splash screen content dito */}
  </div>
);

const LoginPage = ({ handleTelegramLogin }: { handleTelegramLogin: () => void }) => (
  <div>
    <h1>Login with Telegram</h1>
    <button onClick={handleTelegramLogin}>Login with Telegram</button>
    {/* Ilagay ang iba pang UI elements para sa login */}
  </div>
);

export default App;
