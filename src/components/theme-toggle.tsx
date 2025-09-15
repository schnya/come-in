'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'system':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'ライトモード';
      case 'dark':
        return 'ダークモード';
      case 'system':
        return 'システム設定';
      default:
        return 'テーマ切り替え';
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </Button>
  );
}
