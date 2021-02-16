import './index.scss';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log('Service worker registerd!');
    })
    .catch((err) => {
      console.log(err);
    });
}

// notification
const notificationBtns = document.querySelectorAll<HTMLButtonElement>('.enable-notifications');

if ('Notification' in window) {
  notificationBtns.forEach((btn) => {
    btn.style.display = 'inline-block';
    btn.addEventListener('click', () => {
      if (Notification.permission !== 'granted') {
        askForNotificationPermission();
      } else {
        displayConfirmNotification();
      }
    });
  });
}

const askForNotificationPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission !== 'granted') {
      console.log(permission);
    } else {
      displayConfirmNotification();
    }
  });
};

const displayConfirmNotification = () => {
  const options: NotificationOptions = {
    body: 'You successfully subscribed to notification api!',
    icon: '/images/icons/app-icon-96x96.png',
    image: '/images/sf-boat.jpg', // content image
    dir: 'ltr', // direction, left to right
    lang: 'en-US', // BCP 47 lang
    vibrate: [100, 50, 200],
    badge: '/images/icons/app-icon-96x96.png',
    tag: 'confirm-notification',
    renotify: true,
    // actions: [
    //   { action: 'confirm', title: 'Okay', icon: '/images/icons/app-icon-96x96.png' },
    //   { action: 'cancel', title: 'Cancel', icon: '/images/icons/app-icon-96x96.png' },
    // ], // actions only working for service worker with chrome
  };

  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.ready
  //     .then((swreg) => {
  //       setTimeout(() => {
  //         swreg.showNotification('Successfully subscribed! (from SW)!', options);
  //       }, 3000);
  //     })
  //     .catch((err) => {
  //       console.log('...not support service worker notification, fall back to web notification api...'); // safari not support this now
  //       new Notification('Successfully subscribed!', options);
  //     });
  // } else {
  //   const notification = new Notification('Successfully subscribed!', options);
  //   notification.addEventListener('click', () => {
  //     window.open('http://localhost:8080');
  //   });
  // }

  setTimeout(() => {
    const notification = new Notification('Successfully subscribed!', options);
    notification.addEventListener('click', () => {
      window.open('http://localhost:8080');
    });
  }, 3000);
};
