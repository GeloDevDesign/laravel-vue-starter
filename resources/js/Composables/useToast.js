import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss';

export function useToastAlert() {
  const toastAlert = (title, icon = "warning", color = null) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      color: '#ffffff', 
      background: getBackgroundColor(icon, color), 
      iconColor: getIconColor(icon),
    });

    Toast.fire({
      icon,
      title,
    });
  };

  
  const getBackgroundColor = (icon, customColor) => {
    if (customColor) return customColor;
    switch (icon) {
      case 'success': return '#4CAF50'; 
      case 'error': return '#F44336';  
      case 'warning': return '#FF9800'; 
      case 'info': return '#2196F3';    
      case 'question': return '#9C27B0';
      default: return '#424242'; 
    }
  };

  const getIconColor = (icon) => {
    switch (icon) {
      case 'warning': return '#ffffff';
      default: return '#ffffff';
    }
  };

  return { toastAlert };
}