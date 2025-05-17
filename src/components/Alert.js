import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const Alert = (props) => {
  const { msg, type = "warning" } = props.alert || {};

  const typeConfig = {
    success: {
      icon: <CheckCircle className="text-green-500" size={24} />,
      bg: "bg-green-100",
      border: "border-green-400",
      text: "text-green-700"
    },
    error: {
      icon: <XCircle className="text-red-500" size={24} />,
      bg: "bg-red-100",
      border: "border-red-400",
      text: "text-red-700"
    },
    warning: {
      icon: <AlertTriangle className="text-orange-400" size={24} />,
      bg: "bg-orange-100",
      border: "border-orange-400",
      text: "text-orange-700"
    }
  };

  const { icon, bg, border, text } = typeConfig[type] || typeConfig.warning;

  return (
    <>
      {props.alert && (
        <div
          className={`fixed top-[72px] left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 ${bg} ${border} ${text} px-4 py-2 rounded-lg shadow-md max-w-md w-full animate-bounce`}
        >
          {icon}
          <span className="font-semibold">{msg}</span>
        </div>
      )}
    </>
  );
};

export default Alert;