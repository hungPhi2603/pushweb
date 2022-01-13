if ('serviceWorker' in navigator) {
    send().catch(err => console.error(err))
  }

  async function send() {
    console.log('Registering service worker...')
    const register =  await navigator.serviceWorker.register('/worker.js', {
      scope: '/'
    })
    console.log('Service worker registered...')

    console.log('Registering push...')
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BMsisg8H9hmlTX36zDAbOVgDN0V-4SwZgqV9Nr64qsdeB6vw8S7J3b4qaUXMsntgpALvq_wACg9s08LeiOn8unw'
    })
    console.log('Push registered...')

    console.log('Sending push...', JSON.stringify(subscription))
    // await app.$axios.post(`${process.env.BASE_URL_API}/my/notifications/subscribe`, JSON.stringify(subscription))
    console.log('Push sent...')
  }