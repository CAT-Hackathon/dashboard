import { NavigateFunction } from 'react-router-dom';
import Swal from 'sweetalert2/src/sweetalert2.js';

const SuccessToast = (message:string, navigate: NavigateFunction, path:string) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            navigate(path);
        }
    });
    Toast.fire({
        icon: "success",
        title: message
    });
};

export default SuccessToast;