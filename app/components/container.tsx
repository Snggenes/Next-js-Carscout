"use client";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={
        `max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20 ` + className
      }
    >
      {children}
    </div>
  );
}
