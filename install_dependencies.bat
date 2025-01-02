@echo off
echo Installing dependencies...

:: Install Tailwind CSS as a dev dependency
echo Installing Tailwind CSS as a dev dependency...
npm install -D tailwindcss
echo install [ 1 / 6 ] done

:: Initialize Tailwind CSS
echo Initializing Tailwind CSS...
npx tailwindcss init
echo install [ 2 / 6 ] done

:: Install React Icons
echo Installing React Icons...
npm install react-icons --save
echo install [ 3 / 6 ] done

:: Install use-gesture and react-spring
echo Installing use-gesture and react-spring...
npm install @use-gesture/react react-spring
echo install [ 4 / 6 ] done

:: Install Slick Image Slider
echo Installing Slick Image Slider...
npm install react-slick --save
echo install [ 5 / 6 ] done

:: Install AOS
echo Installing AOS...
npm install aos --save
echo install [ 6 / 6 ] done

echo All dependencies have been installed successfully.
pause
