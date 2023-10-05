import Toastify from 'toastify-js'

export const ToastifySuccess = ({ text, ...props }) => {
  return Toastify({
    text,
    duration: 3000,
    position: 'right',
    style: { background: '#1CAC78' },
    ...props
  }).showToast()
}
