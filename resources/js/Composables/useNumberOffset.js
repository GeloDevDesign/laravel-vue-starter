import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export function useToastAlert() {
    const toastAlert = (title, status = "warning") => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            color: "#ffffff",
            background: getBackgroundColor(status),
            iconColor: getIconColor(status),
        });

        Toast.fire({
            icon : getIconStatus(status),
            title,
        });
    };

    const getBackgroundColor = (status) => {
        switch (status) {
            case "success":
                return "#4CAF50";
            case "error":
                return "#F44336";
            case "warning":
                return "#FF9800";
            case "info":
                return "#2196F3";
            case "question":
                return "#424242";
            default:
                return "#424242";
        }
    };

    const getIconStatus = (status) => {
        switch (status) {
            case "success":
                return "success";
            case "error":
                return "error";
            case "warning":
                return "warning";
            case "info":
                return "info";
            case "question":
                return "question";
            default:
                return "question";
        }
    };

    const getIconColor = (icon) => {
        switch (icon) {
            case "warning":
                return "#ffffff";
            default:
                return "#ffffff";
        }
    };

    return { toastAlert };
}
