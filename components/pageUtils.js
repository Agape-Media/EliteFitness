import Link from "next/link";

export const Title = ({ children, className }) => (
  <p className={`text-lg md:text-3xl font-bold text-gray-800 ${className}`}>
    {children}
  </p>
);

export const SubTitle = ({ children, className }) => (
  <p className={`text-sm md:text-2xl font-bold text-gray-800 ${className}`}>
    {children}
  </p>
);

export const PageContainer = ({ children, className }) => (
  <div className={`px-2 md:px-8 ${className}`}>{children}</div>
);
