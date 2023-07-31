function setSameVolume (videos, volume) {
  videos.forEach(video => {
    video.volume = volume
  })
}

const movieVideos = document.querySelectorAll('.movies video')
setSameVolume(movieVideos, 0.5)

movieVideos.forEach(function (video) {
  video.addEventListener('mouseover', function () {
    video.muted = false
    video.play()
  })

  video.addEventListener('mouseout', function () {
    video.muted = true
    video.pause()
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const materialboxedImages = document.querySelectorAll('.materialboxed')

  materialboxedImages.forEach(function (image) {
    image.addEventListener('click', function () {
      const modal = document.createElement('div')
      modal.classList.add('modal', 'open')

      const modalOverlay = document.createElement('div')
      modalOverlay.classList.add('modal-overlay')

      const modalContent = document.createElement('div')
      modalContent.classList.add('modal-content')

      const modalImage = document.createElement('img')
      modalImage.classList.add('modal-image')
      modalImage.src = image.src

      const modalClose = document.createElement('span')
      modalClose.classList.add('modal-close')
      modalClose.innerHTML = '×'

      modalContent.appendChild(modalImage)
      modalContent.appendChild(modalClose)

      modal.appendChild(modalContent)
      document.body.appendChild(modal)
      document.body.appendChild(modalOverlay)

      modal.addEventListener('click', function () {
        modal.remove()
        modalOverlay.remove()
      })

      modalOverlay.addEventListener('click', function () {
        modal.remove()
        modalOverlay.remove()
      })
    })
  })
})
