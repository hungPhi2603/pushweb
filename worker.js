console.log('Service worker loaded...')

self.addEventListener('push', e => {
  const data = e.data
  console.log('Push received...')
  console.log('data', data)
  self.registration.showNotification(data.title, {
    body: data.description
  })
})
