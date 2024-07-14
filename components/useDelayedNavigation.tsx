import { useBlur } from '@/contexts/BlurContext';
import { useRouter } from 'expo-router';

const useDelayedNavigation = (navigationDelay: number = 0, postNavigationDelay: number = 100) => {
  const { setVisible } = useBlur();
  const router = useRouter();

  const delayedNavigate = (href: string) => {
    console.log('delayedNavigate init')
    setVisible(false);

    setTimeout(() => {
        console.log('delayedNavigate pushed')
      router.push(href);

      setTimeout(() => {
        console.log('delayedNavigate pushed')
        setVisible(true);
      }, postNavigationDelay);
    }, navigationDelay);
  };

  return delayedNavigate;
};

export default useDelayedNavigation;
