console.log('Service worker loaded...')

self.addEventListener('push', e => {
  const data = e.data.json()
  console.log('Push received...')
  console.log('data', data)
  self.registration.showNotification(data.title1 || 'new ne', {
    body: data.description
  })
})
