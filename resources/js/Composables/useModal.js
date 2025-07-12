import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

export function useModalAlert() {
  const modalAlert = (title = 'Are you sure?', text = 'You won\'t be able to revert this!', icon = 'warning') => {
    Swal.fire({
      title,
      text,
      icon,
      showConfirmButton: false,
      showCloseButton: false,
      timer: 2000
    });
  };

  return { modalAlert };
}