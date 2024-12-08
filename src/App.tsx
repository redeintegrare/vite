import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSettings } from './providers/SettingsProvider';
import { AppRouting } from './routing';
import { PathnameProvider } from './providers';
import TestComponent from './components/TestComponent';

const App = () => {
  const { settings } = useSettings();

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add(settings.themeMode);
  }, [settings]);

  return (
    <BrowserRouter>
      <PathnameProvider>
        <div className="p-8">
          <TestComponent />
          <AppRouting />
        </div>
      </PathnameProvider>
    </BrowserRouter>
  );
};

export { App };
